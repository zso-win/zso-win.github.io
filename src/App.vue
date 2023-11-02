<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheBanner from './components/TheBanner.vue'
import { NImage, NImageGroup, NSpace } from 'naive-ui'
</script>

<template>
  <header>
    <h2>SCHNITZELJAGD <br />BEVÖLKERUNGSSCHUTZ-ZONE</h2>
    <n-image-group>
      <n-space justify="space-around">
        <n-image height="80" src="/assets/Stapo_Winterthur_Badge.png" object-fit="scale-down" />
        <n-image height="80" src="/assets/SIW_Badge.png" object-fit="scale-down" />
        <n-image height="80" src="/assets/Logo_RettungdienstWinterthur.png" object-fit="scale-down" />
      </n-space>
    </n-image-group>
    <TheBanner class="tb-space"></TheBanner>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: moccasin;
}

h2 {
  font: bold 20px 'Helvetica', 'Trebuchet MS', Arial, sans-serif;
  margin-bottom: 10px;
  padding: 5px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

.tb-space {
  margin: 10px 0px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* media query hack, to avoid line break*/
@media (min-width: 3200px) {
  header {
    display: grid;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
