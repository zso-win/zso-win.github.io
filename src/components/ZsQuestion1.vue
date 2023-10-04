<script setup lang="ts">
import { NSpace, NImage } from 'naive-ui'

const props = defineProps({
    msg: String,
    img: String
})

</script>

<template>
    <div>
        <n-space justify="center">
            <n-image width="350" :src="img" />
        </n-space>

        <p>{{ msg }}</p>

    </div>
</template>

<style></style>