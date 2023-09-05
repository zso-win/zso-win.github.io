<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import SupportIcon from './icons/IconSupport.vue'
import CommunityIcon from './icons/IconDocumentation.vue'
import { useProgressStore } from '@/stores/progress';
import { NButton } from 'naive-ui';

const progressStore = useProgressStore()

</script>

<template>
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Wintimäss Quiz</template>

    Schnitzeljagd durch den Schadenplatz von <i>Schutz und Intervention</i> Winterthur
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>So funktioniert's:</template>

    Scanne den QR Code mit der Frage und suche danach die Antwort auf dem Schadenplatz.
    Scanne den gefundenen QR Code, um die Frage zu beantworten.
    Hast du alle Fragen einer Partnerorganisation beantwortet, leuchtet das entsprechende Symbol auf.
    Wenn du alle Fragen beantwortet hast, kannst du am Hauptstand deinen Gewinn abholen!
  </WelcomeItem>

  <n-button @click="progressStore.start">Schnitzeljagd starten!</n-button>
  <n-button @click="progressStore.finish">Schnitzeljagd beenden!</n-button>
</template>
