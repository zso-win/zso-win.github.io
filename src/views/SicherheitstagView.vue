<template>
    <div class="sicherheitstag">
        <h1>Sicherheitstag</h1>
        <div class="content">
            <n-image width="350" :src="img" object-fit="scale-down" height="200"></n-image>
            <p class="text">{{ question }}</p>
            <div class="answers-grid">
                <div class="grid-container">
                    <div v-for="(answer, index) in answers" :key="index" class="answer-box" :class="{ 'selected': selectedAnswers.includes(answer) }"
                        @click="toggleAnswer(answer)">
                        <n-checkbox :value="selectedAnswers.includes(answer)" :disabled="showResult" @update:value="() => toggleAnswer(answer)">
                            {{ answer }}
                        </n-checkbox>
                    </div>
                </div>
            </div>
            <div class="submit-button">
                <n-button round type="warning" @click="handleSubmit" :disabled="!selectedAnswers.length || showResult">
                    <n-icon :component="PaperPlane" />
                </n-button>
            </div>
            <div v-if="isCorrect">
                <p class="text">
                    <span>
                        <n-icon :component="CheckCircle" color="green" />
                    </span>
                    Richtig! Sehr gut gemacht!
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
import { NIcon, NButton, NImage, NCheckbox } from 'naive-ui'
import { PaperPlane, CheckCircle, TimesCircle } from '@vicons/fa'

// Sample question data - replace with your actual data
const question = ref('Was ist die wichtigste Sicherheitsregel?')
const img = ref('/assets/safety.png')  // Replace with your actual image path
const answers = ref([
    'Antwort 1',
    'Antwort 2',
    'Antwort 3',
    'Antwort 4'
])
const correctAnswers = ['Antwort 1', 'Antwort 2']  // Replace with your correct answers

const selectedAnswers = ref<string[]>([])
const isCorrect = ref(false)
const isWrong = ref(false)
const showResult = ref(false)

const toggleAnswer = (answer: string) => {
    if (showResult.value) return
    const index = selectedAnswers.value.indexOf(answer)
    if (index === -1) {
        selectedAnswers.value.push(answer)
    } else {
        selectedAnswers.value.splice(index, 1)
    }
}

const handleSubmit = () => {
    showResult.value = true
    const isCorrectAnswer = correctAnswers.length === selectedAnswers.value.length &&
        correctAnswers.every(answer => selectedAnswers.value.includes(answer))
    isCorrect.value = isCorrectAnswer
    isWrong.value = !isCorrectAnswer
}
</script>

<style scoped>
.sicherheitstag {
    padding: 20px;
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
}

.answer-box {
    background-color: #f0f0f0;
    border-radius: 12px;
    padding: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
}

.answer-box:hover {
    background-color: #e0e0e0;
}

.answer-box.selected {
    background-color: #ffd591;
    border: 2px solid #ffa940;
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

button {
    padding: 5px 10px;
    font-size: 16px;
    cursor: pointer;
}
</style>