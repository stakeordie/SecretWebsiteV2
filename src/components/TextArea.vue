<template>
  <g-link class="card-about-content no-bg" :class="color" :to="link">
    <div v-for="(element, index) in sectionContent" :key="index">
        <h5>{{ element.title }}</h5>
      <h3 v-if="section === 'top'">{{ element.subtitle }}</h3>
      <h4 v-else>{{ element.subtitle }}</h4>
      <vue-markdown :source="element.body"></vue-markdown>
    </div>
  </g-link>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    section: { type: String, required: true },
    color: { type: String, required: true },
    link: { type: String, default: '' },
  },

  computed: {
    sectionContent() {
      const content = this.$static.aboutContent.edges.map(
        (it) => it.node[this.section]
      );
      return content;
    },
  },
};
</script>

<static-query>
query{
  aboutContent: allStrapiAboutContent{
    edges{
      node{
        top{
          title
          subtitle
          body
        }
        middle_first{
          title
          subtitle
          body
        }
         middle_first{
          title
          subtitle
          body
        }
        middle_second{
          title,
          subtitle,
          body
        },
        bottom_first{
          title
          subtitle
          body
        }
        bottom_second{
          title
          subtitle
          body
        }
        bottom_third{
          title
          subtitle
          body
        }
        bottom_fourth{
          title
          subtitle
          body
        }
        bottom_fifth{
          title
          subtitle
          body
        }
        choose_privacy{
          title
          subtitle
          body
        }
      }
    }
  }
}

</static-query>

<style lang="scss">
@import "./../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

$accent-colors: (
  "blue",
  "turquoise",
  "green",
  "yellow",
  "cream",
  "orange",
  "red",
  "purple",
  "gray"
);

.card-about-content {
  border-radius: var(--f-radius);
  background: var(--theme-card-bg-default);
  transition: 0.2s ease;
  display: grid;
  height: 100%;

  @include respond-to("<=s") {
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--theme-fg);
    margin-bottom: 0;

    &:first-child {
      margin: 0;
    }
  }

  h5 {
    text-transform: uppercase;
    margin-bottom: 16px !important;
  }

  p {
    color: var(--theme-card-text-color);
    margin-top: var(--f-gutter);
    margin-bottom: 0;
  }

  &.no-bg {
    background: transparent;
    gap: var(--f-gutter);
  }

  button,
  .button,
  .btn {
    margin: var(--f-gutter) 0 0 0;
    // width: 100%;

    &.strapi-btn {
      width: max-content;
      min-width: 200px;
      justify-content: center;

      &.disabled {
        opacity: 0.2;
        pointer-events: none;
      }
    }
  }

  a {
    &.strapi-link {
      &.disabled {
        opacity: 0.2;
        pointer-events: none;
      }
    }
  }

  @each $name, $color in $accent-colors {
    &.accent-#{$name} {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        &:first-child {
          color: var(--accent-#{$name});
        }
      }
    }
  }

  &.icon-next {
    @include respond-to(">=l") {
      position: relative;

      &:after {
        content: "";
        width: 28px;
        height: 28px;
        background: url(./../assets/icon-arrow-right-light.svg);

        @include theme(light light-colored) {
          background: url(./../assets/icon-arrow-right-dark.svg);
          background-size: cover;
        }

        background-size: cover;
        position: absolute;
        right: -34px;
        top: var(--f-gutter-xxxl);
      }
    }
  }
}
</style>
