<template>
  <footer class="pt-10 bg-gray-800">
    <div class="flex flex-wrap max-w-6xl m-auto text-gray-800 justify-left">
      <!-- Col-1 -->
      <div class="w-full p-5 sm:w-1/2 lg:w-3/12">
        <!-- Col Title -->
        <div
          class="box-border p-0 m-0 mb-10 text-xl font-bold leading-7 text-white md:mb-8"
        >
          {{ firstColumnTitle }}
        </div>

        <!-- Links -->
        <a
          v-for="link in firstColumnLinks"
          :key="link.link"
          :href="link.link"
          class="flex flex-row mb-4 text-sm font-semibold leading-7 text-gray-300 duration-300 transform cursor-pointer hover:text-primary"
        >
          <!-- icons  -->
          <span v-if="link.type === 'phone'" class="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="w-4"
              width="28"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.7-64-64-64zm-32.4 289.5l-11.62 50.39c-1.633 7.125-7.9 12.11-15.24 12.11c-126.1 0-228.7-102.6-228.7-228.8c0-7.328 4.984-13.59 12.11-15.22l50.38-11.63c7.344-1.703 14.88 2.109 17.93 9.062l23.27 54.28a15.642 15.642 0 0 1-4.492 18.22L168.3 232c16.99 34.61 45.14 62.75 79.77 79.75l22.02-26.91c4.344-5.391 11.85-7.25 18.24-4.484l54.24 23.25c6.93 2.994 10.73 10.594 9.03 17.894z"
              ></path>
            </svg>
          </span>

          <span v-else-if="link.type === 'mail'" class="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="w-4"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 64c26.5 0 48 21.49 48 48c0 15.1-7.1 29.3-19.2 38.4L275.2 313.6a32.1 32.1 0 0 1-38.4 0L19.2 150.4C7.113 141.3 0 127.1 0 112c0-26.51 21.49-48 48-48h416zM217.6 339.2a63.9 63.9 0 0 0 76.8 0L512 176v208c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V176l217.6 163.2z"
              ></path>
            </svg>
          </span>

          <span v-else-if="link.type === 'address'" class="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              class="w-4"
              width="36"
              height="32"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="m384 476.1l-192-54.9V35.93l192 54.86V476.1zm32-387.73l127.1-50.84c15.8-6.3 32.9 5.31 32.9 22.29V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8V88.37zM15.09 95.13L160 37.17V423.6L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4c0-9.8 5.975-18.62 15.09-22.27z"
              ></path>
            </svg>
          </span>

          {{ link.text }}
        </a>
      </div>

      <!-- Col-2 -->
      <div class="w-full p-5 sm:w-1/2 lg:w-4/12">
        <!-- Col Title -->
        <div
          class="box-border p-0 m-0 mb-10 text-xl font-bold leading-7 text-white md:mb-8"
        >
          {{ secondColumnTitle }}
        </div>

        <!-- Links -->
        <div class="flex w-full">
          <div class="w-1/2">
            <a
              v-for="link in secondColumnLinks01"
              :key="link.link"
              :href="link.link"
              class="block mb-4 text-sm font-semibold leading-7 text-gray-300 duration-300 transform cursor-pointer hover:text-primary"
            >
              {{ link.text }}
            </a>
          </div>
          <div class="w-1/2">
            <a
              v-for="link in secondColumnLinks02"
              :key="link.link"
              :href="link.link"
              class="block mb-4 text-sm font-semibold leading-7 text-gray-300 duration-300 transform hover:text-primary"
            >
              {{ link.text }}
            </a>
          </div>
        </div>
      </div>

      <!-- Col-3 -->
      <div class="w-full p-5 lg:w-5/12">
        <!-- Col Title -->
        <div
          class="box-border p-0 m-0 mb-10 text-xl font-bold leading-7 text-white md:mb-8"
        >
          {{ thirdColumnTitle }}
        </div>

        <!-- form -->
        <div
          class="box-border px-10 pt-8 pb-10 mx-0 mt-12 mb-0 leading-7 text-white bg-gray-700 rounded"
          data-v-402c0042=""
          data-windy-selected="xHS4cCjCRi2yq_sFSGDD4"
        >
          <p
            class="box-border p-0 mx-0 mt-0 mb-8 text-sm font-semibold text-gray-400"
            data-v-402c0042=""
          >
            {{ thirdColumnDescription }}
          </p>
          <form
            data-v-402c0042=""
            class="box-border relative p-0 m-0 text-white"
            @submit="submit"
          >
            <input
              v-model="mail"
              required
              type="email"
              placeholder="e-mail"
              data-v-402c0042=""
              class="box-border inline-block w-full px-6 py-4 m-0 text-sm font-semibold bg-gray-800 border border-gray-500 border-solid rounded cursor-text"
            />
            <button
              class="box-border absolute p-0 m-0 overflow-visible text-sm text-center normal-case bg-transparent cursor-pointer"
              data-v-402c0042=""
              style="top: 13px; right: 25px"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                class="box-border inline-block p-0 m-0 not-italic font-black leading-none"
                width="16"
                height="16"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M464 64c26.5 0 48 21.49 48 48c0 15.1-7.1 29.3-19.2 38.4L275.2 313.6a32.1 32.1 0 0 1-38.4 0L19.2 150.4C7.113 141.3 0 127.1 0 112c0-26.51 21.49-48 48-48h416zM217.6 339.2a63.9 63.9 0 0 0 76.8 0L512 176v208c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V176l217.6 163.2z"
                ></path>
              </svg>
            </button>
          </form>
          <div class="mt-2">
            <div v-if="success === true" class="text-sm text-green-500">
              {{ successMessage }}
            </div>
            <div v-else-if="success === false" class="text-sm text-red-500">
              {{ failureMessage }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright Bar -->
    <div class="pt-2">
      <div
        class="flex flex-col max-w-6xl px-3 pt-5 pb-5 m-auto text-sm text-gray-400 border-t border-gray-500 md:flex-row"
      >
        <div class="mt-2">{{ copyright }}</div>

        <!-- Required Unicons (if you want) -->
        <!-- Social links -->

        <ul class="flex flex-row mt-2 md:flex-auto md:flex-row-reverse">
          <li v-for="link in socialLinks" :key="link.type">
            <a
              :href="link.link"
              :aria-label="link.type"
              :title="link.type"
              class="font-bold tracking-wide transition-colors duration-200 hover:text-teal-accent-400"
            >
              <!-- Twitter -->
              <svg
                v-if="link.type == 'twitter'"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 mx-2"
              >
                <path
                  d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                ></path>
              </svg>
              <!-- IG -->
              <svg
                v-if="link.type == 'ig'"
                viewBox="0 0 30 30"
                fill="currentColor"
                class="w-5 h-5 mx-2"
              >
                <circle cx="15" cy="15" r="4"></circle>
                <path
                  d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                ></path>
              </svg>
              <!-- FB -->
              <svg
                v-if="link.type == 'fb'"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-5 mx-2"
              >
                <path
                  d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    firstColumnTitle: {
      type: String,
      default: '',
    },
    secondColumnTitle: {
      type: String,
      default: '',
    },
    thirdColumnTitle: {
      type: String,
      default: '',
    },
    thirdColumnDescription: {
      type: String,
      default: '',
    },
    firstColumnLinks: {
      type: Array,
      default: () => [],
    },
    secondColumnLinks01: {
      type: Array,
      default: () => [],
    },
    secondColumnLinks02: {
      type: Array,
      default: () => [],
    },
    copyright: {
      type: String,
      default: '',
    },
    socialLinks: {
      type: Array,
      required: true,
    },
    successMessage: {
      type: String,
      default: 'Se ha enviado correctamente.',
    },
    failureMessage: {
      type: String,
      default: 'No se ha podido enviar.',
    },
  },
  data() {
    return {
      mail: '',
      success: null,
    }
  },
  methods: {
    async submit(e) {
      e.preventDefault()
      try {
        const formData = new FormData()
        formData.append('mail', this.mail)
        const response = await fetch('/newsletter.php', {
          method: 'POST',
          body: formData,
        })

        const data = await response.json()
        this.mail = ''
        if (data.success) {
          this.success = true
        } else {
          this.success = false
        }
      } catch (error) {
        console.log(error)
        this.success = false
      }
    },
  },
}
</script>

<style>
input {
}

form input {
}

form input .asdas {
}
</style>
