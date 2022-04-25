<template>
    <div 
    :class="['container mx-auto', 
    bodyClasses]
    "> <!--Main-->
        <div class="w-full">
            <div>
                <h1 
                :class="['p-2 md:px-10 py-4 md:py-12 text-2xl md:text-3xl font-bold text-center', 
                titleClasses]
                ">
                    {{ title }}
                </h1>
            </div>
        </div> <!--TEXT MAIN-->

        <div class="flex items-center justify-center p-2 md:p-10">
        <!-- Component Start -->
        <div class="grid 2xl:grid-cols-4 md:grid-cols-3 gap-6">
            <!-- Title 1 -->
            <div class="w-full overflow-hidden flex flex-col justify-center items-center p-2 md:p-10 "
            v-for="card in cards" :key="card.title">
                <div class="">
                    <img 
                    class="object-center object-fill w-44 h-44 mb-5 md:mb-10" 
                    :src="card.image" 
                    alt="">
                </div>
                <div class="flex flex-col items-center mt-4">
                    <h4 
                    :class="['text-xl md:text-2xl font-semibold mb-5 md:mb-10',
                    subtitleClasses]
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