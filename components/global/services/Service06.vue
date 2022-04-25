<template> 
    <div class="container mx-auto py-24"> <!--Main-->
        <div class="w-full "> <!--TEXT MAIN-->
            <div class="px-4 md:px-24 mx-auto">
                <h1 
                :class="['flex py-4 md:py-4 text-2xl md:text-5xl font-bold text-center',
                titleClasses]">
                    {{ title }}
                </h1>
                <div class="flex justify-center mt-2"> <!--Button-->
                <!-- <button 
                :class="['bg-black px-4 py-2 font-semibold text-white inline-flex items-center rounded hover:bg-purple-700',
                textClasses]">
                    {{ button || 'Ver más' }}
                </button> -->

                <a :class="['bg-black px-4 py-2 font-semibold text-white inline-flex items-center rounded hover:bg-purple-700 min-w-24 text-center',
                textClasses]" 
                :href="link"
                v-if="link">
                    <span class="">
                        {{ button || 'Ver más' }}
                    </span>
                </a>
                    
                </div> <!--Button-->
            </div>
        </div> <!--TEXT MAIN-->

        <div class="mt-5 lg:mt-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 px-6 md:px-24 ">

            <div class="relative w-full h-96 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg" 
            :style="`background-image: url(${card.image})`"
            v-for="card in cards" :key="card.title"
            >
                <div  
                :class="['absolute top-20 left-8 rounded-lg bg-yellow-500 w-1/2 h-3/4 mt-auto mb-auto hover:scale-105 transition duration-500 cursor-default', 
                bodyClasses]">
                    <div class="flex flex-wrap w-full h-full px-4 sm:px-6 lg:px-4 justify-center items-center">
                                <h2 
                                :class="['text-center text-white text-lg md:text-2xl font-bold',
                                subTitleClasses]">
                                    {{ card.title }}
                                </h2>
                            <a :class="['text-white text-base md:text-xl font-light text-center',
                            textClasses]" 
                            :href="card.link"
                            v-if="card.link">
                                <span class="">
                                    {{ card.buttonText || 'Ver más' }}
                                </span>
                            </a>
                    </div>
                </div>
            </div>

        </div>

</div> <!--Main-->


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