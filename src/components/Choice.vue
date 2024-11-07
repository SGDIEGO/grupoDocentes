<script setup lang="ts">

const props = defineProps<{ text: string; isSelected: boolean }>();
const emit = defineEmits(['selected']);

const selectOption = () => {
  emit('selected', props.text);
};

</script>

<template>
  <button class="w-full p-2 border rounded text-left flex flex-row items-center gap-2" :class="{
    'bg-blue-500 text-white': props.isSelected,
    'bg-white text-gray-800': !props.isSelected
  }" @click="selectOption">
    <i class="mr-2" :class="{
      'text-white fa-solid fa-circle-check': props.isSelected,
      'text-gray-500 far fa-circle': !props.isSelected
    }"></i>
    <span>{{ props.text }}</span>
  </button>
</template>
