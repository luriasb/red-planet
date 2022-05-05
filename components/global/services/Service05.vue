<template>
  <div
    class="container mx-auto flex flex-wrap items-stretch px-2 md:px-8 lg:px-12 2xl:px-44 py-24 bg-gray-400"
  >
    <div
      class="w-full lg:w-1/2 flex items-center text-center lg:text-left h-full"
    >
      <div class="flex flex-col min-w-0 break-words w-full relative">
        <h4
          :class="[
            'text-2xl md:text-4xl font-bold mb-4 text-gray-900 title-rectangle',
            titleClasses,
          ]"
        >
          {{ title }}
        </h4>
        <p
          :class="[
            'font-bold text-tiny md:text-lg my-4 text-gray-500',
            textClasses,
          ]"
        >
          {{ text }}
        </p>
        <img
          alt="..."
          :src="image"
          class="my-4 w-full h-96 bg-cover bg-center rounded overflow-hidden"
        />
      </div>
    </div>

    <div class="w-full lg:w-1/2 px-6">
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="card in cards"
          :key="card.title"
          :class="[
            'w-full items-center rounded-md flex flex-wrap justify-center overflow-hidden py-4 bg-cover bg-center transform hover:scale-110 ease-in duration-100',
            bodyClasses,
          ]"
          style="height: 301px"
          :style="
            card.image
              ? `background-image: url(${card.image})`
              : `background:${card.color}`
          "
        >
          <div class="px-10 py-8 sm:py-6">
            <p
              :class="[
                'text-2xl text-white font-bold mb-2 py-8',
                subTitleClasses,
              ]"
              v-if="card.title"
            >
              {{ card.title }}
            </p>
            <div class="">
              <a
                v-if="card.link"
                class="text-white text-base md:text-lg font-bold "
                :href="card.link"
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