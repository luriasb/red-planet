<template>
    <div class="w-full flex flex-wrap md:flex-nowrap content-center"> <!--MainContent-->

      <div 
      :class="['w-full md:w-1/2 flex flex-col content-center bg-gray-100 justify-center py-8 md:py-16 ', bodyClasses
      ]"> <!--Text-->
          <div class="px-8 lg:pl-24 mb-2 md:mb-8 md:pr-10 2xl:px-72"><!--Header-->
            <div class="relative">
              <h1 
              :class="['text-2xl md:text-4xl font-bold mb-10 title-rectangle ', titleClasses
              ]">
                  {{ title }}
              </h1>
            </div> 
              <p
              :class="['text-base md:text-xl font-bold text-gray-500 ', textClasses]"
              >
              {{ subtitle }}
              </p>
                                
          </div> <!--Header-->

        <div class="px-8 lg:pl-24 md:pr-10 mb-8 md:mb-16 2xl:px-72">
          <div class="h-6 relative w-auto rounded-sm overflow-hidden mt-10"
          v-for="skill in skills" :key="skill.text" > <!--MainSkill v-for -->
              <div class=" w-full h-full bg-gray-400 absolute flex justify-end">
                  <span class="text-gray-100 mx-4 font-semibold"> 
                    {{ skill.percentage }} % </span>
              </div> <!--SkillBG-->
              <div class=" h-full bg-yellow-500 absolute" 
              :style="`width:${skill.percentage}%;`"> 
                  <span class="text-gray-100 mx-4 font-semibold"> 
                    {{ skill.text }} 
                  </span><!--SkillProgress-->
              </div> <!--SkillProgress-->
          </div> <!--MainSkill-->
        </div>
          
      </div>

      <div class="w-full md:w-1/2 mt-4 md:mt-0"> <!--Image-->
          <img alt="" 
          class="object-cover bg-center object-center w-full h-full" 
          :src="image">
      </div><!--Image-->

    </div> <!--MainContent-->

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
    image: {
      type: String,
      default: '/img/banner01.jpg',
    },
    skills: {
      type: Array,
      required: true,
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

