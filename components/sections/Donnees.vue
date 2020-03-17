<template>
  <div class="section-wrapper p-4">
    <div class="my-6 px-4">
      <h1 class="text-left font-bold md:font-light">
        Données statiques du COVID-19 sur le territoire
      </h1>
      <p class="mt-4 text-gray-600 text-lg">
        Ces données ont été mises à jour pour à la date suivante : <b class="text-black">{{ donnees.modified_on }}</b>
      </p>
    </div>
    <div class="flex flex-wrap p-6 mt-10">
      <DataBlocks :donnees="donnees" :show-text="true" :show-updated="false" />
    </div>
  </div>
</template>

<script>
import DataBlocks from '~/components/partials/DataBlocks.vue'

export default {
  components: {
    DataBlocks
  },
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
