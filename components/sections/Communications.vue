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
    <article v-for="communication in communications" :key="communication.id" class="p-8">
      <hr class="py-6">
      <h2 class="text-left font-bold md:font-light mb-4">
        {{ communication.titre }}
      </h2>
      <p class="mt-4 py-4 text-gray-700">
        {{ communication.description }}
      </p>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    communications: {
      required: true,
      type: Array
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
