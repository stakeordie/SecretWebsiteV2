<template>
  <div class="card-block">
    <slot></slot>
  </div>
</template>

<script>
export default {};
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

.card-block {
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: var(--f-gutter-xxs);
  }

  h4 {
    margin-bottom: var(--f-gutter-l);
    color: var(--theme-fg);
  }

  p {
    font-size: 20px;
    font-weight: var(--paragraph-font-weight-big);
    color: var(--theme-card-text-color);
  }
}
</style>
