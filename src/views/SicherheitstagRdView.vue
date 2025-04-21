<template>
  <div class="sicherheitstag">
    <div class="content">
      <n-image width="290" src="/assets/RDW_Sugi_quer.jpg" object-fit="scale-down" height="200"></n-image>
      <p class="text">{{ question }}</p>
      <div class="answers-grid">
        <div class="grid-container">
          <n-button
            v-for="(answer, index) in answers"
            :key="index"
            class="answer-button"
            :type="selectedAnswers.includes(answer) ? 'info' : 'default'"
            @click="toggleAnswer(answer)"
            :disabled="isCorrect"
          >
            {{ answer }}
          </n-button>
        </div>
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
          Die Sugi bzw. das Absauggerät hat zwei Funktionen. Zum einen das Entfernen von Sekret aus den Atemwegen. Zum
          anderen das Absaugen von Luft aus Vakuummatratze oder Vakuumschiene.
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
import { NIcon, NButton, NImage } from 'naive-ui'
import { PaperPlane, CheckCircle, TimesCircle } from '@vicons/fa'
import { useAnswerStore } from '@/stores/answers'

const answerStore = useAnswerStore()
const question = ref('Wozu benutzt der Rettungsdienst eine Sugi ?')
const answers = ref(['Absaugen von Luft', 'Aufblasen der Trage', 'Entfernen von Sekret', 'Reinigen des Rettungswagen'])
const correctAnswers = [answers.value[0], answers.value[2]]

const selectedAnswers = ref<string[]>([])
const isCorrect = ref(answerStore.answers.get('rd'))
const isWrong = ref(false)

const toggleAnswer = (answer: string) => {
  if (isCorrect.value) return
  isCorrect.value = false
  const index = selectedAnswers.value.indexOf(answer)
  if (index === -1) {
    selectedAnswers.value.push(answer)
  } else {
    selectedAnswers.value.splice(index, 1)
  }
}

const handleSubmit = () => {
  const isCorrectAnswer =
    correctAnswers.length === selectedAnswers.value.length &&
    correctAnswers.every((answer) => selectedAnswers.value.includes(answer))
  isCorrect.value = isCorrectAnswer
  isWrong.value = !isCorrectAnswer
  if (isCorrect.value) {
    answerStore.rightAnswer('rd')
  }
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

.answers-grid {
  width: 100%;
  margin: 20px 0;
}

.grid-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.answer-button {
  width: 100%;
  height: 60px;
  font-size: 16px;
  transition: all 0.3s ease;
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
