<script setup lang="ts">
import QuestionComponent from "./components/Question.vue"
import Button from "./components/ButtonType.vue"
import { ButtonProps, Question } from "./interfaces";
import { questionsApi } from "./api/questions"
import { ref } from "vue";

const button: ButtonProps = {
  text: "Guardar",
  type: "save"
} 

const responses = ref<{ [key: string]: string | null }>({});

const handleResponse = (questionId: string, response: string | null) => {
  responses.value[questionId] = response;
};

const submitResponse = async () => {
  console.log(responses);
  return
};

</script>

<template>
  <main class="font-lexend max-w-2xl mx-auto flex flex-col p-6 gap-10">
    <img class="w-40 mx-auto" src="./assets/logo.png"
      alt="GrupoDocentes">
    <h1 class="block text-3xl font-bold tracking-tight leading-7 sm:text-4xl text-gray-700 text-center">ENCUESTA DE
      SATISFACCION 2024 - EDU. FISICA</h1>
    <div class="flex flex-col gap-6">
      <QuestionComponent v-for="(question, index) in questionsApi.questions" :key="index"
        :props="question as Question" @response="handleResponse"/>
    </div>
    <div>
      <Button :props="button" @click="submitResponse"/>
    </div>
  </main>
</template>