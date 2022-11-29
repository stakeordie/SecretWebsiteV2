<template>
  <column mode="full">
    <div class="agenda">
      <column>
        <block>
          <div class="agenda__wrapper">
            <div class="agenda__breadcrumb">
              <a class="agenda__breadcrumb__item" href="/summit">
                Secret Summit 2022
              </a>
              <span class="agenda__breadcrumb__item">Agenda</span>
            </div>
            <div class="agenda__content">
              <vue-markdown class="agenda__title">{{
                agenda.title
              }}</vue-markdown>
              <div class="agenda__table">
                <ul class="agenda__table__header">
                  <li>Speaker</li>
                  <li>Talk</li>
                  <li>Moderator</li>
                  <li>Time</li>
                </ul>
                <ul
                  class="agenda__table__row"
                  v-for="(data, idx) in agenda.summit_agenda"
                  :key="idx"
                >
                  <li class="speakers">
                    <span class="mobile-title">Speakers</span>
                    <div
                      class="speaker"
                      v-for="(speaker, index) in data.speakers"
                      :key="index"
                    >
                      <div class="speaker__image">
                        <img
                          v-if="speaker.image"
                          :src="speaker.image.url"
                          :alt="speaker.image.name"
                        />
                      </div>
                      <div class="speaker__data">
                        <span class="text">{{ speaker.name }}</span>
                        <span class="description">
                          {{ speaker.description }}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li class="talk">
                    <span class="mobile-title">Talk</span>
                    {{ data.title }}
                  </li>
                  <li class="moderator">
                    <span class="mobile-title">Moderator</span>
                    <div class="moderator__content">
                      <span class="text">{{ data.moderator_name }}</span>
                      <span class="description">
                        {{ data.moderator_description }}
                      </span>
                    </div>
                  </li>
                  <li class="time">
                    <span class="mobile-title">Time</span>
                    <span>
                      {{ data.time }}
                      <b class="time__detail">UTC</b>
                    </span>
                  </li>
                </ul>
              </div>
              <div class="agenda__cta">
                <a :href="agenda.cta_button.url">
                  <span>{{ agenda.cta_button.title }}</span>
                </a>
              </div>
            </div>
          </div>
        </block>
      </column>
    </div>
  </column>
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
  computed: {
    agenda() {
      return this.$static.summit_agenda.edges[0].node;
    },
  },
};
</script>

<static-query>
query {
  summit_agenda: allStrapiSummitAgenda {
    edges {
      node {
        title
        summit_agenda {
          title
          moderator_name
          moderator_description
          time
          speakers {
            name
            description
            image {
              url
              name
            }
          }
        }
        cta_button {
          title
          url
        }
      }
    }
  }
}

</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

@mixin base_text {
  color: var(--color-analog-primary-white);
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}

@mixin small_text {
  color: var(--color-neutral-dark-mode-05);
  font-family: "Hind";
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
}

.summit-agenda {
  background: url("../../assets/events/summit/secret-summit-background.svg");
  background-repeat: repeat-y;
  background-position: top center;
  background-size: 250%;
  transition: 0.2s ease;

  @include respond-to(">=l") {
    background-size: 100%;
  }

  .agenda {
    min-height: 100vh;
    background-image: url("../../assets/events/summit/secret-summit-blue-graphic.svg");
    background-position: right top;
    background-repeat: no-repeat;
    background-size: contain;
    transition: 0.2s ease;

    &__wrapper {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 16px;

      @media (min-width: 1440px) {
        padding: 16px 0;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      gap: 26px;
      padding: 64px 0;
    }

    &__breadcrumb {
      display: flex;
      justify-content: center;
      gap: 52px;

      @include respond-to(">=m") {
        justify-content: flex-start;
      }

      &__item {
        font-family: "Montserrat";
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: var(--color-neutral-dark-mode-05);
        position: relative;

        &:hover {
          color: var(--color-neutral-dark-mode-05);
        }

        &::after {
          content: "/";
          position: absolute;
          right: -30px;
        }

        &:last-child::after {
          content: "";
          display: none;
        }
      }
    }

    &__title {
      h1 {
        font-family: "Montserrat";
        text-align: center;
        font-weight: 600;
        font-size: 42px;
        line-height: 60px;
        margin: 0;

        @include respond-to(">=l") {
          font-size: 54px;
        }

        b,
        strong {
          color: var(--color-newBrand-blue-02);
        }
      }
    }

    &__table {
      width: 100%;
      display: grid;
      background: var(--color-neutral-dark-mode-01);
      border-radius: 10px;

      @mixin table_row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0;
        margin: 0;
        border-bottom: solid 2px var(--color-neutral-dark-mode-03);

        @include respond-to(">=l") {
          grid-template-columns: 257px 1fr minmax(max-content, 190px) 232px;
        }

        &:last-of-type {
          border-bottom: none;
        }

        li {
          margin: 0;
          padding: 16px 24px;
        }
      }

      .text {
        @include base_text();
      }

      .description {
        @include small_text();
      }

      .mobile-title {
        @include base_text();
        color: var(--color-newBrand-blue-02);
        text-transform: uppercase;

        @include respond-to(">=s") {
          grid-column: 1/3;
        }

        @include respond-to(">=l") {
          display: none;
        }
      }

      &__header {
        display: none;
        @include respond-to(">=l") {
          @include table_row();
        }

        li {
          @include base_text();
          color: var(--color-newBrand-blue-02);
          text-transform: uppercase;
        }
      }

      &__row {
        @include table_row();

        .speakers {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          grid-column: 1/3;

          @include respond-to(">=s") {
            grid-template-columns: repeat(2, 1fr);
          }

          @include respond-to(">=l") {
            grid-column: 1/2;
            display: flex;
            flex-direction: column;
          }

          .speaker {
            display: flex;
            width: 100%;
            gap: 16px;
            align-items: center;

            &__image {
              width: 40px;
              height: 40px;
              background-color: var(--color-analog-primary-white);
              border-radius: 100%;
              object-fit: cover;
            }

            &__data {
              display: flex;
              flex-direction: column;
              flex: 1;
            }
          }
        }

        .talk {
          grid-column: 1/3;
          display: flex;
          flex-direction: column;
          font-family: "Hind";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          gap: 16px;
          color: var(--color-neutral-dark-mode-06);

          @include respond-to(">=l") {
            grid-column: 2/3;
            flex-direction: row;
            align-items: center;
          }
        }

        .moderator {
          display: flex;
          flex-direction: column;
          gap: 16px;

          @include respond-to(">=l") {
            justify-content: center;
          }

          &__content {
            display: flex;
            flex-direction: column;
          }
        }

        .time {
          display: flex;
          flex-direction: column;
          gap: 16px;
          @include base_text();

          @include respond-to(">=l") {
            justify-content: center;
          }

          &__detail {
            @include small_text();
            font-size: 16px;
            text-transform: uppercase;
            color: var(--color-neutral-gray-04);
          }
        }
      }
    }

    &__cta {
      display: flex;
      justify-content: center;

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

  .swirl-wrapper-bottom {
    display: none;
  }

  .--flare-page {
    padding: 0;
    .content {
      .box {
        padding: 0;
      }
    }
  }

  .simple-footer {
    margin: 0;
  }
}
</style>
