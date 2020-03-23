<!-- eslint-disable vue/no-v-html -->
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
        :id="fakenew.slug"
        :key="fakenew.slug"
        itemscope
        itemprop="mainEntity"
        itemtype="https://schema.org/Question"
        class="w-full xl:w-3/4 py-6 my-2 px-6"
        :class="fakenew.show_details ? 'bg-gray-100 rounded-lg' : ''"
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
              <img v-if="!fakenew.video && fakenew.image" :src="fakenew.image" :alt="fakenew.titre" class="mt-6 rounded w-full md:w-1/2">
              <iframe
                v-if="fakenew.video"
                :src="`https://www.youtube.com/embed/${fakenew.video}`"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                class="mt-6 rounded w-full md:w-1/2 h-48 sm:h-64 xl:h-128"
                allowfullscreen
              />
              <div class="pt-6 text-gray-700 text-lg fakenews-contenu" v-html="fakenew.contenu" />
              <div class="pt-4 text-sm">
                Source: <a :href="fakenew.source" target="_blank" class="text-gray-700">{{ fakenew.source }}</a>
              </div>
            </div>
          </transition>
          <div class="pt-4 text-lg">
            <button
              v-if="!fakenew.show_details"
              class="text-green underline"
              @click="toggleDetails(fakenew)"
            >
              Plus de détails <span class="underline hidden md:inline-block">{{ fakenew.video ? '(Vidéo)' : (fakenew.image ? '(Image)' : '') }}</span>
            </button>
            <button
              v-if="fakenew.show_details"
              class="text-green underline"
              @click="toggleDetails(fakenew)"
            >
              Cacher les détails
            </button>
            <span class="px-2 md:px-4">|</span>
            <button
              v-if="!fakenew.copiedToClipboard"
              target="_blank"
              :class="fakenew.copiedToClipboard ? '' : 'text-green underline'"
              @click="copySharingLink(fakenew)"
            >
              Copier le lien
            </button>
            <span v-if="fakenew.copiedToClipboard">
              Lien copié <span class="hidden md:inline-block">dans le presse-papier</span>
            </span>
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
  data () {
    return {
      selectedFakeNew: null
    }
  },
  computed: {
    pageTitle () {
      return `COVID-19 Sénégal - Fake News${this.selectedFakeNew ? ` - ${this.selectedFakeNew.titre}` : ''}`
    },
    pageDescription () {
      return this.selectedFakeNew
        ? this.selectedFakeNew.sous_titre
        : 'Toutes les fausses informations qui circulent à propos du corona virus au Sénégal.'
    },
    pageUrl () {
      return this.selectedFakeNew
        ? this.getSharingLink(this.selectedFakeNew)
        : 'https://covidsn.com/fake-news'
    }
  },
  mounted () {
    window.document.querySelector('body').scrollTo(0, 0)
    console.log(this.$route.params.slug)
    if (this.$route.params.slug) {
      const fakenew = this.fakenews.find(fn => fn.slug === this.$route.params.slug)
      if (typeof fakenew !== 'undefined') {
        this.selectedFakeNew = fakenew
        this.toggleDetails(fakenew)
        this.$nextTick(() => {
          window.document.querySelector('body').scrollTo({
            behavior: 'smooth',
            top: document.querySelector(`#${this.$route.params.slug}`).getBoundingClientRect().top - 110
          })
        })
      }
    }
  },
  methods: {
    toggleDetails (fakenew) {
      fakenew.show_details = !fakenew.show_details
    },
    getSharingLink (fakenew) {
      return `https://covidsn.com/fake-news/${fakenew.slug}`
    },
    copySharingLink (fakenew) {
      this.$copyText(this.getSharingLink(fakenew))
      fakenew.copiedToClipboard = true
    }
  },
  head () {
    return {
      title: this.pageTitle,
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: this.pageTitle
        },
        {
          hid: 'description',
          name: 'description',
          content: this.pageDescription
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.pageTitle
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.pageDescription
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.pageUrl
        }
      ]
    }
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
