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
    { text: 'September' },
    { text: 'Oktober' },
    { text: 'November', isCorrectAnswer: true },
    { text: 'Dezember' }]);
const questionText = ref("Wann findet die nächste Ausgabe der Wintimäss statt?")

function checkAnswer(selectedOption: QuizOption): void {

    if (selectedOption.isCorrectAnswer) {
        console.log("Correct Answer")
        msg.value = "Das ist richtig!"
        answers.update({ answer1: true })
    }
    else {
        console.log("Wrong Answer")
        msg.value = "Leider falsch."
        answers.answers.answer1 = false
    }

}

function reset(): void {
    answers.update({ answer1: false, answer2: false })
    msg.value = ""
}

onMounted(() => {

})

</script>

<template>
    <div>
        <n-space justify="center">
            <n-image width="320" src="@/assets/ambulance.jpg" />
        </n-space>

        <p>{{ questionText }}</p>
        <n-divider />
        <div v-if="!answers.answers.answer1">
            <n-space vertical>
                <n-button size="medium" color="#f5dab8" text-color="#000" block v-for="option in options" :key="option.text" @click="checkAnswer(option)">
                    {{ option.text }}
                </n-button>
            </n-space>
        </div>

        <p>{{ msg }}</p>

        <n-divider />

        <n-button block @click="reset">Reset</n-button>



    </div>
</template>

<style></style>