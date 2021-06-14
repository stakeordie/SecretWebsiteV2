<template>
  <div class="site">
    <Sidebar />
    <main class="main">
      <slot/>
    </main>
    <SidebarRight/>
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
import SidebarRight from '../components/docs/SidebarRight.vue'

export default {
  components: {
    Sidebar,
    SidebarRight
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
  width: 80vw;
  margin-left: -50px;
  background-color: var(--theme-card-bg-default);
  display: grid;

  @include respond-to(">=m") {
    grid-auto-flow: column;
    grid-template-columns: 20% 60% 20%;
    grid-auto-columns: max-content;
  }

  @include respond-to("<=m") {
    grid-auto-flow: row;
    grid-template-columns: 90vw;
    margin: 0;
    width: 100%;
    .sidebar{
      grid-row: 3;
    }
    .sidebar,.sidebar-right{
      position: relative;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      grid-column: 1;
    }
    .sidebar-right{
      grid-row: 1;
      padding: 2rem;
      width: fit-content;
    }
    .main{ 
      width: calc(100% - 60px);
      padding:20px;
    }
  }
    @include respond-to("<=s") {
    .main{ 
      width: 100%;
    }
  }
}

.main {
  // padding: 30px 0;
  max-width: 800px;
  transition: transform .15s ease-in-out;

  @include respond-above(sm) {
    padding: 30px 30px 30px;
    width: 100%;
  }

  @include respond-above(md) {
    padding: 40px 10px;
  }
}
</style>
