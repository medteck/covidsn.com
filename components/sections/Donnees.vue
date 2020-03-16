<template>
  <div class="section-wrapper p-4">
    <div class="my-6 px-4">
      <h1 class="text-left font-bold md:font-light">
        Données statiques du COVID-19 sur le territoire
      </h1>
      <p class="mt-4 text-gray-600 text-lg">
        Ces données sont constamment mises à jour.
      </p>
    </div>
    <div class="flex flex-wrap p-6 mt-10">
      <div class="w-full lg:w-1/3 sm:p-2 md:p-12 lg:p-4">
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

      <div class="w-full lg:w-1/3 sm:p-2 md:p-12 lg:p-4">
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

      <div class="w-full lg:w-1/3 sm:p-2 md:p-12 lg:p-4">
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
  },
  head () {
    return {
      title: 'COVID-19 Sénégal - Données statiques',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Données statiques du COVID-19 sur le territoire national sénégalais'
        }
      ]
    }
  }
}
</script>
