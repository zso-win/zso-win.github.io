<template>
    <div>
        <n-image></n-image>
        <p class="text">Hier kommt die Frage</p>
        <input v-model="inputValue" type="text" placeholder="Enter something..." />
        <n-button round type="warning" @click="handleButtonClick"><n-icon :component="PaperPlane" /></n-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NIcon, NButton, NImage } from 'naive-ui'
import { PaperPlane } from '@vicons/fa'

defineProps({
    org: String,
})


const inputValue = ref('')

const handleButtonClick = () => {
    console.log('Input Value:', inputValue.value)
    // Perform any other action with the input value here
}
</script>

<style scoped>
/* Add any styles for your component here */
div {
    display: flex;
    flex-direction: column;
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
}

.text {
    font-size: large;
}
</style>