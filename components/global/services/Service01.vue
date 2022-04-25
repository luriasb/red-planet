<template>
<div class="w-full flex flex-wrap lg:flex-nowrap content-center"> <!---->

    <!-- <div class="w-full items-center  ml-auto mr-auto">  -->
        <div class="w-full md:w-1/2 " > <!--Image-->
            <img alt="" 
            class="object-cover bg-center object-center w-full h-full" 
            :src=  "image" >
        </div><!--Image-->

        <div 
        :class="['w-full md:w-1/2 px-2 md:px-8 xl:px-20 flex flex-wrap content-center bg-gray-100 justify-center',
        bodyClasses,
        ]"> <!--Main-->
            <!--Header-->
                <div >
                    <h1 
                    :class="['text-xl md:text-4xl font-semibold py-8 mx-auto text-gray-900',
                    titleClasses]">
                        {{title}}
                    </h1>
                </div> <!---->
            <!--Header-->
            
                <div v-for="list in lists" :key="list.title" class="mb-2 lg:mb-10">
                    <ul class="list-none mb-4">
                    <li class="py-2"> <!--Li1-->
                        <div class="flex items-center">
                            <div class="text-indigo-700">
                                <svg 
                                class="h-4 md:h-7 w-4 md:w-7 current-color"
                                fill="currentColor"
                                viewBox="0 0 332.17 332.02" >
                                <path 
                                d="M392,210.43c.32,91.16-75.14,167.06-168.83,165.56-91.14-1.46-165-77-163.3-169.17C61.53,116.76,136.28,42.11,229.55,44,320.1,45.88,392.74,120.45,392,210.43ZM201.94,281.09a24.33,24.33,0,0,0,17.75-7.46l19.09-19.08q37.11-37.08,74.21-74.19c8.75-8.76,10.4-20.36,4.47-30.07-8.24-13.46-26.13-15.36-37.78-3.79Q242.83,183.13,206.21,220c-2.94,3-4.51,3.58-7.72.17-8.66-9.22-17.7-18.1-26.8-26.9-9.78-9.47-24.38-9.37-33.69,0s-9.37,23.94.23,33.67c15.55,15.77,31.3,31.36,47,47A23.59,23.59,0,0,0,201.94,281.09Z" transform="translate(-59.86 -43.99)"/>
                                </svg>
                            </div>
                            <div>
                                <h4 
                                :class="['text-gray-600 text-base mx-2 md:text-xl', textClasses]">
                                {{ list.text}}
                            </h4>
                            </div>
                        </div>
                    </li> <!--Li1-->
                    
                </ul>
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
    lists: {
      type: Array, 
      required: true,
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