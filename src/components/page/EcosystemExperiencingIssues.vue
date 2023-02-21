<template>
  <div class="ecosystem-report-issue">
    <div class="ecosystem-report-issue__img">
      <img
        src="../../assets/about-secret-network/status-server-img.svg"
        alt="Have questions"
        loading="lazy"
      />
    </div>
    <div class="ecosystem-report-issue__content">
      <h3>Experiencing issues?</h3>

      <div class="ecosystem-report-issue__content__btns">
        <btn class="no-arrow" url="https://linktr.ee/SCRTSupport"
          >RePORT AN ISSUE</btn
        >
        <btn class="no-arrow" url="../service-status"
          >Check Exchange Status</btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.ecosystem-report-issue {
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
    // max-width: 536px;
    h4 {
      font-family: var(--f-default-headers-font) !important;
      color: var(--color-analog-primary-white) !important;
      margin-bottom: 0;
    }

    &__btns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 16px;

      @include respond-to("<=m") {
        grid-template-columns: 1fr;
      }

      a {
        margin-right: 0 !important;
      }
    }
  }
}
</style>
