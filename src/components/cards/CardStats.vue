<template>
  <div class="card-stats" :class="{ cta: url }">
    <slot></slot>
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

.card-stats {
  border-radius: var(--f-radius);
  padding: var(--f-gutter-l);
  background: var(--theme-card-bg-default);
  transition: 0.2s ease;
  display: grid;
  height: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--theme-fg);
    margin-bottom: 0;

    &:first-child {
      margin-bottom: 10px;
    }
  }

  h4 {
    color: var(--theme-card-text-color);
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
    width: 100%;
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
        background: url(../../assets/icon-arrow-right-light.svg);

        @include theme(light light-colored) {
          background: url(../../assets/icon-arrow-right-dark.svg);
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
