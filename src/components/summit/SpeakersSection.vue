<template>
  <column>
    <block>
      <div class="speakers">
        <div class="speakers__title">{{ data.title }}</div>
        <div class="speakers__content">
          <article
            v-for="(speaker, index) in data.speaker"
            :key="index"
            class="card"
          >
            <div class="card__image">
              <img :src="speaker.image.url" :alt="speaker.name" />
            </div>
            <div class="card__info">
              <span class="card__info__name">{{ speaker.name }}</span>
              <span class="card__info__description">{{
                speaker.description
              }}</span>
            </div>
          </article>
        </div>
        <div class="speakers__cta">
          <a
            :href="data.cta_button.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{{ data.cta_button.title }} </span>
          </a>
        </div>
      </div>
    </block>
  </column>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.speakers {
  max-width: 1200px;
  margin: 0 auto;
  padding: 128px 26px;
  display: flex;
  flex-direction: column;
  gap: 26px;

  @include respond-to(">=l") {
    padding: 128px 0;
  }

  &__title {
    font-family: "Montserrat";
    text-align: center;
    font-style: normal;
    word-break: break-word;
    font-weight: 700;
    font-size: 32px;

    @include respond-to(">=m") {
      font-size: 42px;
    }
  }
  &__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

    @include respond-to(">=s") {
      grid-template-columns: repeat(2, 1fr);
    }
    @include respond-to(">=m") {
      grid-template-columns: repeat(3, 1fr);
    }
    @include respond-to(">=l") {
      grid-template-columns: repeat(4, 1fr);
    }
    @include respond-to(">=xl") {
      grid-template-columns: repeat(5, 1fr);
    }

    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      &__image {
        width: 100%;
        display: flex;
        justify-content: center;
        flex: 1;
      }

      &__info {
        display: flex;
        flex-direction: column;
        text-align: center;

        &__name {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 22px;
          line-height: 30px;
          color: var(--color-neutral-dark-mode-06);
        }

        &__description {
          font-family: "Hind";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          color: var(--color-neutral-dark-mode-05);
        }
      }
    }
  }

  &__cta {
    display: flex;
    justify-content: center;
    padding-top: 26px;

    a {
      border-radius: 10px;
      padding: 10px 39px;
      width: 100%;
      display: flex;
      background: var(--theme-card-button-bg);
      color: var(--theme-fg);
      justify-content: center;
      text-transform: uppercase;
      font-size: 16px;
      font-family: "Hind";
      height: 46px;
      transition: 0.2s ease;

      @include respond-to(">=s") {
        width: max-content;
      }

      &:hover {
        color: inherit;
        background-color: var(--color-neutral-dark-mode-02);
      }

      span {
        padding-top: 2px;
        font-weight: 700;
        letter-spacing: 1px;
      }
    }
  }
}
</style>
