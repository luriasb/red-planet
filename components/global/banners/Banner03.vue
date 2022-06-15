<template>
<div class="bg-primary">
    <div
        class="container flex flex-wrap content-center justify-center py-10 mx-auto w-full"
        >
        <div 
        :class="['w-full xl:w-3/4 flex self-center mb-14 xl:mb-0', titleClasses]">
            <p class="text-white font-bold text-2xl text-center">
                {{ text }}
            </p>
        </div>
        <div class="text-center border rounded-md flex content-center  transition duration-150 ease-in hover:text-primary hover:bg-white cursor-pointer">
            <a
            :class="['text-white px-7 py-4 text-center font-bold hover:text-primary', textClasses]"
            :href="link"
            target="_blank"
            >
                {{ buttonText }}
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    buttonText: {
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
