<template>
  <div class="flex flex-wrap w-full items-stretch">
    <div class="w-full md:w-1/2 lg:w-1/4 sm:p-2 md:p-12 lg:p-4 my-4 md:my-2 self-auto">
      <div class="w-full rounded overflow-hidden shadow-xl">
        <div class="text-6xl text-center">
          {{ donnees.infectes }}
        </div>
        <div class="px-6 py-4">
          <div :class="!showText ? 'lg:h-20 xl:h-auto' : ''" class="font-bold text-xl mb-2 text-center">
            Infectés
          </div>
          <p v-if="showText" class="text-gray-600 text-base">
            {{ donnees.texte_infectes }}
          </p>
        </div>
      </div>
    </div>

    <div class="w-full md:w-1/2 lg:w-1/4 sm:p-2 md:p-12 lg:p-4 my-4 md:my-2 self-auto">
      <div class="w-full rounded overflow-hidden shadow-xl">
        <div class="text-6xl text-center">
          {{ donnees.gueris }}
        </div>
        <div class="px-6 py-4">
          <div :class="!showText ? 'lg:h-20 xl:h-auto' : ''" class="font-bold text-xl mb-2 text-center">
            Guéris
          </div>
          <p v-if="showText" class="text-gray-600 text-base">
            {{ donnees.texte_gueris }}
          </p>
        </div>
      </div>
    </div>

    <div class="w-full md:w-1/2 lg:w-1/4 sm:p-2 md:p-12 lg:p-4 my-4 md:my-2 self-auto">
      <div class="w-full rounded overflow-hidden shadow-xl">
        <div class="text-6xl text-center">
          {{ donnees.traitements }}
        </div>
        <div class="px-6 py-4">
          <div :class="!showText ? 'lg:h-20 xl:h-auto' : ''" class="font-bold text-xl mb-2 text-center">
            En traitement
          </div>
          <p v-if="showText" class="text-gray-600 text-base">
            {{ donnees.texte_traitements }}
          </p>
        </div>
      </div>
    </div>

    <div class="w-full md:w-1/2 lg:w-1/4 sm:p-2 md:p-12 lg:p-4 my-4 md:my-2 self-auto">
      <div class="w-full rounded overflow-hidden shadow-xl">
        <div class="text-6xl text-center">
          {{ donnees.deces }}
        </div>
        <div class="px-6 py-4">
          <div :class="!showText ? 'lg:h-20 xl:h-auto' : ''" class="font-bold text-xl mb-2 text-center">
            Décès
          </div>
          <p v-if="showText" class="text-gray-600 text-base">
            {{ donnees.texte_deces }}
          </p>
        </div>
      </div>
    </div>

    <div class="w-full text-sm text-gray-600 text-right px-4">
      Dernière mise à jour: {{ updatedAt }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    donnees: {
      required: true,
      type: Object
    },
    showText: {
      required: true,
      type: Boolean,
      default: false
    }
  },
  computed: {
    updatedAt () {
      return (new Date(this.donnees.modified_on)).toLocaleString()
    }
  }
}
</script>
