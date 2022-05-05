<template>
  <section class="text-gray-600 body-font py-8 lg:py-24">
    <div class="container mx-auto flex mb-10 justify-center">
      <h2
        :class="[
          'max-w-lg mb-6 font-body text-2xl lg:text-3xl font-bold leading-none tracking-tight text-gray-300 md:mx-auto uppercase mx-10 text-center',
          titleClasses,
        ]"
      >
        {{ title }}
      </h2>
    </div>
    <div
      :class="[
        'container mx-auto flex px-5 md:flex-row flex-col items-center',
        bodyClasses,
      ]"
    >
      <div class="px-4 w-full md:w-1/2">
        <!-- <img
          class="object-cover object-center rounded float-right w-full"
          alt="hero"
          :url= "image"
        /> -->
        <div v-html="googleMapsUrl" class="w-full map-responsive" >

        </div>
      </div>
      <div
        class="w-full md:w-1/2 px-4 pt-4 lg:pr-24 flex flex-col md:items-start md:text-left lg:mb-16 mb-0 items-left text-left"
      >
      <div v-if="adress != ''">
        <h5
          :class="[
            'text-2xl font-extrabold mb-1 text-gray-900',
            subTitleClasses,
          ]"
        >
          Dirección
        </h5>
        <p :class="['text-base mb-8 leading-snug', textClasses]">
          {{ adress }}
        </p>
      </div>
        <h5
          :class="[
            'text-2xl font-extrabold mb-1 text-gray-900',
            subTitleClasses,
          ]"
        >
          Contacto
        </h5>
        <p :class="['text-base mb-8 leading-snug', textClasses]">
          <a :href="`mailto:${mail}`">{{ mail }}</a>
        </p>
        <p :class="['text-base mb-8 leading-snug', textClasses]">
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
      required: false, 
      default: '',
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
    subTitleClasses: {
      type: String,
      default: '',
    },
    textClasses: {
      type: String,
      default: '',
    },
    googleMapsUrl: {
      type: String,
      default: '',
    }
  },
}
</script>

<style>

.map-responsive{

    overflow:hidden;

    padding-bottom:56.25%;

    position:relative;

    height:0;

}

.map-responsive iframe{

    left:0;

    top:0;

    height:100%;

    width:100%;

    position:absolute;

}
</style>
