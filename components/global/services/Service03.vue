<template>
<div class="flex flex-wrap lg:flex-nowrap content-center"> <!---->

        <div class="w-full lg:w-2/5 relative object-cover bg-center object-center"
        :style="(image) ? `background: url(${image})` : `background: #EFEFEF`"> <!--Image-->
            <!-- <img alt="" 
            class="object-cover bg-center object-center w-full h-full" 
            :src="imageCard || backgroundCard" 
             > -->
            <p class="absolute top-4 left-4 text-white text-3xl py-10 px-5 text-center " > {{ imageText }} </p>
        </div><!--Image-->

        <div class="w-full lg:3/5 px-4 flex flex-wrap px-24 py-12"> <!--Main-->
            <div class=""><!--Header-->
                <div class="mb-8">
                    <h1 
                    :class="['text-xl md:text-4xl font-semibold', titleClasses
                    ]">
                        {{ title }}
                    </h1>
                </div> <!---->
            <!--Header-->
                <div class="grid grid-cols-2 gap-2 ">
                    <!-- Tile 1 -->
                    <div
                    v-for="card in cards" :key="card.titulo" 
                    :class="['flex flex-col bg-gray-100 rounded-lg p-4 m-2 justify-start ', bodyClasses
                    ]"
                    >

                      <div class="w-14 h-14">
                          <img alt="" 
                          class="object-cover bg-center object-center w-full h-full" 
                          :src="card.icon" >
                      </div>
                      <h4 
                      :class="['text-xl md:text-3xl font-semibold  py-8', titleClasses
                      ]">
                          {{ card.title }}
                      </h4>
                      <p 
                      :class="['text-sm md:text-base ', textClasses
                      ]"
                      >
                      {{ card.text }}
                      </p>
                      <div class="flex">
                      <a 
                      class="p-2 leading-none rounded font-bold my-6 bg-gray-50 text-xs md:text-lg uppercase min-w-24 hover:bg-purple-700 hover:text-white text-center"
                      :href="card.link"
                      v-if="card.link">
                      {{ card.buttonText || 'Ver más' }} 
                      </a> 
                      </div>

                    </div>
                    
                </div>
            </div> 
        </div> <!--Main-->
</div>
</template> 

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    cards: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      default: '/img/banner01.jpg',
    },
    imageText: {
      type: String,
      
    },
    imageCard: {
      type: String,
      
    },
    backgroundCard: {
      type: String,
      
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