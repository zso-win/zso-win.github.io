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

watch(finished, async (newValue, _oldValue) => {
  if (newValue == true) {
    progressStore.finish()
    enableButton.value = true
  }
})

function getPrize(): void {
  enableButton.value = false
  router.push({ name: 'end' })
}

onMounted(() => { })
</script>

<style scoped>
.bbox {
  background-color: moccasin;
  padding: 10px 0px 5px 0px;
}

img {
  margin-left: 4px;
}

button {
  margin: 10px;
}

.highlight {
  background-image: linear-gradient(orange, moccasin, orange);
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
        <div>
          <img class="icon" src="@/assets/adp.png" />
          <div class="bar">
            <n-progress type="line" status="warning" :percentage="spProgress" indicator-placement="inside" />
          </div>
          <p>Polizei</p>
        </div>
        <div>
          <img class="icon" src="@/assets/adfw.png" />
          <div class="bar">
            <n-progress type="line" status="warning" :percentage="fwProgress" indicator-placement="inside" />
          </div>
          <p>Feuerwehr</p>
        </div>
        <div>
          <img class="icon" src="@/assets/ads.png" />
          <div class="bar">
            <n-progress type="line" status="warning" :percentage="rdProgress" indicator-placement="inside" />
          </div>
          <p>Rettungs-<br />dienst</p>
        </div>
        <div>
          <img class="icon" src="@/assets/adzs.png" />
          <div class="bar">
            <n-progress type="line" status="warning" :percentage="zsProgress" indicator-placement="inside" />
          </div>
          <p>Zivilschutz</p>
        </div>
      </n-space>
    </n-image-group>
    <n-space v-if="enableButton" justify="center" class="highlight">
      <n-button strong primary round type="warning" @click="getPrize">Quiz beenden und Preis abholen</n-button>
    </n-space>
  </div>
</template>
