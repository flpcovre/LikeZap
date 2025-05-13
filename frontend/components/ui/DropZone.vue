<template>
  <label
    tabindex="0"
    class="cursor-pointer flex justify-center items-center border border-dashed rounded-sm p-5 transition-all duration-500 outline-none focus:outline-none"
    :class="[borderColor, bgColor, darkBorderColor, darkBgColor, hoverBgColor]"
    :style="{ width, height }"
  >
    <input type="file" hidden accept="image/*" />
    <div>
      <p
        class="outline-none text-sm font-normal dark:text-black text-opacity-40 dark:text-white dark:text-opacity-70"
      >
        {{ text }}
      </p>
    </div>
  </label>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "6.25rem",
  },
  borderColor: {
    type: String,
    default: "dark:border-gray-200",
  },
  bgColor: {
    type: String,
    default: "dark:bg-gray-50",
  },
  darkBorderColor: {
    type: String,
    default: "dark:border-gray-500",
  },
  darkBgColor: {
    type: String,
    default: "dark:bg-gray-700",
  },
  hoverBgColor: {
    type: String,
    default: "dark:hover:bg-opacity-0",
  },
  text: {
    type: String,
    default: "Choose a file\nor drop it here.",
  },
});
</script>