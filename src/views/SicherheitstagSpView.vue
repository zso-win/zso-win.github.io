<template>
  <div class="sicherheitstag">
    <div class="content">
      <n-image width="290" src="/assets/sp_funk.jpg" object-fit="scale-down" height="200"></n-image>
      <p class="text">{{ question }}</p>
      <div class="input-container">
        <n-input-number
          v-model:value="userAnswer"
          :show-button="false"
          placeholder=""
          :disabled="isCorrect"
          class="weight-input"
        />
        <span class="unit">kg</span>
      </div>
      <div class="submit-button">
        <n-button round type="info" @click="handleSubmit" :disabled="isCorrect">
          <n-icon :component="PaperPlane" />
        </n-button>
      </div>
      <div v-if="isCorrect">
        <p class="text">
          <span>
            <n-icon :component="CheckCircle" color="green" />
          </span>
          Richtig! Sehr gut gemacht!
          <br />
          Die Weste wiegt 14 kg. Sie wird in besonderen herausfordernden Situationen getragen.
        </p>
      </div>
      <div v-if="isWrong">
        <p class="text">
          <span>
            <n-icon :component="TimesCircle" color="red" />
          </span>
          Die Antwort ist leider falsch. Versuche es noch einmal!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NIcon, NButton, NImage, NInputNumber } from 'naive-ui'
import { PaperPlane, CheckCircle, TimesCircle } from '@vicons/fa'

const question = ref('Wie schwer ist die «schwere» Polizei-Weste?')
const correctAnswer = 14

const userAnswer = ref<number | null>(null)
const isCorrect = ref(false)
const isWrong = ref(false)

const handleSubmit = () => {
  const isCorrectAnswer = userAnswer.value === correctAnswer
  isCorrect.value = isCorrectAnswer
  isWrong.value = !isCorrectAnswer
}
</script>

<style scoped>
.sicherheitstag {
  padding: 20px;
  background-color: #e6f3ff;
  border: 10px solid transparent;
  border-image: repeating-linear-gradient(135deg, #ff0000, #ff0000 10px, #ffffff 10px, #ffffff 20px) 10;
}

.content {
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
}

.input-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
}

.weight-input {
  width: 120px;
}

.unit {
  font-size: 16px;
  font-weight: bold;
}

.submit-button {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.text {
  font-size: large;
  margin: 15px 0;
}
</style>
