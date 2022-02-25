<template>
  <section class="page-developer-second">
      <div class="page-developer-second__content" v-for="(item, index) in material" :key="index">
      
        <div class="page-developer-second__content__info">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <btn class="lcenter-text no-arrow" :url="item.url">{{ item.urlTitle }}</btn>
        </div>
        <div class="page-developer-second__content__img" >
        <img :src="item.imageUrl" alt="" />    
        </div>
        
      
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      material: [
        {
          imageUrl: "/temp/developers-get-join.svg",
          title: "Join the community",
          description:
            "Become a Secret Agent and advance a better, more empowering web. ",
          urlTitle: "Get involved",
          url: "google.com",
        },
        
      ]
    }
  }
  
}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-developer-second{

  margin: 42px 0;

    &__content{
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-gap:102px;

         @include respond-to("<=s"){
           grid-template-columns: 1fr;
           grid-gap:0px;
         }

        &__info{
            margin:auto 0;
             
             @include respond-to("<=s"){
           order:2;
           padding: var(--f-gutter);
         }
            
           
            p{
                font-size: var(--paragraph-font-size-big);
            }
        }
        &__img{
          justify-content: right;

          @include respond-to("<=s"){
           order:1;
         }
        }
    }
}

</style>