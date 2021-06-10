<template>
  <div>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('hello').fetch()
    // eslint-disable-next-line
    return {
      page,
    }
  },
  layout: 'documentation',
}
</script>
