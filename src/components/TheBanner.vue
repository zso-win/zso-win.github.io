<script setup lang="ts">

import { computed, onMounted } from 'vue';
import { NSpace, NImageGroup, NProgress } from 'naive-ui'
import { useAnswerStore } from '@/stores/answers';

const answerStore = useAnswerStore()

const healthProgress = computed(() => answerStore.answers.answer1 ? 50 : 0)
const zsProgress = computed(() => answerStore.answers.answer2 ? 50 : 0)

onMounted(() => {

})

</script>

<style scoped>
.bbox {
    background-color: moccasin;
    padding: 10px 0px 5px 0px;
}
</style>

<template>
    <div class="bbox">
        <n-image-group>
            <n-space justify="space-around">
                <div>
                    <img width="60" src="@/assets/adp.png" />
                    <n-progress type="line" status="warning" :percentage="0" indicator-placement="inside" />
                    <p>Polizei</p>
                </div>
                <div>
                    <img width="60" src="@/assets/adfw.png" />
                    <n-progress type="line" status="warning" :percentage="100" indicator-placement="inside" />
                    <p>Feuerwehr</p>
                </div>
                <div>
                    <img width="60" src="@/assets/ads.png" />
                    <n-progress type="line" status="warning" :percentage="healthProgress" indicator-placement="inside" />
                    <p>Sanität</p>
                </div>
                <div>
                    <img width="60" src="@/assets/adzs.png" />
                    <n-progress type="line" status="warning" :percentage="zsProgress" indicator-placement="inside" />
                    <p>Zivilschutz</p>
                </div>
            </n-space>
        </n-image-group>
        <n-space></n-space>
    </div>
</template>
