<script setup lang="ts">
import { onMounted } from 'vue'

import { NSpace, NImage } from 'naive-ui'
import { useQuestionStore } from '@/stores/questions';


const questions = useQuestionStore()

onMounted(() => {
    questions.update({ question2: true })
})

</script>

<template>
    <div>
        <n-space justify="center">
            <n-image width="400" src="assets/fire_fighters.jpg" />
        </n-space>

        <p>Welche Notfallnummer musst du in einem solchen Notfall anrufen?</p>

    </div>
</template>

<style></style>