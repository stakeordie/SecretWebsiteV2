<template>
  <div class="welcome">
    <column>
      <block>
        <div class="welcome__content">
          <div class="welcome__info">
            <h4 class="welcome__info__eyebrow">{{ data.title }}</h4>
            <h2 class="welcome__info__title">{{ data.subtitle }}</h2>
            <p>{{ data.body }}</p>
          </div>
          <div class="livestream">
            <iframe
              class="livestream__video"
              :src="liveStreamSrc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowfullscreen
            />
            <iframe class="livestream__chat" :src="chatSrc" />
          </div>
          <p class="welcome__message">
            Sign-in to YouTube & refresh the page to participate in chat. You
            may need to disable your browser’s ad-blocker.
          </p>
          <a
            :href="data.cta_button.url"
            target="_blank"
            rel="noopener noreferrer"
            class="welcome__cta"
          >
            <span>{{ data.cta_button.title }}</span>
          </a>
        </div>
      </block>
    </column>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    liveStreamSrc() {
      return `https://www.youtube.com/embed/${this.data.livestream_code_id}?autoplay=1&mute=1`;
    },
    chatSrc() {
      return `https://www.youtube.com/live_chat?v=${this.data.livestream_code_id}&embed_domain=${window.location.hostname}`;
    },
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.summit_content {
  .welcome {
    margin-top: var(--header-height);
    background-image: url("/img/events/summit/secret-summit-graphic-3-mobile.svg");
    background-position: left top;
    background-repeat: no-repeat;
    background-size: contain;
    transition: 0.2s ease;

    &__content {
      width: 100%;
      max-width: 1200px;
      min-height: calc(100vh - var(--all-headers-height));
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 26px;
      padding: 26px;

      @include respond-to(">=l") {
        padding: 0;
      }
    }

    &__info {
      text-align: center;
      width: 100%;
      max-width: 640px;

      * {
        margin: 0;
      }

      &__eyebrow {
        color: var(--color-ver2-secondary-blue);
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        font-size: 22px;
      }

      &__title {
        font-family: montserrat;
        font-weight: 700;
        font-size: 42px;
        line-height: 50px;
        padding-bottom: 16px;

        @include respond-to(">=l") {
          font-size: 54px;
          line-height: 60px;
        }
      }

      p {
        font-family: Hind;
        font-size: 18px;
        font-weight: 400;
        color: var(--color-neutral-dark-mode-06);
        line-height: var(--paragraph-line-height-big);

        @include respond-to(">=l") {
          font-size: 20px;
        }
      }
    }

    &__message {
      text-align: center;
      margin-bottom: 0;
    }

    &__cta {
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

      &:visited:hover,
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

    .livestream {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 200px 350px;
      place-items: stretch;
      width: 100%;
      gap: 26px;

      @include respond-to(">=m") {
        grid-template-rows: 350px 350px;
      }

      @include respond-to(">=l") {
        grid-template-columns: minmax(max-content, 832px) 1fr;
        grid-template-rows: 482px;
      }

      &__video {
        @include respond-to(">=m") {
          padding: 16px;
        }
      }
    }
  }
}
</style>
