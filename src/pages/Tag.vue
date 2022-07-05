<template>
  <default-layout class="about-learn-portal learn-post">
    <column >
      <block class="">
        <div class="learn-portal__breadcrumb">
          <a href="../about/learn-portal">Learn Portal</a>
          <p>/</p>
          <a href="#">Tag</a>
          <p>/</p>
          <a href="#">How to Buy Secret NFTs on Stashh</a>
        </div>
      </block>
    </column>

    
    
      <section class="learn-post__article ">
        <div class="learn-post__article__img">
          <img src="../assets/blog-cover.jpg" alt="" class="learn-post__img"/>
          </div>
        <div class="learn-post__article__section">
            <h1>H1 Title</h1>
            <h2>H2 Title</h2>
            <h3 class="learn-post__article__section__title" >H3 Title</h3>
            <h4>H4 Title</h4>
            <h5>H5 Title</h5>
            <h6 >H6 Title</h6>

            <ul>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              <li>list item</li>
              
            </ul>
            <p class="learn-post__article__section__paragraph">
              <a href="#">Secret Network</a> is a unique layer 1 blockchain that features “secret” smart contracts - privacy-preserving smart contracts that allow decentralized applications to run with encrypted inputs, outputs, and state. SCRT is the native coin of Secret Network, used for all network fees, staking, and on-chain governance of the protocol. (Note that this is governance of Secret Network itself, not of applications built on the network.) You can think of the relationship between SCRT and Secret Network as similar to the relationship between ETH and Ethereum.
              Similar to how Ethereum has ERC-20 tokens (a fungible token standard for Ethereum), Secret Network has SNIP-20 tokens, or <a href="">Secret Tokens</a>, based on a fungible token standard for Secret Network. That means that secret tokens, just like ERC-20 tokens, can have many different types of functionality and represent many different types of assets. For example, currently there are $85M worth of Ethereum assets wrapped on Secret Network as secret tokens, which can be viewed on the <a href="">Secret Ethereum Bridge</a>. Note that SCRT itself is not a privacy coin (its use is transparent on-chain) but secret tokens are privacy-preserving.          </p>
        </div>
      </section>



    <!-- SLIDER 1 -->
    <column number="2" number-s="1" class="learn-featured-tag__header">

    <block class="learn-featured-tag__header-left">

    <h2>Learn More About NFTs</h2>
    <p>New to Secret? Not for long — start with these guides and explainers</p>

    </block>

    <block class="justify-right learn-featured-tag__header-right">

    <scroll-horizontal-v2 tagSlug="dev"></scroll-horizontal-v2>

    </block>

    </column>


    <column class="spacer-s horizontal-slider dev" tagSlug="dev" mode="full">

    <block>

    <learn-featured-tag ></learn-featured-tag>

    </block>

    </column>


    <!-- swirl -->
    <column class="learn-portal__green-swirl__bottom">
      <block>
        <img
          class="get-scrt__align-img"
          src="../../src/assets/swirl-orange-bottom.svg"
        />
      </block>
    </column>
  </default-layout>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-post{

    &__article{
      padding: var(--f-gutter);
      display: flex;

      // display: flex ;
      flex-direction: column;
      gap: 84px;

      &__img{
        width: 100%;
        padding: var(--f-gutter);

        .learn-post__img{
          max-width: fit-content;
        }
      }

      &__section{
        max-width: var(--blog-content-width);
        display: grid;
        // flex-direction: column;
        margin: auto;
        gap: 16px;
        // padding: 54px  var(--f-gutter) 54px var(--f-gutter);
        
        //gap: var(--f-gutter);

        padding: var(--f-gutter);

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ul {
          max-width: auto;
            width: 100%;
            margin: 0;

            word-break: break-word;
            white-space: pre-line;
        }

        h1{
          line-height: 60px;
          font-size: 54px;
          @include respond-to("<=m") {
            font-size: var(--f-h2-text-size);
            line-height: var(--f-h2-line-height);
          }

        }

        h2{
          font-size: 40px;
            line-height: var(--f-h2-line-height);
        }

        h3{
          font-size: 28px;
            line-height: 36.4px;
        }

        p,
        blockquote{
          line-height: 28px;
        }

        ul {
          li {
            list-style: disc;
          }
        }

        blockquote{
          
        }

        a{
    color: var( --color-ver2-primary-turquoise);
    
    &:hover{
      color: var(--color-ver2-tertiary-turquoise);
    }
  }
      }
       
       

    
  }

   ///////////////////////////////
  // SLIDER


    

    .learn-featured-tag__header{
    
      &-left{

        h2{
          font-size: var(--f-h3-text-size);
          margin-bottom: 0;
        }
      }
    }

    & .learn-tag__slider{
      
      
    }
 
}
</style>