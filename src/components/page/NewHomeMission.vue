<template>
  <section class="new-home__mission">
      <div class="new-home__mission__content">
          <h5 class="new-home__mission__content-h5">
              OUR MISSION
          </h5>
          <h1 class="new-home__mission__content-h1">
              A better internet starts with privacy
          </h1>
          <p class="new-home__mission__content-p">
            Blockchain technology is our chance to create a more inclusive and democratic internet. But today,
            blockchains expose their users' data to all, and are too risky to use for everything—blocking the widespread
            adoption of the decentralized web. Our mission is to fix this by giving everyone the freedom to choose what
            they share.
          </p>

      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.new-home__mission{
    padding-top: 128px;

    &__content{
        max-width: 800px;
        margin: auto;
        padding: var(--f-gutter);

        &-h5, &-h1{
        text-align: center;
        }

        &-p{
            font-size: 26px;
            line-height: 39px;
            font-weight: 100;
        }
    }

    
}


</style>