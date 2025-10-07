export type MessageType = 'text' | 'audio' | 'image' | 'file';
export type AttachmentsType = 'image' | 'file';
export type MessageStatus = 'pending' | 'sent' | 'received' | 'failed';

export type EventBusEvents = {
    addEmojiToTextArea: { native: any };
    toggleBlockInChatWrapper: boolean;
    changeDropdownTriggerValue: void;
    scrollToMessageInChatMain: string;
    newMessageSent: void;
};

export type MessageComponent = {
  message: MessageConstructor
  wrapper: MessageWrapperConstructor
}

export type MessageConstructor = {
  template: Component;
  props: MessageProps;
}

export type MessageWrapperConstructor = {
  template: Component;
  props: MessageWrapperProps;
}

export type MessageProps = {
  content?: string;
  attachments?: IAttachments;
  audio?: IAudio;
}

export type MessageWrapperProps = {
  sender: IContact
}

export interface IMessage {
  id: string;
  type: MessageType;
  content?: string;
  date: string;
  sender: IContact;
  status: MessageStatus;
  replyTo?: string;
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

export interface IConversation {
  id: string;
  type: string;
  contacts: IContact[];
  messages?: IMessage[];
  unread?: number;
  subject: string;
}

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

export interface IContextMessage {
  template: Component,
  props?: Record<string, any>
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  token: string;
  contacts: IContact[];
}

export interface IMessageGroup {
  id: string;
  dateLabel: string;
  date: string;
  messages: IMessage[];
}