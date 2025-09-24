import { format, isToday, isYesterday, isThisWeek, parseISO, isValid, differenceInDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import type { IMessage, IMessageGroup } from '../types/types';

/**
 * Converte string de data para objeto Date
 * @param dateString - String no formato "dd/MM/yyyy HH:mm:ss"
 * @returns Date object ou null se inválida
 */
function parseDateString(dateString: string): Date | null {
  try {
    // Tenta parsear o formato "dd/MM/yyyy HH:mm:ss"
    const [datePart, timePart] = dateString.split(' ');
    const [day, month, year] = datePart.split('/');
    const [hours, minutes, seconds] = timePart.split(':');
    
    const date = new Date(
      parseInt(year),
      parseInt(month) - 1, // Mês é 0-indexed
      parseInt(day),
      parseInt(hours),
      parseInt(minutes),
      parseInt(seconds)
    );
    
    return isValid(date) ? date : null;
  } catch {
    return null;
  }
}

/**
 * Gera o label da data baseado nas regras do WhatsApp
 * @param date - Data da mensagem
 * @returns String com o label apropriado
 */
function getDateLabel(date: Date): string {
  const now = new Date();
  const daysDiff = differenceInDays(now, date);
  
  // Hoje
  if (isToday(date)) {
    return 'Hoje';
  }
  
  // Ontem
  if (isYesterday(date)) {
    return 'Ontem';
  }
  
  // Esta semana (2-6 dias atrás)
  if (isThisWeek(date) && daysDiff <= 6) {
    return format(date, 'EEEE', { locale: ptBR });
  }
  
  // Mais de 1 semana - mostra data completa
  return format(date, 'dd/MM/yyyy');
}

/**
 * Agrupa mensagens por dia
 * @param messages - Array de mensagens
 * @returns Array de grupos de mensagens
 */
export function groupMessagesByDay(messages: IMessage[]): IMessageGroup[] {
  // Agrupa mensagens por data
  const groupedByDate = messages.reduce((groups, message) => {
    const messageDate = parseDateString(message.date);
    
    if (!messageDate) {
      console.warn(`Data inválida para mensagem ${message.id}: ${message.date}`);
      return groups;
    }
    
    // Usa apenas a data (sem hora) como chave
    const dateKey = format(messageDate, 'yyyy-MM-dd');
    
    if (!groups[dateKey]) {
      groups[dateKey] = {
        date: messageDate,
        messages: []
      };
    }
    
    groups[dateKey].messages.push(message);
    return groups;
  }, {} as Record<string, { date: Date; messages: IMessage[] }>);
  
  // Converte para array e ordena por data
  const sortedGroups = Object.entries(groupedByDate)
    .sort(([a], [b]) => a.localeCompare(b)) // Ordena por data crescente
    .map(([dateKey, group]) => ({
      id: dateKey,
      dateLabel: getDateLabel(group.date),
      date: dateKey,
      messages: group.messages.sort((a, b) => {
        // Ordena mensagens dentro do grupo por horário
        const dateA = parseDateString(a.date);
        const dateB = parseDateString(b.date);
        
        if (!dateA || !dateB) return 0;
        return dateA.getTime() - dateB.getTime();
      })
    }));
  
  return sortedGroups;
}

/**
 * Gera estatísticas dos grupos de mensagens
 * @param groups - Array de grupos de mensagens
 * @returns Objeto com estatísticas
 */
export function getMessageGroupStats(groups: IMessageGroup[]) {
  const totalMessages = groups.reduce((sum, group) => sum + group.messages.length, 0);
  const totalGroups = groups.length;
  
  return {
    totalMessages,
    totalGroups,
    groupsByLabel: groups.reduce((stats, group) => {
      stats[group.dateLabel] = (stats[group.dateLabel] || 0) + 1;
      return stats;
    }, {} as Record<string, number>)
  };
}
