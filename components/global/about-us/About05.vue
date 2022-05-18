<template>
  <div class="flex flex-wrap content-center w-full lg:flex-nowrap px-4 lg:px-12 xl:px-72 py-20 md:py-28">
    <!--MainContent-->

    <div
      :class="[
        'w-full xl:w-1/2 flex flex-col content-center justify-center',
        bodyClasses,
      ]"
    >
      <!--Text-->
      <div class=" ">
        <!--Header-->
        <div class="relative">
          <h1
            :class="[
              'text-4xl font-bold mb-10 title-rectangle ',
              titleClasses,
            ]"
          >
            {{ title }}
          </h1>
        </div>
        <p
          :class="[
            'text-lg font-semibold text-gray-400 ',
            textClasses,
          ]"
        >
          {{ subtitle }}
        </p>
      </div>
      <!--Header-->
    </div>

    <div class="flex w-full mt-4 xl:w-1/2 md:mt-0">
      <!--Image-->
      <img
        alt=""
        class="object-cover object-center w-1/2 h-full bg-center pr-1.5 rounded-md"
        :src="image"
      />
      <img
        alt=""
        class="object-cover object-center w-1/2 h-full bg-center pl-1.5 rounded-md"
        :src="image2"
      />
    </div>
    <!--Image-->
  </div>
  <!--MainContent-->
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '/img/o1.jpg',
    },
    image2: {
      type: String,
      default: '/img/o2.jpg',
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