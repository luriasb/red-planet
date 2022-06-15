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
      <div class="grid 2xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-6 w-full">
            <!-- Title 1 -->
            <div 
            :class="['w-full overflow-hidden flex flex-col justify-center items-center md:pt-10 border border-gray-300 rounded-md transition duration-300 ease-in hover:shadow-xl pt-20 ',
            bodyClasses]
            "
            v-for="card in cards" :key="card.title"
            > 
                <div class="flex flex-col ">
                    <div class="px-12">
                        <p
                        :class="[
                            'text-lg text-gray-400 pt-4 font-semibold',
                            titleClasses,
                        ]"
                        >
                        {{ card.text }}
                        </p>

                        <p
                        :class="[
                            'text-3xl pt-4 font-bold w-3/4 hover:text-primary transition duration-150 ease-in cursor-pointer' ,
                            titleClasses,
                        ]"
                        >
                        {{ card.title }}
                        </p>
                        <img
                            class="w-16 h-16 rounded-full object-center object-cover my-10" 
                            :src="card.avatar"
                            alt=""
                        >
                    </div>
                    <img
                        class="w-full object-center object-cover image-bg" 
                        :src="card.image"
                        alt=""
                    >
                    <div class="flex flex-wrap hover:bg-primary hover:text-white transition duration-150 ease-in w-full cursor-pointer">
                        <div class="px-12 py-5">
                        <a 
                        :href="card.link"
                        target="_blank"
                        class="font-bold text-base ">
                            {{ card.button }}
                        <span class="right-2">
                            >>
                        </span>
                        </a>
                        </div>
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

<style>

@media (min-width: 640px){
.image-bg{
  height: 300px;
}
}

@media (min-width: 768px){
.image-bg{
  height: 300px;
}
}

@media (min-width: 1024px){
.image-bg{
  height: 200px;
}
}

@media (min-width: 1280px){
.image-bg{
  height: 200px;
}
}

</style>

