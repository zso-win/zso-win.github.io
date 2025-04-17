<script setup lang="ts">
import { computed, onMounted, watch, ref } from 'vue'
import { NSpace, NImageGroup, NProgress, NButton } from 'naive-ui'
import { useAnswerStore } from '@/stores/answers'
import { useProgressStore } from '@/stores/progress'
import router from '@/router'

const answrStr = useAnswerStore()
const progressStore = useProgressStore()

let enableButton = ref(false)

const rdProgress = computed(() => (answrStr.answers.get('rd') ? 100 : 0))
const spProgress = computed(() => (answrStr.answers.get('sp') ? 100 : 0))
const fwProgress = computed(() => (answrStr.answers.get('fw') ? 100 : 0))
const zsProgress = computed(() => (answrStr.answers.get('zs') ? 100 : 0))

const finished = computed(
  () => rdProgress.value == 100 && spProgress.value == 100 && fwProgress.value == 100 && zsProgress.value == 100
)

watch(finished, async (newValue) => {
  if (newValue == true) {
    progressStore.finish()
    enableButton.value = true
  }
})

function getPrize(): void {
  enableButton.value = false
  router.push({ name: 'end' })
}

function handleClick(org: string): void {
  if (progressStore.progress.hasFinished) return
  router.push({ name: 'question', params: { org: org } })
}

onMounted(() => {})
</script>

<style scoped>
.bbox {
  /*background-color: moccasin;*/
  padding: 10px 0px 5px 0px;
}

img {
  margin-left: 4px;
}

button {
  margin: 10px;
  height: 100px;
}

.txt {
  margin-bottom: 10px;
}

.bar {
  width: 66px;
}

.icon {
  width: 58px;
}
</style>

<template>
  <div class="bbox">
    <n-image-group>
      <n-space justify="space-around">
        <div @click="handleClick('sp')">
          <img class="icon" src="@/assets/adp.png" style="background-color: moccasin" />
          <div class="bar">
            <n-progress type="line" status="warning" :percentage="spProgress" indicator-placement="inside" />
          </div>
          <p>Polizei</p>
        </div>
        <div @click="handleClick('fw')">
          <img class="icon" src="@/assets/adfw.png" style="background-color: moccasin" />
          <div class="bar">
            <n-progress type="line" status="warning" :percentage="fwProgress" indicator-placement="inside" />
          </div>
          <p>Feuerwehr</p>
        </div>
        <div @click="handleClick('rd')">
          <img class="icon" src="@/assets/ads.png" style="background-color: moccasin" />
          <div class="bar">
            <n-progress type="line" status="warning" :percentage="rdProgress" indicator-placement="inside" />
          </div>
          <p>Rettungs-<br />dienst</p>
        </div>
        <div @click="handleClick('zs')">
          <img class="icon" src="@/assets/adzs.png" style="background-color: moccasin" />
          <div class="bar">
            <n-progress type="line" status="warning" :percentage="zsProgress" indicator-placement="inside" />
          </div>
          <p>Zivilschutz</p>
        </div>
      </n-space>
    </n-image-group>
    <n-space v-if="enableButton" justify="center">
      <n-button strong primary round type="warning" @click="getPrize">
        <div class="txt">
          <p>Danke fürs Mitmachen!</p>
          <p>Hol dir deinen Preis bei einer</p>
          <p>der vier Bevölkerungsschutzorganisationen.</p>
        </div>
      </n-button>
    </n-space>
  </div>
</template>
