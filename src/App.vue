<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import TheBanner from './components/TheBanner.vue'
import { NImage, NImageGroup, NSpace, NConfigProvider } from 'naive-ui'
import { computed } from 'vue'

const route = useRoute()

const isHome = computed(() => route.name == 'home')

const themeOverrides = {
  Input: {
    borderHover: '1px solid #2080f0',
    borderFocus: '1px solid #2080f0',
    caretColor: '#2080f0'
  },
  Button: {
    textColorHover: '#2080f0',
    textColorTextPressed: '#2080f0',
    textColorPressed: '#2080f0',
    textColorFocus: '#2080f0',
    textColorTextFocus: '#2080f0',
    rippleColor: '#2080f0',
    textColorTextHover: '#2080f0',
    textColorGhostHover: '#2080f0',
    textColorGhostFocus: '#2080f0',
    textColorGhostPressed: '#2080f0',
    borderHover: '1px solid #2080f0',
    borderPressed: '1px solid #2080f0',
    borderFocus: '1px solid #2080f0',
    borderHoverPrimary: '1px solid #2080f0',
    textColor: '#1a4d66'
  }
}
</script>

<template>
  <header>
    <h2>TAG DER SICHERHEIT 2025</h2>
    <n-image-group v-if="isHome">
      <n-space justify="space-around">
        <n-image height="80" preview-disabled src="/assets/Stapo_Winterthur_Badge.png" object-fit="scale-down" />
        <n-image height="80" preview-disabled src="/assets/SIW-Badge_pos.png" object-fit="scale-down" />
        <n-image height="80" preview-disabled src="/assets/Logo_RettungdienstWinterthur.png" object-fit="scale-down" />
      </n-space>
    </n-image-group>
    <TheBanner class="tb-space"></TheBanner>
  </header>

  <n-config-provider :theme-overrides="themeOverrides">
    <RouterView />
  </n-config-provider>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

h2 {
  font: bold 25px 'Helvetica', 'Trebuchet MS', Arial, sans-serif;
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
