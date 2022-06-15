<template>
    <div class="container flex flex-wrap content-center justify-start py-10 mx-auto"> <!--Main-->
      <div class="w-full px-4 lg:px-10 xl:px-24 2xl:px-52"> 
          <div 
          class="mb-5 md:mb-10 relative"
          >
              <img 
              class="object-center object-cover mx-auto w-full rounded-lg hero-image video-box" 
              :src="image" 
              alt="">
          </div>
      </div>

    <div class="w-full px-4 lg:px-10 xl:px-24 2xl:px-52">
        <!-- Component Start -->
        <div class="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 w-full">
            <!-- Title 1 -->
            <div 
            :class="['w-full overflow-hidden flex justify-center items-center p-2 ',
            bodyClasses]
            "
            > 
                <div class="relative w-full ">
                    <h1
                        :class="[
                        'text-2xl md:text-4xl font-bold title-rectangle relative max-w-screen-md',
                        titleClasses,
                        ]"
                    >
                        {{ title }}
                    </h1>
                </div>
            </div>

            <div class="w-full overflow-hidden flex p-3 ">
                <p
                    :class="[
                    'text-base font-bold text-gray-400 py-4 lg:py-16 leading-loose',
                    titleClasses,
                    ]"
                >
                    {{ text1 }}
                </p>
            </div>
            <div class="w-full overflow-hidden flex p-3 ">
                <p
                    :class="[
                    'text-base font-bold text-gray-400 py-4 lg:py-16 leading-loose',
                    titleClasses,
                    ]"
                >
                    {{ text2 }}
                </p>
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
      default: '/img/banner01.jpg',
    },
    text1: {
      type: String,
      
    },
    text2: {
      type: String,
      
    },
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