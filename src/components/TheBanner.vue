<script setup lang="ts">

import { computed, onMounted } from 'vue';
import { NSpace, NImageGroup, NProgress, NButton } from 'naive-ui'
import { useAnswerStore } from '@/stores/answers';
import { useProgressStore } from '@/stores/progress';

const answrStr = useAnswerStore()
const progressStore = useProgressStore()

const rdProgress = computed(() => (answrStr.answers.get("rd1") ? 50 : 0) + (answrStr.answers.get("rd2") ? 50 : 0))
const spProgress = computed(() => (answrStr.answers.get("sp1") ? 50 : 0) + (answrStr.answers.get("sp2") ? 50 : 0))
const fwProgress = computed(() => (answrStr.answers.get("fw1") ? 50 : 0) + (answrStr.answers.get("fw2") ? 50 : 0))
const zsProgress = computed(() => (answrStr.answers.get("zs1") ? 50 : 0) + (answrStr.answers.get("zs2") ? 50 : 0))

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
                    <n-progress type="line" status="warning" :percentage="spProgress" indicator-placement="inside" />
                    <p>Polizei</p>
                </div>
                <div>
                    <img width="60" src="@/assets/adfw.png" />
                    <n-progress type="line" status="warning" :percentage="fwProgress" indicator-placement="inside" />
                    <p>Feuerwehr</p>
                </div>
                <div>
                    <img width="60" src="@/assets/ads.png" />
                    <n-progress type="line" status="warning" :percentage="rdProgress" indicator-placement="inside" />
                    <p>Rettungs-<br>dienst</p>
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
