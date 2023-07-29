<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAnswerStore } from '@/stores/answers';

interface QuizOption {
    text: string
    isCorrectAnswer?: boolean
}

const msg = ref("")

const answers = useAnswerStore()

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
        answers.update({ answer1: true })
    }
    else {
        console.log("Wrong Answer")
        msg.value = "wrong"
        answers.answers.answer1 = false
    }

}

onMounted(() => {

})

</script>

<template>
    <div>
        <div>{{ questionText }}</div>

        <div v-if="!answers.answers.answer1">
            <button v-for="option in options" :key="option.text" @click="checkAnswer(option)">
                {{ option.text }}
            </button>
        </div>

        <p>{{ msg }}</p>


    </div>
</template>
