<template>
  <div class="">
    <div class="flex bg-gray-300">
      <div
        id="menu"
        class="bg-gray-800 flex flex-col justify-between w-48"
        @mouseover="isClose = false"
        @mouseleave="isClose = false"
      >
        <div>
          <div
            class="h-16 bg-blue-500 text-white flex items-center justify-center"
          >
            <a
              class="block px-5 text-red-500 text-lg h-8 flex items-center justify-center"
              href="javascript:;"
            >
              <span
                class="bg-blue-700 rounded-full h-8 w-8 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ionicon"
                  viewBox="0 0 512 512"
                >
                  <title>Planet</title>
                  <path
                    d="M413.48 284.46c58.87 47.24 91.61 89 80.31 108.55-17.85 30.85-138.78-5.48-270.1-81.15S.37 149.84 18.21 119c11.16-19.28 62.58-12.32 131.64 14.09"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="32"
                  />
                  <circle
                    cx="256"
                    cy="256"
                    r="160"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                    stroke-width="32"
                  />
                </svg>
              </span>
              <!-- <span class="hidden-item px-2">Admin</span> -->
            </a>
          </div>
          <ul class="text-white">
            <li>
              <nuxt-link
                to="/docs"
                class="block p-3 border-b border-gray-900 hover:text-orange-400"
              >
                <i class="fas fa-home fa-fw"></i>
                <span class="hidden-item capitalize">Inicio</span>
              </nuxt-link>
            </li>
            <li v-for="item in content" :key="item.slug">
              <nuxt-link
                :to="item.path"
                class="block p-3 border-b border-gray-900 hover:text-orange-400"
              >
                <i class="fas fa-home fa-fw"></i>
                <span class="hidden-item capitalize">{{ item.slug }}</span>
              </nuxt-link>
            </li>
            <!-- <li>
              <a
                href="javascript:;"
                @click="toggle = !toggle"
                class="flex items-center p-3 border-b border-gray-900 hover:text-orange-400"
              >
                <div class="flex-1">
                  <i class="fas fa-sitemap fa-fw"></i>
                  <span class="hidden-item">Sitemap</span>
                </div>
                <i
                  class="hidden-item fas"
                  :class="{
                    'fa-angle-right': toggle,
                    'fa-angle-down': !toggle,
                  }"
                ></i>
              </a>
              <ul class="hidden-item bg-gray-900" :class="{ hidden: toggle }">
                <li class="border-b border-gray-800">
                  <a
                    href="javascript:;"
                    class="block px-8 py-3 hover:text-orange-400"
                    >Page 1</a
                  >
                </li>
                <li class="border-b border-gray-800">
                  <a
                    href="javascript:;"
                    class="block px-8 py-3 hover:text-orange-400"
                    >Page 2</a
                  >
                </li>
                <li class="border-b border-gray-800">
                  <a
                    href="javascript:;"
                    class="block px-8 py-3 hover:text-orange-400"
                    >Page 3</a
                  >
                </li>
              </ul>
            </li> -->
          </ul>
        </div>
        <a href="javascript:;" class="block p-4 text-center bg-gray-900">
          <i class="fas fa-power-off text-red-500"></i>
        </a>
      </div>
      <div class="flex-1 h-full min-h-screen">
        <div class="bg-white p-3 py-5 font-bold">&nbsp; RedPlanet</div>
        <div class="bg-white m-3 p-3" style="min-height: calc(100vh - 75px)">
          <div class="prose p-2 w-full max-w-full">
            <Nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    const content = await this.$nuxt.context
      .$content('docs', { deep: true })
      .fetch()
    // eslint-disable-next-line
    this.content = content
    return {
      content,
    }
  },
  data() {
    return {
      isClose: true,
      toggle: true,
      content: [],
    }
  },
}
</script>

<style scoped>
.is-close {
  text-align: center;
}
.is-close .hidden-item {
  display: none;
}
</style>
