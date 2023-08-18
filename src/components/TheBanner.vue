<script setup lang="ts">

import { onMounted } from 'vue';
import { NSpace, NImage, NImageGroup } from 'naive-ui'

onMounted(() => {

})

</script>

<template>
    <div>
        <n-image-group>
            <n-space>
                <n-image width="125" src="src/assets/ambulance.jpg" />
                <n-image width="125" src="src/assets/ambulance.jpg" />
                <n-image width="125" src="src/assets/ambulance.jpg" />
                <n-image width="125" src="src/assets/ambulance.jpg" />
            </n-space>
        </n-image-group>

    </div>
</template>
