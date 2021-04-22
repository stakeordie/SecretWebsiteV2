<template>
  <div class="card-media-cms" :class="{ 'cta': url }">
    <div v-for="(media, index) in mediaItems" class="card-secret-agent">
        <img :src="require(`@/assets${media.picture}`)" />
        <h6>{{media.title}}</h6>

      </div>
    <a :href="url">
      <slot></slot>
    </a>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        mediaItems: [{
            featured: false,
            type: 'Article',
            title: 'What is Secret Network (SCRT)?',
            picture: '/media/dycrpt-secret-hero.png',
            url: 'https://decrypt.co/resources/what-is-secret-network-scrt-formerly-enigma'
          }
        ]
      }
    },
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
    height: 100%;

    a {
      color: var(--theme-fg);
      height: 100%;
      justify-content: space-between;
      display: flex;
      flex-flow: column;
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
      transform: translateY(-40px);
    }

    @each $name,
    $color in $accent-colors {
      &.accent-#{$name} {
        &:hover {
          background: var(--theme-card-bg-hover);
          box-shadow: var(--f-gutter-s) var(--f-gutter-s) 0 0 var(--accent-#{$name});
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
  }

</style>
