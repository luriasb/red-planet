<template>
  <div :class="bodyClasses">
    <div
      class="px-8 py-8 lg:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
      <div class="max-w-screen-sm text-center sm:mx-auto">
        <p
          :class="[
            'text-lg lg:text-3xl sm:px-4 leading-normal text-gray-600',
            titleClasses,
          ]"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
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
  },
}
</script>
