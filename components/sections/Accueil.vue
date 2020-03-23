<template>
  <div class="section-wrapper flex relative p-4 my-12 lg:py-0">
    <div class="m-auto px-10">
      <h1 class="shadow">
        {{ accueil.titre }}
      </h1>
      <h2>
        {{ accueil.sous_titre }}
      </h2>
      <div v-if="accueil.video" class="mt-8 my-12">
        <iframe
          :src="`https://www.youtube.com/embed/${accueil.video}`"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          class="mx-auto mt-6 rounded w-full md:w-1/2 h-48 sm:h-64 xl:h-128"
          allowfullscreen
        />
      </div>
      <DataBlocks :donnees="donnees" :show-text="false" :show-updated="true" class="mt-8" />
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
    accueil: {
      required: true,
      type: Object
    },
    donnees: {
      required: true,
      type: Object
    }
  },
  mounted () {
    window.document.querySelector('body').scrollTo(0, 0)
  },
  head () {
    return {
      title: this.accueil.titre,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.accueil.titre
        },
        {
          hid: 'description',
          name: 'description',
          content: this.accueil.sous_titre
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.accueil.titre
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.accueil.sous_titre
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://covidsn.com'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .section-wrapper {
    height: calc(100vh - 192px);
  }
  h2 {
    margin-top: 34px;
  }
  h3 {
    margin-top: 14px;
  }
</style>
