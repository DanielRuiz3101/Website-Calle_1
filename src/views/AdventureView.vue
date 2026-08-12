<script setup>
import { ref } from 'vue'

const photos = import.meta.glob('@/assets/img/Adventures/*/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

const selectedPhoto = ref('')

const openPhoto = (photo) => {
  selectedPhoto.value = photo
}

const closePhoto = () => {
  selectedPhoto.value = ''
}

const adventures = [
  {
    name: 'La Lucia',
    photos: Object.keys(photos)
      .filter((key) => key.includes('/La Lucia/'))
      .map((key) => photos[key]),
  },
  {
    name: 'La Olla',
    photos: Object.keys(photos)
      .filter((key) => key.includes('/La Olla/'))
      .map((key) => photos[key]),
  },
  {
    name: 'La Cuibas',
    photos: Object.keys(photos)
      .filter((key) => key.includes('/La Cuibas/'))
      .map((key) => photos[key]),
  },
  {
    name: 'Cerro el Elefante',
    photos: Object.keys(photos)
      .filter((key) => key.includes('/Cerro el elefante/'))
      .map((key) => photos[key]),
  },
  {
    name: 'La Playa',
    photos: Object.keys(photos)
      .filter((key) => key.includes('/La Playa/'))
      .map((key) => photos[key]),
  },
  {
    name: 'Pa qué el gordo',
    photos: Object.keys(photos)
      .filter((key) => key.includes('/Pa qué el gordo/'))
      .map((key) => photos[key]),
  },
  {
    name: 'Extras',
    photos: Object.keys(photos)
      .filter((key) => key.includes('/Extras/'))
      .map((key) => photos[key]),
  },
]
</script>

<template>
  <div class="bg-[#25221e]">
    <!--Section Adventure-->
    <section class="px-4 sm:px-6 py-10 sm:py-16 max-w-6xl mx-auto">
      <!--Title Main-->
      <div class="max-w-2xl">
        <div
          class="inline-flex items-center gap-2 text-[#C59B27] text-[14px] font-bold brightness-120"
        >
          <span class="w-6 h-px bg-[#C59B27]"></span>AVENTURAS
        </div>
      </div>

      <!--Div Adventure-Individual-->
      <div v-for="adventure in adventures" :key="adventure.name" class="mt-8">
        <!--Title Second-->
        <div class="text-white font-bold">{{ adventure.name }}</div>

        <!--Grid Photo-->
        <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          <div
            v-for="(photo, index) in adventure.photos"
            :key="index"
            class="relative overflow-hidden rounded-2xl border border-gray-500 shadow-2xl cursor-pointer hover:border-[#C59B27]"
            @click="openPhoto(photo)"
          >
            <div class="relative h-56 sm:h-64">
              <img :src="photo" :alt="adventure.name" class="w-full h-full object-cover" />
              <div
                class="absolute top-54 w-full h-10 bg-linear-to-t from-black to-transparent"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!--Lightbox-->
  <div
    v-if="selectedPhoto"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
    @click.self="closePhoto"
  >
    <button
      @click="closePhoto"
      class="absolute top-4 right-4 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-black/60 text-white text-lg hover:text-[#C59B27]"
    >
      ✕
    </button>
    <img
      :src="selectedPhoto"
      alt="Foto ampliada"
      class="max-h-full max-w-full object-contain rounded-lg"
    />
  </div>
</template>
