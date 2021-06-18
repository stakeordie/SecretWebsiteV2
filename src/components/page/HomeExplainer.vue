<template>
  <div class="home--build_better_internet">

    <!-- Want to build better internet title -->
    <div class="color-change" number="1" number-m="1" number-s="1">
      <h2 class="first-heading">{{ $static.homeExplainer.edges[0].node.title }}</h2>
      <h2>
        {{ $static.homeExplainer.edges[0].node.subtitle }} <typical :steps="steps" :loop="Infinity" :wrapper="'span'">
        </typical>.
      </h2>
    </div>

    <!-- Want to build better internet paragraphs -->
    <div class="description">
      <div>
        <p><vue-markdown>{{ $static.homeExplainer.edges[0].node.column_1 }}</vue-markdown></p>
      </div>
      <div>
        <p><vue-markdown>{{ $static.homeExplainer.edges[0].node.column_2 }}</vue-markdown></p>
      </div>
      <div>
        <btn :url="$static.homeExplainer.edges[0].node.page.route">
          {{ $static.homeExplainer.edges[0].node.button_title }}</btn>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      steps() {
        let stepsArray = Array();
        const words = this.$static.homeExplainer.edges[0].node.changing_words;
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
          },
          button_title
          page {
            route
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
