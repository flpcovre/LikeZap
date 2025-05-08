<template>
    <div class="grid gap-2 animate-pulse shadow-sm gap-4">

        <div v-for="(bubble, index) in bubbles">

            <div v-if="bubble.bubble.type == 'user'" class="flex items-start dark:divide-gray-700 space-x-3 group">
                <div :class="`w-[${bubble.bubble.percent}%] bg-gray-100 dark:bg-gray-700 p-3 shadow text-sm rounded-full`"></div>
            </div>
    
    
             <div v-if="bubble.bubble.type == 'customer'" class="flex items-start space-x-3 dark:divide-gray-700 group justify-end">
                <div :class="`w-[${bubble.bubble.percent}%] bg-gray-100 dark:bg-gray-700 p-3 shadow text-sm rounded-full`"></div>
            </div>

        </div>

        <!-- <div class="flex items-start space-x-3 dark:divide-gray-700 group">
            <div class="w-[40%] bg-gray-100 dark:bg-gray-700 p-3 shadow text-sm rounded-full"></div>
        </div>

        <div class="flex items-start space-x-3 dark:divide-gray-700 group justify-end">
            <div class="w-[50%] bg-gray-100 dark:bg-gray-700 p-3 shadow text-sm rounded-full"></div>
        </div>

        <div class="flex items-start space-x-3 dark:divide-gray-700 group justify-end">
            <div class="w-[55%] bg-gray-100 dark:bg-gray-700 p-3 shadow text-sm rounded-full"></div>
        </div>

        <div class="flex items-start space-x-3 dark:divide-gray-700 group justify-end">
            <div class="w-[30%] bg-gray-100 dark:bg-gray-700 p-3 shadow text-sm rounded-full"></div>
        </div>

        <div class="flex items-start space-x-3 dark:divide-gray-700 group">
            <div class="w-[20%] bg-gray-100 dark:bg-gray-700 p-3 shadow text-sm rounded-full"></div>
        </div>

        <div class="flex items-start space-x-3 dark:divide-gray-700 group">
            <div class="w-[50%] bg-gray-100 dark:bg-gray-700 p-3 shadow text-sm rounded-full"></div>
        </div>

        <div class="flex items-start space-x-3 dark:divide-gray-700 group justify-end">
            <div class="w-[30%] bg-gray-100 dark:bg-gray-700 p-3 shadow text-sm rounded-full"></div>
        </div>

        <div class="flex items-start space-x-3 dark:divide-gray-700 group justify-end">
            <div class="w-[40%] bg-gray-100 dark:bg-gray-700 p-3 shadow text-sm rounded-full"></div>
        </div>

        <div class="flex items-start space-x-3 dark:divide-gray-700 group">
            <div class="w-[35%] bg-gray-100 dark:bg-gray-700 p-3 shadow text-sm rounded-full"></div>
        </div>

        <div class="flex items-start space-x-3 dark:divide-gray-700 group">
            <div class="w-[30%] bg-gray-100 dark:bg-gray-700 p-3 shadow text-sm rounded-full"></div>
        </div>

        <div class="flex items-start space-x-3 dark:divide-gray-700 group">
            <div class="w-[55%] bg-gray-100 dark:bg-gray-700 p-3 shadow text-sm rounded-full"></div>
        </div>

        <div class="flex items-start space-x-3 dark:divide-gray-700 group justify-end">
            <div class="w-[30%] bg-gray-100 dark:bg-gray-700 p-3 shadow text-sm rounded-full"></div>
        </div> -->
    </div>
</template>

<script setup lang="ts">

interface IBubble {
    bubble: { type: string; percent: string }
}

const bubbles = ref<IBubble[] | null>(null);

const randomPercent = (min: number, max: number): number => {
  if (min > max) {
    throw new Error("O valor mínimo deve ser menor ou igual ao valor máximo.");
  }
  
  const step = 10;
  const values: number[] = [];

  for (let i = Math.ceil(min / step) * step; i <= max; i += step) {
    values.push(i);
  }

  if (values.length === 0) {
    throw new Error("Nenhum valor múltiplo de 5 encontrado no intervalo.");
  }

  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
};

const randomize = (minTarget: number, maxTarget: number, maxItems: number): IBubble[] => {
    const bubbleTypes: Array<string> = ['user', 'customer'];
    const bubble: IBubble[] = [];

    for (let index = 0; index < maxItems; index++) {
        const percent: string = randomPercent(minTarget, maxTarget).toFixed(0);
        const bubbleType = bubbleTypes[Math.floor(Math.random() * bubbleTypes.length)];

        bubble.push({
            bubble: {
                type: bubbleType,
                percent: percent
            }
        });
    }

    return bubble;
};


onMounted(() => {
    bubbles.value = randomize(20, 55, 14);
})
</script>