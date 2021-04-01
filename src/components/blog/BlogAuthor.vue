<template>
  <div class="blog-author" :class="shareButtons">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    includeShareButtons: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    shareButtons: function() {
      console.log(this.includeShareButtons);
      return this.includeShareButtons ? "share-buttons": ""
    }
  }
}
</script>


<style lang="scss">

</style>
