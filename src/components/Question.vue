<script setup lang="ts">
import { ref, watch } from 'vue';
import { Question } from "../interfaces";
import Choice from "./Choice.vue";

const props = defineProps<{ props: Question }>();
const emit = defineEmits(['response']);

const selectedOption = ref<string | null>(null);
const handleSelection = (option: string) => {
  selectedOption.value = option;
};

watch(selectedOption, (newOption ) => {
  emit('response', props.props._id.$oid, newOption)
})

</script>

<template>
  <div class="border border-gray-200 bg-gray-100 rounded-md px-3 py-2 shadow-lg">
    <span class="block text-sm tracking-tight leading-7 text-gray-700 sm:text-base">{{ props.props.title }}</span>
    
    <div v-if="props.props.type == 'MULTIPLE_CHOICE'" class="flex flex-col gap-2">
      <Choice
        v-for="(option, index) in props.props.options"
        :key="index"
        :text="option"
        :is-selected="option === selectedOption"
        @selected="handleSelection"
      />
    </div>

    <textarea
      class="w-full p-2 border border-gray-300 bg-white rounded"
      v-else-if="props.props.type == 'TEXT'"
      placeholder="Escribe tu respuesta aquí..."
      v-model="selectedOption"
    ></textarea>
  </div>
</template>
