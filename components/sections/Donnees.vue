<template>
  <div class="section-wrapper p-4">
    <div class="my-6">
      <h1 class="text-left">
        Données statiques du COVID-19 sur le territoire
      </h1>
    </div>
    <div class="flex w-full p-6 mt-10">
      <div class="w-1/3 sm:w-1/2 xs:w-full p-4">
        <div class="w-full rounded overflow-hidden shadow-xl">
          <div class="text-6xl text-center">
            {{ donnees.infectes }}
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              Infectés
            </div>
            <p class="text-gray-600 text-base">
              {{ donnees.texte_infectes }}
            </p>
          </div>
        </div>
      </div>

      <div class="w-1/3 sm:w-1/2 xs:w-full p-4">
        <div class="w-full rounded overflow-hidden shadow-xl">
          <div class="text-6xl text-center">
            {{ donnees.gueris }}
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              Guéris
            </div>
            <p class="text-gray-600 text-base">
              {{ donnees.texte_gueris }}
            </p>
          </div>
        </div>
      </div>

      <div class="w-1/3 sm:w-1/2 xs:w-full p-4">
        <div class="w-full rounded overflow-hidden shadow-xl">
          <div class="text-6xl text-center">
            {{ donnees.deces }}
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 text-center">
              Décès
            </div>
            <p class="text-gray-600 text-base">
              {{ donnees.texte_deces }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    donnees: {
      required: true,
      type: Object
    }
  }
}
</script>
