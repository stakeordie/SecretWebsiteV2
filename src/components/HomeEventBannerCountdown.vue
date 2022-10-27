<template>
  <section class="home-event-countdown">
    <event-countdown></event-countdown>

    <h3>until Secret Summit</h3>
    <h4>COMING IN DECEMBER</h4>

    <btn class="center-text no-arrow " url="../summit">LEARN MORE</btn>


  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";


.event-banner{

  .summit-banner__countdown{
    margin: 26px auto 26px auto ;
  }
  

  h3{
    margin: 0;
  }
background-image: url("../assets/events/summit/secret-summit-graphic-home.svg");
background-size: cover;

text-align: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

	@include respond-to("<=s") {
		background-image: linear-gradient(rgba(26, 27, 40, 0.6), rgba(26, 27, 40, 0.6)), 
    url("../assets/events/summit/secret-summit-graphic-home-mobile.svg");

	}


  .event__countdown__wrapper{
    margin: auto;
    margin-bottom: 8px;

  }

  .button {
      background-color: var(--color-ver2-primary-blue) !important;
      width: 204px !important;
      margin-left: 0 !important;
      margin-bottom: 26px !important;

			span {
				font-size: 16px !important;
			}

    }


}

</style>