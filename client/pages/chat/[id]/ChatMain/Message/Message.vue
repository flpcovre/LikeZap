<template>
    <MessageWrapper v-if="component" :id="message.id" :sender="message.sender">
        <MessageActions v-if="message.sender.type === 'user'" :message="message"/> 

        <component 
            :is="component.wrapper.template"
            v-bind="component.wrapper.props"
        >

            <ContextMessage v-if="replyMessage" :message="replyMessage"/>

            <component
                :is="component.message.template"
                v-bind="component.message.props"
            />

            <MessageDate :date="message.date"/>
        </component>

         <MessageActions v-if="message.sender.type === 'customer'" :message="message"/>
    </MessageWrapper>
</template>

<script setup lang="ts">
import MessageWrapper from '../Message/Wrappers/MessageWrapper.vue';

import TextWrapper from './Wrappers/TextWrapper.vue';
import AudioWrapper from './Wrappers/AudioWrapper.vue';
import ImageWrapper from './Wrappers/ImageWrapper.vue';
import FileWrapper from './Wrappers/FileWrapper.vue';

import TextMessage from './MessageTypes/TextMessage.vue';
import AudioMessage from './MessageTypes/AudioMessage.vue';
import ImageMessage from './MessageTypes/ImageMessage.vue';
import FileMessage from './MessageTypes/FileMessage.vue';

import ContextMessage from './ContextMessage/ContextMessage.vue';

import MessageDate from './MessageDate.vue';
import MessageActions from './MessageActions.vue';

import type { IMessage, MessageType, MessageComponent } from '~/types/types';

import { messages as messageStore } from '~/types/defaults';

const props = defineProps<{ message: IMessage }>();

const allChatMessages = ref<IMessage[]>(messageStore as IMessage[]);

const replyMessage = computed<IMessage | null>(() => {
    if (props.message.replyTo) {
        const message = allChatMessages.value.find((message) => message.id === props.message.replyTo) as IMessage;

        return message;
    }

    return null;
});

const component = computed<MessageComponent>(() => {
    const defaultWrapperProps = {
        sender: props.message.sender
    }

    const components: Record<MessageType, MessageComponent> = {
        text: {
            message: {
                template: TextMessage,
                props: {
                    content: props.message.content
                }
            },
            wrapper: {
                template: TextWrapper,
                props: defaultWrapperProps
            },
        },
        audio: {
            message: {
                template: AudioMessage,
                props: {
                    audio: props.message.audio
                }
            },
            wrapper: {
                template: AudioWrapper,
                props: defaultWrapperProps
            },
        },
        image: {
            message: {
                template: ImageMessage,
                props: {
                    content: props.message.content,
                    attachments: props.message.attachments
                }
            },
            wrapper: {
                template: ImageWrapper,
                props: defaultWrapperProps
            },
        },
        file: {
            message: {
                template: FileMessage,
                props: {
                    content: props.message.content,
                    attachments: props.message.attachments
                }
            },
            wrapper: {
                template: FileWrapper,
                props: defaultWrapperProps
            }
        }
    }

    return components[props.message.type];
});
</script>