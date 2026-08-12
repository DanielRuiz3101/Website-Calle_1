<script setup>
import Ex_ProfileCards from '@/components/Ex_ProfileCards.vue'
import ProfileCards from '@/components/ProfileCards.vue'

const photos = import.meta.glob('@/assets/img/Members/*/*', {
  eager: true,
  query: '?url',
  import: 'default',
})

const galleryFor = (folder) =>
  Object.keys(photos)
    .filter(
      (key) =>
        key.includes(`/Members/${folder}/`) &&
        !key.includes('Photo_Profile') &&
        !key.endsWith('.mp4'),
    )
    .map((key) => photos[key])

const videos = import.meta.glob('@/assets/img/Members/*/*.mp4', {
  eager: true,
  query: '?url',
  import: 'default',
})

const videosFor = (folder) =>
  Object.keys(videos)
    .filter((key) => key.includes(`/Members/${folder}/`))
    .map((key) => videos[key])

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
    gallery: galleryFor('Daniel'),
    videos: videosFor('Daniel'),
    description: 'Sueter de oso polar',
    epic_moments: [
      'Pegarle un pepazo en la sien a una señora',
      'Perseguido y mordidos por perros',
      'Se caso Maria Daniela',
    ],
    skills: [
      { name: 'Punteria contra señoras', point: '100/100', lineal: '100' },
      { name: 'Resistencia contra mordeduras de perros', point: '30/100', lineal: '30' },
      { name: 'Skill Futbolistico', point: '150%', lineal: '100' },
    ],
  },
  {
    id: 2,
    apodo: 'Pelon',
    name: 'Pedro González',
    ago: 21,
    photo: photos['/src/assets/img/Members/Pedro/Photo_Profile_Pedro.png'],
    gallery: galleryFor('Pedro'),
    videos: videosFor('Pedro'),
    description: 'Bruja Nocturna y sus esbirros',
    epic_moments: [
      'Se quedo dormido al lado con la prima de Samuel',
      'Se caso Maria Esther',
      'Shorcito le dio un palazo ',
    ],
    skills: [
      { name: 'Vidente', point: '40/100', lineal: '40' },
      { name: 'Espiritismo', point: '200%', lineal: '100' },
      { name: 'Crecimiento de pelos', point: '-50/100', lineal: '2' },
    ],
  },
  {
    id: 3,
    apodo: 'Indio',
    name: 'Jose González',
    ago: 19,
    photo: photos['/src/assets/img/Members/Jose G/Photo_Profile_Jose.png'],
    gallery: galleryFor('Jose G'),
    videos: videosFor('Jose G'),
    description: 'Neptuniano "El Hombre de la Verdad" (Orlandito)',
    epic_moments: ['Chocar contra un porton en pedregal', 'Se empato con Albani', 'Mili Pili'],
    skills: [
      { name: 'Columna de hierro', point: '70/100', lineal: '70' },
      { name: 'Amante de la piedra', point: '90/100', lineal: '90' },
      { name: 'Limpiar queso con gusanos', point: '10/100', lineal: '10' },
    ],
  },
  {
    id: 4,
    apodo: 'Convicto',
    name: 'Julio Martinez',
    ago: 22,
    photo: photos['/src/assets/img/Members/Julio/Photo_Profile_Julio.jpeg'],
    gallery: galleryFor('Julio'),
    videos: videosFor('Julio'),
    description: 'Simplemente Julio',
    epic_moments: ['Shorcito le metió una demanda', 'Historial con Crisly', 'Desmayado por Lionel'],
    skills: [
      { name: 'Fumar crispy', point: '30/100', lineal: '30' },
      { name: 'Punteria', point: '100/100', lineal: '100' },
      { name: 'Besar hombres negros', point: '30/100', lineal: '30' },
    ],
  },
  {
    id: 5,
    apodo: 'Traki',
    name: 'Paolo Giardina',
    ago: 21,
    photo: photos['/src/assets/img/Members/Paolo/Photo_Profile_Paolo.png'],
    gallery: galleryFor('Paolo'),
    videos: videosFor('Paolo'),
    description: 'A veces Sardina, otra veces Pierna Parentesis',
    epic_moments: [
      'Historial con Maria Paoli',
      'La Promesa',
      'Raspon de nalga en la bicicleta',
      'Coñazo con Nelson y Calvito',
    ],
    skills: [
      { name: 'Hablar italiano', point: '3/100', lineal: '3' },
      { name: 'Aburrimiento excesivo', point: '1000%', lineal: '100' },
      { name: 'Celibato', point: '300%', lineal: '100' },
    ],
  },
  {
    id: 6,
    apodo: 'El Capi',
    name: 'Miguel Leal',
    ago: 19,
    photo: photos['/src/assets/img/Members/Miguel/Photo_Profile_Miguel.jpeg'],
    gallery: galleryFor('Miguel'),
    videos: videosFor('Miguel'),
    description: 'Power Ranger Negro y Chapoteador',
    epic_moments: [
      'Hactrick con gordas',
      'Le reventaron la nariz en la cancha',
      'Rodeao por una manada de perros',
    ],
    skills: [
      { name: 'Aductor ', point: '-300/100', lineal: '1' },
      { name: 'Ataca gatitas/primas', point: '70/100', lineal: '70' },
      { name: 'Insultar a Barretonto', point: '∞', lineal: '100' },
    ],
  },
  {
    id: 7,
    apodo: 'Firu',
    name: 'Diego Labrador',
    ago: 19,
    photo: photos['/src/assets/img/Members/Diego L/Photo_Profile_Labrador.jpeg'],
    gallery: galleryFor('Diego L'),
    videos: videosFor('Diego L'),
    description: 'Maestro de la anatomia',
    epic_moments: [
      'Historial con Alejandra y Leonor',
      'Quedarse dormido con una caballota',
      'Participante en el choque multiple extremo de bicicleta',
    ],
    skills: [
      { name: 'Johnny Sins', point: '80/100', lineal: '80' },
      { name: 'Plata infinita', point: '300%', lineal: '100' },
      { name: 'Pareja duradera', point: '-200/100', lineal: '2' },
    ],
  },
  {
    id: 8,
    apodo: 'Abuela',
    name: 'Nelson Peñaloza',
    ago: 21,
    photo: photos['/src/assets/img/Members/Nelson/Photo_Profile_Nelson.png'],
    gallery: galleryFor('Nelson'),
    videos: videosFor('Nelson'),
    description: 'Roba niños o saco de hueso',
    epic_moments: ['Vomitado a que el gordo', 'Bailalo Rocky', 'Shores Inamovibles'],
    skills: [
      { name: 'Tumor del dedo', point: '80/100', lineal: '80' },
      { name: 'Nalgas', point: '10/100', lineal: '10' },
      { name: 'Tiempo de recarga', point: '30/100', lineal: '30' },
    ],
  },
  {
    id: 9,
    apodo: 'El Toro',
    name: 'Diego Briceño',
    ago: 19,
    photo: photos['/src/assets/img/Members/Diego B/Photo_Profile_Briceño.png'],
    gallery: galleryFor('Diego B'),
    videos: videosFor('Diego B'),
    description: 'Toro Pro Max Follador 3000',
    epic_moments: ['Se reventó el ojo con un alambre', 'Correr con un vacio de cerveza'],
    skills: [
      { name: 'Defensa', point: '100/100', lineal: '100' },
      { name: 'Fuerza', point: '80/100', lineal: '80' },
      { name: 'Rapidez al parpadear', point: '80/100', lineal: '80' },
      { name: 'Domesticado', point: '300%', lineal: '100' },
    ],
  },
  {
    id: 10,
    apodo: 'Gordi Buena',
    name: 'Lionel Leon',
    ago: 20,
    photo: photos['/src/assets/img/Members/Lionel/Photo_Profile_Lionel.jpeg'],
    gallery: galleryFor('Lionel'),
    videos: videosFor('Lionel'),
    description: 'Experto en el 3 dedo/Gloria Deportiva',
    epic_moments: [
      'Historial con Maria Belen y Adriana',
      'Desastre en Yara',
      'Participante en el choque multiple extremo de bicicleta',
    ],
    skills: [
      { name: 'Control con tres dedos', point: '-1000/100', lineal: '1' },
      { name: 'Pelarse las nalgas', point: '300%', lineal: '100' },
      { name: 'Cepillado', point: '3000%', lineal: '100' },
    ],
  },
  {
    id: 11,
    apodo: 'Barretonto',
    name: 'Jose Angel Barreto',
    ago: 20,
    photo: photos['/src/assets/img/Members/Jose A/Photo_Profile_JoseA.jpeg'],
    gallery: galleryFor('Jose A'),
    videos: videosFor('Jose A'),
    description: 'Sus palabras e ideas cambian el mundo / Evaluador de la crianza',
    epic_moments: ['Borracho del Gol', 'Robo de Torta', 'Tocame aqui'],
    skills: [
      { name: 'Habilidad en futbol', point: '20/100', lineal: '20' },
      { name: 'IQ', point: '-200/100', lineal: '1' },
      { name: 'Diferenciar entre el Latin/Griego', point: '30/100', lineal: '30' },
    ],
  },
  {
    id: 12,
    apodo: 'Papaleta',
    name: 'Santiago Peñaloza',
    ago: 16,
    photo: photos['/src/assets/img/Members/Santiago/Photo_Profile_Santiago.jpeg'],
    gallery: galleryFor('Santiago'),
    videos: videosFor('Santiago'),
    description: 'Hijo del Baby, amigo de ChocoCrispy, la vecinita, Marianita y Marilu',
    epic_moments: ['No ver a marianita', 'Decir "Siente mi pene/Comete este chorizo/Y esas tetas"'],
    skills: [
      { name: 'Pecho Frio', point: '80/100', lineal: '80' },
      { name: 'Violento', point: '300%', lineal: '100' },
      { name: 'Jalabola', point: '1000%', lineal: '100' },
      { name: 'Estar en un cumpleaño', point: '10000%', lineal: '100' },
    ],
  },
  {
    id: 13,
    apodo: 'Jesus',
    name: 'Jesus Perez',
    ago: 19,
    photo: photos['/src/assets/img/Members/Jesus/Photo_Profile_Jesus.png'],
    gallery: galleryFor('Jesus'),
    videos: videosFor('Jesus'),
    description: 'Creatina',
    epic_moments: [
      'Historial con Yohanna',
      'Boxeo con Fernando',
      'Participante en el choque multiple extremo de bicicleta',
    ],
    skills: [
      { name: 'Mujeriego', point: '10000%', lineal: '100' },
      { name: 'Gripe', point: '500%', lineal: '100' },
      { name: 'Aparicion en eventos random', point: '80/100', lineal: '80' },
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
  <div>
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
  </div>
</template>
