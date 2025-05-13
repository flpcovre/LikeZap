import type { IConversation } from "./types"

export const messages = [
    {
        id: '1',
        type: 'text',
        content: 'Olá amigo',
        date: '2 days ago',
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
        type: 'text',
        content: 'Ooi',
        date: '2 days ago',
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
        type: 'image',
        content: 'Segue em Anexo',
        date: '1 days ago',
        sender: {
            id: 2,
            type: 'user',
            email: 'ffcovre@unesc.com',
            firstName: 'Filipe',
            lastName: 'Covre',
        },
        attachments: {
            id: 1,
            type: 'image',
            name: 'Test',
            size: '64mb',
            url: '/2.jpg',
        }
    },
    {
        id: '4',
        type: 'image',
        date: '1 days ago',
        sender: {
            id: 2,
            type: 'customer',
            email: 'ffcovre@unesc.com',
            firstName: 'Filipe',
            lastName: 'Covre',
        },
        attachments: {
            id: 1,
            type: 'image',
            name: 'Test',
            size: '64mb',
            url: '/3.jpeg',
        }
    },
    {
        id: '5',
        type: 'audio',
        date: '3 hours ago',
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
        type: 'audio',
        date: '3 hours ago',
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
            duration: '1:05'
        }
    },
    {
        id: '7',
        type: 'file',
        date: '1 days ago',
        content: 'Segue em Anexo',
        sender: {
            id: 2,
            type: 'user',
            email: 'ffcovre@unesc.com',
            firstName: 'Filipe',
            lastName: 'Covre',
        },
        attachments: {
            id: 1,
            type: 'file',
            name: 'documento.pdf',
            size: '64mb',
            url: '/documento.pdf',
        },
    },
    {
        id: '8',
        type: 'file',
        date: '1 days ago',
        sender: {
            id: 2,
            type: 'customer',
            email: 'ffcovre@unesc.com',
            firstName: 'Filipe',
            lastName: 'Covre',
        },
        attachments: {
            id: 1,
            type: 'file',
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