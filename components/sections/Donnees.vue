<template>
  <div class="section-wrapper p-4">
    <client-only placeholder="Chargement des données...">
      <div class="w-full md:p-6">
        <PowerBiDashboard />
      </div>
    </client-only>
  </div>
</template>

<script>
import PowerBiDashboard from '~/components/partials/PowerBiDashboard.vue'

export default {
  components: {
    PowerBiDashboard
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
          hid: 'title',
          name: 'title',
          content: 'COVID-19 Sénégal - Données statiques'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Données statiques du COVID-19 sur le territoire national sénégalais'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'COVID-19 Sénégal - Données statiques'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Données statiques du COVID-19 sur le territoire national sénégalais'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://covidsn.com/donnees'
        }
      ]
    }
  },
  mounted () {
    window.document.querySelector('body').scrollTo(0, 0)
  }
}
</script>
