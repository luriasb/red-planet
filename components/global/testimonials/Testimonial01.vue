<template>
  <div
    class="container flex flex-wrap content-center justify-start py-10 mx-auto w-full"
  >
    <!-- Component Start -->
    <div class="w-full px-4 lg:px-10 xl:px-24 2xl:px-52 ">
      <div class="w-full">
            <!-- Title 1 -->
            <div 
            class="'w-full overflow-hidden flex flex-col justify-center items-center p-2 md:py-10 py-20',
            bodyClasses"
            > 
                <div class="bg-primary hover:bg-gray-200 rounded-full p-11 transition duration-150 ease-in">
                    <svg
                    class="w-9 h-9"
                    viewBox="0 0 24 24"
                    fill="white">
                    <g>
                        <path 
                        d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    </g>
                </svg>
                </div>

                <div class="flex flex-col mt-6">
                    <p
                      :class="[
                        'text-2xl font-bold mb-4 text-center pt-4 px-2 md:px-6 max-w-screen-md',
                        titleClasses,
                      ]"
                      target="blank"
                    >
                      {{ title }}
                    </p>
                    <p 
                    :class="['text-lg text-center font-semibold text-primary px-8', 
                    textClasses] 
                    ">
                        {{ name }} 
                    <span
                    :class="['text-lg text-center font-normal text-gray-400', 
                    textClasses] 
                    "> 
                        / {{ text }} 
                    </span>
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    text: {
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
