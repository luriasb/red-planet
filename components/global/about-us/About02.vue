<template>
  <section class="relative py-24" :class="bodyClasses">
    <div class="container flex flex-wrap mx-auto">
      <div class="flex items-center w-full px-4 text-left lg:w-1/2">
        <div class="relative">
          <h1
            class="text-4xl font-semibold leading-10 text-gray-900 title-rectangle"
            :class="titleClasses"
          >
            {{ title }}
          </h1>
          <p
            class="py-5 text-base font-semibold leading-relaxed text-gray-500"
            :class="textClasses"
          >
            {{ text }}
          </p>

          <div class="flex justify-start mt-6 space-x-3 2xl:justify-center">
            <a
              :href="link"
              class="px-2 py-4 font-bold text-white align-middle transition duration-500 bg-gray-900 border-2 rounded-md border-white-400 md:px-7 md:py-3 hover:bg-primary"
              >{{ buttonText }}</a
            >
          </div>
        </div>
      </div>
      <div class="w-full px-4 my-4 lg:w-1/2">
        <div class="flex justify-between mt-14 md:mt-0">
          <div class="mx-0 mb-8 lg:mx-2">
            <img
              alt="..."
              class="w-full duration-300 ease-in-out transform rounded hover:scale-105"
              :src="image01"
            />
          </div>
          <div class="mx-0 mb-8 lg:mx-2">
            <img
              alt="..."
              class="w-full duration-300 ease-in-out transform rounded hover:scale-105"
              :src="image02"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image01: {
      type: String,
      required: true,
    },
    image02: {
      type: String,
      required: true,
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
    videoEmbed: {
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
    return {}
  },
}
</script>
