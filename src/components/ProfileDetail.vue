<script setup>
import { ref } from 'vue'
import { X } from '@lucide/vue'
import { Trophy } from '@lucide/vue'

defineProps({
  apodo: String,
  name: String,
  photo: String,
  description: String,
  epic_moments: Array,
  skills: Array,
  gallery: Array,
  videos: Array,
})

const emit = defineEmits(['close'])

const activeTab = ref('perfil')
</script>

<template>
  <div
    class="fixed inset-0 z-40 backdrop-blur-xl bg-black/40 flex items-center justify-center p-4 sm:p-4"
  >
    <div class="relative w-full max-w-lg overflow-hidden rounded-2xl border border-gray-500">
      <!--Photo-->
      <div>
        <!--Button Exit-->
        <button
          @click="emit('close')"
          class="absolute top-3 right-3 z-10 flex items-center justify-center w-6 h-6 rounded-full bg-black/60 text-white hover:bg-black transition-all duration-120"
        >
          <X class="w-4 h-4" />
        </button>

        <div class="relative h-64">
          <img v-if="photo" :src="photo" alt="Foto de perfil" class="w-full h-full object-cover" />
        </div>
        <div class="absolute top-54 w-full h-10 bg-linear-to-t from-black to-transparent"></div>
      </div>

      <!--Button-->
      <div class="flex bg-black text-sm font-bold brightness-130">
        <!--Perfil-->
        <button
          @click="activeTab = 'perfil'"
          :class="[
            activeTab === 'perfil'
              ? 'text-[#C59B27] border-[#C59B27]'
              : 'text-gray-500 border-gray-500 hover:text-white',
          ]"
          class="flex-1 py-3 border-b-2 uppercase transition-colors duration-200"
        >
          Perfil
        </button>

        <!--Galeria-->
        <button
          @click="activeTab = 'galeria'"
          :class="[
            activeTab === 'galeria'
              ? 'text-[#C59B27] border-[#C59B27]'
              : 'text-gray-500 border-gray-500 hover:text-white',
          ]"
          class="flex-1 py-3 border-b-2 uppercase transition-colors duration-200"
        >
          Galeria
        </button>
      </div>

      <!--Info-->
      <div v-if="activeTab === 'perfil'" class="p-4 sm:p-6 space-y-4 bg-black">
        <!--Description-->
        <div class="flex gap-3">
          <div class="w-0.5 h-6.5 rounded-full bg-[#C59B27]"></div>
          <span class="text-white font-semibold">"{{ description }} "</span>
        </div>

        <!--Skills-->
        <div class="space-y-3">
          <span class="text-xs text-gray-500 font-bold tracking-wider brightness-130"
            >HABILIDADES</span
          >
          <div v-for="skill in skills" :key="skill.name" class="mt-2">
            <div class="flex items-center justify-between font-medium">
              <span class="mb-1 text-sm text-white">{{ skill.name }}</span>
              <span class="mb-1 text-xs text-gray-500">{{ skill.point }}</span>
            </div>

            <div
              :style="{ width: skill.lineal + '%' }"
              class="h-1.5 overflow-hidden rounded-full bg-[#C59B27] brightness-130"
            ></div>
          </div>
        </div>

        <!--Historic Moments-->
        <div class="border border-[#C59B27] bg-[#25221e] rounded-lg p-2">
          <div class="flex items-center gap-2 text-[#C59B27] font-semibold brightness-130">
            <Trophy class="w-5 h-5" />
            <span class="">MOMENTOS HISTORICOS</span>
          </div>

          <ul class="mt-2 space-y-2 brightness-130">
            <li
              v-for="moment in epic_moments"
              :key="moment.id"
              class="flex items-center gap-2 px-6 text-white"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-[#C59B27]"></span>
              {{ moment }}
            </li>
          </ul>
        </div>
      </div>

      <!--Gallery-->
      <div v-else-if="activeTab === 'galeria'" class="p-4 sm:p-6 bg-black space-y-4">
        <!--Photos-->
        <div v-if="gallery && gallery.length" class="grid grid-cols-2 gap-2">
          <div
            v-for="(image, index) in gallery"
            :key="index"
            class="relative overflow-hidden rounded-lg border border-gray-600"
          >
            <img :src="image" alt="Foto" loading="lazy" class="w-full h-32 object-cover" />
          </div>
        </div>

        <!--Videos-->
        <div v-if="videos && videos.length" class="grid grid-cols-1 gap-2">
          <video
            v-for="(video, index) in videos"
            :key="index"
            :src="video"
            controls
            preload="none"
            class="w-full rounded-lg border border-gray-600"
          ></video>
        </div>

        <p
          v-if="(!gallery || !gallery.length) && (!videos || !videos.length)"
          class="text-sm text-gray-500 text-center py-8"
        >
          No hay fotos en la galería
        </p>
      </div>
    </div>
  </div>
</template>
