<template>
  <div class="p-4 section-wrapper">
    <div class="my-6 px-4">
      <h1 class="text-left font-bold md:font-light">
        Communications gouvernementales
      </h1>
      <p class="mt-4 text-gray-600 text-lg">
        Les différentes publications et communiqués du gouvernement du Sénégal, concernant le Corona Virus. <br>
      </p>
    </div>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-2/3 lg:pr-12 lg:pt-6">
        <article v-for="communication in communications" :key="communication.id" class="py-8 pl-8">
          <hr class="py-6" />
          <h2 class="text-left font-bold md:font-light mb-4">
            {{ communication.titre }}
          </h2>
          <p v-show="communication.description" class="mt-4 py-4 text-gray-700" v-html="getHTML(communication.description)"></p>
          <a v-if="hasFile(communication)" :href="communication.document.url" target="_blank" class="text-green underline">
            Voir {{ getFileType(communication) }} ({{ getFilesize(communication.document) }})
          </a>
        </article>
      </div>
      <div id="twitter-feed-container" class="w-full lg:w-1/3 lg:pl-8">
        <client-only placeholder="Chargement...">
          <Timeline
            id="MinisteredelaS1"
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
import marked from 'marked'

export default {
  components: {
    Timeline
  },
  props: {
    communications: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      timelineOptions: {
        tweetLimit: 3
      }
    }
  },
  methods: {
    getHTML (markdown) {
      return marked(markdown || '')
    },
    getFilesize (document) {
      return `${document.filesize / 1000} Ko`
    },
    getFileType (communication) {
      if (communication.document.type === 'application/pdf') {
        return 'le document PDF'
      } else {
        return 'l\'image'
      }
    },
    hasFile (communication) {
      return communication.document != null
    }
  },
  head () {
    return {
      title: 'COVID-19 Sénégal - Communications gouvernementales',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Les différentes publications et communiqués du gouvernement du Sénégal, concernant le Corona Virus.'
        }
      ]
    }
  }
}
</script>
