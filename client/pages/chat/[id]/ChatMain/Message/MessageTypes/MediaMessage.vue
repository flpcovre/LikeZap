<template>
    <MediaWrapper ref="gallery" :sender="sender" :date="date">
        <a  :href="attachments?.url" 
            class="block max-w-[40vh] max-h-[35vh] overflow-hidden"
            ref="imageLink"
            :data-pswp-width="attachments?.width"
            :data-pswp-height="attachments?.height"
            target="_blank"
        >
            <img :src="attachments?.url" alt="Imagem" class="object-cover rounded-lg">
            <p v-if="content" class="whitespace-pre-wrap break-words mt-2">{{ content }}</p>
        </a>
    </MediaWrapper>    
</template>

<script setup lang="ts">
import 'photoswipe/style.css';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import MediaWrapper from '../../Wrappers/MediaWrapper.vue';

import type { IAttachments, IContact } from '~/types/types';

const props = defineProps<{
    content?: string,
    date: string,
    attachments?: IAttachments,
    sender: IContact
}>();

const gallery = ref<{ mediaRef: HTMLDivElement | null } | null>(null);
const lightbox = ref<PhotoSwipeLightbox | null>(null);

const getImageSize = (url: string) => {
    return new Promise<{ width: number, height: number }>((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ width: img.width, height: img.height });
        img.src = url;
    });
};

onMounted(async  () => {
    await nextTick();

    if (props.attachments?.url && !props.attachments?.width) {
        const size = await getImageSize(props.attachments.url);
        props.attachments.width = size.width;
        props.attachments.height = size.height;
    }

    if (!lightbox.value && gallery.value?.mediaRef) {
        lightbox.value = new PhotoSwipeLightbox({
            gallery: gallery.value.mediaRef,
            children: 'a',
            mouseMovePan: true,
            initialZoomLevel: 'fit',
            secondaryZoomLevel: 1.5,
            maxZoomLevel: 2,
            pswpModule: () => import('photoswipe'),
        });
        lightbox.value.init();
    }
});

onUnmounted(() => {
  if (lightbox.value) {
    lightbox.value.destroy();
    lightbox.value = null;
  }
});
</script>
