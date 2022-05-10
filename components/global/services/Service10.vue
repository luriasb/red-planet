<template>
    <div class="container flex flex-wrap content-center justify-start py-10 mx-auto"> <!--Main-->
      <div class="flex justify-start px-4 lg:px-10 xl:px-24 2xl:px-52 mx-auto">
        <div class="relative w-full mb-8">
          <h1
            :class="[
              'text-center text-2xl md:text-4xl font-bold mb-8 title-rectangle relative max-w-screen-md',
              titleClasses,
            ]"
          >
            {{ title }}
          </h1>
        </div>
      </div>

      <div class="w-full px-4 lg:px-10 xl:px-24 2xl:px-52"> 
          <div 
          class="mb-5 md:mb-10 relative"
          >
              <img 
              class="object-center object-cover mx-auto w-full rounded-lg hero-image video-box" 
              :src="image" 
              alt="">
              <a 
              class="bg-primary absolute right-0 bottom-0 rounded-r-lg rounded-t-lg cursor-pointer"
              :href="video"
              target="blank" 
              style="width:122px; height:112px;">
                <span class="h-full flex justify-center items-center">
                  <svg 
                  fill="white"
                  class="h-10 w-10 "
                  viewBox="0 0 512 512">
                    <path d="M133,440a35.37,35.37,0,0,1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37,7.46-27.53,19.46-34.33a35.13,35.13,0,0,1,35.77.45L399.12,225.48a36,36,0,0,1,0,61L151.23,434.88A35.5,35.5,0,0,1,133,440Z"/>
                  </svg>
                </span>
              </a>
          </div>
      </div>

    <div class="w-full px-4 lg:px-10 xl:px-24 2xl:px-52">
        <!-- Component Start -->
        <div class="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 w-full">
            <!-- Title 1 -->
            <div 
            :class="['w-full overflow-hidden flex flex-col justify-center items-center p-2 md:py-10 border border-gray-300 rounded-md transition duration-300 ease-in hover:shadow-xl py-20',
            bodyClasses]
            "
            v-for="card in cards" :key="card.title"
            > 
                <div class="">
                    <img 
                    class="object-center object-cover w-16 h-16 mb-10" 
                    :src="card.image" 
                    alt="">
                </div>

                <div class="flex flex-col ">
                    <a
                      :href="card.link"
                      :class="[
                        'text-2xl font-bold mb-4 text-center pt-4 px-2 md:px-6 transition duration-150 ease-in hover:text-primary cursor-pointer	',
                        titleClasses,
                      ]"
                      target="blank"
                    >
                      {{ card.text }}
                    </a>
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
    video: {
      type: String,
      default: '',
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
  },
}
</script>

<style>

.video-box{
  border-radius: 5px 0 5px 0;
  color: #fff;
  font-size: 30px;
}

@media (min-width: 640px) {
  .hero-image {
    height: 320px;
  }
}

@media (min-width: 768px) {
  .hero-image {
    height: 377px;
  }
}

@media (min-width: 1024px) {
  .hero-image {
    height: 492px;
  }
}

@media (min-width: 1280px) {
  .hero-image {
    height: 600px;
  }
}

</style>