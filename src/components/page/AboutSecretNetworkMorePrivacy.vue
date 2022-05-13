<template>

<section class="about-secret-network-privacy">

    <div class="about-secret-network-privacy__img">
        <img src="../../assets/why-more-privacy-img.svg" alt="" class="hero-img">
    </div>

  <div class="about-secret-network-privacy__intro">
    <h4 class="intro__title">
      Why we need more privacy
    </h4>
    <p class="intro__p">
      Ethereum’s big innovation was to put smart contracts on the blockchain: pieces of code that execute automatically
      once pre-set conditions are met. This made it possible to not only create decentralized payment systems (like
      Bitcoin), but also decentralized applications.
      <br>
      <br>
      However, most blockchains are public by default. Meaning all transactions and smart contract interactions can be
      looked up by anyone.
      <br>
      <br>
      And for some applications and use cases, this is no option. Like when sharing sensitive health data with your
      doctor, handing over financial details to your accountant, or sharing art exclusively with your fans. </p>
  </div>
</section>

</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.about-secret-network-privacy{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 26px;
    margin: auto;
    padding: 96px 0;

    @include respond-to("<=m"){
        grid-template-columns: 1fr;
        grid-template-rows: content 1fr;
        gap: 0;
    }

    @include respond-to("<=s"){
        padding: 96px var(--f-gutter);
    }

    &__img{
        //align-self: center;
        

        img{
            align-self: center;
            max-width: 550px;
        max-height: 550px;
        margin: auto;
        }
    }

    &__intro{
        padding: 16px;
        align-self: center;
        margin: auto;
        max-width: 550px;

        .intro__title{
            font-size: var(--f-h4-text-size);
        }

        .intro__p{
            font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);
        margin-bottom: 0;
        
        
        }
    }
}

</style>