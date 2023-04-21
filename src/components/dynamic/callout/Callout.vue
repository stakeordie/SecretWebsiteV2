<template>
  <section class="page-developer-questions">
    <div v-for="(item, index) in items" :key="index" class="learn-callout">
      <div class="learn-callout__image">
        <img :src="item.imgUrl" :alt="item.eyebrow" />
      </div>
      <div class="learn-callout__content">
        <h6 class="learn-callout__content__eyebrow">
          {{ item.eyebrow }}
        </h6>
        <h4 class="learn-callout__content__title">
          {{ item.title }}
        </h4>
        <p class="learn-callout__content__text">
          {{ item.message }}
        </p>
        <div class="learn-callout__content__buttons">
          <div v-for="(cta, idx) in item.cta" :key="idx">
            <btn
              class="text-center no-arrow"
              :class="cta.isMain ? 'main-btn' : ''"
              url="cta.ctaUrl"
            >
              <img
                class="special-icon"
                :src="cta.ctaIcon"
                :alt="cta.ctaTitle"
                loading="lazy"
              />
              {{ cta.ctaTitle }}
            </btn>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      items: [
        {
          imgUrl: "https://scrt.network/assets/img/have-questions.a1cd33dd.png",
          eyebrow: "SUPPORT",
          title: "Get help from the community",
          message:
            "Got stuck? Join one of our channels and reach out to our support team.",
          cta: [
            {
              ctaTitle: "Join our discord",
              ctaIcon:
                "https://scrt.network/assets/img/icon-social-discord.7eeed2f5.svg",
              ctaUrl: "https://scrt.network",
              isMain: true,
            },
            {
              ctaTitle: "POST ON FORUMS",
              ctaIcon:
                "https://scrt.network/assets/img/icon-social-forum.f619c4cf.svg",
              ctaUrl: "https://scrt.network",
              isMain: false,
            },
          ],
        },
      ],
    };
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.learn-callout {
  margin: 124px 0;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 16px;
  background: var(--color-neutral-dark-mode-03);
  padding: var(--f-gutter);
  border-radius: 10px;
  justify-content: center;

  @include respond-to("<=s") {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }

  &__image {
    padding: var(--f-gutter-l);
    width: 260px;
    margin: auto;
  }

  &__content {
    display: grid;
    gap: 10px;
    align-content: center;
    max-width: 500px;

    @include respond-to("<=s") {
      min-width: 100%;
    }
    * {
      margin: 0;
    }
    &__eyebrow {
      color: var(--color-analog-secondary-orange);
    }
    &__title {
      font-size: var(--f-h4-text-size);
    }

    &__buttons {
      display: inline-grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 16px;
      min-width: 100%;
      margin: auto;

      @include respond-to("<=xs") {
        grid-template-columns: 1fr;
        grid-gap: 0px;
      }
      .main-btn {
        background: #d35a17 !important;
        &:hover {
          background: var(--color-neutral-dark-mode-02) !important;
        }
      }
      .btn-text {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }
}
</style>
