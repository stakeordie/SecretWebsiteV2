<template>
  <default-layout class="content">
    <ClientOnly>
      <VueRemarkContent />
    </ClientOnly>
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
:deep(p) {
  opacity: .8;
}

:deep(h2) {
  padding-top: 100px;
  margin-top: -80px;

  @include respond-above(md) {
    font-size: 2rem;
  }
}

:deep(p) > img {
  max-width: 100%;
}

.markdown {
  padding-bottom: 50vh;
}

h1{
  font-size: var(--f-h2-text-size);
}
h2{
  font-size: var(--f-h3-text-size);
}
h3{
  font-size: var(--f-h4-text-size);
}
h4{
  font-size: var(--f-h5-text-size);
} 
h5{
  font-size: var(--f-h6-text-size);
}
h1,
h2,
h3,
h4 {
  font-weight: 700;
  line-height: 1.2;
}
.main{
  h1,h2,h3,h4,h5,h6{
    font-family: 'Hind';
  }
}
h1 {
  margin-top: 0; 
}
</style>
