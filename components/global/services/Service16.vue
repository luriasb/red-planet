<template>
  <div
    class="container flex flex-wrap content-center justify-start py-10 mx-auto w-full border-b border-gray-200 mb-20"
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
      <div class="grid xl:grid-cols-4 md:grid-cols-2 gap-6 w-full">
            <!-- Title 1 -->
            <div 
            :class="['w-full overflow-hidden flex flex-col justify-center items-center p-2 md:py-10 py-20 px-12 ',
            bodyClasses]
            "
            v-for="card in cards" :key="card.title"
            > 
                <div class="flex flex-col ">
                    
                    <div class="flex flex-wrap">
                        <img
                        class="w-32 h-6 object-center object-cover " 
                        :src="card.ally"
                        alt=""
                        >
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
