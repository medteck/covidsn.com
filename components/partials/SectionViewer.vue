<template>
  <div :class="visible ? 'visible': ''" id="section-container" class="section-container lg:px-10 pt-24 lg:pt-0">
    <transition name="fade">
      <Accueil
        v-if="!$route.path || $route.path === sections.accueil"
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
      <FakeNews
        v-if="$route.path === sections.fakenews"
        :fakenews="fakenews"
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
import FakeNews from '~/components/sections/FakeNews.vue'
import Contacts from '~/components/sections/Contacts.vue'

export default {
  components: {
    Accueil,
    Communications,
    Donnees,
    Multimedias,
    APropos,
    FoireAuxQuestions,
    FakeNews,
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
    fakenews: {
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
        fakenews: '/fake-news',
        contacts: '/contacts'
      }
    }
  },
  watch: {
    $route (to) {
      location.reload()
    }
  },
  mounted () {
    this.visible = true
  }
}
</script>
