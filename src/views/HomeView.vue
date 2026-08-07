<script setup></script>

<template>
  <div class="relative w-full h-204.5 md:h-231.75">
    <div class="absolute inset-0 z-0">
      <img src="@/assets/img/Family.png" class="w-full h-full object-cover" alt="Foto Grupo" />
      <div class="absolute inset-0 bg-linear-to-t from-black/75 to-black/50"></div>
    </div>

    <div
      class="absolute inset-0 z-10 flex flex-col items-center justify-center text-center sm:max-w-4xl mx-auto -translate-y-12 sm:translate-y-0"
    >
      <!--BoxDate-->
      <div
        class="inline-flex px-3 py-1.5 rounded-full bg-[#D4AF37]/30 border border-[#D4AF37] brightness-110 text-[#D4AF37] text-xs font-bold sm:text-sm mb-6"
      >
        Desde 2017 · Actualidad
      </div>

      <!--Title-->
      <h1 class="uppercase text-white text-[50px] font-extrabold sm:text-7xl md:text-[144px] mb-4">
        CALLE 1
        <span class="text-[#D4AF37]">FC</span>
      </h1>

      <!--Button-->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          class="w-100 bg-[#D4AF37] rounded-full font-bold sm:w-auto px-6 py-3.5 hover:scale-105 transition-all duration-250"
        >
          MIEMBROS
        </button>

        <button
          class="w-100 rounded-full border border-gray-100/20 font-bold text-white sm:w-auto px-6 py-3.5 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-200"
        >
          PARTIDOS
        </button>
      </div>
    </div>
  </div>
</template>
