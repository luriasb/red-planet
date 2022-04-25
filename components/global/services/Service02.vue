<template>
    <div class="w-full flex flex-wrap lg:flex-nowrap content-center"> <!--MainContent-->

            <div 
            :class="['w-full md:w-1/2 flex flex-col content-center bg-gray-100 justify-center py-12 ', bodyClasses
            ]"> <!--Text-->
                <div class="py-4"><!--Header-->
                        <h1 
                        :class="['text-2xl md:text-4xl font-semibold mb-10 ml-8  text-center', titleClasses
                        ]">
                            {{ title }}
                        </h1>

                            <p
                            :class="['mb-6 text-base md:text-xl text-black leading-normal text-center', textClasses]"
                            >
                            {{ subtitle }}
                            </p>
                </div> <!--Header-->

              <div class="half-container">
                <div class="mt-2 mx-6 h-6 relative w-auto rounded-sm overflow-hidden"
                v-for= "skill in skills" :key="skill.text" > <!--MainSkill v-for -->
                    <div class=" w-full h-full bg-gray-600 absolute flex justify-end">
                        <span class="text-gray-100 mx-4 font-semibold"> 
                          {{ skill.percentage }} %</span>
                    </div> <!--SkillBG-->
                    <div class=" h-full bg-yellow-500 sm:bg-yellow-500 absolute" :style="`width:${skill.percentage}%;`"> 
                        <span class="text-gray-100 mx-4 font-semibold"> {{ skill.text }} </span><!--SkillProgress-->
                    </div> <!--SkillProgress-->
                </div> <!--MainSkill-->
              </div>
                
            </div>

            <div class="w-full md:w-1/2 mt-4 md:mt-0"> <!--Image-->
                <img alt="" 
                class="object-cover bg-center object-center w-full h-full" 
                :src=  "image">
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

