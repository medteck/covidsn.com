<template>
  <div class="section-wrapper p-4">
    <div class="my-6">
      <h1 class="text-left">
        À propos de nous
      </h1>
      <p class="mt-4 ml-2 text-gray-600 text-lg">
        {{ apropos.sous_titre }}
      </p>
    </div>
    <div class="flex flex-wrap mt-10">
      <div class="w-full p-6">
        <h2 class="text-left">
          Notre mission
        </h2>
        <p class="mt-4 text-gray-700">
          {{ apropos.notre_mission }}
        </p>
      </div>
      <div class="p-6">
        <div class="w-full">
          <h2 class="text-left">
            L'équipe
          </h2>
        </div>
        <div class="flex flex-wrap p-4 justify-around">
          <div v-for="membre in apropos.membres" :key="membre.nom_complet" class="w-1/3 p-6">
            <div class="w-full overflow-hidden rounded shadow-lg">
              <img class="w-full" :src="membre.photo" :alt="membre.nom_complet">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  {{ membre.nom_complet }}
                </div>
                <p class="text-gray-700 text-base">
                  {{ membre.poste }}
                </p>
              </div>
              <div class="flex justify-center pb-4">
                <div v-if="membre.facebook" class="flex-initial px-2">
                  <a :href="membre.facebook" target="_blank">
                    <img src="/img/icons/facebook.svg" width="24px">
                  </a>
                </div>
                <div v-if="membre.twitter" class="flex-initial px-2">
                  <a :href="membre.twitter" target="_blank">
                    <img src="/img/icons/twitter.svg" width="24px">
                  </a>
                </div>
                <div v-if="membre.linkedin" class="flex-initial px-2">
                  <a :href="membre.linkedin" target="_blank">
                    <img src="/img/icons/linkedin.svg" width="24px">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    apropos: {
      required: true,
      type: Object
    }
  }
}
</script>
