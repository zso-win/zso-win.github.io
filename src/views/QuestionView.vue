<script setup lang="ts">
import ThePanel from '@/components/ThePanel.vue'
import { useAnswerStore } from '@/stores/answers'
import { useQuestionStore } from '@/stores/questions'
import { resources } from '@/views/resources'

const props = defineProps({
  id: String,
  org: String,
  name: String
})

let msg = 'Dieser QR-Code is für eine andere Frage. Suche weiter.'
let img = '/assets/ambulance.jpg'
let answerCheck: boolean | undefined
let isZS = props.org == 'zs'

const questionKey = `${props.org}${props.id}`
const key = `${questionKey}_${props.name}`

const answers = useAnswerStore()
const questions = useQuestionStore()

const res = resources[key]

if (!res) {
  msg = 'Oooops. Etwas ist schiefgelaufen. Suche weiter und versuche einen anderen QR-Code.'
} else {
  if (questions.isActive(questionKey)) {
    msg = res.msg
    img = res.img
    answerCheck = false

    if (res['rightAnswer']) {
      answers.rightAnswer(questionKey)
      answerCheck = true
    }
  }

  if (props.name == 'q') {
    questions.activateQuestion(questionKey)
    msg = res.msg
    img = res.img
    answerCheck = undefined
  }
}
</script>

<template>
  <main>
    <ThePanel :msg="msg" :img="img" :answerCheck="answerCheck" :isZS="isZS" />
  </main>
</template>
