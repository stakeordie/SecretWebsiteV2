<template>
  <section class="page-developer__features">
    <h1 class="page-developer__features__title">{{sectionTitle}}</h1>
    <div class="page-developer__features__reasons" v-for="(item, index) in reasons" :key="index">
      <div class="page-developer__features__reasons__reason">
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
          imageUrl: "temp/icon-features-private.svg",
          title: "Private-by-Default",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          imageUrl: "temp/icon-devs-interoperability..svg",
          title: "Blockchain Interoperability",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          imageUrl: "temp/icon-devs-hundred.svg",
          title: "Hundreds of New Use Cases",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          imageUrl: "temp/devs-ethnical.svg",
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

.page-developer__features{
  position: relative;
    text-align: center ;
    height: 480px;
    top:42px;


    &__title{
        font-size: var(--f-h3-text-size);
        font-family: var(--f-default-headers-font);
        line-height: 30px;
        padding: var(--f-gutter);
        
    }

    &__reasons{
        display: inline-block;
        width: 280px;
        padding: var(--f-gutter-l);
        vertical-align: top;

        @include respond-to("<=s"){
            
            margin: auto;
        }

        &__reason{
            margin: var(--f-gutter);

            h6{
                font-size: var(--f-h4-text-size);
                line-height: 30px;
                
            }
            p{
                font-size: 16px;
            }

            img{
                margin: auto;
                width: 100px;
            }
        }
    }
}

</style>