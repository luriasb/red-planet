<template>
  <div
    class="container flex flex-wrap content-center justify-start py-10 mx-auto w-full"
  >
    <div class="flex justify-start px-4 lg:px-10 xl:px-24 2xl:px-52 mx-auto">
      <div class="relative w-full mb-8">
        <h1
          v-if="title"
          :class="[
            'text-center text-4xl font-bold mb-8 title-rectangle max-w-screen-md',
            titleClasses,
          ]"
        >
          {{ title }}
        </h1>
      </div>
    </div>
    <!-- Component Start -->
    <div class="w-full px-4 lg:px-10 xl:px-24 2xl:px-52">
      <div
        class="grid gap-6 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  w-full"
      >
        <!-- Title 1 -->
        <div
          v-for="card in cards"
          :key="card.title"
          class="flex flex-col items-center justify-center w-full overflow-hidden rounded-t-md transition duration-300 ease-in hover:shadow-xl"
        >
          <div class="w-full">
            <img
              class="object-cover object-top w-full h-96 md:h-56"
              :src="card.image"
              alt=""
            />
          </div>

          <div
            :class="[
              'flex flex-col pt-4 w-full bg-white border border-gray-300 rounded-b-md',
              bodyClasses,
            ]"
          >
            <a
              :href="card.link"
              :class="[
                'text-2xl font-bold mb-4 text-center pt-4 px-2 md:px-6 transition duration-150 ease-in hover:text-primary cursor-pointer	',
                titleClasses,
              ]"
              target="blank"
            >
              {{ card.title }}
            </a>
            <p
              :class="[
                'text-lg pb-8 text-center px-5 md:px-6 font-semibold text-gray-400',
                textClasses,
              ]"
            >
              {{ card.text }}
            </p>
            <div class="flex justify-end">
              <a
                v-if="card.link"
                class="px-3 py-2 text-xl font-semibold text-gray-500 transition duration-500 ease-in-out bg-gray-100 rounded-tl-lg md:py-4 md:px-6 hover:text-white hover:bg-primary"
                :href="card.link"
                target="blank"
              >
                >>
              </a>
            </div>
          </div>
        </div>

        <!-- Component-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    // image: {
    //   type: String,
    //   default: '/img/banner01.jpg',
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
  },
}
</script>
