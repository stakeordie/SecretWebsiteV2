<template>
  <div class="ecosystem-roadmap-get-your-project">
    <div class="ecosystem-roadmap-get-your-project__img">
      <img
        src="../../assets/about-secret-network/about-secret-network-hero-img.svg"
        alt="Have questions"
        loading="lazy"
      />
    </div>
    <div class="ecosystem-roadmap-get-your-project__content">
      <h4>Get Your Project on the Roadmap!</h4>
      <p class="ecosystem-roadmap-get-your-project__content__p">
        Any developer can request to add their project to the roadmap. The
        project just needs to meet these criteria:
      </p>
      <div class="ecosystem-roadmap-get-your-project__content__list">
        <div class="list-item">
          <img
            src="../../assets/about-secret-network/check-circle-green.svg"
            alt="Green check"
            class="list-icon"
            loading="lazy"
          />
          <p class="list-info">Has a unique name or code name</p>
        </div>
        <div class="list-item">
          <img
            src="../../assets/about-secret-network/check-circle-green.svg"
            alt="Green check"
            class="list-icon"
            loading="lazy"
          />
          <p class="list-info">Has a clear value proposition for the network</p>
        </div>
      </div>

      <btn class="no-arrow" url="/ecosystem/submit-project"
        >Submit Your Project</btn
      >
    </div>

    <!-- <h4>Get Your Project on the Roadmap!</h4>
    <p class="ecosystem-roadmap-get-your-project__message">
      Any developer can request to add their project to the roadmap. The project
      just needs to meet these criteria:
    </p>
    <ul>
      <li><p>Has a unique name or code name</p></li>
      <li><p>Has a clear value proposition for the network</p></li>
    </ul>
    <btn class="no-arrow" url="/ecosystem/submit-project">Submit Your Project</btn> -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.ecosystem-roadmap-get-your-project {
  display: flex;
  gap: 54px;
  padding: 32px;
  align-items: center;
  justify-content: center;
  background-color: var(--color-neutral-dark-mode-03);
  border-radius: 10px;

  @include respond-to("<=s") {
    flex-direction: column;
  }

  &__img {
    // min-width: 280px;
    max-width: 280px;

    img {
      object-fit: contain;
    }
  }

  &__content {
    max-width: 536px;
    h4 {
      font-family: var(--f-default-headers-font) !important;
      color: var(--color-analog-primary-white) !important;
      // margin-bottom: 0;
    }

    &__list {
      .list-item {
        display: flex;
        gap: 10px;

        & img {
          width: 20px;
          height: 20px;
        }
        & .list-info {
          color: var(--color-analog-primary-white);
        }
      }
    }
  }
}
</style>
