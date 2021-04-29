<template>
  <default-layout>
    <VueRemarkContent />
  </default-layout>
</template>

<script>
  export default {
    metaInfo() {
      return {
        title: this.$page.content.title
      }
    }
  }
</script>

<page-query>

query($id: ID) {
  content(id: $id) {
    title
  }
}
</page-query>

<style>

</style>