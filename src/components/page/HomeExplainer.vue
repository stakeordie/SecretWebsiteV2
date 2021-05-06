<template>
  <div>

    <!-- Want to build better internet title -->
    <column class="home--build_better_internet color-change" number="1" number-m="1" number-s="1">
      <block>
        <h2>{{ $static.homeExplainer.edges[0].node.title }}</h2>
        <h2>
          {{ $static.homeExplainer.edges[0].node.subtitle }} <typical :steps="steps" :loop="Infinity" :wrapper="'span'"></typical>.
        </h2>
      </block>
    </column>

    <!-- Want to build better internet paragraphs -->
    <column class="home--build_better_internet spacer-s" number="2" number-m="1" number-s="1">
      <block>
        <p>{{ $static.homeExplainer.edges[0].node.column_1 }}</p>
      </block>
      <block>
        <p>{{ $static.homeExplainer.edges[0].node.column_2 }}</p>
      </block>
      <block>
        <btn :url="$static.homeExplainer.edges[0].node.page.route">{{ $static.homeExplainer.edges[0].node.button_title }}</btn>
      </block>
    </column>
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
        }
      );
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

<style>

</style>