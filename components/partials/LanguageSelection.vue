<template>
  <div class="text-xs ml-auto link switch-lang">
    <nuxt-link v-if="lang != '' && lang != null" :to="`/${hash}`">
      English
    </nuxt-link>
    <nuxt-link v-if="lang != 'fr'" :to="`/fr${hash}`">
      Français
    </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    lang () {
      return this.$route.params.lang
    },
    hash () {
      return this.$route.hash
    }
  }
}
</script>

<style media="screen">
  .switch-lang {
    text-transform: uppercase;
  }
</style>
