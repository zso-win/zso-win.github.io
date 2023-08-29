<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import SupportIcon from './icons/IconSupport.vue'
import CommunityIcon from './icons/IconDocumentation.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Wintimäss Quiz</template>

    Schnitzeljagd durch den Schadenplatz von Schutz und Rettung Winterthur
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
</template>
