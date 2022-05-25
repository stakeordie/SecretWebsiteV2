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
        <img src="../../assets/about-secret-network/file-orange.svg" alt="" class="list-icon">
        <p class="list-info">
          Privacy-preserving smart contracts
        </p>
      </div>
      <div class="list-item">
        <img src="../../assets/about-secret-network/lock-orange.svg" alt="" class="list-icon">
        <p class="list-info">
          Encrypted inputs, outputs, and state by default
        </p>
      </div>
      <div class="list-item">
        <img src="../../assets/about-secret-network/checked-orange.svg" alt="" class="list-icon">
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
    padding: 120px 0;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 26px;

    @include respond-to("<=m"){
              grid-template-columns: 1fr;
              padding: 60px var(--f-gutter);
            }

    & p{
        //font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
        margin-bottom: 0;
    }

    &__content{
        max-width: 504px;
        //padding: 20px;

        display: grid;
        row-gap: 16px;
        margin: auto;

        @include respond-to("<=s"){
              padding: var(--f-gutter);
            }

        &__h5{
            color: var(--about-color-orange);
            text-transform: uppercase;
            font-weight: 00;
            margin-bottom: 0;
        }
        &__h1{
            margin-bottom: 0;
            font-family: var(--f-default-headers-font);
            font-weight: 600;
            font-size: 54px;
            line-height: 60px;
            

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
            row-gap: 10px;
           

            & .list-item{
                display: flex;
                align-items: center;
                 font-size: var(--f-default-text-size);
            }

            & .list-icon{
                width: 20px;
                height: 20px;
                padding: 2px;
                margin-right: 10px;
            }
        }


    }

    &__img {
      align-self: center;

      img {
        width: 600px;
        //max-height: 395px;
        margin: auto;
      }
    }
}

</style>