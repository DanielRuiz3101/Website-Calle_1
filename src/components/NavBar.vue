<script setup>
import { Star, Users, Trophy } from '@lucide/vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path) => route.path === path

const links = [
  { name: 'Inicio', path: '/', icon: Star },
  { name: 'Integrantes', path: '/integrantes', icon: Users },
  { name: 'Partidos', path: '/partidos', icon: Trophy },
]
</script>

<template>
  <nav
    class="flex items-center justify-between h-16.5 px-4 py-3 bg-black/90 border-b border-[#D4AF37]"
  >
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
            ? 'text-black bg-[#D4AF37] brightness-110'
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
    class="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around h-16.5 bg-black/90 border-t border-[#D4AF37]"
  >
    <router-link
      v-for="link in links"
      :key="link.path"
      :to="link.path"
      :class="isActive(link.path) ? 'text-[#D4AF37] brightness-115' : 'text-gray-400'"
      class="flex flex-col items-center justify-center gap-1 py-2.5 transition-all duration-120"
    >
      <component :is="link.icon" class="w-5 h-5" />
      <span class="text-[10.5px] font-bold uppercase">{{ link.name }}</span>
    </router-link>
  </nav>
</template>
