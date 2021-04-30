<template>
  <div class="blog-filter">
    <h4>Filters</h4>
    <ul>
      <li><button @click="checked = !checked">Announcement <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></button></li>
      <li><button @click="checked = !checked">Blockchain <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></button></li>
      <li><button @click="checked = !checked">Collaboration <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></button></li>
      <li><button @click="checked = !checked">Community <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></button></li>
      <li><button @click="checked = !checked">Dev <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></button></li>
      <li><button @click="checked = !checked">Ecosystem <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></button></li>
      <li><button @click="checked = !checked">Nodes <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></button></li>
      <li><button @click="checked = !checked">Secret Apps <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></button></li>
      <li><button @click="checked = !checked">Staking <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></button></li>
      <li><button @click="checked = !checked">Solutions <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></button></li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>


<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";
.blog-filter {
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(110px, auto));
    padding-left: 0;
    gap: var(--f-gutter);
    @include respond-to("<=m") {
      flex-direction: row;
      flex-flow: wrap;
    }
    li {
      display: flex;
      justify-content: space-between;
      margin: 0;
      button {
        display: flex;
        flex: auto;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: var(--f-gutter-xs) var(--f-gutter-s);
        background: none;
        color: var(--theme-fg);
        border: 1px solid var(--theme-links-default);
        line-height: 1.5;
        @include respond-to(">=l") {
          border: 0;
          padding-left: 0;
        }
        @include respond-to("<=m") {
          img {
            display: none;
          }
        }
      }
    }
  }
}

</style>
