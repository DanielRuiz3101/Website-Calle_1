<script setup>
import { Star, Users, Trophy, Mountain } from '@lucide/vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (path) => route.path === path

const links = [
  { name: 'Inicio', path: '/', icon: Star },
  { name: 'Integrantes', path: '/integrantes', icon: Users },
  { name: 'Aventuras', path: '/aventuras', icon: Mountain },
  { name: 'Futbol', path: '/futbol', icon: Trophy },
]
</script>

<template>
  <nav
    class="flex items-center justify-center h-18 px-4 py-3 bg-black border-b border-[#C59B27] md:justify-between"
  >
    <!--Logo-->
    <router-link to="/">
      <img src="@/assets/img/Logo.png" alt="Logo" class="w-45" />
    </router-link>

    <!--NavBar Desktop -->
    <div class="hidden md:flex items-center gap-1">
      <router-link
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        :class="[
          isActive(link.path)
            ? 'text-black bg-[#C59B27]'
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
    class="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around h-16.5 bg-black border-t border-[#C59B27]"
  >
    <router-link
      v-for="link in links"
      :key="link.path"
      :to="link.path"
      :class="isActive(link.path) ? 'text-[#C59B27]' : 'text-gray-400'"
      class="flex flex-col items-center justify-center gap-1 py-2.5 transition-all duration-120"
    >
      <component :is="link.icon" class="w-5 h-5" />
      <span class="text-[10.5px] font-bold uppercase">{{ link.name }}</span>
    </router-link>
  </nav>
</template>
