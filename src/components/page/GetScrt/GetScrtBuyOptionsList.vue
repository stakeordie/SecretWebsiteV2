<template>
  <div class="get-scrt-buy">
    <div
      class="get-scrt-buy__inside"
      v-for="(path, index) in optionsList"
      :key="index"
    >
      <div class="get-scrt-buy__description">
        <h5 v-if="path.node.subtitle">
          {{ path.node.subtitle }}
        </h5>
        <h4>{{ path.node.title }}</h4>
        <p>{{ path.node.description }}</p>
      </div>

      <div class="get-scrt-buy__content" v-if="path.node.hasGroup === false">
        <div
          v-for="(resource, index) in path.node.buy_scrt_option"
          :key="index"
        >
          <ul class="get-scrt-buy__content__box">
            <a :href="resource.cta_url">
              <li class="get-scrt-buy__content__box__item">
                <ResponsiveImage classes="item-icon" :src="resource.icon" />
                <div class="get-scrt-buy__content__box__item__details">
                  <h6>{{ resource.title }}</h6>
                  <p>{{ resource.description }}</p>
                  <btn class="link-arrow" :url="resource.cta_url">
                    {{ resource.cta_title }}
                  </btn>
                </div>
              </li>
            </a>
          </ul>
        </div>
      </div>

      <!-- By Groups -->
      <div class="get-scrt-buy__content" v-if="path.node.hasGroup === true">
        <div v-for="(group, groupIndex) in uniqueGroups" :key="groupIndex">
          <h6 class="get-scrt-buy__content__title">{{ group }}</h6>
          <div
            v-for="(resource, resourceIndex) in path.node.resource"
            :key="resourceIndex"
          >
            <ul
              class="get-scrt-buy__content__box"
              v-if="resource.group === group"
            >
              <a :href="resource.cta_url">
                <li class="get-scrt-buy__content__box__item">
                  <ResponsiveImage classes="item-icon" :src="resource.icon" />
                  <div class="get-scrt-buy__content__box__item__details">
                    <h6>{{ resource.title }}</h6>
                    <p>{{ resource.description }}</p>
                    <p>{{ resource.buy_scrt_option }}</p>
                    <btn class="link-arrow" :url="resource.cta_url">
                      {{ resource.cta_title }}
                    </btn>
                  </div>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <p class="get-scrt__p-small" v-if="path.node.id === '1'">
        *Not Available in the U.S. See <a href="#">this article</a> for guidance
        on how to get SCRT in the U.S.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    optionsList: {
      type: Array,
      required: true,
    },
    uniqueGroups: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.get-scrt-buy {
  display: grid;
  grid-gap: 120px;

  @include respond-to("<=m") {
    grid-gap: 60px;
  }

  &:not(:last-child) {
    padding-bottom: 32px;
  }
  &:not(:nth-child(2)) {
    padding-top: 120px;

    @include respond-to("<=m") {
      padding-top: 32px;
    }
  }

  &__inside {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 4px;

    @include respond-to("<=m") {
      grid-template-columns: 1fr;
    }
  }

  &__description {
    min-width: 360px;
    padding: var(--f-gutter-xl) 0;

    h5 {
      font-family: montserrat;
      font-weight: 500;
      line-height: 24px;
    }

    p {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
      margin-bottom: 0;
    }

    @include respond-to(">=l") {
      padding-right: 28px;
      border-right: solid 1px var(--color-neutral-dark-mode-04);
    }
    @include respond-to("<=m") {
      border-bottom: solid 1px var(--color-neutral-dark-mode-04);
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    row-gap: 24px;
    margin-left: 36px;
    &__title {
      color: var(--color-neutral-dark-mode-05);
      text-transform: uppercase;
    }
    @include respond-to("<=m") {
      margin: 16px 0;
    }

    @include respond-to("<=xs") {
      grid-template-columns: 1fr;
    }

    &__box {
      border-radius: 10px;
      padding: var(--f-gutter);
      margin: 0;

      &:hover {
        background: var(--color-neutral-dark-mode-04);

        & a {
          color: var(--color-newBrand-blue-01) !important;
        }
      }
      &__item {
        display: grid;
        grid-gap: 10px;
        padding: 0;
        margin: 0;

        & .item-icon {
          height: 51px;
          width: 51px;
        }

        &__details {
          display: grid;
          grid-gap: 4px;
          h6 {
            font-size: var(--f-h5-text-size);
            margin-bottom: 0;
            color: white;
          }

          p {
            margin-bottom: 0;
          }

          & a {
            padding: 0;
            color: var(--color-newBrand-blue-02) !important;

            &:hover {
              span {
                color: var(--color-newBrand-blue-01) !important;
              }
            }
          }
        }
      }
    }
  }
}
</style>
