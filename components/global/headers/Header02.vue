<template>
  <div class="relative">
    <div
      :class="
        parallax
          ? 'bg-cover bg-local sm:bg-fixed bg-center'
          : 'bg-cover bg-center'
      "
      :style="`background-image: url(${image})`"
    >
      <div
        class="px-4 py-40 sm:py-48 mx-auto h-screen sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-60"
      >
        <div class="flex flex-col items-center justify-between xl:flex-row">
          <div class="w-full mb-12 xl:mb-0 text-center">
            <button
              v-if="videoEmbed"
              class="hover:opacity-80"
              @click="modalOpen = !modalOpen"
            >
              <svg
                class="mx-auto w-5 md:w-8 lg:w-10 h-10 md:h-15 lg:h-20 mb-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 43 78"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0L43 39L0 78L0 0Z"
                  fill="#FF7E00"
                />
              </svg>
            </button>

            <h2
              :class="[
                'mb-0 sm:mb-6 text-3xl lg:text-6xl font-bold tracking-tight text-white sm:leading-none',
                titleClasses,
              ]"
            >
              {{ title }}
            </h2>
          </div>
        </div>
        <div v-if="buttonText" class="links mt-4">
          <!--Button-->
          <ul class="flex menu justify-center">
            <li>
              <a
                :href="link"
                class="border-2 border-white-400 text-white font-bold px-2 py-4 md:px-7 md:py-3 rounded-md align-middle transition duration-500 hover:bg-white hover:text-black"
                >{{ buttonText }}</a
              >
            </li>
          </ul>
        </div>
        <!-- <div class="links sm:block">

          <ul class="flex menu justify-center">
            <li>
              <a
                href="#"
                class="border-2 border-white-400 text-white font-bold p-2 rounded-md align-middle transition duration-500 hover:bg-white hover:text-black"
                >Ver más</a
              >
            </li>
          </ul>
        </div> -->
      </div>
    </div>
    <!-- modal -->
    <div
      id="default-modal"
      aria-hidden="true"
      class="overflow-x-hidden overflow-y-auto fixed h-modal h-screen md:h-full pt-10 md:pt-0 top-0 left-0 right-0 md:inset-0 z-50 justify-center items-center flex"
      style="background: rgba(0, 0, 0, 0.75)"
      :class="modalOpen ? '' : 'hidden'"
    >
      <div class="relative w-full max-w-2xl px-4 h-full md:h-auto">
        <!-- Modal content -->
        <div class="rounded-lg shadow relative dark:bg-gray-700">
          <button
            type="button"
            class="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center absolute -right-4 -top-4"
            data-modal-toggle="default-modal"
            @click="modalOpen = !modalOpen"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <!-- Modal header -->
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/RLk7Lho7lDo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
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
    subTitle: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    parallax: {
      type: Boolean,
      default: false,
    },
    buttonText: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    videoEmbed: {
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
  },
  data() {
    return {
      modalOpen: false,
    }
  },
}
</script>
<style></style>
