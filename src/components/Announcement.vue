<template>
  <div class="announcement-component" :class="{ 'cta': url }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      url: {
        type: String,
        required: false
      },
    }
  }

</script>

<style lang="scss">
  @import "../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";

  $accent-colors: ("blue",
    "turquoise",
    "green",
    "yellow",
    "cream",
    "orange",
    "red",
    "purple",
    "gray",
  );

  // @each $name, $color in $accent-colors {
  // 	&.accent-#{$name} {
  // 		color: var(--accent-#{$name});
  // 	}
  // }

  

</style>
