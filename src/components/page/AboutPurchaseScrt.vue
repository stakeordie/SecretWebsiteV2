<template>
  <section
    class="about-purchase-scrt-wrapper"
    :class="{ contentAboutScrtPurchase, contentPurchaseMehtodCluster }"
  >
    <div
      class="about-purchase-scrt-wrapper__title"
      v-for="(element, index) in contentAboutScrtPurchase"
      :key="index"
    >
      <h6>{{ element.subtitle }}</h6>
      <h2>{{ element.title }}</h2>
      <p>{{ element.message }}</p>
    </div>
    <!-- 🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄 -->
    <div class="about-purchase-scrt">
      <!-- Beginner -->
      <div
        class="about-purchase-scrt__method"
        v-for="(element, index) in contentPurchaseMehtodCluster[0]"
        :key="index"
      >
        <img :src="element.image.url" alt="" />
        <div class="about-purchase-scrt__title">
          <h6>{{ element.level }}</h6>
          <h3>{{ element.clusterTitle }}</h3>
        </div>
        <vue-markdown :source="element.description"></vue-markdown>
        <section class="resources">
          <ul class="v-checker">
            <li v-for="(link, index) in element.linkWithImage" :key="index">
              <a :href="link.url" v-if="link.clusterTitle === 'col1'">
                <img
                  v-for="(image, index) in link.image"
                  :key="index"
                  :src="image"
                  alt=""
                />
                <span>{{
                  link.title
                }}</span>
              </a>
            </li>
          </ul>
          <ul class="v-checker">
            <li v-for="(link, index) in element.linkWithImage" :key="index">
              <a :href="link.url" v-if="link.clusterTitle === 'col2'">
                <img
                  v-for="(image, index) in link.image"
                  :key="index"
                  :src="image"
                  alt=""
                />
                <span>{{
                  link.title
                }}</span>
              </a>
            </li>
          </ul>
          <ul class="v-checker">
            <li v-for="(link, index) in element.linkWithImage" :key="index">
              <a :href="link.url" v-if="link.clusterTitle === 'On Secret Network'">
                <img
                  v-for="(image, index) in link.image"
                  :key="index"
                  :src="image"
                  alt=""
                />
                <span>{{
                  link.title
                }}</span>
              </a>
            </li>
          </ul>
          <ul class="v-checker">
            <li class="li-check" v-for="(link, index) in element.linkWithImage" :key="index">
              <!-- <h6 class="cluster-title">On Ethereum</h6> -->
              <a :href="link.url" v-if="link.clusterTitle === 'On Ethereum'">
                <img
                  v-for="(image, index) in link.image"
                  :key="index"
                  :src="image"
                  alt=""
                />
                <span>{{
                  link.title
                }}</span>
              </a>
            </li>
          </ul>
        </section>
        <vue-markdown class="note" :source="element.note"></vue-markdown>
      </div>
    </div>

    <!-- 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 -->
    
  </section>
</template>

<script>
export default {
  methods: {
    checker() {
      const emptyUl = document.querySelectorAll('.v-checker')
      const emptyLi = document.querySelectorAll('.v-checker > li')
      // const clusterTitle = document.querySelectorAll(',cluster-title')
        console.log(emptyUl);
      const checker = function() {
        for(const element of emptyLi) {
          if(element.innerText === '') {
            element.remove();
            

          }
        }
            for(const ul of emptyUl) {
              if(ul.childNodes === 0) {
                ul.remove();
              }
                console.log(ul);
            }
            // for(const ul of emptyUl) {
            //   if(ul.childNodes.length <= 0) {
            //     ul.remove();
            //   }
            // }
        
      }
      checker();  
    }
  },
  computed: {
    contentAboutScrtPurchase() {
      const contentIntro = this.$static.aboutScrtPurchase.edges.map(
        (it) => it.node.aboutScrtPurchase[0]
      );
      // console.log(contentIntro);
      return contentIntro;
    },
    contentPurchaseMehtodCluster() {
      const content2 = this.$static.aboutScrtPurchase.edges.map(
        (it) => it.node.purchaseMehtodCluster
        .filter(el => {
          // console.log(el.linkWithImage)
          return el.linkWithImage 
        })
      );
      // console.log(content2);
      return content2;
    },
  },
  mounted() {
    this.checker();
  }
};
</script>

<static-query>

query {
  aboutScrtPurchase: allStrapiAboutScrt {
    edges {
      node {
				aboutScrtPurchase {
          subtitle
          title
          message
        }
        purchaseMehtodCluster {
          id
          level
          clusterTitle
          description
          note
          image {
            id
						url
          }
          linkWithImage {
            id
            clusterTitle
            title
            url
            image {
              url
            }
          }
        }
      }
    }
  } 
}

</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
.about-purchase-scrt-wrapper {
  &__title {
    margin-bottom: -11px;
    transform: translateY(-20px);
    display: grid;
    gap: 6px;
    * {
      margin: 0;
    }
    h6 {
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      color: var(--color-highkey-secondary-yellow);
    }
    h2 {
      font-weight: 600;
      font-size: 28px;
      line-height: 36.5px;
      font-family: var(--f-default-headers-font);
    }
    p {
      max-width: 768px;
    }
  }
}
.about-purchase-scrt {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  @include respond-to("<=m") {
    grid-template-columns: 1fr 1fr;
  }
  @include respond-to("<=s") {
    grid-template-columns: 1fr;
  }
  gap: 36px;
  h6 {
    color: #748ba5;
    text-transform: uppercase;
  }
  h3 {
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
  }
  .note {
    p {
      color: #748ba5;
    }
  }
  &__method {
    display: grid;
    gap: 14px;
    margin-bottom: 121px;
    * {
      margin: 0;
    }
    .resources {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 48px;
      width: max-content;
      ul {
        display: grid;
        row-gap: var(--f-gutter);
        padding: 0;
        align-items: start;
        li {
          display: grid;
          width: max-content;
          align-content: start;
          row-gap: var(--f-gutter);
          grid-auto-flow: column;
          h6 {
            color: #d4dce3;
          }
          a {
            display: grid;
            grid-auto-flow: column;
            align-items: self-start;
            justify-content: start;
            gap: 6px;
            * {
              margin: 0;
            }
          }
        }
      }
    }
  }
}
</style>
