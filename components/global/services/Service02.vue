<template>
  <div class="flex flex-wrap content-center w-full xl:flex-nowrap">
    <!--MainContent-->

    <div
      :class="[
        'w-full xl:w-1/2 flex flex-col content-center bg-gray-100 justify-center py-8 md:py-16 ',
        bodyClasses,
      ]"
    >
      <!--Text-->
      <div class="mx-4 xl:ml-24 2xl:ml-52 xl:mr-4 2xl:mr-9 ">
        <!--Header-->
        <div class="relative">
          <h1
            :class="[
              'text-4xl font-bold mb-10 title-rectangle ',
              titleClasses,
            ]"
          >
            {{ title }}
          </h1>
        </div>
        <p
          :class="[
            'text-lg font-semibold text-gray-400 ',
            textClasses,
          ]"
        >
          {{ subtitle }}
        </p>
      </div>
      <!--Header-->

      <div class="mx-4 xl:ml-24 2xl:ml-52 xl:mr-4 2xl:mr-9">
        <div
          v-for="skill in skills"
          :key="skill.text"
          class="relative w-auto h-6 mt-10 overflow-hidden rounded-sm"
        >
          <!--MainSkill v-for -->
          <div
            class="absolute flex justify-end w-full h-full bg-gray-200"
          ></div>
          <!--SkillBG-->
          <div
            class="absolute h-full bg-primary"
            :style="`width:${skill.percentage}%;`"
          >
            <span class="absolute mb-1 font-semibold text-gray-100 left-2">
              {{ skill.text }} </span
            ><!--SkillProgress-->
            <span class="absolute mb-1 font-semibold text-gray-100 right-2">
              {{ skill.percentage }} %
            </span>
          </div>
          <!--SkillProgress-->
        </div>
        <!--MainSkill-->
      </div>
    </div>

    <div class="w-full mt-4 xl:w-1/2 md:mt-0">
      <!--Image-->
      <img
        alt=""
        class="object-cover object-center w-full h-full bg-center"
        :src="image"
      />
    </div>
    <!--Image-->
  </div>
  <!--MainContent-->
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