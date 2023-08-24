<script setup lang="ts">

import { computed, onMounted } from 'vue';
import { NSpace, NImageGroup } from 'naive-ui'
import { useAnswerStore } from '@/stores/answers';

const answerStore = useAnswerStore()

const healthSolved = computed(() => answerStore.answers.answer1)

onMounted(() => {

})

</script>

<style scoped>
n-avatar {
    padding: 10px;
    width: 60px;
    font-size: xx-large;
    display: flex;
    justify-content: center;
}

.notSolved {
    opacity: 0.5;
}

.police {
    color: white;
    background-color: blue;
}

.fire {
    background-color: red;
    color: yellow;
}

.health {
    background-color: yellow;
    color: red;
}

.civil {
    background-color: orange;
    color: blue;
}
</style>

<template>
    <div>
        <n-image-group>
            <n-space justify="space-around">
                <n-avatar :class="{ notSolved: !policeSolved }" class="police">P</n-avatar>
                <n-avatar :class="{ notSolved: !healthSolved }" class="health">S</n-avatar>
                <n-avatar :class="{ notSolved: !fireSolved }" class="fire">F</n-avatar>
                <n-avatar :class="{ notSolved: !civilSolved }" class="civil">Z</n-avatar>
            </n-space>
        </n-image-group>
        <n-space></n-space>
    </div>
</template>
