<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { NSpace, NImage } from 'naive-ui'
import { useAnswerStore } from '@/stores/answers';
import { useQuestionStore } from '@/stores/questions';

const msg = ref("")

const answers = useAnswerStore()
const questions = useQuestionStore()

onMounted(() => {
    if (questions.questions.fwQuestion2) {
        answers.update({ fwAnswer2: true })
        msg.value = "118 ist die richtige Antwort."
    }
    else {
        msg.value = "118 ist die Notfallnummer der Feuerwehr."
    }
})

</script>

<template>
    <div>
        <n-space justify="center">
            <n-image width="400" src="assets/fire_fighters.jpg" />
        </n-space>

        <p>{{ msg }}</p>

    </div>
</template>

<style></style>