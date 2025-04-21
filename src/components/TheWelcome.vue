<script setup lang="ts">
// import { useProgressStore } from '@/stores/progress'
// import { useAnswerStore } from '@/stores/answers'
// import { useQuestionStore } from '@/stores/questions'

// const answers = useAnswerStore()
// const questions = useQuestionStore()
// const progress = useProgressStore()

// function reset(): void {
//   answers.reset()
//   questions.reset()
//   progress.reset()
// }
</script>

<template>
  <div class="heading">Tag der Sicherheit Quiz</div>

  Das virtuelle Quiz der Partnerorganisationen
  <i>Rettungsdienst, Stadtpolizei und Schutz & Intervention</i> Winterthur.

  <div class="heading">So funktioniert's</div>

  Beantworte die erste Frage. Tippe auf die Piktos oben und gelange zur nächsten Frage. Wenn du alle beantwortet hast,
  kannst du bei einer der Partnerorganisationen deinen Preis abholen.

  <!-- <WelcomeItem v-if="!hasStarted">
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
</WelcomeItem> -->
</template>
<style scoped>
.heading {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}
</style>
