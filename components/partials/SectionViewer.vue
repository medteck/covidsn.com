<template>
  <div :class="visible ? 'visible': ''" class="section-container lg:px-10">
    <transition name="fade">
      <Accueil v-if="$route.path === sections.accueil" class="section" />
    </transition>
    <transition name="fade">
      <Communications v-if="$route.path === sections.communications" class="section" />
    </transition>
    <transition name="fade">
      <Donnees v-if="$route.path === sections.donnees" class="section" />
    </transition>
    <transition name="fade">
      <Multimedias v-if="$route.path === sections.multimedias" class="section" />
    </transition>
    <transition name="fade">
      <APropos v-if="$route.path === sections.apropos" class="section" />
    </transition>
    <transition name="fade">
      <Contacts v-if="$route.path === sections.contacts" class="section" />
    </transition>
  </div>
</template>

<script>
import Accueil from '~/components/sections/Accueil.vue'
import Communications from '~/components/sections/Communications.vue'
import Donnees from '~/components/sections/Donnees.vue'
import Multimedias from '~/components/sections/Multimedias.vue'
import APropos from '~/components/sections/APropos.vue'
import Contacts from '~/components/sections/Contacts.vue'

export default {
  components: {
    Accueil,
    Communications,
    Donnees,
    Multimedias,
    APropos,
    Contacts
  },
  data () {
    return {
      currentSection: null,
      visible: false,
      sections: {
        accueil: '/',
        communications: '/communications',
        donnees: '/donnees',
        multimedias: '/multimedias',
        apropos: '/a-propos',
        contacts: '/contacts'
      }
    }
  },
  watch: {
    $route (to) {
      if (Object.values(this.sections).find(value => value === to.hash)) {
        this.currentSection = to.hash
        this.visible = true
      } else {
        location.hash = ''
      }
    }
  },
  mounted () {
    this.visible = true
  }
}
</script>
