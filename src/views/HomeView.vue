<script setup></script>

<template>
  <div class="relative w-full h-204.5 md:h-230.5">
    <div class="absolute inset-0 z-0">
      <img src="@/assets/img/Family.png" class="w-full h-full object-cover" alt="Foto Grupo" />
      <div class="absolute inset-0 bg-linear-to-t from-black/75 to-black/50"></div>
    </div>

    <div
      class="absolute inset-0 z-10 flex flex-col items-center justify-center text-center sm:max-w-4xl mx-auto -translate-y-12 sm:translate-y-0"
    >
      <!--BoxDate-->
      <div
        class="inline-flex px-3 py-1.5 rounded-full bg-[#C59B27]/30 border border-[#C59B27] text-[#C59B27] text-xs font-bold sm:text-sm mb-6"
      >
        Desde 2017 · Actualidad
      </div>

      <!--Title-->
      <h1
        class="uppercase text-white text-[50px] font-extrabold tracking-wide sm:text-7xl md:text-[120px] mb-6 font-display leading-none"
      >
        CALLE 1
        <span class="text-[#C59B27]">FC</span>
      </h1>

      <!--Button-->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <router-link
          to="/integrantes"
          class="w-90 bg-[#C59B27] rounded-full font-bold text-center sm:w-auto px-6 py-3.5 hover:scale-105 transition-all duration-250"
        >
          MIEMBROS
        </router-link>

        <router-link
          to="/futbol"
          class="w-90 rounded-full border border-gray-100/20 font-bold text-white text-center sm:w-auto px-6 py-3.5 hover:text-[#C59B27] hover:border-[#C59B27] transition-all duration-200"
        >
          PARTIDOS
        </router-link>
      </div>
    </div>
  </div>
</template>
