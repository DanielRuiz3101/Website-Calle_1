<script setup>
defineProps({
  apodo: String,
  name: String,
  ago: Number,
  reason: String,
  photo: String,
})
</script>

<template>
  <!--Profile Daniel-->
  <div class="relative rounded-2xl overflow-hidden border border-gray-500 shadow-2xl">
    <!--Phote Profile-->
    <div class="relative h-56 sm:h-64">
      <img v-if="photo" :src="photo" alt="Foto de perfil" class="w-full h-full object-cover" />
      <div class="absolute top-54 w-full h-10 bg-linear-to-t from-black to-transparent"></div>
    </div>

    <!--Description-->
    <div class="p-4 sm:p-5 bg-black">
      <!--Apodo-->
      <div class="text-3xl font-black text-[#898989] brightness-90">{{ apodo }}</div>

      <!--Name-->
      <div class="font-semibold text-sm text-white sm:text-base">{{ name }}, {{ ago }} años</div>

      <div class="font-semibold text-sm text-white sm:text-base">Razon: {{ reason }}</div>
    </div>
  </div>
</template>
