<template>
  <header class="relative">
    <div
      class="bg-primary"
    >
    <div class="absolute top-0 right-1/2">
      <img
      :src="logo" 
      alt="logo"
      >
    </div>

      <div
        class="px-4 py-40 sm:py-48 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-48 h-full flex flex-col"
      >
        <div class="flex flex-col items-center justify-center">
          <div class="w-full mb-12 xl:mb-0 text-center">
            <h2
              :class="[
                'mb-0 sm:mb-6 text-3xl lg:text-6xl font-bold tracking-tight text-white sm:leading-none',
                titleClasses,
              ]"
            >
              {{ title }}
            </h2>
            <p
              :class="[
                'mb-4 text-lg lg:text-2xl text-white font-semibold',
                subTitleClasses,
              ]"
            >
              {{ subtitle }}
            </p>
          </div>
          <div v-if="buttonText" class="mt-8">
            <!--Button-->
            <ul class="flex menu justify-center">
              <li>
                <a
                  :href="link"
                  class="border-2 border-white-400 text-white font-bold px-2 py-4 md:px-7 md:py-4 rounded-md align-middle transition duration-500 hover:bg-white hover:text-black"
                  >{{ buttonText }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      
    },
    subtitle: {
      type: String,
      
    },
    logo: {
      type: String,
      default: '/img/meet-logo.png',
    },
    buttonText: {
      type: String,
      default: '',
    },
    link: {
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
    subTitleClasses: {
      type: String,
      default: '',
    },
  },
}
</script>
<style>

</style>
