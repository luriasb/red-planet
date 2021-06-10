<template>
  <div class="relative z-50 bg-navbar">
    <div class="px-0 py-0 mx-auto w-full lg:px-4 text-base max-w-screen-xl">
      <div class="relative flex items-center justify-between py-6 lg:py-0">
        <ul class="flex items-center hidden space-x-8 lg:flex border-r py-5">
          <li>
            <a
              href="/"
              aria-label="Company"
              title="Company"
              class="inline-flex items-center h-12 px-6"
            >
              <span class="ml-2 font-bold tracking-wide text-gray-100"
                >Tu sitio</span
              >
            </a>
          </li>
        </ul>
        <div class="flex justify-between flex-grow px-6">
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li v-for="link in links" :key="link.text">
              <a
                :href="`#${link.link}`"
                aria-label="Our product"
                :title="link.text"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                >{{ link.text }}</a
              >
            </li>
          </ul>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li v-for="link in socialLinks" :key="link.type">
              <a
                :href="link.link"
                :aria-label="link.type"
                :title="link.type"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
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
        <ul class="flex items-center hidden space-x-8 lg:flex border-l py-5">
          <li>
            <a
              :href="hrefPhone"
              class="inline-flex items-center justify-center h-12 px-6 font-base tracking-wide text-gray-400"
              aria-label="Phone"
              title="Phone"
            >
              {{ phone }}
            </a>
          </li>
        </ul>
        <div class="lg:hidden text-lg">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            @click="isMenuOpen = !isMenuOpen"
          >
            <svg class="w-5 text-white" viewBox="0 0 24 24">
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
          <div v-if="isMenuOpen" class="absolute top-[80px] left-0 w-full">
            <div class="p-5 bg-black">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <a
                    href="/"
                    aria-label="Company"
                    title="Company"
                    class="inline-flex items-center"
                  >
                    <span
                      class="ml-2 text-base font-extrabold tracking-wide text-white uppercase"
                      >Tu sitio</span
                    >
                  </a>
                </div>
                <div>
                  <!-- <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    @click="isMenuOpen = false"
                  >
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      ></path>
                    </svg>
                  </button> -->
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <a
                      href="#mision"
                      aria-label="Our product"
                      title="Our product"
                      class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Misión</a
                    >
                  </li>
                  <li>
                    <a
                      href="#acerca"
                      aria-label="Our product"
                      title="Our product"
                      class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Acerca de tu empresa</a
                    >
                  </li>
                  <li>
                    <a
                      href="#servicios"
                      aria-label="Product pricing"
                      title="Product pricing"
                      class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Servicios</a
                    >
                  </li>
                  <li>
                    <a
                      href="#contacto"
                      aria-label="About us"
                      title="About us"
                      class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Contacto</a
                    >
                  </li>
                  <li>
                    <div class="flex">
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 mr-2"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="h-5 text-black"
                        >
                          <path
                            d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                          ></path>
                        </svg>
                      </a>

                      <a
                        href="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 mr-2"
                      >
                        <svg
                          viewBox="0 0 30 30"
                          fill="currentColor"
                          class="h-6 text-black"
                        >
                          <circle cx="15" cy="15" r="4"></circle>
                          <path
                            d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                          ></path>
                        </svg>
                      </a>

                      <a
                        href="/"
                        aria-label="About us"
                        title="About us"
                        class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 mr-2"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="h-5 text-black"
                        >
                          <path
                            d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
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
  },
  data() {
    return {
      isMenuOpen: false,
    }
  },
  computed: {
    hrefPhone() {
      return this.phone ? 'tel:' + this.phone.replace(/\s/g, '') : '#'
    },
  },
}
</script>
