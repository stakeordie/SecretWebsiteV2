<template>
  <div class="card-media" :class="{ 'cta': url }">
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

  .card-media {
    border-radius: var(--f-radius);
    padding: var(--f-gutter);
    background: var(--theme-card-bg-default);
    transition: .2s ease;
    cursor: pointer;
    min-height: 300px;
    display: grid;
    align-content: start;
    position: relative;
    &:hover {
      transform: var(--card-hover-transform);
    }
    a {
      color: var(--theme-fg);
      // height: 100%;
      justify-content: space-between;
      display: flex;
      flex-flow: column;
    }

    span {
      text-transform: uppercase;
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
      // transform: translateY(-40px);
    }

    @each $name,
    $color in $accent-colors {
      &.accent-#{$name} {
        &:hover {
          background: var(--theme-card-bg-hover);
          box-shadow: var(--card-hover-shadow) var(--accent-#{$name});
        }
      }
    }

    @each $name,
    $color in $accent-colors {
      &.accent-#{$name} {
        p {
          color: var(--accent-#{$name});
        }
      }
    }

    img {
      position: absolute;
      bottom: 0;
      padding: var(--f-gutter);
      border-radius: var(--f-gutter-l);
      left: 0;
      right: 0;
    }
  }

</style>
