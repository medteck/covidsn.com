<template>
  <div class="p-4 section-wrapper">
    <div class="my-6 px-4">
      <h1 class="text-left font-bold md:font-light">
        Contenus multimedia
      </h1>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-2/3 lg:pr-12 lg:pt-6">
      </div>
      <div id="twitter-feed-container" class="w-full lg:w-1/3 lg:pl-8">
        <client-only placeholder="Chargement...">
          <Timeline
            id="covidsn"
            source-type="profile"
            :options="timelineOptions"
          />
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import { Timeline } from 'vue-tweet-embed'

export default {
  components: {
    Timeline
  },
  props: {},
  data () {
    return {
      timelineOptions: {
        tweetLimit: 3
      }
    }
  },
  methods: {},
  head () {
    return {
      title: 'COVID-19 Sénégal - Contenus multimedia',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'COVID-19 Sénégal - Contenus multimedia'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Les contenus multimedia  du Sénégal, concernant le Corona Virus.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'COVID-19 Sénégal - Contenus multimedia'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Les différentes contenus multimedia au Sénégal, concernant le Corona Virus.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://covidsn.com/multimedias'
        }
      ]
    }
  },
  mounted () {
    window.document.querySelector('body').scrollTo(0, 0)
  }
}
</script>
