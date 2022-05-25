<template>
  <section class="austin-event-hero">
    <div class="austin-event-hero__container">
      <div class="austin-event-hero__container__header">
        <h3 class="event-h3">Join us</h3>
        <h1 class="event-h1">Secret Party</h1>
        <p class="event-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus aenean
          sapien aliquam lobortis urna ac quis ridiculus viverra.
        </p>
      </div>

      <div class="austin-event-hero__container__info">
        <div class="austin-event-hero__container__info__date">
          <img
            src="../../assets/events/calendar.svg"
            alt=""
            class="event-icon date-icon"
          />
          <p class="event-date">
            Wednesday, <br />
            9PM - 2AM
          </p>
        </div>
        <div class="austin-event-hero__container__info__location">
          <img
            src="../../assets/events/location.svg"
            alt=""
            class="event-icon location-icon"
          />
          <p class="event-location">
            The Venue (<a href="#">map</a>) <br />
            516 E 6th St, Austin, TX
          </p>
        </div>
      </div>
      <div class="austin-event-hero__container__button">
          <btn class="center-text no-arrow event-button" url="#">Get tickets</btn>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";




.austin-event-hero {

    

    //padding: 68px 0;

  &__container {
      //display: grid;
      //gap: var(--f-gutter);
    padding: 120px 0;
    max-width: 590px;
    margin: auto;

    @include respond-to("<=xs"){
        padding: 120px var(--f-gutter);
    }

    & p {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
      
    }

    &__header {
      text-align: center;

      .event-h3 {
        color: var(--austin-event-color-accent-01);
        text-transform: uppercase;
        font-weight: 700px;
        font-family: var(--f-default-text-font);
        margin-bottom: 0;
      }

      .event-h1 {
        font-family: var(--f-default-headers-font);
        
        @include respond-to("<=s"){
            font-size: 48px;
        }
      }



    }

    &__info {
      display: flex;
      max-width: 420px;
      margin: auto;
      justify-content: space-between;
      margin-bottom: 16px;
      
      &__date,
      &__location {
        display: flex;
        align-items: flex-start;
        //padding: var(--f-gutter);
        

        & p {
            margin-bottom: 0;

            @include respond-to("<=xs"){
                font-size: var(--f-default-text-size);
            }
        }


        & img {
        //   padding: 6px;
        //   margin-right: 4px;
        margin-right: 10px;
        padding: 2px 1px;
          width: 30px;
          height: 30px;

          @include respond-to("<=xs"){
              margin-right: 2px;
          }
        }
      }
    }

    &__button {
        text-align: center;

        & .event-button{
        // margin-right: 0 !important;
        background-color: var(--austin-event-color-accent-01) !important;
        height: 46px;
        // width: 187px !important;

        // text-transform: uppercase;
        // font-weight: 700px;
        // font-size: var(--f-default-text-size);  
        
        padding: 10px 10px !important;
                    margin: 0 !important;

                    max-width: fit-content !important;
                    min-width: 160px;

                    justify-content: center;

                    @include respond-to("<=m"){
                        max-width: 100% !important;
                    }
        }

        & .event-button:hover{   
             background-color: var(--color-neutral-dark-mode-02) !important;
                
        }
    }

    
  }
}
</style>