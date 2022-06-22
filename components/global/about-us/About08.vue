<template>
<div
    :class="
        parallax
          ? 'bg-cover bg-local sm:bg-fixed bg-center '
          : 'bg-cover bg-center'
      "     
    :style="`background-image: url(${image})`"
    >
  <div
    class="bg-opacity "
  >
  <div class="container flex flex-wrap content-center justify-start py-24 mx-auto w-full">
    <div class="flex justify-start px-4 lg:px-10 xl:px-24 2xl:px-52 mx-auto">
      <div class="w-full rounded-full bg-primary w-32 h-32 flex justify-center items-center">
        <img 
        class="object-center object-cover w-14 h-14" 
        :src="logo" 
        alt="">
      </div>
    </div>
    </div>
    <!-- Component Start -->
    <div class="w-full px-4 lg:px-10 xl:px-24 2xl:px-52 pb-32">
      <div class="flex flex-col items-center justify-center">
          <div class="w-full mb-12 xl:mb-0 text-center px-20 2xl:px-8 2xl:w-1/2">
            <h2
              :class="[
                'mb-0 sm:mb-6 text-6xl font-bold tracking-tight text-white sm:leading-none ',
                titleClasses,
              ]"
            >
              {{ title }}
            </h2>
            <!-- <p
              :class="[
                'mb-4 text-lg lg:text-2xl text-white font-bold',
                subTitleClasses,
              ]"
            >
              {{ subtitle }}
            </p> -->
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
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    // subtitle: {
    //   type: String,
    //   default: '',
    // },
    image: {
      type: String,
      default: '/img/av-trusted-img.jpg',
    },
    logo: {
      type: String,
      default: '/img/icon01.svg',
    },
    parallax: {
      type: Boolean,
      default: false,
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
    textClasses: {
      type: String,
      default: '',
    },
  },
}
</script>
<style>
.bg-opacity{
  background-color: #222232a6;
  width: 100%;
  height: 100%;
}
</style>