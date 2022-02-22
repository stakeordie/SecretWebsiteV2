<template>
  <section class="page-developer">
    <h1 class="page-developer__title">{{sectionTitle}}</h1>
    <div class="page-developer__reasons" v-for="(item, index) in reasons" :key="index">
      <div class="page-developer__reasons__reason">
        <img :src="item.imageUrl" alt="">
        <h6>{{item.title}}</h6>
        <p>{{item.description}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sectionTitle: 'Why Build on Secret Network?',
      reasons: [
        {
          imageUrl: "/temp/devs-ethnical.svg",
          title: "Private-by-Default",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          imageUrl: "/temp/icon-devs-interoperability.svg",
          title: "Blockchain Interoperability",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          imageUrl: "/temp/icon-devs-hundred.sgv",
          title: "Hundreds of New Use Cases",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          imageUrl: "/temp/icon-devs-ethnical.svg",
          title: "Ethical Solutions",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
      ]

    }
  }
}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";


</style>