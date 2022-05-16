<template>
  <div class="container py-16 mx-auto">
    <!--Main-->
    <div class="w-full">
      <!--TEXT MAIN-->
      <div class="relative px-4 lg:px-10 xl:px-24 2xl:px-52">
        <div class="flex justify-center">
          <h1
            :class="[
              'py-4 md:py-4 text-4xl font-bold relative title-rectangle max-w-screen-md text-center',
              titleClasses,
            ]"
          >
            {{ title }}
          </h1>
        </div>

        <div class="flex justify-center my-6">
          <!--Button-->

          <a
            v-if="link"
            :class="[
              'bg-black px-12 py-3.5 font-semibold text-white inline-flex items-center rounded-md transition duration-150 ease-in hover:bg-primary min-w-24 ',
              textClasses,
            ]"
            :href="link"
            target="blank"
          >
            <span class="">
              {{ button || 'Ver más' }}
            </span>
          </a>
        </div>
        <!--Button-->
      </div>
    </div>
    <!--TEXT MAIN-->

    <div
      class="grid grid-cols-1 px-4 mt-16 lg:mt-20 md:grid-cols-2 gap-x-6 gap-y-8 lg:px-10 xl:px-24 2xl:px-52"
    >
      <div
        v-for="card in cards"
        :key="card.title"
        class="relative w-full overflow-hidden bg-center bg-cover rounded-lg shadow-lg h-96 group"
        :style="`background-image: url(${card.image})`"
      >
        <div
          :class="[
            'absolute top-16 left-8 rounded-lg bg-primary w-1/2 md:w-3/4 lg:w-1/2 h-3/4 transform hover:scale-110 ease-in duration-200 ',
            bodyClasses,
          ]"
        >
          <div
            class="flex flex-wrap items-center w-full h-full px-4 sm:px-6 lg:px-10"
          >
            <h2
              :class="[
                'text-white text-2xl font-bold w-full',
                subTitleClasses,
              ]"
            >
              {{ card.title }}
            </h2>
            <a
              v-if="card.link"
              :class="[
                'text-white text-base md:text-lg font-bold cursor-pointer',
                textClasses,
              ]"
              :href="card.link"
              target="blank"
            >
              >
              <span class="">
                {{ card.buttonText || 'Ver más' }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Main-->
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    button: {
      type: String,
    },
    cards: {
      type: Array,
      required: true,
    },
    // image: {
    //   type: String,
    //   default: '/img/banner01.jpg',
    // },
    link: {
      type: String,
      default: '',
    },
    // title1: {
    //   type: String,
    //   required: false,
    // },
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
    subTitleClasses: {
      type: String,
      default: '',
    },
  },
}
</script>
