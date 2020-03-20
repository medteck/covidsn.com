<template>
  <div class="p-4 section-wrapper">
    <div class="my-6 px-4">
      <h1 class="text-left font-bold md:font-light">
        Fake News
      </h1>
      <p class="mt-4 text-gray-600 text-lg">
        Toutes les fausses informations qui circulent à propos du corona virus au Sénégal.<br>
      </p>
    </div>
    <div class="flex flex-wrap mb-12">
      <div
        v-for="fakenew in fakenews"
        :key="fakenew.id"
        itemscope
        itemprop="mainEntity"
        itemtype="https://schema.org/Question"
        class="w-full xl:w-3/4 xl:pt-6 pl-6"
      >
        <hr>
        <br>
        <h2 itemprop="name" class="text-left">
          {{ fakenew.titre }}
        </h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text" class="pt-4 text-gray-600 text-md text-xl">
            {{ fakenew.sous_titre }}
          </div>
          <transition name="fade">
            <div v-if="fakenew.show_details" class="px-4 lg:px-8">
              <img :src="fakenew.image" :alt="fakenew.titre" class="mt-6 rounded w-full md:w-1/2">
              <div v-html="fakenew.contenu" class="pt-6 text-gray-700 text-lg fakenews-contenu" />
              <div class="pt-4 text-sm">
                Source: <a :href="fakenew.source" target="_blank" class="text-gray-700">{{ fakenew.source }}</a>
              </div>
            </div>
          </transition>
          <div class="pt-4 text-lg">
            <button
              v-if="fakenew.contenu && !fakenew.show_details"
              @click="toggleDetails(fakenew)"
              target="_blank"
              class="text-green underline"
            >
              Plus de détails
            </button>
            <button
              v-if="fakenew.contenu && fakenew.show_details"
              @click="toggleDetails(fakenew)"
              target="_blank"
              class="text-green underline"
            >
              Cacher les détails
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fakenews: {
      required: true,
      type: Array
    }
  },
  head () {
    return {
      title: 'COVID-19 Sénégal - Fake News',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'COVID-19 Sénégal - Fake News'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Toutes les fausses informations qui circulent à propos du corona virus au Sénégal.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'COVID-19 Sénégal - Fake News'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Toutes les fausses informations qui circulent à propos du corona virus au Sénégal.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://covidsn.com/fake-news'
        }
      ]
    }
  },
  methods: {
    toggleDetails (fakenew) {
      fakenew.show_details = !fakenew.show_details
    }
  },
  mounted () {
    window.document.querySelector('body').scrollTo(0, 0)
  }
}
</script>

<style lang="less">
  .fakenews-contenu {
    a {
      text-decoration: underline;
    }
    ul {
      list-style-type: disc !important;
      padding-left: 12px;
    }
  }
</style>
