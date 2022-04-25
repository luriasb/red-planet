<template>
    <div class="flex items-center justify-center container mx-auto">
        <!-- Component Start -->
        <div class="grid 2xl:grid-cols-4 gap-4 md:grid-cols-3 px-10 md:px-32 py-10">
            <!-- Title 1 -->
            <div 
            :class="['w-full overflow-hidden flex flex-col justify-center items-center p-2 md:py-10 border border-gray-400 rounded-md',
            bodyClasses]
            "
            v-for="card in cards" :key="card.title">
                <div class="">
                    <img class="object-center object-cover w-44 h-44 mb-10" 
                    :src="card.image" 
                    alt="">
                </div>
                <div class="flex flex-col items-center ">
                    <h4 
                    :class="['text-xl md:text-2xl font-semibold text-center mb-10',
                    titleClasses]
                    ">
                        {{ card.title }}
                    </h4>
                    <p 
                    :class="['text-sm md:text-lg text-center', 
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