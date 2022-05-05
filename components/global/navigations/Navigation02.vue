<template>
  <div>
    <nav
      :class="[
        'relative z-10 text-gray-100 border-b border-transparent transition-all duration-300',
        bodyClasses,
        top ? '' : 'bg-navbar',
      ]"
    >
      <div
        class="px-0 py-0 mx-auto container lg:px-4 text-base max-w-screen-2xl"
      >
        <div class="relative flex items-center justify-between py-0">
          <ul
            class="flex items-center space-x-8 lg:flex border-r border-transparent py-8"
          >
            <li>
              <a
                href="/"
                aria-label="Company"
                title="Company"
                class="inline-flex items-center h-12 px-6"
              >
                <img v-if="siteLogo" :src="siteLogo" alt="Site logo" />
                <span v-else class="ml-2 font-bold tracking-wide">
                  {{ siteName }}
                </span>
              </a>
            </li>
          </ul>
          <div class="px-6">
            <ul class="items-center hidden space-x-8 lg:flex">
              <!-- links -->
              <li
                v-for="link in links"
                :key="link.text"
                class="hover:border-b hover:border-white"
              >
                <a
                  :href="`#${link.link}`"
                  :aria-label="link.text"
                  :title="link.text"
                  class="font-bold tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
                  >{{ link.text }}</a
                >
              </li>
            </ul>
          </div>
          <div class="lg:hidden text-lg px-4">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              @click="isMenuOpen = !isMenuOpen"
            >
              <svg class="w-6 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    <aside
      class="transform top-0 right-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-50"
      :class="isMenuOpen ? ' translate-x-0' : 'translate-x-full'"
    >
      <div class="flex flex-col">
        <div class="p-4">
          <svg
            class="w-6 text-gray-500 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="32"
            height="32"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            @click="isMenuOpen = !isMenuOpen"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
            ></path>
          </svg>
        </div>
        <div class="p-4">
          <ul class="flex flex-col items-start">
            <!-- links -->
            <li
              v-for="link in links"
              :key="link.text"
              class="border-b border-white hover:border-gray-800"
            >
              <a
                :href="`#${link.link}`"
                :aria-label="link.text"
                :title="link.text"
                class="font-bold text-xl tracking-wide transition-colors duration-200 hover:text-gray-800 py-4 text-left"
                @click="isMenuOpen = !isMenuOpen"
                >{{ link.text }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </aside>
    <div
      v-if="isMenuOpen"
      class="absolute left-0 top-0 w-full h-screen flex justify-center items-center mr-96 pl-4 pr-80 z-30 bg-black opacity-75"
      @click="isMenuOpen = !isMenuOpen"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
    socialLinks: {
      type: Array,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    siteName: {
      type: String,
      required: true,
    },
    siteLogo: {
      type: String,
      default: '',
    },
    bodyClasses: {
      type: String,
      default: '',
    },
    titleClasses: {
      type: String,
      default: '',
    },
    textClasses: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isMenuOpen: false,
      top: true,
    }
  },
  computed: {
    hrefPhone() {
      return this.phone ? 'tel:' + this.phone.replace(/\s/g, '') : '#'
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      this.top = window.scrollY <= 112
    },
  },
}
</script>
