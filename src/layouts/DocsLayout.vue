<template>
  <div class="site">
    <Sidebar />
    <main class="main">
      <slot/>
    </main>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Sidebar from '../components/docs/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
@import "../sass/docs/config/_maps.scss";
@import "../sass/docs/config/_colors.scss";
@import "../sass/docs/config/_mixins.scss";
@import "../sass/docs/config/_functions.scss";
@import "@lkmx/flare/src/functions/respond-to";

.site {
  background-color: var(--theme-card-bg-default);
  display: grid;

  @include respond-to(">=m") {
    grid-auto-flow: column;
    grid-template-columns: 300px 1fr;
    grid-auto-columns: max-content;
  }

  @include respond-to("<=m") {
    grid-auto-flow: row;
  }
}

.main {
  padding: 30px 30px 30px 30px;
  max-width: 800px;
  transition: transform .15s ease-in-out;

  @include respond-above(sm) {
    padding: 30px 30px 30px;
    width: 100%;
  }

  @include respond-above(md) {
    padding: 30px 80px 30px;
  }
}
</style>
