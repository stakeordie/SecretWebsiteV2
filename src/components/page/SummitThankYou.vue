<template>
  <section class="landing-event-sneak-peek">
    <div class="landing-event-sneak-peek__content">
      <div class="landing-event-sneak-peek__heading">
        <h2 class="landing-event-sneak-peek__heading__title">Thank You</h2>
      </div>
      <div class="landing-event-sneak-peek__description">
        <p class="landing-event-sneak-peek__description__paragraph">
          For joining the Secret Summit. We can’t wait to talk about the past,
          present, and future of Web3 privacy together!
        </p>
        <p class="landing-event-sneak-peek__description__paragraph">
          You’ll receive an email with your ticket and all event details. Don’t
          forget to add the event to your calendar to make sure you won’t miss
          it!
        </p>
        <a href="/summit" class="landing-event-sneak-peek__cta">
          <span>Back to the main page</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  metaInfo() {
    return {
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-FS23DKM3PL%22%3E",
          async: true,
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      const functionScript = document.createElement("script");
      functionScript.innerHTML = `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FS23DKM3PL');`;
      document.head.appendChild(functionScript);
    }, 100);
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";
@mixin bgSpecs {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  background-attachment: fixed;
}

.summit-thank-you {
  background: url("../../assets/events/summit/secret-summit-background.svg");
  .landing-event-sneak-peek {
    height: calc(100vh - 28px) !important;
    transition: 0.2s ease;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - var(--header-height));
    margin-top: calc(var(--headerHeight) - 40px);
    left: 0;
    right: 0;
    bottom: 0;

    @include respond-to("<=s") {
      overflow-y: auto;
      padding-bottom: 33px;
      background: url("../../assets/events/summit/secret-summit-graphic-3-mobile.svg");
      @include bgSpecs();
    }
    @include bgSpecs();
    @include respond-to("<=m") {
      background: url("../../assets/events/summit/secret-summit-graphic-3-mobile.svg");
      @include bgSpecs();
      background-position-x: right;
      background-position-y: 69px;
    }
    @include respond-to(">=l") {
      background: url("../../assets/events/summit/secret-summit-graphic-3.svg");
      overflow-y: auto;
      padding-top: calc(var(--header-height));
      padding-bottom: 50px;
      @include bgSpecs();
    }
    @include respond-to(">=xl") {
      background: url("../../assets/events/summit/secret-summit-graphic-3.svg");
      overflow-y: auto;
      padding-top: calc(var(--header-height));
      padding-bottom: 50px;
      @include bgSpecs();
    }
    display: grid;
    grid-auto-rows: min-content;
    gap: 26px;
    align-content: center;

    p {
      font-size: 18px;
      line-height: 27px;
      color: var(--color-neutral-dark-mode-06);
    }

    &__content {
      max-width: 640px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      border-radius: 16px;

      @include respond-to("<=l") {
        margin: auto;
        max-width: 544px !important;
      }
      @include respond-to("<=s") {
        max-width: calc(100% - 16px) !important;
      }

      @include respond-to("<=m") {
        transform: translateX(0);
      }

      @include respond-to(">=l") {
        transform: translateX(-200px);
      }

      @include respond-to(">=xl") {
        transform: translateX(-250px);
      }

      @include respond-to(">=xxl") {
        transform: translateX(-300px);
      }
    }

    &__heading {
      * {
        margin: 0;
        margin: auto;
      }

      @include respond-to("<=l") {
        text-align: center;
      }

      &__eyebrow {
        color: var(--color-ver2-secondary-blue);
        text-transform: uppercase;
        margin-bottom: 4px;

        @include respond-to("<=s") {
          margin-top: 0;
        }

        @include respond-to("<=l") {
          font-size: 18px;
        }
      }

      &__title {
        font-family: montserrat;
        margin-bottom: 10px;
        @include respond-to("<=l") {
          font-size: 42px;
          line-height: 48px;
        }
      }

      &__subtitle {
        text-transform: uppercase;
        margin-bottom: var(--f-gutter);
        @include respond-to("<=l") {
          font-size: 22px;
          line-height: 36.5px;
        }
      }
    }

    &__description {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      @include respond-to("<=m") {
        align-items: center;
      }

      * {
        color: #ffffff;
        font-size: 18px;
      }
      &__list {
        padding-left: 0;
        margin-bottom: var(--f-gutter);
        li {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 12px;
          align-items: flex-end;
          * {
            margin: 0;
          }
        }
      }
      &__paragraph {
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
      }

      &__list {
        padding-left: 0;
        margin-bottom: var(--f-gutter);

        li {
          display: grid;
          grid-template-columns: 28px 1fr;
          gap: 12px;
          align-items: center;

          * {
            margin: 0;
          }
        }
      }
    }

    &__cta {
      background-color: var(--color-newBrand-blue-03);
      color: var(--color-analog-primary-white);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 22px 42px;
      border-radius: 100px;
      font-size: 20px !important;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 1px;
      text-transform: uppercase;
      @include respond-to("<=m") {
        margin: auto;
      }

      &:hover {
        background-color: var(--color-newBrand-blue-04);
      }

      span {
        padding-top: 3px;
      }
    }
  }
  .swirl-wrapper,
  .swirl-wrapper-bottom {
    display: none;
  }
  .simple-footer,
  .legal {
    display: none;
  }
  .no-padding {
    margin-bottom: 0;
    .content {
      .box {
        padding: 0;
        height: fit-content;

        @include respond-to("<=s") {
          // padding: 8px;
        }
      }
    }
  }

  .event__countdown__wrapper {
    @include respond-to("<=l") {
      // align-self: center;
      width: 240px;
      align-self: center;
    }
    .countdown-wrap {
      .wrap-day,
      .wrap-hour,
      .wrap-min,
      .wrap-sec {
        @include respond-to("<=l") {
          font-size: 14px;
          margin-right: 8px;
        }
      }

      .countdown-data {
        @include respond-to("<=l") {
          height: 40px;
          font-size: 28px;
        }
      }
    }
  }
}
</style>
