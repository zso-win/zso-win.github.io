<template>
  <div class="sicherheitstag">
    <div class="content">
      <n-image width="290" src="/assets/zs_truemmer.jpg" object-fit="scale-down" height="200"></n-image>
      <p class="text">{{ question }}</p>
      <div class="answers-grid">
        <div class="grid-container">
          <n-button
            v-for="(answer, index) in answers"
            :key="index"
            class="answer-button"
            :type="selectedAnswer === answer ? 'info' : 'default'"
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
          Natürlich nicht! Im Zivilschutz können nicht nur Männer mitmachen, die zum Schutzdienst gesetzlich
          verpflichtet sind, sondern auch Frauen. Ebenso können sich Männer sogenannt «über Alter» für den
          <a href="https://www.zh.ch/de/sicherheit-justiz/zivilschutz/dienst-im-zivilschutz.html" target="_blank"
            >freiwilligen Schutzdienst</a
          >
          melden.
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

const question = ref('Zivilschutz ist reine Männersache:')
const answers = ref(['Richtig', 'Falsch'])
const correctAnswer = answers.value[0] // Only one correct answer now

const selectedAnswer = ref<string>('')
const isCorrect = ref(false)
const isWrong = ref(false)

const toggleAnswer = (answer: string) => {
  if (isCorrect.value) return
  isCorrect.value = false
  selectedAnswer.value = answer
}

const handleSubmit = () => {
  const isCorrectAnswer = selectedAnswer.value === correctAnswer
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
