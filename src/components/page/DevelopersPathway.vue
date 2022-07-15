<template>
  <section class="page-developer-pathway">
    <div class="page-developer-pathway__inside" v-for="(path, index) in sectionContent" :key="index" >
      <div class="page-developer-pathway__description">
        <h6 v-if="path.node.subtitle">
          {{ path.node.subtitle }}
        </h6>
        <h3>{{ path.node.title }}</h3>
        <p>{{ path.node.description }}</p>
      </div>
      <div class="page-developer-pathway__content">
        <div  v-for="(resource, index) in path.node.resource" :key="index">
          <ul class="page-developer-pathway__content__box">
            <a  :href="resource.cta_url"  >
            <li class="page-developer-pathway__content__box__item">
              
                <div class="page-developer-pathway__content__box__item__icon">
                  <img src="../../assets/icon-features-file.svg" alt="" />
                </div>
                <div class="page-developer-pathway__content__box__item__details">
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
        <!-- <div class="page-developer-pathway__content__box" v-for="(resource, index) in path.items" :key="index">
        <ul :url="resource.url">
          <li class="page-developer-pathway__content__box__item" >
            <div class="page-developer-pathway__content__box__item__icon">
              <img :src="resource.image" alt="" />
            </div>
            <div class="page-developer-pathway__content__box__item__details" >
              <h6>{{ resource.title }}</h6>
              <p>{{ resource.description }}</p>
              <btn class="link-arrow" :url="resource.url">{{
                resource.urlTitle
              }}</btn>
            </div>
          </li>
        
        </ul>
        </div> -->
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
  developerPadthways: allStrapiDeveloperPathway {
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

.page-developer-pathway {
  display: grid;
  grid-gap: 68px;
  margin-top: 68px;

  &__inside {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 4px;
    margin-bottom: 76px;

    @include respond-to("<=m") {
      grid-template-columns: 1fr;
    }
  }

  &__description {
    min-width: 360px;

    h6 {
      font-family: montserrat;
      text-transform: uppercase;
      font-weight: 500;
      font-size: var(--f-h5-text-size);
      color: var(--color-neutral-dark-mode-05);
      line-height: 24px;

      @include respond-to("<=s") {
        font-size: var(--f-h6-text-size);
      }
    }

    h3 {
      font-size: var(--f-h3-text-size);
      line-height: 1;
    }
    p {
      font-size: var(--paragraph-font-size-big);
      font-weight: 100;
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
      }
      &__item {
        display: grid;
        grid-template-columns: 24px 1fr;
        grid-gap: 10px;
        padding: 0;
        margin: 0;

        &__icon{
          color: var(--color-developers-blue-01);
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

          a {
            padding: 0;
          }
        }
      }
    }
  }
}
</style>
