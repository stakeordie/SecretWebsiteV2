<template>
  <div class="content-columns">
    <div
      :class="`content-columns__container--img-position--${element.image_position.toLowerCase()}`"
      class="content-columns__container"
      v-for="(element, index) in instructionContent"
      :key="index"
    >
      <div class="content-columns__container--left">
        <h3>{{ element.title }}</h3>
        <vue-markdown>{{ element.paragraph }}</vue-markdown>
      </div>
      <div class="content-columns__container--right">
        <img :src="element.image.url" :alt="element.title" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contentID: {
      type: String,
      default: "",
    },
    invertedColumnMobile: Boolean,
    weightLeft: Boolean,
    weightRight: Boolean,
  },
  computed: {
    classes() {
      return {
        "content-columns--inverted-mobile": this.invertedColumnMobile,
        "content-columns--weight-left": this.weightLeft,
        "content-columns--weight-right": this.weightRight,
      };
    },
    instructionContent() {
      const content = this.$static.secretAgentIntroRows.edges[0].node.row;
      return content.filter(({ id }) => id === Number(this.contentID));
    },
  },
};
</script>

<static-query>
query {
  secretAgentIntroRows: allStrapiAgentLandingIntroRow {
    edges {
      node {
        row {
          id
          title
          paragraph
          image_position
          image {
            url
            alternativeText
            caption
            name
          }
        }
      }
    }
  }
}
</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.content-columns {
  &__container {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: var(--f-gutter-xxl);
    &--weight-left {
      grid-template-columns: 1fr 40%;
    }
    &--weight-right {
      grid-template-columns: 40% 1fr;
    }
    @include respond-to("<=s") {
      grid-template-columns: 1fr;
      grid-auto-flow: row;
    }
    &--img-position--left {
      .content-columns__container--right {
        @include respond-to(">=m") {
          order: -1;
        }
      }
    }
    &--left {
      display: grid;
      align-items: center;
      justify-content: center;
      h3 {
        @include respond-to("<=s") {
          text-align: center;
        }
      }
    }

    &--right {
      display: grid;
      align-items: center;
      justify-content: center;
      // justify-items: center;
    }
  }
}
</style>
