<template>
  <div>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData({ $content }) {
    const page = await $content('site09').fetch()
    // eslint-disable-next-line
    console.log(page)
    return {
      page,
    }
  },
  head() {
    return {
      title: this.page.pageTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description || '',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.page.keywords || '',
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.page.image || '',
        },
      ],
    }
  },
}
</script>
<style>
.title-rectangle {
  padding-top: 32px !important;
}

.title-rectangle::after {
  position: absolute;
  content: '';
  left: -5px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #ff7e00;
  top: -2px;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
</style>
