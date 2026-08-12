<script setup>
import { computed } from 'vue'
import { Circle } from '@lucide/vue'

const matches = [
  { id: 1, rival: 'Equipo Alfa', gf: 3, ga: 1 },
  { id: 2, rival: 'Equipo Beta', gf: 0, ga: 2 },
  { id: 3, rival: 'Equipo Gamma', gf: 2, ga: 2 },
]

const resultOf = (match) => {
  if (match.gf > match.ga)
    return { label: 'Victoria', color: 'bg-green-500', dot: 'text-green-500' }
  if (match.gf < match.ga) return { label: 'Derrota', color: 'bg-red-700', dot: 'text-red-700' }
  return { label: 'Empate', color: 'bg-gray-500', dot: 'text-gray-500' }
}

const stats = computed(() => ({
  wins: matches.filter((m) => m.gf > m.ga).length,
  losses: matches.filter((m) => m.gf < m.ga).length,
  draws: matches.filter((m) => m.gf === m.ga).length,
  goals: matches.reduce((sum, m) => sum + m.gf, 0),
}))
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#25221e] lg:flex-row">
    <!--Section Record-->
    <section class="flex flex-col flex-1 gap-6 max-w-2xl mx-auto text-white sm:px-6 py-8 sm:py-10">
      <!--Title-->
      <div
        class="inline-flex items-center gap-2 text-[#C59B27] text-[14px] font-bold brightness-120"
      >
        <span class="w-6 h-px bg-[#C59B27]"></span>HISTORIAL
      </div>

      <!--Summary-->
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:mb-8">
        <!--Wins-->
        <div
          class="flex flex-col items-center justify-center rounded-2xl bg-black border border-gray-600 p-4 sm:p-6"
        >
          <span class="text-4xl text-green-500 font-black sm:text-5xl brightness-130">{{
            stats.wins
          }}</span>
          <span class="text-xs text-gray-500 font-bold tracking-widest brightness-130"
            >VICTORIAS</span
          >
        </div>

        <!--Lose-->
        <div
          class="flex flex-col items-center justify-center rounded-2xl bg-black border border-gray-600 p-4 sm:p-6 text-center"
        >
          <span class="text-4xl text-red-700 font-black sm:text-5xl brightness-130">{{
            stats.losses
          }}</span>
          <span class="text-xs text-gray-500 font-bold tracking-widest brightness-130"
            >DERROTAS</span
          >
        </div>

        <!--Draw-->
        <div
          class="flex flex-col items-center justify-center rounded-2xl bg-black border border-gray-600 p-4 sm:p-6 text-center"
        >
          <span class="text-4xl font-black sm:text-5xl brightness-130">{{ stats.draws }}</span>
          <span class="text-xs text-gray-500 font-bold tracking-widest brightness-130"
            >EMPATES</span
          >
        </div>

        <!--Goles-->
        <div
          class="flex flex-col items-center justify-center rounded-2xl bg-black border border-gray-600 p-4 sm:p-6 text-center"
        >
          <span class="text-4xl text-[#C59B27] font-black sm:text-5xl brightness-130">{{
            stats.goals
          }}</span>
          <span class="text-xs text-gray-500 font-bold tracking-widest brightness-130">GOLES</span>
        </div>
      </div>

      <!--Matches-->
      <div class="space-y-2 w-100 sm:w-full">
        <div
          v-for="match in matches"
          :key="match.id"
          class="flex items-center justify-between rounded-xl px-4 py-3.5 bg-black border border-gray-600"
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
      class="w-3/4 mx-auto h-1 rounded-full bg-[#C59B27] lg:w-1 lg:h-auto lg:self-stretch lg:my-10 lg:mx-0"
    ></div>

    <!--Section Formation-->
    <section class="flex flex-col flex-1 gap-6 max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      <!--Title-->
      <div
        class="inline-flex items-center gap-2 text-[#C59B27] text-[14px] font-bold brightness-120"
      >
        <span class="w-6 h-px bg-[#C59B27]"></span>FORMACION
      </div>

      <img
        src="@/assets/img/Formacion.png"
        alt="Formacion"
        class="w-full rounded-2xl border border-[#C59B27] lg:h-[calc(100vh-10rem)] lg:w-auto lg:mx-auto lg:object-contain"
      />
    </section>
  </div>
</template>
