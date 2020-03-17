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
    <div class="w-full p-6 mt-10 md:hidden">
      <DataBlocks :donnees="donnees" :show-text="true" :show-updated="true"  />
    </div>
    <div v-if="!isMobile" class="w-full p-6 hidden md:block">
      <PowerBidashboard />
    </div>
  </div>
</template>

<script>
import DataBlocks from '~/components/partials/DataBlocks.vue'
import PowerBidashboard from '~/components/partials/PowerBidashboard.vue'

export default {
  components: {
    DataBlocks,
    PowerBidashboard
  },
  props: {
    donnees: {
      required: true,
      type: Object
    }
  },
  computed: {
    isMobile () {
      if (process.client) {
        return window.innerWidth <= 768
      } else {
        return true
      }
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
