<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface QuizOption {
    text: string
    isCorrectAnswer?: boolean
}

const msg = ref("")

const options = ref([
    { text: 'Option 1' },
    { text: 'Option 2' },
    { text: 'Option 3', isCorrectAnswer: true },
    { text: 'Option 4' }]);
const questionText = ref("This is the question...")

function checkAnswer(selectedOption: QuizOption): void {

    if (selectedOption.isCorrectAnswer) {
        console.log("Correct Answer")
        msg.value = "correct!"
    }
    else {
        console.log("Wrong Answer")
        msg.value = "wrong"
    }

}

onMounted(() => {
})
</script>

<template>
    <div>
        <span>{{ questionText }}</span>

        <div>
            <button v-for="option in options" :key="option.text" @click="checkAnswer(option)">
                {{ option.text }}
            </button>
        </div>

        <span>{{ msg }}</span>

    </div>
</template>
