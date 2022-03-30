<template>
  <section class="service-status__hero__content">
          <h1 class="service-status__hero__content__title">
              Network Status
          </h1>
          <p class="service-status__hero__content__text">
              The latest status of network performance and services within the network. Updated manually by dedicated community members.
            </p>
            <p class="service-status__hero__content__text">
              If you suspect there is an issue occuring, <a href="https://linktr.ee/SCRTSupport" target='_blank'
                rel="noopener noreferrer" class="service-status__hero__content__link">send them a message here.</a>
            </p>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.service-status__hero{
    

    &__content{
        max-width: 710px;
        margin-top: 68px;

        &__text{
            font-size: var(--paragraph-font-size-big);
            font-weight: 300;
            line-height: 28px;

            
        }
        &__link{
                color: var(--color-newBrand-blue-02);
            }
    }
     
}

</style>