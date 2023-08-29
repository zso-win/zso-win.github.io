<script setup lang="ts">
import { onMounted } from 'vue'

import { NSpace, NImage } from 'naive-ui'
import { useAnswerStore } from '@/stores/answers';


const answers = useAnswerStore()

onMounted(() => {
    answers.update({ answer2: true })
})

</script>

<template>
    <div>
        <n-space justify="center">
            <n-image width="320" src="src/assets/ambulance.jpg" />
        </n-space>

        <p>Die richtige Antwort.</p>

    </div>
</template>

<style></style>