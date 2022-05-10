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
    <div class="w-full px-4 lg:px-10 xl:px-24 2xl:px-52 ">
      <div class="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 w-full">
            <!-- Title 1 -->
            <div 
            :class="['w-full overflow-hidden flex flex-col justify-center items-center p-2 md:py-10 border border-gray-300 rounded-md transition duration-300 ease-in hover:shadow-xl py-20',
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

                <div class="flex flex-col ">
                    <a
                      :href="card.link"
                      :class="[
                        'text-2xl font-bold mb-4 text-center pt-4 px-2 md:px-6 transition duration-150 ease-in hover:text-primary cursor-pointer	',
                        titleClasses,
                      ]"
                      target="blank"
                    >
                      {{ card.text }}
                    </a>
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
