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
          <!-- {{ text1 }} -->
          A las personas les gusta conocer la forma en la que trabajan las
          empresas. Por esta razón existe este espacio, para que hables sobre
          qué hace tu empresa. Además, es una gran oportunidad para decirle a la
          gente qué ofreces, en qué te diferencias de los demás y sobre todo,
          por qué eres la mejor opción para el público.
          <br /><br />
          Aprovecha para hablar sobre las motivaciones que tiene tu empresa y de
          tus procesos para ofrecer productos o servicios de calidad. Puedes
          mencionar tus compromisos con tus clientes para que confíen en tu
          equipo y en tu marca.
        </p>
      </div>
      <div class="w-full sm:mx-auto sm:text-left">
        <p class="mb-3 text-base">
          <!-- {{ text2 }} -->
          Usa este espacio para hablar sobre tu experiencia. Cuéntale a la gente
          cuántos años llevas en el mercado y cómo has evolucionado para brindar
          mejores experiencias a tus clientes. También puedes hablar sobre tu
          trabajo en equipo y tus procesos para rendir mejores resultados.
          <br /><br />
          Piensa en todas esas cosas que te gustaría que tu público conociera
          sobre tu empresa y de todo el esfuerzo detrás de lo que ofreces para
          cautivarlos. Este espacio es una oportunidad para dar a conocer lo que
          casi nadie sabe de tu negocio y puedes aprovecharlo de forma positiva.
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
