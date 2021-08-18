<template>
  <div :class="bodyClasses">
    <div class="relative">
      <!-- <img
        src="~/assets/img/banner02.jpg"
        class="absolute inset-0 object-cover w-full h-full"
        alt=""
      /> -->
      <div
        :class="
          parallax
            ? 'bg-cover bg-local sm:bg-fixed bg-center'
            : 'bg-cover bg-center'
        "
        :style="`background-image: url(${image})`"
      >
        <div
          class="px-4 py-24 sm:py-52 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-60"
        >
          <div class="flex flex-col items-center justify-between xl:flex-row">
            <div class="w-full mb-12 xl:mb-0 text-center"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="relative px-0 lg:px-8 pt-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24"
    >
      <div
        :class="[
          'flex bg-white px-8 py-8 lg:py-28 pb-24 lg:-mt-28',
          bodyClasses,
        ]"
      >
        <div class="px-0 sm:mx-auto sm:text-center">
          <h2
            :class="[
              'text-center text-3xl font-extrabold mb-8 text-gray-300',
              titleClasses,
            ]"
          >
            {{ title }}
          </h2>
          <div v-for="service in services" :key="service.title">
            <h3
              :class="[
                'text-2xl font-extrabold mb-4 text-black',
                subTitleClasses,
              ]"
            >
              {{ service.title }}
            </h3>
            <p
              :class="['mb-6 text-base text-black leading-normal', textClasses]"
            >
              {{ service.text }}
            </p>
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
    services: {
      type: Array,
      required: true,
    },
    parallax: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: '/img/banner01.jpg',
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
    textClasses: {
      type: String,
      default: '',
    },
  },
}
</script>
