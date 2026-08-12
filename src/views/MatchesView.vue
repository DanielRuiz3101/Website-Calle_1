<script setup>
import { computed, ref } from 'vue'
import { Circle, ChevronDown } from '@lucide/vue'
import formacionNormal from '@/assets/img/Formacion.png'
import formacionNegativa from '@/assets/img/Formacion_negativa.PNG'

const formations = {
  normal: {
    label: 'Equipo Oficial',
    image: formacionNormal,
    matches: [
      { id: 1, rival: 'Equipo Alfa', gf: 3, ga: 1 },
      { id: 2, rival: 'Equipo Beta', gf: 0, ga: 2 },
      { id: 3, rival: 'Equipo Gamma', gf: 2, ga: 2 },
    ],
  },
  negativa: {
    label: 'Equipo Negativa',
    image: formacionNegativa,
    matches: [
      { id: 1, rival: 'Clasico', gf: 5, ga: 3 },
      { id: 2, rival: 'Clasico', gf: 7, ga: 7 },
      { id: 3, rival: 'Clasico', gf: 8, ga: 6 },
      { id: 4, rival: 'Clasico', gf: 4, ga: 1 },
      { id: 5, rival: 'Clasico', gf: 6, ga: 7 },
      { id: 6, rival: 'Clasico', gf: 8, ga: 5 },
    ],
  },
}

const selectedFormation = ref('normal')
const showFormationMenu = ref(false)

const currentFormation = computed(() => formations[selectedFormation.value])

const selectFormation = (key) => {
  selectedFormation.value = key
  showFormationMenu.value = false
}

const resultOf = (match) => {
  if (match.gf > match.ga)
    return { label: 'Victoria', color: 'bg-green-500', dot: 'text-green-500' }
  if (match.gf < match.ga) return { label: 'Derrota', color: 'bg-red-700', dot: 'text-red-700' }
  return { label: 'Empate', color: 'bg-gray-500', dot: 'text-gray-500' }
}

const stats = computed(() => {
  const matches = currentFormation.value.matches
  return {
    wins: matches.filter((m) => m.gf > m.ga).length,
    losses: matches.filter((m) => m.gf < m.ga).length,
    draws: matches.filter((m) => m.gf === m.ga).length,
    goals: matches.reduce((sum, m) => sum + m.gf, 0),
  }
})
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#25221e] lg:flex-row">
    <!--Section Record-->
    <section class="flex flex-col flex-1 gap-6 max-w-2xl mx-auto text-white sm:px-6 py-8 sm:py-10">
      <!--Title-->
      <div class="inline-flex items-center gap-2 text-[#C59B27] text-[14px] font-bold">
        <span class="w-6 h-px bg-[#C59B27]"></span>HISTORIAL
      </div>

      <!--Summary-->
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:mb-8">
        <!--Wins-->
        <div
          class="flex flex-col items-center justify-center rounded-2xl bg-[#1B1917] border border-gray-600 p-4 sm:p-6"
        >
          <span class="text-4xl text-green-500 font-black sm:text-5xl">{{ stats.wins }}</span>
          <span class="text-xs text-gray-500 font-bold tracking-widest">VICTORIAS</span>
        </div>

        <!--Lose-->
        <div
          class="flex flex-col items-center justify-center rounded-2xl bg-[#1B1917] border border-gray-600 p-4 sm:p-6 text-center"
        >
          <span class="text-4xl text-red-700 font-black sm:text-5xl">{{ stats.losses }}</span>
          <span class="text-xs text-gray-500 font-bold tracking-widest">DERROTAS</span>
        </div>

        <!--Draw-->
        <div
          class="flex flex-col items-center justify-center rounded-2xl bg-[#1B1917] border border-gray-600 p-4 sm:p-6 text-center"
        >
          <span class="text-4xl font-black sm:text-5xl">{{ stats.draws }}</span>
          <span class="text-xs text-gray-500 font-bold tracking-widest">EMPATES</span>
        </div>

        <!--Goles-->
        <div
          class="flex flex-col items-center justify-center rounded-2xl bg-[#1B1917] border border-gray-600 p-4 sm:p-6 text-center"
        >
          <span class="text-4xl text-[#C59B27] font-black sm:text-5xl">{{ stats.goals }}</span>
          <span class="text-xs text-gray-500 font-bold tracking-widest">GOLES</span>
        </div>
      </div>

      <!--Matches-->
      <div class="space-y-2 w-90 sm:w-full">
        <div
          v-for="match in currentFormation.matches"
          :key="match.id"
          class="flex items-center justify-between rounded-xl px-4 py-3.5 bg-[#1B1917] border border-gray-600"
        >
          <div class="flex items-center gap-3 min-w-0">
            <Circle class="w-2 h-2" :class="resultOf(match).dot" fill="currentColor" />
            <div class="min-w-0">
              <span class="font-bold">vs {{ match.rival }}</span>
            </div>
          </div>

          <div class="flex items-center gap-2 shrink-0">
            <span class="text-xl sm:text-2xl font-black" :class="resultOf(match).dot"
              >{{ match.gf }}-{{ match.ga }}</span
            >
            <div
              :class="resultOf(match).color"
              class="hidden sm:block px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
            >
              {{ resultOf(match).label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="w-3/4 mx-auto h-1 rounded-full bg-[#C59B27] lg:w-2 lg:h-auto lg:self-stretch lg:my-10 lg:mx-0"
    ></div>

    <!--Section Formation-->
    <section class="flex flex-col flex-1 gap-6 max-w-2xl mx-auto px-4 sm:px-6 py-8">
      <div class="flex justify-between">
        <!--Title-->
        <div class="inline-flex items-center gap-2 text-[#C59B27] text-[14px] font-bold">
          <span class="w-6 h-px bg-[#C59B27]"></span>FORMACION
        </div>

        <!-- Select Formation -->
        <div class="relative mt-4 inline-block">
          <button
            @click="showFormationMenu = !showFormationMenu"
            class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-[#C59B27] border border-[#C59B27] hover:bg-[#C59B27]/10 transition-colors duration-200"
          >
            {{ currentFormation.label }}
            <ChevronDown class="w-4 h-4" />
          </button>

          <div
            v-if="showFormationMenu"
            class="absolute left-0 top-full w-38 mt-2 rounded-xl bg-black border border-gray-600 overflow-hidden shadow-2xl z-20"
          >
            <button
              v-for="(formation, key) in formations"
              :key="key"
              @click="selectFormation(key)"
              :class="[
                selectedFormation === key
                  ? 'text-[#C59B27] bg-[#C59B27]/10'
                  : 'text-gray-400 hover:text-white hover:bg-gray-100/10',
              ]"
              class="flex w-full items-center gap-2 px-4 py-3 text-sm font-bold transition-colors duration-200"
            >
              {{ formation.label }}
            </button>
          </div>
        </div>
      </div>

      <img
        :src="currentFormation.image"
        alt="Formacion"
        class="w-full rounded-2xl border border-[#C59B27] lg:h-[calc(100vh-10rem)] lg:w-auto lg:mx-auto lg:object-contain"
      />
    </section>
  </div>
</template>
