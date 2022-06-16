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
        class="container h-screen px-4 py-48 mx-auto md:px-24 lg:px-8 lg:py-60"
      >
        <div
          class="flex flex-col items-center justify-between lg:items-start xl:flex-row"
        >
          <div class="relative w-full mb-6 text-left lg:w-1/2 xl:mb-0">
            <p
              :class="[
                'mb-4 text-lg lg:text-2xl text-white inset-y-0 right-0 font-bold',
                subTitleClasses,
              ]"
            >
              {{ subTitle }}
            </p>
            <div class="relative">
              <h2
                :class="[
                  'mb-0 md:mb-6 text-3xl lg:text-6xl font-bold tracking-tight text-white sm:leading-none',
                  titleClasses,
                ]"
              >
                {{ title }}
              </h2>
            </div>
          </div>
        </div>
        <div v-if="buttonText" class="mt-4 links">
          <!--Button-->
          <ul class="flex justify-start menu">
            <li>
              <a
                :href="link"
                class="px-2 py-4 font-bold text-white align-middle transition duration-500 border-2 rounded-md border-white-400 md:px-7 md:py-3 hover:bg-white hover:text-black"
                >{{ buttonText }}</a
              >
            </li>
          </ul>
        </div>
        <!--Button-->
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
    buttonText: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
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
<style></style>
