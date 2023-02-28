<template>
  <a
    class="card-element item"
    :href="data.route"
    target="blank"
    rel="noopener noreferrer"
  >
    <div class="card-element__header">
      <ResponsiveImage
        v-if="data.thumbnail_image"
        :src="data.thumbnail_image"
        imageClass="card-element__header__logo"
      />
    </div>
    <div class="card-element__title-desc">
      <div class="card-element__title-desc__header">
        <div v-for="(tag, index) in data.tags" :key="index">
          <h6 class="element-grid-main-tag">{{ tag.tag }}</h6>
        </div>
        <h5 class="element-grid-title">{{ data.title }}</h5>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
.learn-carousel__item {
  .card-element {
    background: var(--theme-card-bg-default);
    transition: 0.2s ease;
    text-align: center;
    border-radius: 10px;
    min-width: 340px;
    width: calc(100vw - 32px);
    white-space: normal;
    display: grid;
    gap: 10px;
    padding: var(--f-gutter);
    scroll-snap-align: center;

    @media screen and (min-width: 450px) {
      width: 400px;
    }

    @include respond-to(">=m") {
      scroll-snap-align: end;
    }

    * {
      margin: 0;
    }

    &__header {
      display: grid;
      grid-template-columns: 1fr;
      align-items: start;
      gap: 4px;
    }
    &__title-desc {
      display: grid;
      gap: 8px;
      text-align: left;

      &__header {
        display: grid;
        gap: 0;
        align-content: start;
      }

      .element-grid {
        &-main-tag {
          font-family: "Hind";
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #fbc998;
          display: flex;
          align-items: center;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        &-title {
          color: white;
        }
      }
    }
    &.hidden {
      display: none;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: auto;
      max-height: 206px;

      @media screen and (min-width: 450px) {
        height: 206px;
      }
    }

    &:hover {
      background: var(--color-neutral-dark-mode-04);
    }

    h6 {
      color: var(--theme-fg);
    }

    p {
      &.tag {
        text-transform: capitalize;
      }
    }
  }
}
</style>
