<template>
<div class="flex flex-wrap lg:flex-nowrap "> <!---->

  <div
  v-for="background in backgrounds"
  :key="background.title" 
  :class="['w-full lg:w-2/5 relative bg-cover bg-center']"
  :style="
      background.image
        ? `background-image: url(${background.image})`
        : `background:${background.color}`"> <!--Image-->
      <!-- <img alt="" 
      class="object-cover bg-center object-center w-full h-full" 
      :src="imageCard || backgroundCard" 
        > -->
      <div class="px-4 lg:px-10 2xl:px-24 pb-16">
      <p class=" text-white text-xl lg:text-3xl font-light pt-12 lg:pt-32" > 
        {{ imageText }}
      </p>
      <h3
        v-if="name"
        class=" box-border p-0 m-0 font-sans text-4xl font-normal text-white pt-12"
        style="line-height: 1.1; letter-spacing: -1px"
      >
        {{ name }}
      </h3>
      <span
        v-if="post"
        class=" box-border p-0 m-0 text-base font-semibold leading-6 text-white border-b border-solid border-neutral-300 pt-4"
      >
        {{ post }}
      </span>
      </div>
  </div><!--Image-->

  <div class="w-full lg:w-3/5 px-4 flex flex-wrap lg:px-20 py-20 "> <!--Main-->

    <div class="mb-8 relative ">
        <h1 
        :class="['text-4xl font-bold title-rectangle', titleClasses
        ]">
            {{ title }}
        </h1>
    </div> <!---->
<!--Header-->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
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
          :class="['text-2xl font-bold  py-8', titleClasses
          ]">
              {{ card.title }}
          </h4>
          <p 
          :class="['text-base font-bold text-gray-500', textClasses
          ]"
          >
          {{ card.text }}
          </p>
          <div class="flex">
          <a 
          class="text-gray-700 p-2 font-bold my-6 text-xs md:text-lg min-w-24 transition duration-150 ease-in hover:text-yellow-500 hover:underline text-center"
          :href="card.link"
          v-if="card.link">
          {{ card.buttonText || 'Ver más' }} 
          </a> 
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
    backgrounds: {
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
    name: {
      type: String,
      default: '',
    },
    post: {
      type: String,
      default: '',
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