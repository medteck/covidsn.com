<template>
  <header>
    <div class="topnav-content bg-white fixed lg:relative w-full flex items-center">
      <div class="flex-1 lg:w-1/4 h-auto p-4 flex justify-around lg:justify-start">
        <Logo />
      </div>
      <div class="flex-none h-auto p-4 hidden font-semibold lg:inline-flex justify-end">
        <span v-for="navlink in navlinks" :key="navlink.title">
          <nuxt-link :to="navlink.path" class="link mx-5">
            {{ navlink.title }}
          </nuxt-link>
        </span>
      </div>
      <div class="absolute top-0 right-0 mt-8 mr-4 visible lg:invisible z-30" @click="toggleMobileNav">
        <svg v-if="!mobileNavOpened" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32">
          <g fill="none" fill-rule="evenodd" stroke="#01A551" stroke-width="1.765" transform="translate(1 1)">
            <g stroke-linecap="round">
              <path d="M.375.375L14.625.375M.375 5.669L14.625 5.669M.375 10.963L14.625 10.963" transform="translate(7.941 9.706)" />
            </g>
            <rect width="30" height="30" rx="15" />
          </g>
        </svg>
        <svg v-if="mobileNavOpened" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32">
          <g fill="none" fill-rule="evenodd" stroke="#01A551" stroke-width="1.765" transform="translate(1 1)">
            <g stroke-linecap="round">
              <path d="M0.387 14.556L12.798 0.183" transform="matrix(-1 0 0 1 21.941 7.706)" />
              <path d="M0.328 14.85L12.739 0.477" transform="matrix(-1 0 0 1 21.941 7.706) matrix(-1 0 0 1 13.125 0)" />
            </g>
            <rect width="30" height="30" rx="15" />
          </g>
        </svg>
      </div>
    </div>
    <transition class="fade">
      <div v-if="mobileNavOpened" class="absolute top-0 left-0 h-screen w-screen p-10 visible lg-invisible z-20 mobile-nav">
        <div class="flex w-full nav-items mt-16 pt-8">
          <div class="w-full grid grid-6">
            <div v-for="navlink in navlinks" :key="navlink.title" class="my-3">
              <nuxt-link :to="navlink.path" class="text-xl">
                {{ navlink.title }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import Logo from '~/components/partials/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      mobileNavOpened: false,
      navlinks: [
        {
          title: 'Accueil',
          path: '/'
        },
        {
          title: 'Communications gouvernementales',
          path: '/communications'
        },
        {
          title: 'Données',
          path: '/donnees'
        },
        // {
        //   title: 'Multimédias',
        //   path: '/multimedias'
        // },
        {
          title: 'À propos',
          path: '/a-propos'
        },
        {
          title: 'Contacts d\'urgence',
          path: '/contacts'
        }
      ],
      content: {
        en: {
          intro: 'Intro',
          about: 'About us',
          app: 'The app',
          subscribe: 'Subscribe'
        },
        fr: {
          intro: 'Intro',
          about: 'À propos',
          app: 'L\'application',
          subscribe: 'Souscrire'
        }
      }
    }
  },
  watch: {
    $route () {
      this.mobileNavOpened = false
    }
  },
  methods: {
    toggleMobileNav () {
      this.mobileNavOpened = !this.mobileNavOpened
    }
  }
}
</script>

<style lang="css" scoped>
svg {
  cursor: pointer;
}
.mobile-nav {
  background-color: white;
}
a {
  color: #01A551;
  transition: all .5s;
}
a.nuxt-link-exact-active {
  background-color: #FFF102;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all .5s;
}
</style>
