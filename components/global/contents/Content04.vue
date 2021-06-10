<template>
  <section class="text-gray-600 body-font py-8 lg:py-24">
    <div class="container mx-auto flex mb-10 justify-center">
      <h2
        class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-300 md:mx-auto uppercase"
      >
        {{ title }}
      </h2>
    </div>
    <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
      <div class="px-4 w-full md:w-1/2">
        <img
          class="object-cover object-center rounded float-right w-full"
          alt="hero"
          src="~/assets/img/mapa.jpg"
        />
      </div>
      <div
        class="w-full md:w-1/2 px-4 pt-4 lg:pr-24 flex flex-col md:items-start md:text-left lg:mb-16 mb-0 items-left text-left"
      >
        <h5 class="text-2xl font-extrabold mb-1 text-gray-900">Dirección</h5>
        <p class="text-base mb-8 leading-snug">
          {{ adress }}
        </p>
        <h5 class="text-2xl font-extrabold mb-1 text-gray-900">Contacto</h5>
        <p class="text-base mb-8 leading-snug">
          <a :href="`mailto:${mail}`">{{ mail }}</a>
        </p>
        <p class="text-base mb-8 leading-snug">
          <span>¡Llámanos!</span> <br />
          <a :href="`tel:${tel}`"> {{ tel }} </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '/img/banner01.jpg',
    },
  },
}
</script>

<style></style>
