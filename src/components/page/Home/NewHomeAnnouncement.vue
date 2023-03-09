<template>
  <announcement-ver2
    :id="$static.homeAnnouncements.edges[0].node[location].id"
  />
</template>

<script>
export default {
  props: {
    location: {
      type: String,
      required: true,
    },
  },
};
</script>

<static-query>
  query{
    homeAnnouncements: allStrapiHomeAnnouncement {
      edges{
        node{
            top {
              id
            }
            bottom {
              id
            }
        }
      }
    }
  }
</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.announcement-ver2 {
  padding: 114px 0 32px 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 68px;

  @include respond-to("<=m") {
    gap: 24px;
  }

  @include respond-to("<=s") {
    grid-template-columns: 1fr;
    padding: 114px var(--f-gutter) var(--f-gutter) var(--f-gutter);
  }

  &__img {
    min-width: 100%;
    padding: var(--f-gutter);
    object-fit: cover;

    img {
      object-fit: cover;
      height: 100%;
      max-height: 500px;
      margin-right: 0;
    }
  }
  &__cont {
    align-self: center;
    padding: var(--f-gutter);

    & h3 {
      color: var(--color-analog-primary-white);
      font-size: 54px;
      margin-bottom: 10px;
      line-height: 60px;
    }

    & h4 {
      color: var(--color-analog-tertiary-yellow);
      font-size: 18px;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 0;
    }
    &__p {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
      margin-bottom: 26px;
    }

    & .btn {
      margin-bottom: 26px !important;
    }

    &__social {
      @include respond-to("<=s") {
        text-align: center;
      }

      &-title {
        margin-bottom: 10px;
      }

      &-icons {
        display: inline-grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;

        & a {
          & img {
            fill: var(--color-neutral-dark-mode-05);
            opacity: 0.75;
          }
        }
      }
    }
  }
}
</style>
