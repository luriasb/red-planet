<template>
  <div class="relative w-full">
    <div
      :class="
        parallax
          ? 'bg-cover bg-local sm:bg-fixed bg-center'
          : 'bg-cover bg-center'
      "
      :style="`background-image: url(${image})`"
    >
      <div class="flex items-center">

        <div class="justify-start ml-8">
            <div class="justify-start align-middle">
              <svg class="w-4 md:w-5 lg:w-7 h-8 md:h-12 lg:h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 64" fill="none">
              <path d="M26 2L2 32L26 62" stroke="#F4933C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
      </div>
      
      <div
        class="px-4 py-12 sm:py-48 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-60">
        <div class="flex flex-col items-center justify-between xl:flex-row">
          <div class="w-full mb-12 xl:mb-0 text-center md:text-left">
            <p
              :class="[
                'mb-4 text-lg lg:text-2xl text-white text-gray-300 inset-y-0 right-0',
                subTitleClasses,
              ]"
            >
              {{ subTitle }}
            </p>

              <h2
              :class="[
                'mb-0 sm:mb-6 text-3xl lg:text-6xl font-bold tracking-tight text-white sm:leading-none',
                titleClasses,
              ]"
            >
              {{ title }}
            </h2>
            
          </div>
        </div>
        <div class="links mt-4"> <!--Button-->
                <ul class="flex menu justify-center md:justify-start">
                    <li><a href="#" class="border-2 border-white-400 text-white font-bold p-2 rounded-md align-middle transition duration-500 hover:bg-white hover:text-black">Ver más</a></li>
                </ul>
        </div><!--Button-->
      </div>

      <div class="justify-end mr-8">
              <div class="w-full">
              <svg class="w-4 md:w-5 lg:w-7 h-8 md:h-12 lg:h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 64" fill="none">
              <path d="M2 2L26 32L2 62" stroke="#F4933C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
      </div>

      </div>
      

    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    parallax: {
      type: Boolean,
      default: false,
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