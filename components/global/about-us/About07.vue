<template>
<div
    :class="
        parallax
          ? 'bg-cover bg-local sm:bg-fixed bg-center'
          : 'bg-cover bg-center'
      "     
    :style="`background-image: url(${image})`"
    >
  <div
    class="bg-opacity"
  >
  <div class="container flex flex-wrap content-center justify-start py-24 mx-auto w-full">
    <div class="flex justify-start px-4 lg:px-10 xl:px-24 2xl:px-52 mx-auto">
      <div class="relative w-full mb-8">
        <h1
          v-if="title"
          :class="[
            'text-center text-4xl font-bold mb-8 title-rectangle max-w-screen-md text-white',
            titleClasses,
          ]"
        >
          {{ title }}
        </h1>
      </div>
    </div>
    <!-- Component Start -->
    <div class="w-full px-4 lg:px-10 xl:px-24 2xl:px-52 ">
      <div class="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 w-full">
            <!-- Title 1 -->
            <div 
            :class="['w-full overflow-hidden flex flex-col justify-center items-center p-2 md:py-10 py-20',
            bodyClasses]
            "
            v-for="card in cards" :key="card.title"
            > 
                <div class="">
                    <img 
                    class="object-center object-cover w-16 h-16 mb-10" 
                    :src="card.image" 
                    alt="">
                </div>

                <div class="flex flex-col justify-center items-center ">
                    <p
                      :href="card.link"
                      :class="[
                        'text-8xl text-white font-bold mb-4 text-center pt-4 px-2 md:px-6',
                        titleClasses,
                      ]"
                      target="blank"
                    >
                        {{ card.text }}
                    </p>
                    <p 
                    :class="['font-semibold text-base text-white text-center w-3/4', textClasses]">
                        {{ card.description }}
                    </p>
                </div>
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
    cards: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '/img/funfact-img.jpg',
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
    textClasses: {
      type: String,
      default: '',
    },
  },
}
</script>
<style>
.bg-opacity{
  background-color: #222232a6;
  width: 100%;
  height: 100%;
}
</style>