<template>
  <section class="page-ecosystem__contributors">
      <div class="page-ecosystem__contributors__title">
          <h5 class="page-ecosystem__contributors__title__h5">FUND CONTRIBUTORS</h5>
          <h3 class="page-ecosystem__contributors__title__h3">Backed by top industry investors</h3>
      </div>
      <div class="page-ecosystem__contributors__imgs" >
        <img v-for="(item, index) in reasons" :key="index" :src="item.imageUrl" alt=""  class="page-ecosystem__contributors__img" />
      </div>
  </section>
</template>

<script>
export default {
    data() {
    return {
      reasons: [
        {
          imageUrl: "../temp/funding/logos/alameda.svg"
        },
        {
          imageUrl: "../temp/funding/logos/arca.svg"
        },
        {
          imageUrl: "../temp/funding/logos/arkstream.svg"
        },
        {
          imageUrl: "../temp/funding/logos/arrington.svg"
        },
        {
          imageUrl: "../temp/funding/logos/bison.svg"
        },
        {
          imageUrl: "../temp/funding/logos/blacktower.svg"
        },
        {
          imageUrl: "../temp/funding/logos/coinfund.svg"
        },
        {
          imageUrl: "../temp/funding/logos/defiance.svg"
        },
        {
          imageUrl: "../temp/funding/logos/dragonly.svg"
        },
        {
          imageUrl: "../temp/funding/logos/fenbushi.svg"
        },
        {
          imageUrl: "../temp/funding/logos/figment.svg"
        },
        {
          imageUrl: "../temp/funding/logos/hartman.svg"
        },
        {
          imageUrl: "../temp/funding/logos/hashed.svg"
        },
        {
          imageUrl: "../temp/funding/logos/hashkey-group.svg"
        },
        {
          imageUrl: "../temp/funding/logos/huobi.svg"
        },
        {
          imageUrl: "../temp/funding/logos/iconium.svg"
        },
        {
          imageUrl: "../temp/funding/logos/kucoin.svg"
        },
        {
          imageUrl: "../temp/funding/logos/magnus.svg"
        },
        {
          imageUrl: "../temp/funding/logos/ngc.svg"
        },
        {
          imageUrl: "../temp/funding/logos/sanctor.svg"
        },
        {
          imageUrl: "../temp/funding/logos/scrt-labs.svg"
        },
        {
          imageUrl: "../temp/funding/logos/shima.svg"
        },
        {
          imageUrl: "../temp/funding/logos/skynet.svg"
        },
        {
          imageUrl: "../temp/funding/logos/skyvision.svg"
        },
      ]
    }
    }

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.page-ecosystem__contributors{
    display: grid;
    row-gap: 36px;
    text-align: center;
    padding-bottom: var(--f-gutter-xl) ;

    &__title{
        text-align: center;

        &__h5{
            color: var(--color-newBrand-blue-01);
        }
    }

    &__imgs{
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 48px;
        row-gap: 64px;
        margin: auto;

        &__img{
            width: 130px;
            height: 64px;
            margin: auto;
            

        }

        @include respond-to("<=m"){
            grid-template-columns: repeat(4, 1fr);
            
        }

        @include respond-to("<=s"){
            grid-template-columns: repeat(3, 1fr);

        }

        @include respond-to("<=s"){
            grid-template-columns: repeat(2, 1fr);

        }

        
    }
}

</style>