<template>
  <div class="card-simple" :class="{ 'cta': url }">
    <a :href="url">
      <div class="first-block">
        <slot name="first-block"></slot>
      </div>
      <div class="second-block">
        <slot name="second-block"></slot>
      </div>
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

  .card-simple {
    border-radius: var(--f-radius);
    padding: var(--f-gutter-l);
    background: var(--theme-card-bg-default);
    transition: .2s ease;

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

    .first-block {
      display: flex;
      flex-direction: column;

      h3 {
        margin-bottom: var(--f-gutter-s);
      }

      h4 {
        margin-bottom: var(--f-gutter-l);
        color: var(--theme-fg);
      }

      p {
        font-size: 20px;
        color: var(--theme-card-text-color);
      }
    }







  }

</style>
