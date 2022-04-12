<template>
  <div class="page-get-scrt">
    <section class="page-get-scrt__wallets">
      <div class="page-get-scrt__wallets__content">

        <!-- RECOMMENDED -->
        <div class="page-get-scrt__wallets__content__recommended">
          <div class="page-get-scrt__wallets__content__recommended__header">
            <h5>Recommended</h5>
          </div>
          <div class="page-get-scrt__wallets__content__recommended__recommended-cards">
            <div class="page-get-scrt__wallets__card">
              <img src="../../assets/keplr_icon.png" alt="Keplr"/>
              <div class="page-get-scrt__wallets__card__card-content">
                <h5>Keplr</h5>
                <p>Interwallet for the entire Cosmos ecosystem. Keplr integrates with all Secret Apps, allows you to stake SCRT, and vote on proposals.</p>
              </div>
              <div class="page-get-scrt__wallets__card__links">
                <a href="https://www.keplr.app/" class="page-get-scrt__wallets__card__links__item">
                <p>INSTALL</p>
                <img src="../../assets/icon-arrow-external-blue.svg" alt="External Link"/>
                </a>
                <a href="https://www.keplr.app/" class="page-get-scrt__wallets__card__links__item">
                <p>TUTORIAL</p>
                <img src="../../assets/icon-arrow-external-blue.svg" alt="External Link"/>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- OTHER -->
        <div class="page-get-scrt__wallets__content__other">
          <div class="page-get-scrt__wallets__content__other__header">
            <h5>Other Options</h5>
            <a href="" class="page-get-scrt__wallets__content__other__header__link">
                <p>INSTALL</p>
                <img src="../../assets/icon-arrow-right.svg" alt="External Link"/>
                </a>
          </div>
          <div class="page-get-scrt__wallets__content__other__other-cards">
            <div class="page-get-scrt__wallets__card">
              <img src="../../assets/citadelone-icon.png" alt="Citadel.One"/>
              <div class="page-get-scrt__wallets__card__card-content">
                <h5>Citadel.One</h5>
                <p>Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.</p>
              </div>
              <div class="page-get-scrt__wallets__card__links">
                <a href="https://app.citadel.one/login" class="page-get-scrt__wallets__card__links__item">
                <p>INSTALL</p>
                <img src="../../assets/icon-arrow-external-blue.svg" alt="External Link"/>
                </a>
              </div>
            </div>
            <div class="page-get-scrt__wallets__card">
              <img src="../../assets/cosmostation-icon.png" alt="Cosmostation"/>
              <div class="page-get-scrt__wallets__card__card-content">
                <h5>Cosmostation</h5>
                <p>Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.</p>
              </div>
              <div class="page-get-scrt__wallets__card__links">
                <a href="https://wallet.cosmostation.io/cosmos" class="page-get-scrt__wallets__card__links__item">
                <p>INSTALL</p>
                <img src="../../assets/icon-arrow-external-blue.svg" alt="External Link"/>
                </a>
              </div>
            </div>
            <div class="page-get-scrt__wallets__card">
              <img src="../../assets/ledger-nano-icon.png" alt="LedgerNano"/>
              <div class="page-get-scrt__wallets__card__card-content">
                <h5>LedgerNano</h5>
                <p>Omnis, illo delectus? Libero, possimus nulla nemo tenetur adipisci repellat dolore eligendi velit doloribus mollitia.</p>
              </div>
              <div class="page-get-scrt__wallets__card__links">
                <a href="https://www.ledger.com/ledger-live/download" class="page-get-scrt__wallets__card__links__item">
                <p>INSTALL</p>
                <img src="../../assets/icon-arrow-external-blue.svg" alt="External Link"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";


.about-get-scrt {
  .content {
    .box {
      .page-get-scrt {
        padding-top: var(--f-gutter-xxxl);

        @include respond-to("<=m") {
          padding-top: var(--f-gutter-xxl);
        }

        @include respond-to("<=s") {
          padding-top: var(--f-gutter-xl);
        }

        &__wallets {
          &__card {
            display: grid;
            grid-template-rows: auto 1fr 86px;
            align-items: start;
            padding: var(--f-gutter);
            gap: 20px;
            border-radius: var(--f-gutter-s);

            &:hover {
              background-color: var(--color-neutral-dark-mode-04);
              transition: 0.25s;
            }

            &__card-content {
              display: grid;
              gap: 8px;

              h5 {
                color: var(--color-analog-primary-white);
              }

              p {
                margin-bottom: 8px;
              }
            }

            &__links {
              &__item {
                display: grid;
                gap: var(--f-gutter-s);
                align-items: center;
                grid-template-columns: auto auto;
                width: fit-content;
                padding-top: var(--f-gutter-s);
                padding-bottom: var(--f-gutter-s);

                p {
                  margin-bottom: 0;
                  color: var(--color-newBrand-blue-02);
                  font-weight: 600;
                }

                img {
                  transform: translateY(-1px);
                }
              }
            }
          }

          &__content {
            display: grid;
            grid-template-columns: 22.5% 1fr;
            gap: 40px;
            width: 100%;

            @include respond-to("<=l") {
              grid-template-columns: 1fr;
              gap: var(--f-gutter-l);
            }

            // @include respond-to("<=m") {
            //   grid-template-columns: 1fr;
            //   gap: var(--f-gutter-l);
            // }

            &__recommended {
              display: grid;
              gap: var(--f-gutter-s);
              grid-template-rows: max-content;
              // width: 25%;


              &__header {
                padding-top: var(--f-gutter);
                padding-bottom: var(--f-gutter);

                h5 {
                  text-transform: uppercase;
                  color: var(--color-analog-secondary-green);
                }
              }

              &__recommended-cards {
                display: grid;
                grid-template-columns: 1fr;
                

                @include respond-to("<=l") {
                  grid-template-columns: repeat(2, 460px);
                }

                @include respond-to("<=m") {
                  grid-template-columns: 1fr;
                }

               

              }
            }

            &__other {
              display: grid;
              gap: var(--f-gutter-s);
              grid-template-rows: min-content;

              &__header {
                display: grid;
                grid-template-columns: 1fr auto;
                padding-top: var(--f-gutter);
                padding-bottom: var(--f-gutter);
                width: 100%;

                h5 {
                  text-transform: uppercase;
                  color: var(--color-neutral-dark-mode-05);
                }

                &__link {
                  display: grid;
                  gap: var(--f-gutter-s);
                  align-items: center;
                  grid-template-columns: auto auto;
                  width: fit-content;

                  p {
                    margin-bottom: 0;
                    color: var(--color-newBrand-blue-02);
                    font-weight: 600;
                  }

                  img {
                    transform: translateY(-1px);
                  }
                }
              }

              &__other-cards {
                display: grid;
                gap: 40px;
                grid-template-columns: repeat(3, 1fr);

                @include respond-to("<=l") {
                  grid-template-columns: repeat(2, 1fr);
                }

                @include respond-to("<=m") {
                  grid-template-columns: 1fr;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>