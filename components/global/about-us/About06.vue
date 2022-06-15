<template>
<div class="w-full flex flex-wrap content-center"> <!---->

        <div class="w-full md:w-1/2 " > <!--Image-->
            <img alt="" 
            class="object-cover bg-center object-center w-full h-full" 
            :src="image" >
        </div><!--Image-->

        <div 
        :class="['w-full md:w-1/2 flex flex-wrap content-center bg-gray-100 py-20',
        bodyClasses,
        ]"> <!--Main-->
            <!--Header-->
          <div class="mb-8 w-full px-4 md:px-10 lg:px-20  2xl:px-32">
              <h1 
              :class="['w-2/3 md:w-full 2xl:w-1/2 text-4xl font-bold  text-gray-900 title-rectangle relative ',
              titleClasses]">
                  {{ title }}
              </h1>
          </div> <!---->
      <!--Header-->
      
          <div  
          class="w-full mb-8 px-4 md:px-10 lg:px-20  2xl:px-32"
          >
                <div class="w-full flex items-center mb-8">
                    <img 
                    :src="icon" 
                    alt=""
                    class="w-16"
                    >
                    <h2 
                    :class="['ml-4 text-2xl font-semibold', subtitleClasses]">
                        {{ subtitle }}
                    </h2>
                </div>
                <p 
                :class="['w-full 2xl:w-3/5 pl-20 text-base font-semibold text-gray-400', textClasses]">
                    {{ content }}
                </p>
                <h3
                    v-if="name"
                    class="ml-20 box-border p-0 m-0 font-sans text-4xl font-normal text-primary pt-12"
                    style="line-height: 1.1; letter-spacing: -1px"
                >
                    {{ name }}
                </h3>
                <span
                    v-if="post"
                    class="ml-20 box-border p-0 m-0 text-base font-semibold leading-6 text-gray-400 border-b border-solid border-neutral-300 pt-4"
                >
                    {{ post }}
                </span>
          </div> 
            
        </div> <!--Main-->
    <!-- </div> -->
</div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
    post: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '/img/banner01.jpg',
    },
    icon: {
      type: String,
      default: '/img/icon01.svg',
    },
    bodyClasses: {
      type: String,
      default: '',
    },
    titleClasses: {
      type: String,
      default: '',
    },
    subtitleClasses: {
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
