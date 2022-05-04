<template> 
<div class="container mx-auto py-16"> <!--Main-->
  <div class="w-full "> <!--TEXT MAIN-->
    <div class="px-8 lg:px-24 ">
      <div class="relative ">
        <h1 
        :class="['py-4 md:py-4 text-2xl md:text-4xl font-bold  title-rectangle ',
        titleClasses]">
            {{ title }}
        </h1>
      </div>

      <div class="my-6 flex justify-center"> <!--Button-->

        <a :class="['bg-black px-12 py-3.5 font-semibold text-white inline-flex items-center rounded-md transform ease-in duration-100 hover:bg-yellow-500 min-w-24 ',
        textClasses]" 
        :href="link"
        v-if="link">
            <span class="">
                {{ link || 'Ver más' }}
            </span>
        </a>
          
      </div> <!--Button-->
    </div>
  </div> <!--TEXT MAIN-->

  <div class="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 px-8 lg:px-24 ">

    <div class="relative w-full h-96 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg" 
    :style="`background-image: url(${card.image})`"
    v-for="card in cards" :key="card.title"
    >
      <div  
      :class="['absolute top-20 left-8 rounded-lg bg-yellow-500 w-1/2 h-3/4 transform hover:scale-110 ease-in duration-100 ', 
      bodyClasses]">
          <div class="flex flex-wrap w-full h-full px-4 sm:px-6 lg:px-10 items-center">
            <h2 
            :class="['text-white text-lg md:text-2xl font-bold w-full',
            subTitleClasses]">
                {{ card.title }}
            </h2>
            <a :class="['text-white text-base md:text-lg font-bold cursor-pointer',
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