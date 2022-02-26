<template>
  <section class="page-developers-funding">
    <div class="page-developers-funding__content">
      <h6 class="page-developers-funding__content__sub-title">
          FUNDING & GRANTS
          </h6>
      <h4 class="page-developers-funding__content__title">
        Bring your (biggest) ideas to life
      </h4>
      <p class="page-developers-funding__content__text">
        We’re offering 400M+ in funding with over 30 partners and contributors to both starting and scaling builders.
      </p>
      
    </div>
    <div class="page-developers-funding__materials" >
        <div class="page-developers-funding__materials__material" v-for="(item, index) in material" :key="index">
          <h6>{{ item.title }}</h6>
            <p>{{ item.description }}</p>
            <a  :url="item.url">READ MORE</a>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      material: [
        {
          imageUrl: "/temp/icon-developers-path.svg",
          title: "Ecosystem Fund",
          description:
            "Get long-term financial and strategic support from our top industry partners to scale your Secret project and reach billions of users.",
          url: "google.com",
        },
        {
          imageUrl: "/temp/icon-developers-path.svg",
          title: "Grants",
          description:
            "Get non-dilutive capital to get your Secret idea off the ground and rapidly gain traction.",
          url: "google.com",
        }
      ]
    }
   }
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.page-developers-funding{
    margin: 164px 0;

    &__content{
        text-align: center;
        max-width: 620px;
        margin: auto;

        &__sub-title{
            font-family: montserrat;
            text-transform: uppercase;
            font-weight: 500;
            font-size: var(--f-h5-text-size);
            color: var(--color-neutral-dark-mode-05);
            line-height: 24px;

            @include respond-to("<=s") {
              font-size: var(--f-h6-text-size);
            }
        }
        &__title{
            font-family: montserrat;
        font-size: var(--f-h3-text-size);
        line-height: 30px;
         
        @include respond-to("<=s") {
            font-size: var(--f-h4-text-size);
          }
        }

        &__text{
          font-size: var(--paragraph-font-size-big);
        }
    }

    &__materials{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 26px;
            text-align: left;
            max-width: 1000px;
            margin: auto;

            @include respond-to("<=xs"){
                grid-template-columns: 1fr;
            }

            &__material{
              padding: var(--f-gutter);

              h6{
                font-size: var(--f-h4-text-size);
          margin-bottom: 0;
              }

            }

        }
}




</style>