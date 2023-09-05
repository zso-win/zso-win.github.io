<script setup lang="ts">

import { computed, onMounted } from 'vue';
import { NSpace, NImageGroup, NProgress, NButton } from 'naive-ui'
import { useAnswerStore } from '@/stores/answers';
import { useProgressStore } from '@/stores/progress';

const answerStore = useAnswerStore()
const progressStore = useProgressStore()

const sanProgress = computed(() => (answerStore.answers.sanAnswer1 ? 50 : 0) + (answerStore.answers.sanAnswer2 ? 50 : 0))
const polProgress = computed(() => (answerStore.answers.polAnswer1 ? 50 : 0) + (answerStore.answers.polAnswer2 ? 50 : 0))
const fwProgress = computed(() => (answerStore.answers.fwAnswer1 ? 50 : 0) + (answerStore.answers.fwAnswer2 ? 50 : 0))
const zsProgress = computed(() => (answerStore.answers.zsAnswer1 ? 50 : 0) + (answerStore.answers.zsAnswer2 ? 50 : 0))

const finished = computed(() => progressStore.progress.hasFinished)

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
                    <n-progress type="line" status="warning" :percentage="polProgress" indicator-placement="inside" />
                    <p>Polizei</p>
                </div>
                <div>
                    <img width="60" src="@/assets/adfw.png" />
                    <n-progress type="line" status="warning" :percentage="fwProgress" indicator-placement="inside" />
                    <p>Feuerwehr</p>
                </div>
                <div>
                    <img width="60" src="@/assets/ads.png" />
                    <n-progress type="line" status="warning" :percentage="sanProgress" indicator-placement="inside" />
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
        <div v-if="finished">
            <n-button>Preis abholen</n-button>
        </div>
    </div>
</template>
