<template>
  <default-layout>
    <docs-layout>
      <VueRemarkContent />
    </docs-layout>
  </default-layout>
</template>

<page-query>
query Doc ($path: String!) {
  doc: doc (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.doc.title,
      meta: [
        { key: 'description', name: 'description', content: this.$page.doc.description }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../sass/docs/config/_maps.scss";
@import "../sass/docs/config/_colors.scss";
@import "../sass/docs/config/_mixins.scss";
@import "../sass/docs/config/_functions.scss";
/deep/ > p {
  opacity: .8;
}

/deep/ > h2 {
  padding-top: 100px;
  margin-top: -80px;

  @include respond-above(md) {
    font-size: 2rem;
  }
}

/deep/ > p > img {
    max-width: 100%;
  }

.markdown {
  padding-bottom: 50vh;
}
</style>
