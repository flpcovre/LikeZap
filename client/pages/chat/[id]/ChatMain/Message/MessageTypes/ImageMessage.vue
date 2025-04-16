<template>
    <a  :href="attachments.url" 
        class="block max-w-[40vh] max-h-[35vh] overflow-hidden"
        ref="imageLink"
        :data-pswp-width="attachments.width"
        :data-pswp-height="attachments.height"
        target="_blank"
    >
        <img :src="attachments.url" alt="Imagem" class="object-cover rounded-lg">
        <p v-if="content" class="whitespace-pre-wrap break-words mt-2">{{ content }}</p>
    </a>
</template>

<script setup lang="ts">
import 'photoswipe/style.css';

import PhotoSwipeLightbox from 'photoswipe/lightbox';

import type { IAttachments } from '~/types/types';

const props = defineProps<{
    content?: string,
    attachments: IAttachments,
}>();

const gallery = inject<Ref<HTMLDivElement | null>>('rootDiv');
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

    if (props.attachments.url && !props.attachments.width) {
        const size = await getImageSize(props.attachments.url);
        props.attachments.width = size.width;
        props.attachments.height = size.height;
    }

    if (!lightbox.value && gallery?.value) {
        lightbox.value = new PhotoSwipeLightbox({
            gallery: gallery.value,
            children: 'a',
            mouseMovePan: true,
            showHideAnimationType: 'fade',
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
