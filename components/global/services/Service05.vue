<template>
    <div class="container mx-auto flex flex-wrap lg:flex-nowrap items-center px-2 md:px-8 lg:px-12 2xl:px-44 py-24">

        <div class="w-full lg:w-1/2 flex items-center text-center lg:text-left">
            <div class="flex flex-col min-w-0 break-words w-full">
                <h4 
                :class="['text-2xl md:text-5xl font-bold my-4 text-gray-900', titleClasses] ">
                {{ title }}
                </h4>
                <p 
                :class="['text-tiny md:text-lg font-normal my-4 text-gray-700', textClasses]">
                {{ text }}
                </p>
                <img 
                alt="..." 
                :src= "image" 
                class="my-4 w-full h-96 bg-cover bg-center rounded overflow-hidden">
            </div>
        </div>

        <div class="w-full lg:w-1/2 px-6">
            <div class="grid md:grid-cols-2 gap-6 ">

                <div 
                :class="['w-full items-center rounded-md flex flex-wrap justify-center overflow-hidden py-4 object-cover bg-center object-center', 
                bodyClasses]"
                :style="(image) ? `background: url(${card.image})` : `background:  #EFEFEF`"
                v-for="card in cards" :key="card.title"> 
                        <div class="px-10 py-8 sm:py-6">
                            <p 
                            :class="['text-2xl text-white font-bold mb-2 py-8', subTitleClasses]">
                                {{ card.title }}
                            </p>
                            <div class="">
                                <a 
                                class="text-white text-base md:text-xl font-light text-center" 
                                :href="card.link"
                                v-if="card.link">
                                Ver más
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