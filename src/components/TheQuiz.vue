<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAnswerStore } from '@/stores/answers';
import { NButton, NDivider, NSpace, NImage } from 'naive-ui'

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

function reset(): void {
    answers.update({ answer1: undefined })
}

onMounted(() => {

})

</script>

<template>
    <div>
        <n-space justify="center">
            <n-image width="320" src="src/assets/ambulance.jpg" />
        </n-space>

        <div>{{ questionText }}</div>

        <div v-if="!answers.answers.answer1">
            <n-space vertical>
                <n-button block v-for="option in options" :key="option.text" @click="checkAnswer(option)">
                    {{ option.text }}
                </n-button>
            </n-space>

        </div>

        <p>{{ msg }}</p>

        <n-divider />

        <n-button block @click="reset">Reset</n-button>



    </div>
</template>
