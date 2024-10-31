<template>
  <div>
    <n-image width="350" :src="img" object-fit="scale-down" height="200"></n-image>
    <p class="text">{{ msg }}</p>
    <div class="input-container">
      <input v-model="inputValue" type="text" placeholder="Antworte hier..." @keyup.enter="handleButtonClick" />
      <n-button round type="warning" @click="handleButtonClick"><n-icon :component="PaperPlane" /></n-button>
    </div>
    <div v-if="rightAnswrValue">
      <p class="text">
        <span>
          <n-icon :component="CheckCircle" color="green" />
        </span>
        Richtig! Mach weiter mit dem nächsten QR-Code.
      </p>
    </div>
    <div v-if="wrongAnswrValue">
      <p class="text">
        <span>
          <n-icon :component="TimesCircle" color="red" />
        </span>
        Die Antwort ist leider falsch. Versuche es noch einmal!
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NIcon, NButton, NImage } from 'naive-ui'
import { PaperPlane, CheckCircle, TimesCircle } from '@vicons/fa'
import { q_n_a } from './q&a'
import { useAnswerStore } from '@/stores/answers'

const props = defineProps({
  org: String
})

const answers = useAnswerStore()

const msg = q_n_a[props.org ?? 'na']?.q || 'No question found'
const answr: RegExp = q_n_a[props.org ?? 'na']?.a
const img = '/assets/' + q_n_a[props.org ?? 'na']?.img

const inputValue = ref('')

const rightAnswrValue = ref(false)
const wrongAnswrValue = ref(false)

const handleButtonClick = () => {
  if (answr.test(inputValue.value.toLowerCase())) {
    rightAnswrValue.value = true
    wrongAnswrValue.value = false
    answers.rightAnswer(props.org || 'na')
  } else {
    rightAnswrValue.value = false
    wrongAnswrValue.value = true
  }
}
</script>

<style scoped>
/* Add any styles for your component here */
div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.input-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

input {
  margin-bottom: 10px;
  padding: 5px;
  font-size: 16px;
}

button {
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 5px;
}

.text {
  font-size: large;
}
</style>
