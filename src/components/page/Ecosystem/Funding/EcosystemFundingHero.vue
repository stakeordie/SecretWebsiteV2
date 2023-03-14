<template>
  <div class="page-ecosystem-funding">
    <section class="page-ecosystem-funding__hero">
      <div class="page-ecosystem-funding__hero__content">
        <div class="page-ecosystem-funding__hero__content__image">
          <img src="/img/icons/ecosystem-funding.png" alt="Funding graphic" loading="lazy"/>
        </div>
        <div class="page-ecosystem-funding__hero__content__info">
          <h5 class="page-ecosystem-funding__hero__content__info-label">
            ECOSYSTEM FUNDING
          </h5>
          <h2 class="page-ecosystem-funding__hero__content__info-title">
            Build bigger with our $225M+ fund
          </h2>
          <p class="page-ecosystem-funding__hero__content__info-description">
            Get long-term financial and strategic support to build on Secret
            Network, provided by leading investors in the field.
          </p>
          <div class="page-ecosystem-funding__hero__content__info-buttons">
            <!-- <btn class="text-center no-arrow" url="https://discord.gg/PzdQ9bfvcX">Apply For Funding</btn>
            <btn class="ecosystem text-center no-arrow" url="https://discord.gg/PzdQ9bfvcX">Become a Partner</btn> -->
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfyjl_vJ2PJa0TiHuENfaXqB8q57D9nL7zOrBXV1cXoHLhoiA/viewform"
              class="page-ecosystem-funding__hero__content__info-buttons__btn btn-primary"
              >Apply for Funding</a
            >
            <a
              target="blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfyjl_vJ2PJa0TiHuENfaXqB8q57D9nL7zOrBXV1cXoHLhoiA/viewform"
              class="page-ecosystem-funding__hero__content__info-buttons__btn btn-secondary"
              >Become a Partner</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-ecosystem-funding {
  &__hero {
    &__content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 16px;

      @include respond-to("<=m") {
        grid-template-columns: 1fr;
        justify-items: center;
      }

      &__image {
        @include respond-to("<=m") {
          max-width: 80%;
        }
      }

      &__info {
        padding: var(--f-gutter);
      }

      &__info-buttons {
        display: grid;
        grid-template-columns: auto auto;
        gap: 16px;

        align-items: center;

        @include respond-to("<=l") {
          grid-template-columns: 1fr;
          justify-items: center;
          gap: 16px;
        }

        &__btn {
          font-size: 18px;
          text-align: center;
          font-weight: bold;
          font-weight: 600;
          letter-spacing: 1.2px;
          //line-height: 0;

          text-transform: uppercase;
        }

        // &__btn {
        //   font-size: 18px;
        //   line-height: 0px;
        //   text-align: center;
        //   text-transform: uppercase;
        //   height: 64px;
        //   font-weight: bold;
        //   font-weight: 600;
        //   letter-spacing: 1px;
        //   // width: 100%;
        //   place-content: center center;
        //   display: inline-flex;
        //   align-items: center;
        //   cursor: pointer;
        //   margin: 0;
        //   padding: 0;
        // }

        .btn-primary {
          color: white;
          background: var(--theme-card-button-bg);
          // padding-left: var(--f-gutter-l);
          // padding-right: var(--f-gutter-l);
          border-radius: var(--f-gutter-s);
          padding: 16px 0 12px 0;
          width: 100%;
          margin-bottom: 0;

          &:hover {
            background: var(--color-neutral-dark-mode-02);
            color: white;
          }
        }

        .btn-secondary {
          color: var(--color-newBrand-blue-02);
          padding: 0;
          width: fit-content;

          // &:hover {
          //     color: var(--navigation-dropdown-background);
          //   }

          @include respond-to("<=l") {
            width: 100%;
            padding-top: 16px;
          }
        }
      }

      //   .content .box .btn {
      //     height: 64px;
      //     max-width: 100%;

      //     &.ecosystem {
      //       justify-content: center;
      //       place-content: center;
      //       pointer-events: auto;

      //       & span {
      //         color: var(--color-newBrand-blue-02);
      //         font-size: 18px;
      //         max-width: 500px;
      //       }
      //     }

      //     &.text-center {
      //     padding-left: var(--f-gutter-xl);
      //     padding-right: var(--f-gutter-xl);
      //     margin-right: 0;
      //       & span {
      //       font-size: 18px;
      //       }
      //     }
      //   }

      &__info-label {
        color: var(--color-newBrand-blue-01);
      }

      &__info-title {
        font-family: Montserrat, sans-serif;
        font-size: 54px;
        line-height: 60px;

        @include respond-to("<=s") {
          font-size: 40px;
          line-height: var(--f-h2-line-height);
        }
      }

      &__info-description {
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
        color: var(--color-neutral-dark-mode-05);
      }
    }
  }
}
</style>
