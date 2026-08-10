<script setup>
import Ex_ProfileCards from '@/components/Ex_ProfileCards.vue'
import ProfileCards from '@/components/ProfileCards.vue'

const photos = import.meta.glob('@/assets/img/Members/*/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

const ex_photos = import.meta.glob('@/assets/img/Ex_Members/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

const members = [
  {
    id: 1,
    apodo: 'Tio Simon',
    name: 'Daniel Ruiz',
    ago: 24,
    position: 'Retirado',
    photo: photos['/src/assets/img/Members/Daniel/Photo_Profile_Daniel.png'],
    description: 'Nose',
    epic_moments: ['mome 1', 'mome 2', 'mome 3'],
    skills: [
      { name: 'Punteria contra señoras', point: '100/100', lineal: '100' },
      { name: 'Resistencia contra mordeduras de perro', point: '40/100', lineal: '40' },
      { name: 'nose 3', point: '100/100', lineal: '80' },
    ],
  },
  {
    id: 2,
    apodo: 'Pelon',
    name: 'Pedro González',
    ago: 21,
    photo: photos['/src/assets/img/Members/Pedro/Photo_Profile_Pedro.png'],
    description: 'Nose',
    epic_moments: ['mome 1', 'mome 2', 'mome 3'],
    skills: [
      { name: 'Vidente', point: '40/100', lineal: '40' },
      { name: 'Espiritismo', point: '200/100', lineal: '100' },
      { name: 'Pelos', point: '10/100', lineal: '10' },
    ],
  },
  {
    id: 3,
    apodo: 'Indio',
    name: 'Jose González',
    ago: 19,
    photo: photos['/src/assets/img/Members/Jose G/Photo_Profile_Jose.png'],
    description: 'Nose',
    epic_moments: ['Chocar contra un porton en pedregal', 'mome 2', 'mome 3'],
    skills: [
      { name: 'Columna de hierro', point: '70/100', lineal: '70' },
      { name: 'Amante de la piedra', point: '90/100', lineal: '90' },
      { name: 'nose 3', point: '100/100', lineal: '80' },
    ],
  },
  {
    id: 4,
    apodo: 'Convicto',
    name: 'Julio Martinez',
    ago: 22,
    photo: photos['/src/assets/img/Members/Julio/Photo_Profile_Julio.jpeg'],
    description: 'Nose',
    epic_moments: ['mome 1', 'mome 2', 'mome 3'],
    skills: [
      { name: 'Fumar crispy', point: '30/100', lineal: '30' },
      { name: 'Punteria', point: '100/100', lineal: '100' },
      { name: 'Besar hombres', point: '10/100', lineal: '10' },
    ],
  },
  {
    id: 5,
    apodo: 'Traki',
    name: 'Paolo Giardina',
    ago: 21,
    photo: photos['/src/assets/img/Members/Paolo/Photo_Profile_Paolo.png'],
    description: 'Nose',
    epic_moments: ['mome 1', 'mome 2', 'mome 3'],
    skills: [
      { name: 'Punteria contra señoras', point: '100/100', lineal: '100' },
      { name: 'Resistencia contra mordeduras de perro', point: '40/100', lineal: '40' },
      { name: 'nose 3', point: '100/100', lineal: '80' },
    ],
  },
  {
    id: 6,
    apodo: 'El Capi',
    name: 'Miguel Leal',
    ago: 19,
    photo: photos['/src/assets/img/Members/Miguel/Photo_Profile_Miguel.jpeg'],
    description: 'Nose',
    epic_moments: ['mome 1', 'mome 2', 'mome 3'],
    skills: [
      { name: 'Aductor ', point: '-300/100', lineal: '1' },
      { name: 'Ataca gatitas', point: '70/100', lineal: '70' },
      { name: 'nose 3', point: '100/100', lineal: '80' },
    ],
  },
  {
    id: 7,
    apodo: 'Firu',
    name: 'Diego Labrador',
    ago: 19,
    photo: photos['/src/assets/img/Members/Diego L/Photo_Profile_Labrador.jpeg'],
    description: 'Nose',
    epic_moments: ['mome 1', 'Quedarse dormido con una caballota', 'mome 3'],
    skills: [
      { name: 'Johnny Sins', point: '80/100', lineal: '80' },
      { name: 'Plata infinita', point: '300/100', lineal: '100' },
      { name: 'nose 3', point: '100/100', lineal: '80' },
    ],
  },
  {
    id: 8,
    apodo: 'Abuela',
    name: 'Nelson Peñaloza',
    ago: 21,
    photo: photos['/src/assets/img/Members/Nelson/Photo_Profile_Nelson.png'],
    description: 'Nose',
    epic_moments: ['mome 1', 'mome 2', 'mome 3'],
    skills: [
      { name: 'Tumor del dedo pulgar', point: '80/100', lineal: '80' },
      { name: 'Nalgas', point: '30/100', lineal: '30' },
      { name: 'Recarga al patear', point: '30/100', lineal: '30' },
    ],
  },
  {
    id: 9,
    apodo: 'El Toro',
    name: 'Diego Briceño',
    ago: 19,
    photo: photos['/src/assets/img/Members/Diego B/Photo_Profile_Briceño.png'],
    description: 'Nose',
    epic_moments: ['mome 1', 'mome 2', 'mome 3'],
    skills: [
      { name: 'Defensa', point: '100/100', lineal: '100' },
      { name: 'Fuerza', point: '80/100', lineal: '80' },
      { name: 'Rapidez al parpadear', point: '80/100', lineal: '80' },
    ],
  },
  {
    id: 10,
    apodo: 'Gordi Buena',
    name: 'Lionel Leon',
    ago: 20,
    photo: photos['/src/assets/img/Members/Lionel/Photo_Profile_Lionel.jpeg'],
    description: 'Nose',
    epic_moments: ['mome 1', 'mome 2', 'mome 3'],
    skills: [
      { name: 'P', point: '100/100', lineal: '100' },
      { name: 'Velocidad', point: '40/100', lineal: '40' },
      { name: 'nose 3', point: '100/100', lineal: '80' },
    ],
  },
  {
    id: 11,
    apodo: 'Barretonto',
    name: 'Jose Angel Barreto',
    ago: 20,
    photo: photos['/src/assets/img/Members/Jose A/Photo_Profile_JoseA.jpeg'],
    description: 'Sus palabras e ideas cambian el mundo',
    epic_moments: ['El prime', 'mome 2', 'mome 3'],
    skills: [
      { name: 'Habilidad en futbol', point: '20/100', lineal: '20' },
      { name: 'IQ', point: '-200/100', lineal: '0' },
      { name: 'Diferenciar entre el Latin/Griego', point: '30/100', lineal: '30' },
    ],
  },
  {
    id: 12,
    apodo: 'Papaleta',
    name: 'Santiago Peñaloza',
    ago: 16,
    photo: photos['/src/assets/img/Members/Santiago/Photo_Profile_Santiago.jpeg'],
    description: 'Nose',
    epic_moments: ['mome 1', 'mome 2', 'mome 3'],
    skills: [
      { name: 'P', point: '100/100', lineal: '100' },
      { name: 'Re', point: '40/100', lineal: '40' },
      { name: 'nose 3', point: '100/100', lineal: '80' },
    ],
  },
  {
    id: 13,
    apodo: 'Jesus',
    name: 'Jesus Perez',
    ago: 19,
    photo: photos['/src/assets/img/Members/Jesus/Photo_Profile_Jesus.png'],
    description: 'Nose',
    epic_moments: ['mome 1', 'mome 2', 'mome 3'],
    skills: [
      { name: 'P', point: '100/100', lineal: '100' },
      { name: 'Re', point: '40/100', lineal: '40' },
      { name: 'nose 3', point: '100/100', lineal: '80' },
    ],
  },
]

const ex_members = [
  {
    id: 1,
    apodo: 'Roba Cotufa',
    name: 'Juan Ferrer',
    ago: 21,
    reason: 'Se fue por un culo y no volvio',
    photo: ex_photos['/src/assets/img/Ex_Members/Photo_Profile_Juan.jpeg'],
  },
  {
    id: 2,
    apodo: 'Desahuciado ',
    name: 'Alejandro',
    ago: 22,
    reason: 'Zamurear novias y habla paja',
    photo: ex_photos['/src/assets/img/Ex_Members/Photo_Profile_Alejandro.jpeg'],
  },
  {
    id: 3,
    apodo: 'Ricardo',
    name: 'Ricardo Briceño',
    ago: 21,
    reason: 'Se desapareció solito',
    photo: ex_photos['/src/assets/img/Ex_Members/Photo_Profile_Ricardo.jpeg'],
  },
]
</script>

<template>
  <!--Section Members Current-->
  <div class="bg-[#25221e]">
    <section class="px-4 sm:px-6 py-10 sm:py-16 max-w-6xl mx-auto">
      <!--Title-->
      <div class="max-w-2xl">
        <div
          class="inline-flex items-center gap-2 text-[#C59B27] text-[14px] font-bold brightness-120"
        >
          <span class="w-6 h-px bg-[#C59B27]"></span>MIEMBROS
        </div>
      </div>

      <!--Grid Members-->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 sm:mt-12">
        <ProfileCards v-for="member in members" :key="member.id" v-bind="member" />
      </div>
    </section>
  </div>

  <div class="w-full h-12 bg-linear-to-t from-[#5C554E] to-[#25221e]"></div>

  <!--Section Ex-Members-->
  <div class="bg-[#5C554E]">
    <section class="px-4 sm:px-6 py-10 sm:py-16 max-w-6xl mx-auto">
      <!--Title-->
      <div class="max-w-2xl">
        <div
          class="inline-flex items-center gap-2 text-[#C59B27] text-[14px] font-bold brightness-120"
        >
          <span class="w-6 h-px bg-[#C59B27]"></span>EX MIEMBROS
        </div>
      </div>

      <!--Grid Ex-Members-->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 sm:mt-12">
        <Ex_ProfileCards v-for="ex_member in ex_members" :key="ex_member.id" v-bind="ex_member" />
      </div>
    </section>
  </div>
</template>
