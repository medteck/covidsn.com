<template>
  <SectionViewer
    :accueil="accueil"
    :communications="communications"
    :donnees="donnees"
    :apropos="apropos"
    :faq="faq"
    :contacts="contacts"
  />
</template>

<script>
import SectionViewer from '~/components/partials/SectionViewer.vue'
export default {
  components: {
    SectionViewer
  },
  async asyncData ({ req, $axios }) {
    let host = 'https://covidsn.com'
    if (process.env.NODE_ENV !== 'production') {
      host = 'http://localhost:3221'
    }

    const accueil = await $axios.get(`${host}/api/pages/accueil`)
    const communications = await $axios.get(`${host}/api/collections/communications`)
    const donnees = await $axios.get(`${host}/api/pages/donnees`)
    const apropos = await $axios.get(`${host}/api/pages/apropos`)
    const faq = await $axios.get(`${host}/api/collections/faq`)
    const contacts = await $axios.get(`${host}/api/collections/contacts`)

    return {
      accueil: accueil.data,
      communications: communications.data,
      donnees: donnees.data,
      apropos: apropos.data,
      faq: faq.data,
      contacts: contacts.data
    }
  }
}
</script>
