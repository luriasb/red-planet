<template>
  <div>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData({ $content }) {
    const page = await $content('index').fetch()
    // eslint-disable-next-line
    console.log(page)
    return {
      page,
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
