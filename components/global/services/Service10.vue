<template>
    <div class="container mx-auto"> <!--Main-->
        <div class="w-full px-10 lg:px-24">
            <div class="mb-5 md:mb-10 ">
              <div class="relative">
                <h1 
                :class="[' py-4 md:py-12 text-2xl md:text-4xl font-bold text-center title-rectangle', 
                titleClasses]
                ">
                    {{ title }}
                </h1>
              </div>
                <img 
                class="mx-auto w-full rounded-lg" 
                :src="image" 
                alt="">
            </div>
        </div>

    <div class="flex items-center justify-center">
        <!-- Component Start -->
        <div class="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 px-10 lg:px-24 w-full">
            <!-- Title 1 -->
            <div 
            :class="['w-full overflow-hidden flex flex-col justify-center items-center p-2 md:py-10 border border-gray-400 rounded-md',
            bodyClasses]
            "
            v-for="card in cards" :key="card.title">
                <div class="">
                    <img 
                    class="object-center object-cover w-24 h-24 mb-10" 
                    :src="card.image" 
                    alt="">
                </div>

                <div class="flex flex-col ">
                    <h4 
                    :class="['text-xl md:text-2xl font-semibold text-center mb-10',
                    titleClasses]
                    ">
                        {{ card.title }}
                    </h4>
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