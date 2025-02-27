export type EventBusEvents = {
    addEmojiToTextArea: { native: any };
};

export interface IMessage {
  id: number;
  type?: string;
  content?: string;
  date: string;
  sender: IContact;
  replyTo?: number;
  attachments?: IAttachments;
  audio?: IAudio;
}

export interface IAttachments {
  id: number;
  type: string;
  name: string;
  size: string;
  url: string;
  thumbnail?: string;
  file?: File;
  width?: number;
  height?: number;
}

export interface IConversation {}

export interface IAudio {
  id: number;
  size: string;
  src: string;
}

export interface IContact {
  id: number,
  type: string,
  email: string,
  firstName: string,
  lastName: string,
  avatar?: string
}

