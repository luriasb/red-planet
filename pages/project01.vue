<template>
  <article>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('project01').fetch()
    // eslint-disable-next-line
    console.log(page)
    return {
      page,
    }
  },
}
</script>
