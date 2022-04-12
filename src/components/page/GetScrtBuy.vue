<template>
  <section class="get-scrt-buy">
    <div class="get-scrt-buy__inside" v-for="(path, index) in sectionContent" :key="index" >
      <div class="get-scrt-buy__description">
        <h5 v-if="path.node.subtitle">
          {{ path.node.subtitle }}
        </h5>
        <h4>{{ path.node.title }}</h4>
        <p>{{ path.node.description }}</p>
      </div>
      <div class="get-scrt-buy__content">
        <div  v-for="(resource, index) in path.node.resource" :key="index">
          <ul class="get-scrt-buy__content__box">
            <a  :href="resource.cta_url"  >
            <li class="get-scrt-buy__content__box__item">
                <img class="item-icon" src="../../assets/icon-features-file.svg" alt="" />
                <div class="get-scrt-buy__content__box__item__details">
                  <h6>{{ resource.title }}</h6>
                  <p>{{ resource.description }}</p>
                  <btn class="link-arrow" :url="resource.cta_url">
                    {{resource.cta_title}}
                    </btn>
                </div>
              
            </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pathId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {      
      sectionContent: []
    };
  },
  methods: {
    getSectionContent(){
      this.sectionContent = this.$static.developerPadthways.edges.filter(
        (it) =>{          
          if(it.node.id == this.pathId){
            it.node.resource = it.node.resource.sort((a,b) => a.order - b.order);
            return it;
          };      
        } 
      )      
    }
  },
  mounted(){
    this.getSectionContent();
  }
 
};
</script>

<static-query>
query {
  developerPadthways: allStrapiDeveloperPathways {
    edges {
      node {
        id
        subtitle
        title
        description
        resource {
          order
          title
          description
          cta_title
          cta_url
        }
      }
    }
  }
}
</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.get-scrt-buy {
  display: grid;
  grid-gap: 68px;
  //margin-top: 68px;

  &:not(:last-child){
    padding-bottom: 32px;

  }
  &:not(:nth-child(2)){
    padding-top: 120px;
   
   @include respond-to("<=m") {
       padding-top: 32px;
    }
  }

  &__inside {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 4px;
    //margin-bottom: 76px;
    //padding-top: 64px;

    @include respond-to("<=m") {
      grid-template-columns: 1fr;
    }
  }

  &__description {
    min-width: 360px;
    padding: var(--f-gutter-xl) 0;

    h5 {
      font-family: montserrat;
      font-weight: 500;
      line-height: 24px;
    }

    h4 {

    }
    p {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
      margin-bottom: 0;

    }

    @include respond-to(">=l") {
      padding-right: 28px;
      border-right: solid 1px var(--color-neutral-dark-mode-04);
    }
    @include respond-to("<=m") {
      border-bottom: solid 1px var(--color-neutral-dark-mode-04);
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    row-gap: 24px;
    margin-left: 36px;

    @include respond-to("<=m") {
      margin: 16px 0;
    }

    @include respond-to("<=xs") {
      grid-template-columns: 1fr;
    }

    &__box {
      border-radius: 10px;
      padding: var(--f-gutter);
      margin: 0;

      &:hover{
        background: var(--color-neutral-dark-mode-04);

          & a{
            color: var(--color-newBrand-blue-01) !important;
          }
      }
      &__item {
        display: grid;
        grid-gap: 10px;
        padding: 0;
        margin: 0;
        

        & .item-icon{
          //color: var(--color-developers-blue-01);
          height: 51px;
          width: 51px;
        }
        
        &__details {
          display: grid;
          grid-gap: 4px;
          h6 {
            font-size: var(--f-h5-text-size);
            margin-bottom: 0;
            color: white;
          }

          p {
            margin-bottom: 0;
          }

          & a {
            padding: 0;
            color: var(--color-newBrand-blue-02) !important;

            &:hover{
              span{
                color: var(--color-newBrand-blue-01) !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
