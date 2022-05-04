<template>
    <div class="flex flex-wrap container mx-auto py-10 content-center justify-start">

      <div class="flex justify-start mx-auto px-4">
        <div class="mb-8 w-full relative">
            <h1 
            :class="['text-center text-2xl md:text-4xl font-extrabold mb-8 title-rectangle ',
            titleClasses]">
                {{ title }}
            </h1>
        </div>
      </div>
        <!-- Component Start -->
      <div>
        <div class="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 px-10 lg:px-24 ">
            <!-- Title 1 -->
          <div class="w-full overflow-hidden flex flex-col justify-center items-center border border-gray-400 rounded-md"
          v-for="card in cards" 
          :key="card.title">
              <div class="w-full ">
              <img 
              style="height:229px"
              class="object-top object-cover w-full" 
              :src="card.image" 
              alt="">
              </div>

              <div 
              :class="['flex flex-col mt-4 w-full bg-white', 
              bodyClasses]
              ">
                  <h4 
                  :class="['text-xl md:text-2xl font-semibold mb-4 text-center pt-4 px-2 md:px-6 hover:text-yellow-500 ', 
                  titleClasses]
                  ">
                      {{ card.title }}
                  </h4>
                  <p 
                  :class="['text-sm md:text-lg pb-8 text-center px-2 md:px-6 font-bold text-gray-500',
                  textClasses]
                  ">
                      {{ card.text }}
                  </p>
                  <div class="flex justify-end ">
                      <a class="transition duration-500 ease-in-out py-2 md:py-4 px-3 md:px-6 text-gray-500	 hover:text-white bg-gray-200 hover:bg-gray-700 text-xl font-bold rounded-tl-lg " 
                      :href="card.link"
                      v-if="card.link"
                      target="blank">
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