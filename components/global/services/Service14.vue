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
    <div class="w-full px-4 lg:px-10 2xl:px-60">
      <div
        class="grid gap-6 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 w-full"
        
      >
        <!-- Title 1 -->
        <div
          v-for="card in cards"
          :key="card.title"
          class="flex flex-col items-center justify-center w-full overflow-hidden rounded-t-md transition duration-300 ease-in hover:shadow-xl "
          
        >

          <div
          :style="`background-image: url(${card.image})`"
            :class="[
              'flex flex-col w-full border border-gray-300 rounded-b-md bg-cover card-height',
              bodyClasses,
            ]"
          >
            <div class="bg-opacity flex flex-wrap relative content-end" >
                <a
                :href="card.link"
                :class="[
                    'text-base pb-4 pt-4 w-full text-white px-10',
                    titleClasses,
                ]"
                target="blank"
                >
                {{ card.title }}
                </a>
                <p
                :class="[
                    'text-3xl font-bold pb-14 w-full xl:w-3/4 text-white transition duration-150 ease-in hover:text-primary cursor-pointer px-10',
                    textClasses,
                ]"
                >
                {{ card.text }}
                </p>
                <div class=" absolute bottom-3 right-0">
                  <a
                      v-if="card.link"
                      class="px-5 py-5 text-xl font-semibold text-gray-500 transition duration-500 ease-in-out bg-gray-100 rounded-tl-lg hover:text-white hover:bg-primary text-center"
                      :href="card.link"
                      target="blank"
                  >
                      >>
                  </a>
                </div>
            </div>
          </div>
        </div>

        <!-- Component-->
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
.bg-opacity{
  background-color: #2222327a;
  width: 100%;
  height: 100%;
}

.card-height{
  height: 394px;
}

@media (min-width: 640px){
.card-height{
  height: 670px;
}
}

@media (min-width: 768px){
.card-height{
  height: 378px;
}
}

@media (min-width: 1024px){
.card-height{
  height: 321px;
}
}

@media (min-width: 1280px){
.card-height{
  height: 394px;
}
}

</style>
