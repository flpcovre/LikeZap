import type { IMessage } from "~/types/types";

export const useContextArea = () => {
    const contextArea = useState<boolean>('contextArea', () => false);
    const contextMessage = useState<IMessage | null>('contextMessage', () => null);

    const toggleContextArea = (message?: IMessage) => {
        contextArea.value = !contextArea.value;

        if (contextArea.value && message) {
            contextMessage.value = message;
        } else {
            contextMessage.value = null;
        }
    }

    return {
        contextArea,
        contextMessage,
        toggleContextArea
    }
}