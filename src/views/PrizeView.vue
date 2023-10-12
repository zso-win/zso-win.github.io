<script setup lang="ts">
import router from '@/router';
import { useAnswerStore } from '@/stores/answers';
import { useProgressStore } from '@/stores/progress';
import { useQuestionStore } from '@/stores/questions';
import { NImage, NButton, NModal } from 'naive-ui'
import { ref } from 'vue';

const answers = useAnswerStore()
const questions = useQuestionStore()
const progress = useProgressStore()

function reset(): void {
  answers.reset()
  questions.reset()
  progress.reset()
}

const showModal = ref(false)

function onPositiveClick() {
  reset()
  showModal.value = false
  router.push({ name: 'home' })
}
function onNegativeClick() {
  showModal.value = false
}

</script>

<style>
main div {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
</style>

<template>
  <main>
    <p>Gratulation! Du kannst dir deinen Preis abholen.</p>
    <n-image width="350" src="assets/Logo_RettungdienstWinterthur.png" object-fit="scale-down" height="200" />
    <n-image width="350" src="/assets/SIW_Badge.png" object-fit="scale-down" height="200" />
    <n-image width="350" src="assets/Stapo_Winterthur_Badge.png" object-fit="scale-down" height="200" />
    <div>
      <n-button @click="showModal = true">Neu starten</n-button>
    </div>
  </main>
  <n-modal :show="showModal" :mask-closable="false" :closable="false" :show-icon="false" preset="dialog" title="Schnitzeljagd neu starten"
    content="Bist du sicher?" positive-text="Ja" negative-text="Nein" @positive-click="onPositiveClick" @negative-click="onNegativeClick" />
</template>
