<template>
  <div class="flex flex-wrap content-center w-full" :class="bodyClasses">
    <div class="w-full md:w-1/2">
      <img
        alt=""
        class="object-cover object-center w-full h-full bg-center"
        :src="image"
      />
    </div>

    <div
      class="flex flex-wrap content-center justify-start w-full px-0 py-10 mx-4 md:w-1/2 md:mx-0 md:px-2 lg:p-32"
    >
      <div class="relative w-full mb-8">
        <h1
          :class="[
            'text-4xl font-bold  text-gray-900 title-rectangle leading-9',
            titleClasses,
          ]"
        >
          {{ title }}
        </h1>
      </div>

      <div class="relative w-full">
        <span class="absolute left-0 w-16 -top-4 text-primary">
          <img :src="icon" alt="icon" />
        </span>
        <div class="pl-20">
          <h4 class="text-2xl">{{ subTitle }}</h4>
          <p
            class="mt-8 mb-5 font-semibold text-gray-500 md:pr-14 lg:pr-20"
            :class="textClasses"
          >
            {{ text }}
          </p>
          <h3
            v-if="name"
            class="box-border p-0 m-0 font-sans text-4xl font-normal text-primary"
            style="line-height: 1.1; letter-spacing: -1px"
          >
            {{ name }}
          </h3>

          <span
            v-if="post"
            class="box-border p-0 m-0 text-base font-semibold leading-6 text-gray-500 border-b border-solid border-neutral-300"
          >
            {{ post }}
          </span>
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
    text: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
    post: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '/img/icon01.svg',
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
