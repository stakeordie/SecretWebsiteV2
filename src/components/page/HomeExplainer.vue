<template>
  <div class="home--build_better_internet">

    <!-- Want to build better internet title -->
    <div class="color-change" number="1" number-m="1" number-s="1">
      <h2 class="first-heading">{{ homeExplainer.title }}</h2>
      <h2>
        {{ homeExplainer.subtitle }} <typical :steps="steps" :loop="Infinity" :wrapper="'span'">
        </typical>.
      </h2>
    </div>

    <!-- Want to build better internet paragraphs -->
    <div class="description">
      <div>
        <p><vue-markdown>{{ homeExplainer.column_1 }}</vue-markdown></p>
      </div>
      <div>
        <p><vue-markdown>{{ homeExplainer.column_2 }}</vue-markdown></p>
      </div>
      <div>
        <btn :url="homeExplainer.page.route">
          {{ homeExplainer.button_title }}</btn>
      </div>
    </div>
  </div>
</template>

<script>
  import { getLocaleData } from '@/utils'
  export default {
    computed: {
      homeExplainer() {
        return getLocaleData(this.$static.homeExplainer, this.$context.locale)
        // const locale = this.$context.locale;
        // console.log(this.$static.homeExplainer.edges)
        // const homeExplainer = this.$static.homeExplainer.edges
        //   .find(({ node }) => node.locale === locale);
        // if (!homeExplainer) {
        //   const { node } =  this.$static.homeExplainer.edges
        //     .find(({ node }) => node.locale === 'en');
        //   return node;
        // } else {
        //   return homeExplainer.node;
        // }
      },

      steps() {
        let stepsArray = Array();
        const words = this.homeExplainer.changing_words;
        words.forEach((word) => {
          stepsArray.push(word.word);
          stepsArray.push(word.seconds * 1000);
        });
        return stepsArray;
      }
    }
  }

</script>

<static-query>
query {
  homeExplainer: allStrapiHomeExplainer {
    edges {
      node {
        title
        subtitle
        column_1
        column_2
        changing_words {
          word
          seconds
        }
        button_title
        page {
          route
        }
        locale
        localizations {
          title
          subtitle
          column_1
          column_2
          changing_words {
            word
            seconds
          }
          button_title
          locale
        }
      }
    }
  }
}
</static-query>

<style lang="scss">

@import "../../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

strong {
      font-weight: 900;
    }

.home--build_better_internet {
  .first-heading {
    margin-bottom: 0;
  }
  .description {
    
    display: grid;
    grid-column-gap: var(--f-gutter-xxl);
    grid-row-gap: var(--f-gutter);
    @include respond-to(">=l") {
      grid-auto-flow: column;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-flow: dense;
      grid-row-gap: var(--f-gutter);
    }
  }
}

</style>