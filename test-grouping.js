// Teste simples do agrupamento de mensagens
const { format, subDays } = require('date-fns');

const now = new Date();

// Simula algumas mensagens de teste
const testMessages = [
  {
    id: '1',
    type: 'text',
    content: 'Mensagem de hoje',
    date: format(now, "dd/MM/yyyy HH:mm:ss"),
    sender: {
      id: 1,
      type: 'user',
      email: 'test@test.com',
      firstName: 'Test',
      lastName: 'User',
    }
  },
  {
    id: '2',
    type: 'text',
    content: 'Mensagem de ontem',
    date: format(subDays(now, 1), "dd/MM/yyyy HH:mm:ss"),
    sender: {
      id: 1,
      type: 'user',
      email: 'test@test.com',
      firstName: 'Test',
      lastName: 'User',
    }
  },
  {
    id: '3',
    type: 'text',
    content: 'Mensagem de 3 dias atrás',
    date: format(subDays(now, 3), "dd/MM/yyyy HH:mm:ss"),
    sender: {
      id: 1,
      type: 'user',
      email: 'test@test.com',
      firstName: 'Test',
      lastName: 'User',
    }
  },
  {
    id: '4',
    type: 'text',
    content: 'Mensagem de 10 dias atrás',
    date: format(subDays(now, 10), "dd/MM/yyyy HH:mm:ss"),
    sender: {
      id: 1,
      type: 'user',
      email: 'test@test.com',
      firstName: 'Test',
      lastName: 'User',
    }
  }
];

// Função simplificada de agrupamento para teste
function parseDateString(dateString) {
  try {
    const [datePart, timePart] = dateString.split(' ');
    const [day, month, year] = datePart.split('/');
    const [hours, minutes, seconds] = timePart.split(':');
    
    return new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day),
      parseInt(hours),
      parseInt(minutes),
      parseInt(seconds)
    );
  } catch {
    return null;
  }
}

function getDateLabel(date) {
  const now = new Date();
  const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return 'Hoje';
  if (diffInDays === 1) return 'Ontem';
  if (diffInDays <= 6) {
    const dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return dayNames[date.getDay()];
  }
  
  return format(date, 'dd/MM/yyyy');
}

function groupMessagesByDay(messages) {
  const groupedByDate = {};
  
  messages.forEach(message => {
    const messageDate = parseDateString(message.date);
    if (!messageDate) return;
    
    const dateKey = format(messageDate, 'yyyy-MM-dd');
    
    if (!groupedByDate[dateKey]) {
      groupedByDate[dateKey] = {
        date: messageDate,
        messages: []
      };
    }
    
    groupedByDate[dateKey].messages.push(message);
  });
  
  return Object.entries(groupedByDate)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([dateKey, group]) => ({
      id: dateKey,
      dateLabel: getDateLabel(group.date),
      date: dateKey,
      messages: group.messages
    }));
}

// Executa o teste
console.log('=== Teste do Agrupamento de Mensagens ===\n');

const grouped = groupMessagesByDay(testMessages);

console.log('Mensagens agrupadas:');
grouped.forEach(group => {
  console.log(`\n📅 ${group.dateLabel} (${group.date})`);
  console.log(`   ${group.messages.length} mensagem(s):`);
  
  group.messages.forEach(message => {
    const time = message.date.split(' ')[1];
    console.log(`   • ${time} - ${message.content}`);
  });
});

console.log('\n=== Resultado do Teste ===');
console.log(`Total de grupos: ${grouped.length}`);
console.log('Labels gerados:', grouped.map(g => g.dateLabel));
