<template>
    <MessageWrapper v-if="component" :sender="message.sender">
        <MessageActions v-if="message.sender.type === 'user'" :message="message"/> 

        <component 
            :is="component.wrapper.component"
            v-bind="component.wrapper.props"
        >
            <component
                :is="component.message.component"
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

import MessageDate from './MessageDate.vue';
import MessageActions from './MessageActions.vue';

import type { IMessage, MessageType, MessageComponent } from '~/types/types';

const props = defineProps<{ message: IMessage }>();

const component = computed<MessageComponent>(() => {
    const defaultWrapperProps = {
        sender: props.message.sender
    }

    const components: Record<MessageType, MessageComponent> = {
        text: {
            message: {
                component: TextMessage,
                props: {
                    content: props.message.content
                }
            },
            wrapper: {
                component: TextWrapper,
                props: defaultWrapperProps
            },
        },
        audio: {
            message: {
                component: AudioMessage,
                props: {
                    audio: props.message.audio
                }
            },
            wrapper: {
                component: AudioWrapper,
                props: defaultWrapperProps
            },
        },
        image: {
            message: {
                component: ImageMessage,
                props: {
                    content: props.message.content,
                    attachments: props.message.attachments
                }
            },
            wrapper: {
                component: ImageWrapper,
                props: defaultWrapperProps
            },
        },
        file: {
            message: {
                component: FileMessage,
                props: {
                    content: props.message.content,
                    attachments: props.message.attachments
                }
            },
            wrapper: {
                component: FileWrapper,
                props: defaultWrapperProps
            }
        }
    }

    return components[props.message.type];
})
</script>