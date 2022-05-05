<template>
  <section class="py-20" :class="bodyClasses">
    <div class="container mx-auto">
      <div class="w-full px-4 mb-16 min-h-72">
        <div class="">
          <img class="object-fill w-full rounded" :src="image" alt="" />
        </div>
      </div>
      <div class="py-6 ml-auto mr-auto align-middle 2xl:px-32">
        <div class="flex flex-wrap">
          <div class="flex flex-col w-full px-4 lg:w-1/3">
            <div class="relative">
              <h3
                class="pt-8 text-5xl font-bold leading-10 text-left title-rectangle"
                :class="titleClasses"
              >
                {{ title }}
              </h3>
            </div>
          </div>
          <div class="flex flex-col w-full px-4 sm:w-1/2 lg:w-1/3">
            <p
              class="pt-8 text-base font-semibold text-gray-500"
              :class="textClasses"
            >
              {{ text01 }}
            </p>
          </div>
          <div class="flex flex-col w-full px-4 sm:w-1/2 lg:w-1/3">
            <p
              class="pt-8 text-base font-semibold text-gray-500"
              :class="textClasses"
            >
              {{ text02 }}
            </p>
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
    text01: {
      type: String,
      required: true,
    },
    text02: {
      type: String,
      required: true,
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
    textClasses: {
      type: String,
      default: '',
    },
  },
}
</script>
