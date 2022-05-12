<template>
<section class="about-secret-network-supported">

  <h3>Supported By:</h3>

  <div class="about-secret-network-supported__container">
    <div class="about-secret-network-supported__container__cont labs">
      <div class="by__img">
          <img src="../../assets/about-secret-network/scrt-labs-pink-logo.svg" alt=""/>
          </div>
        <p class="by__p">
          SCRT Labs is the driving force and the founding core development team
          behind Secret Network. Their mission is to create products and systems
          that accelerate the adoption of privacy-first, decentralized
          technologies.
        </p>
        <div class="by__links">
            <a href="" class="by__links__link">ABOUT SECRET DEFI</a>
            <a href="" class="by__links__link">ABOUT SECRET DEFI</a>
        </div>
    </div>
  

  <div class="about-secret-network-supported__container__cont foundation">
    <div class="by__img">
        <img src="../../assets/about-secret-network/secret-foundation-logo.svg" alt=""/>
        </div>
      <p class="by__p">
        The foundation that supports Secret and fosters the adoption of open-source, privacy-centric technologies and
        networks that serve the public good.
      </p>
      <div class="by__links">
          <a href="" class="by__links__link">ABOUT SECRET DEFI</a>
           <a href="" class="by__links__link">ABOUT SECRET DEFI</a>
      </div>
  </div>

  </div>


</section>


<!-- <column number="2" number-s="1" class="about-secret-network-supported" mode="slim">

<block >
    <div class="about-secret-network-supported__cont labs">
      <div class="by__img">
        <img src="../../assets/about-secret-network/scrt-labs-pink-logo.svg" alt=""/>
        </div>
      <p class="by__p">
        SCRT Labs is the driving force and the founding core development team
        behind Secret Network. Their mission is to create products and systems
        that accelerate the adoption of privacy-first, decentralized
        technologies.
      </p>
      <div class="by__links">
          <a href="" class="by__links__link">ABOUT SECRET DEFI</a>
          <a href="" class="by__links__link">ABOUT SECRET DEFI</a>
      </div>
    </div>
</block>

<block >
    <div class="about-secret-network-supported__cont foundation">
      <div class="by__img">
        <img src="../../assets/about-secret-network/secret-foundation-logo.svg" alt=""/>
        </div>
      <p class="by__p">
        The foundation that supports Secret and fosters the adoption of open-source, privacy-centric technologies and
        networks that serve the public good.
      </p>
      <div class="by__links">
          <a href="" class="by__links__link">ABOUT SECRET DEFI</a>
           <a href="" class="by__links__link">ABOUT SECRET DEFI</a>
      </div>
    </div>
</block>

</column> -->

</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.about-secret-network-supported{
  padding: 64px 0;

  & h3{
    text-align: center;
    margin-bottom: 52px;
  }  

  &__container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
    max-width: 830px;
    margin: auto;

    @include respond-to("<=s"){
              grid-template-columns: 1fr;
              padding: var(--f-gutter);
            }

    &__cont{
      padding: 26px 16px;

      & .by__img{
        max-height: 100px;
        margin-bottom: 12px;
         
         @include respond-to("<=s"){
           height: 70px;
         }

        
        & img{
          height: 100%;
          margin: auto;
        }
      }


    .by__links{
      display: flex;
      justify-content: space-between;
      
    }
  }

  }
  
 

}

</style>