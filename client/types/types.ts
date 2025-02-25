export type EventBusEvents = {
    addEmojiToTextArea: { native: any };
};

export interface IMessage {
    type: String
    user_id?: number | null
    customer_id?: number | null
    content: string
    date: string
}