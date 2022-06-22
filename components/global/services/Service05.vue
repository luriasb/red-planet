<template>
  <div
    class="container flex flex-wrap items-stretch px-4 lg:px-10 xl:px-24 2xl:px-52 2xl:py-28 pt-24 mx-auto "
  >
    <div
      class="flex items-center w-full h-full lg:w-1/2 lg:text-left "
    >
      <div class="relative flex flex-col w-full min-w-0 pr-0 lg:pr-4 ">
        <h4
          :class="[
            'text-4xl font-bold mb-4 text-gray-900 title-rectangle',
            titleClasses,
          ]"
        >
          {{ title }}
        </h4>
        <p
          :class="[
            'font-semibold text-lg my-4 text-gray-400',
            textClasses,
          ]"
        >
          {{ text }}
        </p>
        <img
          alt="..."
          :src="image"
          class="w-full my-4 overflow-hidden object-center object-cover rounded h-72"
        />
      </div>
    </div>

    <div class="w-full lg:w-1/2 ">
      <div class="grid gap-6 grid-cols-2">
        <div
          v-for="card in cards"
          :key="card.title"
          :class="[
            'w-full rounded-md flex flex-wrap overflow-hidden bg-cover bg-center transform hover:scale-110 ease-in duration-100 ',
            bodyClasses,
          ]"
          style="height: 301px"
          :style="
            card.image
              ? `background-image: url(${card.image})`
              : `background:${card.color}`
          "
        >
          <div class="p-12">
            <p
              v-if="card.title"
              :class="[
                'text-2xl text-white font-bold mb-24',
                subTitleClasses,
              ]"
            >
              {{ card.title }}
            </p>
            <div class="">
              <a
                v-if="card.link"
                class="text-base font-bold text-white md:text-lg"
                :href="card.link" 
                target="blank"
              >
                {{ card.buttonText || 'Ver más' }}
              </a>
            </div>
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
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    cards: {
      type: Array,
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
    subTitleClasses: {
      type: String,
      default: '',
    },
  },
}
</script>
