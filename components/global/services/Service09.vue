<template>
    <div 
    :class="['container mx-auto py-10', 
    bodyClasses]
    "> <!--Main-->
        <div class="flex justify-start mx-auto px-4 content-center px-10 lg:px-24">
            <div class="relative w-full text-center">
                <h1 
                :class="['p-2 md:px-10 py-4 md:py-12 text-2xl md:text-4xl font-bold  title-rectangle', 
                titleClasses]
                ">
                    {{ title }}
                </h1>
            </div>
        </div> <!--TEXT MAIN-->

        <div class="flex items-center justify-center px-10 lg:px-24">
        <!-- Component Start -->
          <div class="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6  w-full">
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
    // cardTitle: {
    //   type: String,
    //   required: true,
    // },
    image: {
      type: String,
      default: '/img/banner01.jpg',
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
    subtitleClasses: {
      type: String,
      default: '',
    },
  },
}
</script>