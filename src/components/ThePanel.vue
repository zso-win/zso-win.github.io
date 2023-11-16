<script setup lang="ts">
import { NSpace, NImage, NResult } from 'naive-ui'

const props = defineProps({
  msg: String,
  img: String,
  answerCheck: { type: Boolean, required: false },
  isZS: Boolean
})

let isCorrect = props.answerCheck == true
let isWrong = props.answerCheck == false
</script>

<template>
  <div>
    <n-space justify="center">
      <n-image width="350" :src="img" object-fit="scale-down" height="200" :class="{ canvas: isZS }" />
    </n-space>

    <n-result v-if="isCorrect" status="success" title="Richtig!" size="small"></n-result>
    <n-result v-if="isWrong" status="error" title="Leider falsch." size="small"></n-result>

    <p class="text">{{ msg }}</p>
    <p class="text" v-if="isWrong">Versuch es weiter!</p>
  </div>
</template>

<style>
.canvas {
  background-color: white;
}

.text {
  font-size: medium;
}
</style>
