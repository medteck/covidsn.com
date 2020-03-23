<template>
  <div class="flex items-center text-xs h-auto">
    <div class="flex flex-auto p-4 font-medium link">
      <div class="flex-initial px-2">
        <a href="https://www.facebook.com/covidsn" target="_blank">
          <img src="/img/icons/facebook.svg" class="w-12 lg:w-8">
        </a>
      </div>
      <div class="flex-initial px-2">
        <a href="https://twitter.com/covidsn" target="_blank">
          <img src="/img/icons/twitter.svg" class="w-12 lg:w-8">
        </a>
      </div>
      <div class="flex-initial px-2">
        <a href="https://instagram.com/covidsn" target="_blank">
          <img src="/img/icons/instagram.svg" class="w-12 lg:w-8">
        </a>
      </div>
    </div>
    <div class="flex-auto p-4 text-right font-medium">
      <span class="lg:mx-3 md:mx-0">
        Copyright 2020 - COVIDSN.COM
      </span>
      <br>
      <span class="lg:mx-3 md:mx-0">
        COVIDSN.COM n'est pas rattaché au Gouvernement du Sénégal.
      </span>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      autoplay: true,
      content: {
        en: {

        },
        fr: {

        }
      }
    }
  },
  computed: {
    hash () {
      return this.$route.hash || ''
    }
  }
}
</script>

<style media="screen">
  img {
    display: inline-flex;
  }
</style>
