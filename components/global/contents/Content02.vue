<template>
  <div
    :class="[
      'px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20',
      bodyClasses,
    ]"
  >
    <div class="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
      <h2
        :class="[
          'max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-300 md:mx-auto',
          titleClasses,
        ]"
      >
        {{ title }}
      </h2>
    </div>
    <div
      :class="[
        'grid gap-8 row-gap-10 lg:grid-cols-2 text-gray-900',
        textClasses,
      ]"
    >
      <div class="w-full sm:mx-auto sm:text-left">
        <p class="mb-3 text-base">
           {{ text1 }} 
        </p>
      </div>
      <div class="w-full sm:mx-auto sm:text-left">
        <p class="mb-3 text-base">
           {{ text2 }} 
          
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    text1: {
      type: String,
      required: true,
    },
    text2: {
      type: String,
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
