<script setup lang="ts">
import { ButtonProps } from "../interfaces"

defineProps<{props: ButtonProps}>()
</script>

<template>
    <button class="flex items-center w-full justify-center rounded-md border border-transparent  shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2 text-white bg-green-600 hover:bg-green-700 focus:ring-green-500 py-1.5 px-3 text-sm">
        <i v-if="props.type == 'save'" class="fas fa-save mr-2"></i>
        {{ props.text }}
    </button>
</template>
