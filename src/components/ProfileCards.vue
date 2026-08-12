<script setup>
import { ref } from 'vue'
import { MoveRight } from '@lucide/vue'
import ProfileDetail from './ProfileDetail.vue'

defineProps({
  apodo: String,
  name: String,
  ago: Number,
  position: String,
  photo: String,
  description: String,
  epic_moments: Array,
  skills: Array,
  gallery: Array,
  videos: Array,
})

const showDetail = ref(false)
</script>

<template>
  <!--Profile-->
  <div
    class="relative overflow-hidden rounded-2xl border border-gray-500 shadow-2xl hover:border-[#C59B27]"
  >
    <!--Photo Profile-->
    <div class="relative h-56 sm:h-64 overflow-hidden">
      <img
        v-if="photo"
        :src="photo"
        alt="Foto de perfil"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
      />
      <div class="absolute top-54 w-full h-10 bg-linear-to-t from-black to-transparent"></div>
      <div
        class="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 text-white text-xs font-bold"
      >
        {{ position }}
      </div>
    </div>

    <!--Description-->
    <div class="p-4 bg-[#1B1917] sm:p-5">
      <!--Apodo-->
      <div class="text-3xl text-[#C59B27] font-black font-display">{{ apodo }}</div>

      <!--Name-->
      <div class="text-sm text-white font-semibold sm:text-base">{{ name }}, {{ ago }} años</div>

      <!--Button Profile-->
      <button
        @click="showDetail = true"
        class="flex items-center justify-center w-full py-2 mt-3 gap-2 rounded-xl text-sm font-bold text-gray-500 border hover:border-[#C59B27] hover:text-[#C59B27]"
      >
        Ver perfil completo
        <MoveRight class="mt-0.5 w-4 h-4" />
      </button>
    </div>

    <ProfileDetail
      v-if="showDetail"
      :apodo="apodo"
      :name="name"
      :photo="photo"
      :description="description"
      :epic_moments="epic_moments"
      :skills="skills"
      :gallery="gallery"
      :videos="videos"
      @close="showDetail = false"
    />
  </div>
</template>
