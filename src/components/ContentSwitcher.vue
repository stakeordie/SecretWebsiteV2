<template>
  <div :class="filteredBrochure" class="content-switcher">
    <aside class="content-switcher__sidebar">
      <h3 class="content-switcher__sidebar__header">What You’ll Do:</h3>
      <nav class="content-switcher__sidebar__navigation">
        <a :class="{active: selectedAnchor == index}" href="" v-on:click="getContentID(index)" v-for="(nav, index) in navigationBrochure" :key="index">
          <span class="content-switcher__sidebar__navigation--desktop">{{nav.card_title}}</span>
          <span class="content-switcher__sidebar__navigation--mobile">{{nav.title_short}}</span>
        </a>
      </nav>
    </aside>
    <section class="content-switcher__content" v-for="(brochure, index) in filteredBrochure" v-bind:key="index">
      <div class="content-switcher__content__image">
        <img :src="brochure.image.url" alt="">
      </div>
      <div :class="getContentID" class="content-switcher__content__message">
        <h4>{{brochure.card_title}}</h4>
        <p>{{brochure.subtitle}}</p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        targetID: 0,
        selectedAnchor: 0,
        whatYoullDo: [{
            id: 1,
            order: 1,
            title: 'Learn about Privacy',
            image: 'http://localhost:8080/assets/img/test-1.svg',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus qui eum necessitatibus, commodi perferendis libero reprehenderit accusamus quo dolorum omnis odit impedit incidunt est voluptatibus ut totam assumenda hic!'
          },
          {
            id: 2,
            order: 2,
            title: 'Spread Awareness',
            image: 'http://localhost:8080/assets/img/test-2.svg',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus qui eum necessitatibus, commodi perferendis libero reprehenderit accusamus quo dolorum omnis odit impedit incidunt est voluptatibus ut totam assumenda hic!'
          },
          {
            id: 3,
            order: 3,
            title: 'Build Products',
            image: 'http://localhost:8080/assets/img/test-3.svg',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus qui eum necessitatibus, commodi perferendis libero reprehenderit accusamus quo dolorum omnis odit impedit incidunt est voluptatibus ut totam assumenda hic!'
          }
        ]
      }
    },
    methods: {
      getContentID(index) {
        this.targetID = index;
        this.selectedAnchor = index;
      }
    },
    computed: {
      filteredContent() {
        const getContent = this.whatYoullDo;
        let filtered = getContent.filter((value, index, arr) => index === this.targetID);
        return filtered;
      },
      navigationBrochure() {
      const navigationBrochure = this.$static.secretAgentBrochure.edges[0].node.card;
      return navigationBrochure;
      },
      filteredBrochure() {
      const content = this.$static.secretAgentBrochure.edges[0].node.card;
      let filtered = content.filter(
        (value, index, arr) => value.id === this.targetID + 1
      );
      return filtered;
    },
    }
  }

</script>


<static-query>

query {
  secretAgentBrochure: allStrapiAgentLandingBrochure {
    edges {
      node {
        title
        card {
          id
          anchor_title
          card_title
          subtitle
          title_short
          image {
            url
          }
        }
      }
    }
  }
}

</static-query>


<style lang="scss">
  @import "@lkmx/flare/src/functions/_respond-to.scss";

  .content-switcher {
    display: grid;
    align-items: center;
    grid-auto-flow: column;
    gap: var(--f-gutter);
    grid-template-columns: 30% 1fr;

    @include respond-to("<=m") {
      grid-auto-flow: row;
      grid-template-columns: 1fr;
    }

    &__sidebar {
      display: grid;
      gap: var(--f-gutter-l);
      align-items: center;

      &__header {
        margin: 0;
        @include respond-to("<=m") {
           text-align: center;
         } 
      }

      &__navigation {
        display: grid;
        grid-area: var(--f-gutter);
        gap: var(--f-gutter-xs);

        @include respond-to("<=m") {
          grid-auto-flow: column;
          justify-items: start;
        }
        &--mobile {
          display: none;       
         @include respond-to("<=m") {
           display: grid;       
         } 
        }
        &--desktop {
          display: none;  
         @include respond-to(">=l") {
            display: grid;       
         } 
        }
        a {
          font-size: var(--f-gutter);
          font-family: var(--f-default-headers-font);
          color: var(--color-neutral-dark-mode-05);
          cursor: pointer;

          &.active {
            color: var(--color-neutral-dark-mode-06);
            font-weight: var(--f-default-headers-weight);
          }
        }
      }
    }

    &__content {
      display: grid;
      grid-auto-flow: column;
      gap: var(--f-gutter-xl);
      align-items: center;
      grid-template-columns: 300px 1fr;

      @include respond-to("<=s") {
        grid-auto-flow: row;
        grid-template-columns: 1fr;
        justify-items: center;
      }
      &__image {
        img {
          max-height: 300px;
          min-height: 300px;
          // width: auto;
          // max-width: 300px;
        }
      }
      &__message {
        h4 {
          @include respond-to("<=s") {
            text-align: center;
          }
        }
      }
    }
  }

</style>
