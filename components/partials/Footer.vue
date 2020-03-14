<template>
  <div class="flex items-center text-xs h-auto">
    <div class="flex w-1/2 p-4 font-medium link">
      <div class="flex-initial px-2">
        <a href="https://www.facebook.com/" target="_blank">
          <img src="/img/icons/facebook.svg" alt="COVID19 Sénégal - Facebook" width="32px">
        </a>
      </div>
      <div class="flex-initial px-2">
        <a href="https://www.twitter.com/" target="_blank">
          <img src="/img/icons/twitter.svg" alt="COVID19 Sénégal - Facebook" width="32px">
        </a>
      </div>
    </div>
    <div class="w-1/2 p-4 text-right font-medium">
      <span class="lg:mx-3 md:mx-0">
        Copyright 2020 - COVIDSN.COM
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
