import type { IMessage, IMessageGroup } from "~/types/types";

export const useChatMessage = () => {
    const chatMessage = useState<IMessage[] | null>('chatMessage', () => null);
    const groupedChatMessage = useState<IMessageGroup[] | null>('groupedChatMessage', () => null);

    const getChatMessage = async () => {
        return chatMessage;
    }

    const getGroupedChatMessage = async () => {
        return groupedChatMessage;
    }

    const setChatMessage = async (message: IMessage[]) => {
        await throwDelay(2000);

        chatMessage.value = message;
        groupMessages();
    }

    const addMessage = async (message: IMessage) => {
        if (chatMessage.value) {
            chatMessage.value.push(message);
            groupMessages();
        }
    }

    const groupMessages = async () => {
        if (chatMessage.value) {
            groupedChatMessage.value = groupMessagesByDay(chatMessage.value);
        }
    }

    const clearChatMessage = async () => {
        chatMessage.value = null;
        groupedChatMessage.value = null;
    }

    return {
        chatMessage,
        groupedChatMessage,
        getChatMessage,
        setChatMessage,
        getGroupedChatMessage,
        addMessage,
        clearChatMessage
    }
}