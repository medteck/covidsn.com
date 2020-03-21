<template>
  <div class="w-full items-stretch">
    <iframe
      v-if="!isMobile"
      id="power-bi-dashboard-desktop"
      class="w-full hidden md:block"
      src="https://app.powerbi.com/view?r=eyJrIjoiNWYzOTczMTMtODk5YS00MzRlLWExYjEtM2VhMDM4MWQ2OTE2IiwidCI6ImE5ZTFjNmI2LTFlZDQtNDY5ZC1hZTBmLTA5MWQ3ZTRhZWQ1ZCIsImMiOjl9"
      frameborder="0"
    />
    <iframe
      v-if="isMobile"
      id="power-bi-dashboard-mobile"
      class="w-full md:hidden"
      src="https://app.powerbi.com/view?r=eyJrIjoiNDQyNDhmY2ItODE3OC00ODJlLTgzNzYtNDA0MzMyOTZkZGRhIiwidCI6ImE5ZTFjNmI2LTFlZDQtNDY5ZC1hZTBmLTA5MWQ3ZTRhZWQ1ZCIsImMiOjl9"
      frameborder="0"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      windowWidth: document.documentElement.clientWidth
    }
  },
  computed: {
    isMobile () {
      return this.windowWidth <= 768
    }
  },
  methods: {
    getWindowWidth () {
      this.windowWidth = document.documentElement.clientWidth
    }
  },
  mounted () {
    window.addEventListener('resize', this.getWindowWidth)
    // Init
    this.getWindowWidth()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowWidth)
  }
}
</script>

<style scoped>
  #power-bi-dashboard-desktop {
    height: calc(60vw - 80px);
  }
  #power-bi-dashboard-mobile {
    height: calc(250vw - 80px);
  }
</style>
