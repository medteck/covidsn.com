<template>
  <div class="section-wrapper p-4">
    <div class="my-6 px-4">
      <h1 class="text-left font-bold md:font-light">
        À propos de nous
      </h1>
      <p class="mt-4 text-gray-600 text-lg">
        {{ apropos.sous_titre }}
      </p>
    </div>
    <div class="flex flex-wrap mt-10">
      <div class="w-full p-6">
        <h2 class="text-left font-bold md:font-light">
          Notre mission
        </h2>
        <p class="mt-4 text-gray-700">
          {{ apropos.notre_mission }}
        </p>
      </div>
      <div class="p-6">
        <div class="w-full">
          <h2 class="text-left font-bold md:font-light">
            L'équipe
          </h2>
        </div>
        <div class="flex flex-wrap py-4 justify-around">
          <div v-for="membre in apropos.membres" :key="membre.nom_complet" class="w-full md:w-1/2 lg:w-1/3 py-6 md:px-4 lg:px-6">
            <div class="w-full overflow-hidden rounded shadow-lg">
              <img class="w-full" :src="membre.photo" :alt="membre.nom_complet">
              <div class="px-4 py-4">
                <div class="font-bold text-lg mb-2">
                  {{ membre.nom_complet }}
                </div>
                <p class="text-gray-700 text-base">
                  {{ membre.poste }}
                </p>
              </div>
              <div class="flex justify-center pb-4">
                <div v-if="membre.facebook" class="flex-initial px-4 lg:px-2">
                  <a :href="membre.facebook" target="_blank">
                    <img src="/img/icons/facebook.svg" class="w-8">
                  </a>
                </div>
                <div v-if="membre.twitter" class="flex-initial px-4 lg:px-2">
                  <a :href="membre.twitter" target="_blank">
                    <img src="/img/icons/twitter.svg" class="w-8">
                  </a>
                </div>
                <div v-if="membre.linkedin" class="flex-initial px-4 lg:px-2">
                  <a :href="membre.linkedin" target="_blank">
                    <img src="/img/icons/linkedin.svg" class="w-8">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    apropos: {
      required: true,
      type: Object
    }
  },
  head () {
    return {
      title: 'COVID-19 Sénégal - À propos de nous',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'COVID-19 Sénégal - À propos de nous'
        },
        {
          hid: 'description',
          name: 'description',
          content: this.apropos.sous_titre
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'COVID-19 Sénégal - À propos de nous'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.apropos.sous_titre
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://covidsn.com/a-propos'
        }
      ]
    }
  },
  mounted () {
    window.document.querySelector('body').scrollTo(0, 0)
  }
}
</script>
