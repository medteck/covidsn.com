<template>
  <div class="section-wrapper p-4">
    <div class="my-6 px-4">
      <h1 class="text-left font-bold md:font-light">
        Contacts d'urgence
      </h1>
      <p class="mt-4 text-gray-600 text-lg">
        Voici les numéros de téléphone à appeler en cas d'urgence concernant le Corona Virus.
      </p>
    </div>
    <div class="flex flex-wrap justify-center mt-10 px-4">
      <div v-for="contact in contacts" :key="contact.id" class="w-full md:w-1/2 p-4">
        <a :href="`tel:${contact.numero}`">
          <div class="w-full rounded shadow-lg">
            <h2 class="text-center font-bold md:font-medium text-green">
              {{ contact.numero }}
            </h2>
            <div class="px-6 py-4">
              <div class="text-xl mb-2 text-center">
                {{ contact.titre }}
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contacts: {
      required: true,
      type: Array
    }
  },
  head () {
    return {
      title: 'Contacts d\'urgence',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: `COVID-19 Sénégal - Contacts d\'urgence`
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Voici les numéros de téléphone à appeler en cas d\'urgence concernant le Corona Virus.'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `COVID-19 Sénégal - Contacts d\'urgence`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Voici les numéros de téléphone à appeler en cas d\'urgence concernant le Corona Virus.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://covidsn.com/contacts'
        }
      ]
    }
  }
}
</script>
