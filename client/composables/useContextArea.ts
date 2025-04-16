import type { IMessage } from "~/types/types";

export const useContextArea = () => {
    const contextArea = useState<boolean>('contextArea', () => false);
    const contextMessage = useState<IMessage | null>('contextMessage', () => null);

    const openContextArea = (message: IMessage) => {
        contextArea.value = true;
        contextMessage.value = message;
    }

    const closeContextArea = () => {
        contextArea.value = false;
        contextMessage.value = null;
    }

    return {
        contextArea,
        contextMessage,
        openContextArea,
        closeContextArea,
    }
}