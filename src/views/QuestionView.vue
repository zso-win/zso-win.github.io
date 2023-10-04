<script setup lang="ts">

import ZsQuestion1 from '@/components/ZsQuestion1.vue';
import { useAnswerStore } from '@/stores/answers';
import { useQuestionStore } from '@/stores/questions';
import { resources } from '@/views/resources'

const props = defineProps({
  id: String,
  org: String
})

let key = `${props.org}_${props.id}`

const answers = useAnswerStore()
const questions = useQuestionStore()

const res = resources[key]

// TODO add update logic for questions
if (props.id == "q") {
  questions.update({})
}

// TODO add update logic for answers
if (res["rightAnswer"]) {
  answers.update({})
}

</script>

<template>
  <main>
    <ZsQuestion1 :msg="res.msg" :img="res.img" />
  </main>
</template>
