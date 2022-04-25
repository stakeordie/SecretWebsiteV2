<template>
  <div class="new-card-media" :class="{ cta: url }">
    <a :href="url">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss">
@import "../../sass/functions/theme";
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

// @each $name, $color in $accent-colors {
// 	&.accent-#{$name} {
// 		color: var(--accent-#{$name});
// 	}
// }

.new-card-media {
  border-radius: var(--f-radius-s);
  padding: var(--f-gutter);
  background: var(--color-neutral-dark-mode-02);
  transition: 0.2s ease;
  cursor: pointer;
  min-height: 300px;
  max-height: max-content;
  display: grid;
  align-content: start;
  position: relative;
  &:hover {
    // transform: var(--card-hover-transform);
    background-color: var(--color-neutral-dark-mode-04);
    box-shadow: none;
  }
  a {
    color: var(--theme-fg);
    // height: 100%;
    justify-content: space-between;
    display: grid;
    grid-template-columns: 1fr;
  }

  span {
    margin-top: var(--f-gutter);
    text-transform: uppercase;
    font-weight: 600;
    order: 2;
  }

  p {
    &:first-child {
      text-transform: uppercase;
      margin-bottom: var(--f-gutter-s);
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  h6 {
    margin-bottom: var(--f-gutter-l);
    order: 3;
    height: 48px;
  }

  @each $name, $color in $accent-colors {
    &.accent-#{$name} {
      &:hover {
        background: var(--theme-card-bg-hover);
        box-shadow: var(--card-hover-shadow) var(--accent-#{$name});
      }
    }
  }

  @each $name, $color in $accent-colors {
    &.accent-#{$name} {
      p {
        color: var(--accent-#{$name});
      }
    }
  }

  img {
    // position: absolute;
    // bottom: 0;
    // padding: var(--f-gutter);
    order: 1;
    border-radius: var(--f-gutter-s);
    left: 0;
    right: 0;
    width: 100%;
    max-height: 200px;
    min-height: 200px;
    object-fit: cover;

    @include respond-to("<=s") {
      // max-height: 50%;
      // min-height: 50%;
      // position: relative;
      // padding-left: 0;
      // padding-right: 0;
    }

    @include respond-to(">=xxl") {
      // position: relative;
      // padding-left: 0;
      // padding-right: 0;
    }
  }
}
</style>
