export const messages = [
    {
        id: 1,
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
        id: 1,
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
        id: 2,
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
        id: 2,
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
        id: 3,
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
        id: 3,
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
    }
]