export type MessageType = 'text' | 'audio' | 'image';
export type AttachmentsType = 'image' | 'file';

export type EventBusEvents = {
    addEmojiToTextArea: { native: any };
};

export type MessageComponent = {
  message: MessageConstructor
  wrapper: MessageWrapperConstructor
}

export type MessageConstructor = {
  component: Component;
  props: MessageProps; 
}

export type MessageWrapperConstructor = {
  component: Component;
  props: MessageWrapperProps;
}

export type MessageProps = {
  content?: string;
  attachments?: IAttachments;
  audio?: IAudio;
}

export type MessageWrapperProps = {
  date: string;
  sender: IContact
}

export interface IMessage {
  id: number;
  type: MessageType;
  content?: string;
  date: string;
  sender: IContact;
  replyTo?: number;
  attachments?: IAttachments;
  audio?: IAudio;
}

export interface IAttachments {
  id: number;
  type: AttachmentsType;
  name: string;
  size: string;
  url: string;
  thumbnail?: string;
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

