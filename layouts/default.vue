<template>
  <div class="page-wrapper">
    <Header />
    <div class="page-content">
      <nuxt />
    </div>
    <div class="footer-content">
      <Footer />
    </div>
    <div class="elfsight-app-1461a5ec-2c8d-44e7-a030-96af0a041b80 visible lg:invisible"></div>
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
