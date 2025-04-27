<script setup lang="ts">
import router from '@/router'
import { useAnswerStore } from '@/stores/answers'
import { useProgressStore } from '@/stores/progress'
import { useQuestionStore } from '@/stores/questions'
import { NImage, NButton, NModal, NSpace } from 'naive-ui'
import { ref } from 'vue'

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

<style scoped>
main div {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}
p {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>

<template>
  <main>
    <p>Gratulation! Du kannst dir deinen Preis bei einer der drei Partnerorganisationen abholen.</p>
    <n-space justify="space-around">
      <n-image preview-disabled src="/assets/Logo_RettungdienstWinterthur.png" object-fit="scale-down" height="80" />
      <n-image preview-disabled src="/assets/SIW-Badge_pos.png" object-fit="scale-down" height="80" />
      <n-image preview-disabled src="/assets/Stapo_Winterthur_Badge.png" object-fit="scale-down" height="80" />
    </n-space>
    <div>
      <n-button @click="showModal = true">Neu starten</n-button>
    </div>
  </main>
  <n-modal
    :show="showModal"
    :mask-closable="false"
    :closable="false"
    :show-icon="false"
    preset="dialog"
    title="Quiz neu starten"
    content="Bist du sicher?"
    positive-text="Ja"
    negative-text="Nein"
    @positive-click="onPositiveClick"
    @negative-click="onNegativeClick"
    :positive-button-props="{ type: 'error' }"
    :negative-button-props="{ color: 'rgb(51, 54, 57)' }"
  />
</template>
