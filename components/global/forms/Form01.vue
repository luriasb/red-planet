<template>
  <section class="relative py-20 section-area" :class="bodyClasses">
    <div
      class="absolute top-0 left-0 z-0 hidden h-full bg-center bg-cover background-image lg:block"
      :style="`background-image: url(${image})`"
    ></div>
    <div class="container relative mx-auto" style="z-index: 2">
      <div class="flex flex-row">
        <div
          class="relative hidden px-4 py-0 m-0 leading-7 text-gray-800 xl:float-left xl:w-1/4 lg:float-left lg:w-1/4 lg:block"
        >
          <div class="box-border p-0 m-0 leading-7 text-gray-800 md:pb-16">
            <h2
              class="box-border absolute inline-block px-0 pt-8 pb-0 m-0 text-4xl font-bold leading-10 md:text-white title-rectangle"
            >
              {{ text }}
            </h2>
          </div>
        </div>
        <form class="flex w-full pl-0 lg:pl-32 lg:w-3/4" @submit="submit">
          <div class="w-1/2 px-4">
            <div class="shared-form">
              <div class="">
                <input
                  v-model="form.name"
                  required
                  placeholder="Nombre"
                  class="box-border inline-block w-full px-6 py-3 mx-0 mt-0 mb-6 font-medium text-gray-800 bg-white border border-gray-300 border-solid rounded cursor-text"
                />

                <input
                  v-model="form.email"
                  required
                  placeholder="E-mail"
                  class="box-border inline-block w-full px-6 py-3 mx-0 mt-0 mb-6 font-medium text-gray-800 bg-white border border-gray-300 border-solid rounded cursor-text"
                />

                <input
                  v-if="tel"
                  v-model="form.tel"
                  required
                  placeholder="Teléfono"
                  class="box-border inline-block w-full px-6 py-3 mx-0 mt-0 mb-6 font-medium text-gray-800 bg-white border border-gray-300 border-solid rounded cursor-text"
                />
              </div>
            </div>
          </div>
          <div class="w-1/2 px-4">
            <div class="shared-form">
              <textarea
                v-model="form.message"
                required
                name="Mensaje"
                placeholder="Mensaje"
                class="box-border inline-block w-full h-32 px-6 py-4 mx-0 mt-0 mb-3 overflow-auto font-medium text-gray-800 break-words whitespace-pre-wrap bg-white border border-gray-300 border-solid rounded resize-none cursor-text"
              ></textarea>
            </div>
            <div class="flex justify-between">
              <button
                value="submit"
                class="box-border relative inline-block px-6 py-3 m-0 overflow-visible text-base font-bold text-center text-white normal-case bg-gray-800 border-2 border-white border-solid rounded-lg cursor-pointer whitespace-nowrap hover:bg-yellow-500"
                style="transition: all 0.3s ease 0s"
              >
                Enviar
              </button>
              <div class="flex flex-col justify-center flex-grow px-4">
                <div v-if="success === true" class="text-sm text-green-500">
                  {{ successMessage }}
                </div>
                <div v-if="success === false" class="text-sm text-red-500">
                  {{ failureMessage }}
                </div>
              </div>
            </div>
          </div>
        </form>
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
    image: {
      type: String,
      default: '/img/clta-img.jpg',
    },
    bodyClasses: {
      type: String,
      default: '',
    },
    tel: {
      type: Boolean,
      default: false,
    },
    titleClasses: {
      type: String,
      default: '',
    },
    textClasses: {
      type: String,
      default: '',
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
      form: {
        name: '',
        email: '',
        message: '',
        tel: '',
      },
      success: null,
    }
  },
  methods: {
    async submit(e) {
      e.preventDefault()
      try {
        const formData = new FormData()
        formData.append('name', this.form.name)
        formData.append('email', this.form.email)
        if (this.tel) formData.append('tel', this.form.tel)
        formData.append('message', this.form.message)
        const response = await fetch('/contact.php', {
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

<style scoped>
.background-image {
  width: 521px;
}

section:after {
  display: none;
}

@media (min-width: 1024px) {
  section:after {
    display: block;
    background-color: #ff7e00;
    opacity: 0.93;
    width: 521px;
    height: 100%;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    z-index: 1;
  }

  .background-image,
  section:after {
    width: 283px;
  }
}

@media (min-width: 1140px) {
  .background-image,
  section:after {
    width: 350px;
  }
}

@media (min-width: 1280px) {
  .background-image,
  section:after {
    width: 371px;
  }
}

@media (min-width: 1366px) {
  .background-image,
  section:after {
    width: 413px;
  }
}

@media (min-width: 1440px) {
  .background-image,
  section:after {
    width: 451px;
  }
}

@media (min-width: 1579px) {
  .background-image,
  section:after {
    width: 521px;
  }
}

@media (min-width: 1700px) {
  .background-image,
  section:after {
    width: 581px;
  }
}

@media (min-width: 1810px) {
  .background-image,
  section:after {
    width: 635px;
  }
}
</style>
