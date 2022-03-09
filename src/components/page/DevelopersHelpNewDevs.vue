<template>
  <section class="page-developer-new-dev">
    <div class="page-developer-new-dev__content">
      <h6 class="page-developer-new-dev__content__title">
        Help new devs hit the ground running
      </h6>
      <p class="page-developer-new-dev__content__text">
        Secret Pathways is a community effort and we’re actively looking for
        contributors. Want to help out? Join the Discord and let us know in the
        dev channel, or <a href="https://discord.gg/PzdQ9bfvcX">contact us here.</a>
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang='scss'>
@import "@lkmx/flare/src/functions/respond-to";

.page-developer-new-dev{
    position: relative;
    
    border: solid 1px var(--color-analog-secondary-gray);
    border-radius:10px ;
    padding: var(--f-gutter);

    
    &__content{
      display: grid;
      grid-gap: 4px;
        text-align: center;
        color: var(--color-neutral-dark-mode-05);
        max-width: 740px;
        margin: auto;


        &__title{
            font-size: var(--f-h5-text-size);
            font-family: montserrat;
            margin: 0;

        }

        &__text{
            font-size: var(--f-default-text-size);
            margin: 0;

            a{
              color: var(--color-developers-blue-01);
            }
        }
    }
}

</style>