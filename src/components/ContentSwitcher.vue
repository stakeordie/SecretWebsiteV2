<template>
  <div :class="filteredBrochure" class="content-switcher">
    <aside class="content-switcher__sidebar">
      <h3 class="content-switcher__sidebar__header">What you’ll do:</h3>
      <nav class="content-switcher__sidebar__navigation">
        <button
          :class="{ active: selectedAnchor == index }"
          @click="getContentID(index)"
          v-for="(nav, index) in navigationBrochure"
          :key="index"
        >
          <span class="content-switcher__sidebar__navigation--desktop">
            {{ nav.card_title }}
          </span>
          <span class="content-switcher__sidebar__navigation--mobile">
            {{ nav.title_short }}
          </span>
        </button>
      </nav>
    </aside>
    <section
      class="content-switcher__content"
      v-for="(brochure, index) in filteredBrochure"
      :key="index"
    >
      <div class="content-switcher__content__image">
        <ResponsiveImage :src="brochure.image" />
      </div>
      <div :class="getContentID" class="content-switcher__content__message">
        <h4>{{ brochure.card_title }}</h4>
        <p>{{ brochure.subtitle }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetID: 0,
      selectedAnchor: 0,
    };
  },
  methods: {
    getContentID(index) {
      this.targetID = index;
      this.selectedAnchor = index;
    },
  },
  computed: {
    navigationBrochure() {
      return this.$static.secretAgentBrochure.edges[0].node.card;
    },
    filteredBrochure() {
      const content = this.$static.secretAgentBrochure.edges[0].node.card;
      return content.filter(({ id }) => id === this.targetID + 1);
    },
  },
};
</script>

<static-query>
query {
  secretAgentBrochure: allStrapiAgentLandingBrochure {
    edges {
      node {
        title
        card {
          id
          anchor_title
          card_title
          subtitle
          title_short
          image {
            url
            ext
            name
          }
        }
      }
    }
  }
}
</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.content-switcher {
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: var(--f-gutter);
  grid-template-columns: 30% 1fr;
  margin-bottom: 70px !important;

  @include respond-to("<=m") {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
  }

  &__sidebar {
    display: grid;
    gap: var(--f-gutter-l);
    align-items: center;

    &__header {
      margin: 0;
      @include respond-to("<=m") {
        text-align: center;
      }
    }

    &__navigation {
      display: grid;
      grid-area: var(--f-gutter);
      gap: var(--f-gutter-xs);

      @include respond-to("<=m") {
        justify-items: center;
      }
      &--mobile {
        display: none;
        @include respond-to("<=m") {
          display: grid;
        }
      }
      &--desktop {
        display: none;
        @include respond-to(">=l") {
          display: grid;
        }
      }
      button {
        all: unset;
        font-size: var(--f-gutter);
        font-family: var(--f-default-headers-font);
        color: var(--color-neutral-dark-mode-05);
        cursor: pointer;

        &:hover {
          color: var(--theme-links-hover);
        }

        &.active {
          color: var(--color-neutral-dark-mode-06);
          font-weight: var(--f-default-headers-weight);
        }
      }
    }
  }

  &__content {
    display: grid;
    grid-auto-flow: column;
    gap: var(--f-gutter-xl);
    align-items: center;
    grid-template-columns: 300px 1fr;

    @include respond-to("<=s") {
      grid-auto-flow: row;
      grid-template-columns: 1fr;
      justify-items: center;
    }
    &__image {
      img {
        max-height: 300px;
        min-height: 300px;
      }
    }
    &__message {
      h4 {
        @include respond-to("<=s") {
          text-align: center;
        }
      }
    }
  }
}
</style>
