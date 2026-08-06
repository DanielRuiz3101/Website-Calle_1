<script setup>
import { Star, Users, Trophy } from '@lucide/vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path) => route.path === path

const links = [
  { name: 'Inicio', path: '/', icon: Star },
  { name: 'Integrantes', path: '/Integrantes', icon: Users },
  { name: 'Partidos', path: '/Partidos', icon: Trophy },
]
</script>

<template>
  <nav class="flex items-center justify-between px-4 py-3 bg-black/90 border-b-2 border-white">
    <!--Logo-->
    <router-link to="/">
      <img src="@/assets/img/Logo.png" width="180" alt="Logo" />
    </router-link>

    <!--NavBar Desktop -->
    <div class="hidden md:flex items-center gap-1">
      <router-link
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        :class="[
          isActive(link.path)
            ? 'text-white bg-[#D4AF37]'
            : 'text-gray-400 hover:text-white hover:bg-gray-100/10',
        ]"
        class="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
      >
        <component :is="link.icon" class="h-4 w-4" />
        <span>{{ link.name }}</span>
      </router-link>
    </div>
  </nav>

  <!--NavBar Movil -->
  <nav
    class="md:hidden fixed bottom-0 left-0 right-0 flex items-center justify-around bg-black/90 border-t-2 border-white"
  >
    <router-link
      v-for="link in links"
      :key="link.path"
      :to="link.path"
      :class="isActive(link.path) ? 'text-[#D4AF37]' : 'text-gray-400'"
      class="flex flex-col items-center justify-center gap-1 py-2.5"
    >
      <component :is="link.icon" class="w-5 h-5" />
      <span class="text-[9px] font-semibold uppercase">{{ link.name }}</span>
    </router-link>
  </nav>
</template>
