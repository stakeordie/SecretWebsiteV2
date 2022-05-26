<template>
<section class="about-secret-network-supported">

  <h5>Supported By</h5>

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
        <!-- <div class="by__links">
            <a href="" class="by__links__link">ABOUT SECRET DEFI</a>
            <a href="" class="by__links__link">ABOUT SECRET DEFI</a>
        </div> -->
    </div>
  

  <div class="about-secret-network-supported__container__cont foundation">
    <div class="by__img">
        <img src="../../assets/about-secret-network/secret-foundation-logo.svg" alt=""/>
        </div>
      <p class="by__p">
        The foundation that supports Secret and fosters the adoption of open-source, privacy-centric technologies and
        networks that serve the public good.
      </p>
      <!-- <div class="by__links">
          <a href="" class="by__links__link">ABOUT SECRET DEFI</a>
           <a href="" class="by__links__link">ABOUT SECRET DEFI</a>
      </div> -->
  </div>

  </div>


</section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.about-secret-network-supported{
  padding: 64px 0;

  & h5{
    text-align: center;
    margin-bottom: 52px;
    text-transform: uppercase;
    //font-family: var(--f-default-headers-font);
    color: var(--about-color-orange);
    font-weight: 500;
    letter-spacing: 1px;

  }  

  &__container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 36px;
    max-width: 800px;
    margin: auto;

    @include respond-to("<=s"){
              grid-template-columns: 1fr;
              padding: var(--f-gutter);
            }

    &__cont{
      padding: 0 16px;

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

      @include respond-to("<=xs"){
           flex-direction: column;
         }

      
    }
  }

  }
  
 

}

</style>