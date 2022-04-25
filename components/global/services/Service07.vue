<template>
    <div class="flex items-center justify-center container mx-auto py-10">
        <!-- Component Start -->
        <div class="grid 2xl:grid-cols-4 md:grid-cols-3 gap-6 px-10 md:px-32 ">
            <!-- Title 1 -->
            <div class="w-full overflow-hidden flex flex-col justify-center items-center border border-gray-400"
            v-for="card in cards" :key="card.title">
                <div class="w-full">
                <img 
                class="object-center object-cover w-full " 
                :src="card.image" 
                alt="">
                </div>

                <div 
                :class="['flex flex-col mt-4 w-full bg-white', 
                bodyClasses]
                ">
                    <h4 
                    :class="['text-xl md:text-2xl font-semibold mb-4 text-center pt-4 px-2 md:px-6', 
                    titleClasses]
                    ">
                        {{ card.title }}
                    </h4>
                    <p 
                    :class="['text-sm pb-8 text-center px-2 md:px-6',
                    textClasses]
                    ">
                        {{ card.text }}
                    </p>
                    <div class="flex justify-end">
                        <a class="py-2 md:py-4 px-3 md:px-6 font-medium bg-gray-200 text-xl uppercase" 
                        :href="card.link"
                        v-if="card.link">
                            >
                        </a>
                    </div>
                </div>
            </div>

        <!-- Component-->
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
    // link: {
    //   type: String,
    //   default: '',
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