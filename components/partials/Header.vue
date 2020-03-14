<template>
  <header>
    <div class="relative topnav-content flex items-center">
      <div class="w-full lg:w-1/4 h-auto p-4 flex justify-around lg:justify-start">
        <Logo />
      </div>
      <div class="w-3/4 h-auto p-4 hidden font-semibold lg:inline-flex justify-end">
        <span v-for="navlink in navlinks" v-bind:key="navlink.title">
          <nuxt-link :to="navlink.path" class="link mx-5">
            {{ navlink.title }}
          </nuxt-link>
        </span>
      </div>
      <div class="absolute top-0 right-0 mt-4 visible lg:invisible z-30" @click="toggleMobileNav">
        <svg v-if="!mobileNavOpened" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32">
          <g fill="none" fill-rule="evenodd" stroke="#2CD5C4" stroke-width="1.765" transform="translate(1 1)">
            <g stroke-linecap="round">
              <path d="M.375.375L14.625.375M.375 5.669L14.625 5.669M.375 10.963L14.625 10.963" transform="translate(7.941 9.706)" />
            </g>
            <rect width="30" height="30" rx="15" />
          </g>
        </svg>

        <svg v-if="mobileNavOpened" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32">
          <g fill="none" fill-rule="evenodd" stroke="#2CD5C4" stroke-width="1.765" transform="translate(1 1)">
            <g stroke-linecap="round">
              <path d="M0.387 14.556L12.798 0.183" transform="matrix(-1 0 0 1 21.941 7.706)" />
              <path d="M0.328 14.85L12.739 0.477" transform="matrix(-1 0 0 1 21.941 7.706) matrix(-1 0 0 1 13.125 0)" />
            </g>
            <rect width="30" height="30" rx="15" />
          </g>
        </svg>
      </div>
    </div>
    <transition class="fade-and-slide">
      <div v-if="mobileNavOpened" class="absolute top-0 left-0 h-screen w-screen p-12 visible lg-invisible z-20 mobile-nav">
        <div class="flex">
          <div class="w-1/4 social-links-wrapper">
            <div class="absolute z-20 text-right social-links">
              <SocialLinks />
            </div>
          </div>
          <div class="w-3/4 z-50">
            <div class="flex w-full z-40 nav-items">
              <div class="w-full m-auto">
                <ul>
                  <li v-for="navlink in navlinks" v-bind:key="navlink.title">
                    <h2 class="text-aqua-marine text-2xl text-left">
                      <nuxt-link :to="navlink.path" v-bind="navlink.title" />
                    </h2>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex">
              <a href="https://goo.gl/maps/zrjjMH8dz1WvCgaw9" target="_blank" class="link">
                520 Boulevard Charest E, <br>
                Québec, QC G1K 3J3
              </a>
            </div>
            <div class="mt-6 flex">
              <a href="tel:+14185222286" target="_blank" class="text-aqua-marine link">
                418-522-2286
              </a>
            </div>
            <div class="mt-2 flex">
              <a href="mailto:info@axso.co" target="_blank" class="text-aqua-marine link">
                info@axso..co
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import Logo from '~/components/partials/Logo.vue'
import SocialLinks from '~/components/partials/SocialLinks.vue'

export default {
  components: {
    Logo,
    SocialLinks
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
        {
          title: 'Multimédias',
          path: '/multimedias'
        },
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

<style lang="less" scoped>
svg {
  cursor: pointer;
}
h2 {
  line-height: 1.5;
}
.mobile-nav {
  background-image: radial-gradient(circle at 52% 47%, #131e37, #000000 111%);
}
.nav-items {
  height: 40vh;
}
.social-links {
  height: calc(100vh - 300px);
  top: 150px;
  left: 0;
}
</style>
