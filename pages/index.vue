<template>
  <SectionViewer
    :accueil="accueil"
    :communications="communications"
    :donnees="donnees"
    :apropos="apropos"
    :faq="faq"
    :fakenews="fakenews"
    :contacts="contacts"
  />
</template>

<script>
import SectionViewer from '~/components/partials/SectionViewer.vue'
export default {
  components: {
    SectionViewer
  },
  async asyncData ({ req, $axios, route }) {
    let host = 'https://covidsn.com'
    if (process.env.NODE_ENV !== 'production') {
      host = 'http://localhost:3221'
    }

    const accueil = route.path === '/' ? (await $axios.get(`${host}/api/pages/accueil`)).data : {}
    const communications = route.path === '/communications' ? (await $axios.get(`${host}/api/collections/communications`)).data : []
    const donnees = route.path === '/donnees' || route.path === '/' ? (await $axios.get(`${host}/api/pages/donnees`)).data : {}
    const apropos = route.path === '/a-propos' ? (await $axios.get(`${host}/api/pages/apropos`)).data : {}
    const faq = route.path === '/foire-aux-questions' ? (await $axios.get(`${host}/api/collections/faq`)).data : []
    const fakenews = route.path === '/fake-news' ? (await $axios.get(`${host}/api/collections/fakenews`)).data : []
    const contacts = route.path === '/contacts' ? (await $axios.get(`${host}/api/collections/contacts`)).data : []

    return {
      accueil,
      communications,
      donnees,
      apropos,
      faq,
      fakenews,
      contacts
    }
  }
}
</script>
