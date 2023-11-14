<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import SupportIcon from './icons/IconSupport.vue'
import CommunityIcon from './icons/IconDocumentation.vue'
import { useProgressStore } from '@/stores/progress'
import { NButton } from 'naive-ui'
import { useAnswerStore } from '@/stores/answers'
import { useQuestionStore } from '@/stores/questions'
import IconEcosystem from './icons/IconEcosystem.vue'
import { computed } from 'vue'
import IconTooling from './icons/IconTooling.vue'

const answers = useAnswerStore()
const questions = useQuestionStore()
const progress = useProgressStore()

const hasStarted = computed(() => progress.progress.hasStarted)

function reset(): void {
  answers.reset()
  questions.reset()
  progress.reset()
}
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Winti Mäss Quiz</template>

    Die virtuelle Schnitzeljagd durch den Schadenplatz in der Bevölkerungsschutz-Zone der Partnerorganisationen
    <i>Rettungsdienst, Stadtpolizei und Schutz & Intervention</i> Winterthur.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>So funktioniert's:</template>

    Scanne den QR-Code mit der Frage und suche danach die richtige Antwort auf dem Schadenplatz. Wenn du etwas gefunden
    hast, scanne diesen QR-Code, um die Frage zu beantworten. Hast du alle Fragen einer Partnerorganisation beantwortet,
    zeigt der Kontrollbalken 100%. Wenn du alle Fragen beantwortet hast, kannst du bei einer der Partnerorganisationen
    deinen Gewinn abholen.
  </WelcomeItem>

  <WelcomeItem v-if="!hasStarted">
    <template #icon>
      <IconEcosystem />
    </template>
    <template #heading>Bereit?</template>

    Gehe an den Start, um mit der Schnitzeljagd zu beginnen!
  </WelcomeItem>

  <WelcomeItem v-if="hasStarted">
    <template #icon>
      <IconTooling />
    </template>
    <template #heading>Los geht's</template>

    Scanne die erste Frage und suche nach der Antwort, dann geht es weiter mit der zweiten Frage, der dritten usw…. Die
    Reihenfolge spielt dabei keine Rolle. Viel Spass!
  </WelcomeItem>
</template>
