<template>
    <div class="ml-auto flex space-x-2">
        <Action icon="close-circle-line" detail="Fechar Conversa" tooltip="close" :callback="goToHome"/>
        <Action icon="mail-send-line" detail="Transferir" tooltip="transfer"/>
    </div>
</template>

<script setup lang="ts">
import Action from './Action.vue';

const router = useRouter();

const goToHome = () => {
    router.replace('/chat');
}
</script>