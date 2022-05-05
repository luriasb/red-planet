<template>
  <section class="py-20" :class="bodyClasses">
    <div class="container mx-auto">
      <div class="w-full px-4 min-h-72">
        <div>
          <img
            class="object-fill w-full rounded"
            src="~/static/img/service14.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="px-4 py-8 mx-auto ml-auto 2xl:px-32 lg:py-16">
        <div class="text-center sm:mx-auto">
          <p
            class="max-w-screen-md mx-auto mb-8 text-lg font-bold text-gray-500 md:text-xl"
            :class="textClasses"
          >
            {{ text }}
          </p>
          <h3
            v-if="name"
            class="box-border p-0 m-0 font-sans text-4xl font-normal text-primary"
          >
            {{ name }}
          </h3>
          <span
            v-if="post"
            class="box-border p-0 m-0 text-base font-semibold leading-6 text-gray-500 border-b border-solid border-neutral-300"
            >{{ post }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    text: {
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
