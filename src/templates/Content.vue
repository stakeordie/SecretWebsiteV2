<template>
  <default-layout>
    <VueRemarkContent />
  </default-layout>
</template>

<script>
  export default {
    metaInfo() {
      return {
        title: this.$page.content.title,
        meta: [
          {
            key: 'og:title',
            property: 'og:title',
            content: 'Secret Network - ' + this.$page.content.title
          },
          {
            key: 'og:url',
            property: 'og:url',
            content: 'https://scrt.network' + this.$route.fullPath
          }
        ]
      }
    }
  }
</script>

<page-query>
  query($id: ID!) {
    content(id: $id) {
      title
      path
    }
  }
</page-query>

<style>

</style>