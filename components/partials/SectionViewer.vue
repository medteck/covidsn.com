<template>
  <div :class="visible ? 'visible': ''" class="section-container lg:px-10 pt-24 lg:pt-0">
    <transition name="fade">
      <Accueil
        v-if="$route.path === sections.accueil"
        :accueil="accueil"
        :donnees="donnees"
        class="section"
      />
    </transition>
    <transition name="fade">
      <Communications
        v-if="$route.path === sections.communications"
        :communications="communications"
        class="section"
      />
    </transition>
    <transition name="fade">
      <Donnees
        v-if="$route.path === sections.donnees"
        :donnees="donnees"
        class="section"
      />
    </transition>
    <transition name="fade">
      <Multimedias
        v-if="$route.path === sections.multimedias"
        class="section"
      />
    </transition>
    <transition name="fade">
      <APropos
        v-if="$route.path === sections.apropos"
        :apropos="apropos"
        class="section"
      />
    </transition>
    <transition name="fade">
      <FoireAuxQuestions
        v-if="$route.path === sections.faq"
        :faq="faq"
        class="section"
      />
    </transition>
    <transition name="fade">
      <Contacts
        v-if="$route.path === sections.contacts"
        :contacts="contacts"
        class="section"
      />
    </transition>
  </div>
</template>

<script>
import Accueil from '~/components/sections/Accueil.vue'
import Communications from '~/components/sections/Communications.vue'
import Donnees from '~/components/sections/Donnees.vue'
import Multimedias from '~/components/sections/Multimedias.vue'
import APropos from '~/components/sections/APropos.vue'
import FoireAuxQuestions from '~/components/sections/FoireAuxQuestions.vue'
import Contacts from '~/components/sections/Contacts.vue'

export default {
  components: {
    Accueil,
    Communications,
    Donnees,
    Multimedias,
    APropos,
    FoireAuxQuestions,
    Contacts
  },
  props: {
    accueil: {
      required: true,
      type: Object
    },
    communications: {
      required: true,
      type: Array
    },
    donnees: {
      required: true,
      type: Object
    },
    apropos: {
      required: true,
      type: Object
    },
    faq: {
      required: true,
      type: Array
    },
    contacts: {
      required: true,
      type: Array
    }
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
        faq: '/foire-aux-questions',
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
