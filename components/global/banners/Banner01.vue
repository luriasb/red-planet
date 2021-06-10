<template>
  <div class="relative">
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
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      default: '/img/banner01.jpg',
    },
    parallax: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
