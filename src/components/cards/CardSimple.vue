<template>
  <div class="card-simple" :class="{ 'cta': url }">
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
        required: false
      },
    }
  }

</script>

<style lang="scss">
  @import "../../sass/functions/theme";
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

  .card-simple {
    border-radius: var(--f-radius);
    padding: var(--f-gutter-l);
    background: var(--theme-card-bg-default);
    transition: .2s ease;
    p {
        color: var(--theme-card-text-color);
      }

    &.cta {
      cursor: pointer;

      @each $name,
      $color in $accent-colors {
        &.accent-#{$name} {
          &:hover {
            background: var(--theme-card-bg-hover);
            box-shadow: var(--f-gutter-s) var(--f-gutter-s) 0 0 var(--accent-#{$name});
          }
        }
      }
    }

    &.orientation-horizontal {
      a {
        color: var(--theme-fg);
        display: grid;
        gap: var(--f-gutter-xxl);
        grid-template-columns: 1fr 60%;
        @include respond-to("<=m") {
          grid-template-columns: 1fr;
        }
        
      }
    }

    &.orientation-vertical {
      a {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--f-gutter-xxl);
      }
    }

    @each $name,
    $color in $accent-colors {
      &.accent-#{$name} {
        h3 {
          color: var(--accent-#{$name});
        }
      }
    }
  }

</style>
