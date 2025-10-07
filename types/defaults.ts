import type { IConversation, IMessage, IMessageGroup } from "./types"
import { format, subDays } from "date-fns";
import { groupMessagesByDay } from "../utils/utils";

const now = new Date();

export const messages: IMessage[] = [
    {
        id: '1',
        type: 'text' as const,
        content: 'Olá amigo',
        date: format(subDays(now, 3), "dd/MM/yyyy HH:mm:ss"),
        status: 'sent',
        sender: {
            id: 1,
            type: 'customer',
            email: 'jdoe@gmail.com',
            firstName: 'John',
            lastName: 'Doe',
        }
    },
    {
        id: '2',
        type: 'text' as const,
        content: 'Ooi',
        date: format(subDays(now, 3), "dd/MM/yyyy HH:mm:ss"),
        status: 'sent',
        sender: {
            id: 1,
            type: 'user',
            email: 'jdoe@gmail.com',
            firstName: 'John',
            lastName: 'Doe',
        }
    },
    {
        id: '3',
        type: 'image' as const,
        content: 'Segue em Anexo',
        date: format(subDays(now, 2), "dd/MM/yyyy HH:mm:ss"),
        status: 'sent',
        sender: {
            id: 2,
            type: 'user',
            email: 'ffcovre@unesc.com',
            firstName: 'Filipe',
            lastName: 'Covre',
        },
        attachments: {
            id: 1,
            type: 'image' as const,
            name: 'Test',
            size: '64mb',
            url: '/2.jpg',
        }
    },
    {
        id: '4',
        type: 'image' as const,
        date: format(subDays(now, 2), "dd/MM/yyyy HH:mm:ss"),
        status: 'sent',
        sender: {
            id: 2,
            type: 'customer',
            email: 'ffcovre@unesc.com',
            firstName: 'Filipe',
            lastName: 'Covre',
        },
        attachments: {
            id: 1,
            type: 'image' as const,
            name: 'Test',
            size: '64mb',
            url: '/3.jpeg',
        }
    },
    {
        id: '5',
        type: 'audio' as const,
        date: format(subDays(now, 1), "dd/MM/yyyy HH:mm:ss"),
        status: 'sent',
        sender: {
            id: 2,
            type: 'user',
            email: 'ffcovre@unesc.com',
            firstName: 'Filipe',
            lastName: 'Covre',
        },
        audio: {
            id: 1,
            size: '64MB',
            src: '/audio.mp3',
        }
    },
    {
        id: '6',
        type: 'audio' as const,
        date: format(subDays(now, 1), "dd/MM/yyyy HH:mm:ss"),
        status: 'sent',
        sender: {
            id: 2,
            type: 'customer',
            email: 'ffcovre@unesc.com',
            firstName: 'Filipe',
            lastName: 'Covre',
        },
        audio: {
            id: 1,
            size: '64MB',
            src: '/audio.mp3',
        }
    },
    {
        id: '7',
        type: 'file' as const,
        date: format(now, "dd/MM/yyyy HH:mm:ss"),
        content: 'Segue em Anexo',
        status: 'sent',
        sender: {
            id: 2,
            type: 'user',
            email: 'ffcovre@unesc.com',
            firstName: 'Filipe',
            lastName: 'Covre',
        },
        attachments: {
            id: 1,
            type: 'file' as const,
            name: 'documento.pdf',
            size: '64mb',
            url: '/documento.pdf',
        },
    },
    {
        id: '8',
        type: 'file' as const,
        date: format(now, "dd/MM/yyyy HH:mm:ss"),
        status: 'sent',
        sender: {
            id: 2,
            type: 'customer',
            email: 'ffcovre@unesc.com',
            firstName: 'Filipe',
            lastName: 'Covre',
        },
        attachments: {
            id: 1,
            type: 'file' as const,
            name: 'documento.pdf',
            size: '64mb',
            url: '/documento.pdf',
        },
        replyTo: '2'
    },
]

export const conversations = [
    {
        id: '1',
        type: 'couple',
        contacts: [
            {   
                id: 1,
                type: 'customer',
                email: 'johndoe@doe.com',
                firstName: 'John',
                lastName: 'Doe',
            },
            {   
                id: 2,
                type: 'user',
                email: 'filipecovre224@gmail.com',
                firstName: 'Filipe',
                lastName: 'Covre',
            },
        ],
        messages: [
            ...messages
        ],
        subject: 'teste'
    },
    {
        id: '2',
        type: 'couple',
        contacts: [
            {   
                id: 1,
                type: 'customer',
                email: 'janedoe@doe.com',
                firstName: 'Jane',
                lastName: 'Doe',
            },
            {   
                id: 2,
                type: 'user',
                email: 'filipecovre224@gmail.com',
                firstName: 'Filipe',
                lastName: 'Covre',
            },
        ],
        messages: [
            ...messages
        ],
        subject: 'teste'
    }
] as IConversation[];

// Agrupa as mensagens por dia para demonstração
export const groupedMessages: IMessageGroup[] = groupMessagesByDay(messages);

export const newServices = [
        {
        id: '1',
        type: 'couple',
        contacts: [
            {   
                id: 1,
                type: 'customer',
                email: 'johndoe@doe.com',
                firstName: 'John',
                lastName: 'Doe',
            }
        ],
        subject: 'Não consegue imprimir boletos.'
    },
    {
        id: '2',
        type: 'couple',
        contacts: [
            {   
                id: 1,
                type: 'customer',
                email: 'janedoe@doe.com',
                firstName: 'Jane',
                lastName: 'Doe',
            }
        ],
        subject: 'Procurando ajuda com o sistema.'
    }
] as IConversation[];