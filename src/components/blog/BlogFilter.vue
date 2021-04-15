<template>
  <div class="blog-filter">
    <h4>Filters</h4>
    <ul>
      <li @click="checked = !checked">Announcement <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></li>
      <li @click="checked = !checked">Blockchain <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></li>
      <li @click="checked = !checked">Collaboration <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></li>
      <li @click="checked = !checked">Community <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></li>
      <li @click="checked = !checked">Dev <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></li>
      <li @click="checked = !checked">Ecosystem <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></li>
      <li @click="checked = !checked">Nodes <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></li>
      <li @click="checked = !checked">Secret Apps <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></li>
      <li @click="checked = !checked">Staking <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></li>
      <li @click="checked = !checked">Solutions <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>


<style lang="scss">

.blog-filter {
  ul {
    display: grid;
    li {
      display: flex;
      justify-content: space-between;
    }
  }
}

</style>
