<template>

<section class="about-secret-network-hero">
  <div class="about-secret-network-hero__content">
    <h4 class="about-secret-network-hero__content__h5">
      About SECRET NETWORK
    </h4>
    <h1 class="about-secret-network-hero__content__h1">
      Powering Web3 Privacy
    </h1>
    <p class="about-secret-network-hero__content__p">
      Secret Network is the first blockchain with privacy-preserving smart
      contracts. This makes it possible to build apps that are decentralized
      and permissionless—yet private.
    </p>
    <div class="about-secret-network-hero__content__list">
      <div class="list-item">
        <img src="../../assets/about-secret-network/file-yellow.svg" alt="" class="list-icon">
        <p class="list-info">
          Privacy-preserving smart contracts
        </p>
      </div>
      <div class="list-item">
        <img src="../../assets/about-secret-network/lock-yellow.svg" alt="" class="list-icon">
        <p class="list-info">
          Encrypted inputs, outputs, and state by default
        </p>
      </div>
      <div class="list-item">
        <img src="../../assets/about-secret-network/checked-yellow.svg" alt="" class="list-icon">
        <p class="list-info">
          Transparent underlying ledger; completely auditable
        </p>
      </div>
    </div>
  </div>

  <div class="about-secret-network-hero__img">
    <img src="../../assets/about-secret-network/about-secret-network-hero-img.svg" alt="" class="hero-img">

  </div>

</section>


</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.about-secret-network-hero{
    padding: 60px 0;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 26px;

    @include respond-to("<=m"){
              grid-template-columns: 1fr;
              padding: 60px var(--f-gutter);
            }

    & p{
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
        margin-bottom: 0;
    }

    &__content{
        max-width: 576px;
        padding: 36px;

        display: grid;
        row-gap: 26px;
        margin: auto;

        @include respond-to("<=s"){
              padding: var(--f-gutter);
            }

        &__h5{
            color: var(--color-analog-tertiary-yellow);
            text-transform: uppercase;
            font-weight: 700;
            margin-bottom: 0;
        }
        &__h1{
            margin-bottom: 0;

            

            @include respond-to("<=l"){
              font-size: 54px;
              line-height: 60px;
            }

            @include respond-to("<=s"){
              font-size: 44px;
              line-height: 50px;
            }

            

        }

        &__p{
            font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
        margin-bottom: 0;
            //margin-bottom: 0;
        }

        &__list{
            display: grid;
            row-gap: 16px;

            & .list-item{
                display: flex;
                align-items: center;
            }

            & .list-icon{
                width: 29px;
                height: 29px;
                padding: 5px;
                margin-right: 10px;
            }
        }


    }

    &__img {
      align-self: center;

      img {
        max-width: 520px;
        max-height: 395px;
        margin: auto;
      }
    }
}

</style>