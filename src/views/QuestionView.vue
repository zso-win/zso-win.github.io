<script setup lang="ts">
import TheQuestion from '@/components/TheQuestion.vue';
import TheCorrectAnswer from '../components/TheCorrectAnswer.vue'
import TheWrongAnswer from '../components/TheWrongAnswer.vue'

const props = defineProps({
  isQuestion: Boolean,
  isCorrect: Boolean,
  isWrong: Boolean
}

)

</script>

<template>
  <main>
    <TheQuestion v-if="isQuestion" />
    <TheCorrectAnswer v-if="isCorrect" />
    <TheWrongAnswer v-if="isWrong" />
  </main>
</template>
