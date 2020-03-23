<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="p-4 section-wrapper">
    <div class="my-6 px-4">
      <h1 class="text-left font-bold md:font-light">
        Foire aux questions
      </h1>
      <p class="mt-4 text-gray-600 text-lg">
        Les questions les plus fréquentes concernant le Corona Virus au Sénégal. <br>
      </p>
    </div>
    <div class="flex flex-wrap mb-12">
      <div
        v-for="info in faq"
        :key="info.id"
        itemscope
        itemprop="mainEntity"
        itemtype="https://schema.org/Question"
        class="w-full lg:w-3/4 xl:pt-6 pl-6"
      >
        <hr>
        <br>
        <h2 itemprop="name" class="text-left">
          {{ info.question }}
        </h2>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <div itemprop="text" class="pt-4 text-gray-600 text-md" v-html="getHTML(info.reponse)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  props: {
    faq: {
      required: true,
      type: Array
    }
  },
  mounted () {
    window.document.querySelector('body').scrollTo(0, 0)
  },
  methods: {
    getHTML (markdown) {
      return marked(markdown)
    }
  },
  head () {
    return {
      title: 'COVID-19 Sénégal - Foire aux questions',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'COVID-19 Sénégal - Foire aux questions'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Les questions les plus fréquentes concernant le Corona Virus au Sénégal.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'COVID-19 Sénégal - Foire aux questions'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Les questions les plus fréquentes concernant le Corona Virus au Sénégal.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://covidsn.com/foire-aux-questions'
        }
      ]
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: disc;
    padding-left: 12px;
  }
</style>
