<template>
  <div class="page-wrapper">
    <Header />
    <div class="page-content">
      <nuxt />
    </div>
    <div class="footer-content">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '~/components/partials/Header.vue'
import Footer from '~/components/partials/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
