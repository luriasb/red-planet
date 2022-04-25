<template>
    <div class="container mx-auto"> <!--Main-->
        <div class="w-full">
            <div class="mb-5 md:mb-10 ">
                <h1 
                :class="['md:px-10 py-4 md:py-12 text-xl md:text-5xl font-bold text-center', 
                titleClasses]
                ">
                    {{ title }}
                </h1>
                <img 
                class="mx-auto w-full rounded-lg" 
                :src= "image" alt="">
            </div>
        </div>

    <div class="flex items-center justify-center">
        <!-- Component Start -->
        <div class="grid 2xl:grid-cols-4 md:grid-cols-3 gap-6">
            <!-- Title 1 -->
            <div 
            :class="['w-full overflow-hidden flex flex-col justify-center items-center p-2 mdpy-10 border border-gray-400 rounded-md', bodyClasses]
            "
            v-for="card in cards" :key="card.title">
                <div >
                    <img class="object-center object-cover w-44 h-44 mb-10" 
                    :src="card.image" 
                    alt="">
                </div>
                <div class="flex flex-col items-center ">
                    <h4 
                    :class="['text-xl md:text-2xl font-semibold text-center mb-10 px-1 md:px-5 hover:text-yellow-500',
                    textClasses]
                    ">
                        {{ card.text }}
                    </h4>
                </div>
            </div>
            
        <!-- Component -->

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
    cards: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      default: '/img/banner01.jpg',
    },
    // image2: {
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