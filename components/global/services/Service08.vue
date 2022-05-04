<template>
    <div class="flex items-center justify-start container mx-auto py-10">
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
                    <p 
                    :class="['text-sm md:text-lg text-center font-bold text-gray-500', 
                    textClasses] 
                    ">
                        {{ card.text }}
                    </p>
                </div>
            </div>
            
        </div>
        <!-- Component End  -->

    </div>
</template>

<script>
export default {
  props: {
    cards: {
      type: Array,
      required: true,
    },
    // text: {
    //   type: String,
    //   required: true,
    // },
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