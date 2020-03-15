<template>
  <div class="section-wrapper flex relative p-4">
    <div class="m-auto px-10">
      <h1 class="shadow">
        {{ accueil.titre }}
      </h1>
      <h2>
        {{ accueil.sous_titre }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    accueil: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>
  h2 {
    margin-top: 34px;
  }
  h3 {
    margin-top: 14px;
  }
</style>
