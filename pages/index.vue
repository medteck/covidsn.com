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
    const accueil = await $axios.get('http://localhost:3221/api/pages/accueil')
    const communications = await $axios.get('http://localhost:3221/api/collections/communications')
    const donnees = await $axios.get('http://localhost:3221/api/pages/donnees')
    const apropos = await $axios.get('http://localhost:3221/api/pages/apropos')
    const contacts = await $axios.get('http://localhost:3221/api/collections/contacts')
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
