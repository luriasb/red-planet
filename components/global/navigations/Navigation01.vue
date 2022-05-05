<template>
  <div>
    <nav
      :class="[
        'relative z-10 text-gray-100 border-b transition-all duration-300',
        bodyClasses,
        top ? '' : 'bg-navbar',
      ]"
    >
      <div class="px-0 py-0 mx-auto w-full lg:px-4 text-base max-w-screen-2xl">
        <div class="relative flex items-center justify-between py-0">
          <ul
            class="flex items-center space-x-8 lg:flex border-r border-gray-500 py-8"
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
          <div class="flex justify-between flex-grow px-6">
            <ul class="flex items-center hidden space-x-8 lg:flex">
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
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <!-- Social links -->
              <li v-for="link in socialLinks" :key="link.type">
                <a
                  :href="link.link"
                  :aria-label="link.type"
                  :title="link.type"
                  class="font-bold tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
                >
                  <!-- Twitter -->
                  <svg
                    v-if="link.type == 'twitter'"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5"
                  >
                    <path
                      d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                    ></path>
                  </svg>
                  <!-- IG -->
                  <svg
                    v-if="link.type == 'ig'"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                    class="h-6"
                  >
                    <circle cx="15" cy="15" r="4"></circle>
                    <path
                      d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                    ></path>
                  </svg>
                  <!-- FB -->
                  <svg
                    v-if="link.type == 'fb'"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-5"
                  >
                    <path
                      d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <ul
            class="hidden items-center space-x-8 lg:flex border-l border-gray-500 py-10"
          >
            <li>
              <a
                :href="hrefPhone"
                class="inline-flex items-center justify-center px-6 py-1 text-xl tracking-wide font-bold"
                aria-label="Phone"
                title="Phone"
              >
                {{ phone }}
              </a>
            </li>
          </ul>
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
            class="w-6 text-gray-500"
            viewBox="0 0 24 24"
            @click="isMenuOpen = !isMenuOpen"
          >
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
        </div>
        <div class="p-4">
          <ul class="flex flex-col items-center">
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
