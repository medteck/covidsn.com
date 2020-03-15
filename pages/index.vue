<template>
  <SectionViewer
    :accueil="accueil"
    :communications="communications"
    :donnees="donnees"
    :apropos="apropos"
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
    let host = ''
    if (process.server) {
      host = `http://${req.headers.host}`
    }

    const accueil = await $axios.get(`${host}/api/pages/accueil`)
    const communications = await $axios.get(`${host}/api/collections/communications`)
    const donnees = await $axios.get(`${host}/api/pages/donnees`)
    const apropos = await $axios.get(`${host}/api/pages/apropos`)
    const contacts = await $axios.get(`${host}/api/collections/contacts`)

    return {
      accueil: accueil.data,
      communications: communications.data,
      donnees: donnees.data,
      apropos: apropos.data,
      contacts: contacts.data
    }
  },
  data () {
    return {
      accueil: {},
      communications: []
    }
  }
}
</script>
