<template>
  <div>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    console.log(params)
    const page = await $content(`docs/${params.slug}`).fetch()
    // eslint-disable-next-line
    return {
      page,
    }
  },
  layout: 'documentation',
}
</script>
