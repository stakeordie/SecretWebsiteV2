<template>
  <div class="legal">
    <p>© Secret Network. All Rights Reserved.</p>
    <a href="/privacy-policy" class="link">Privacy Policy</a>
  </div>
</template>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";

.legal {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;
  padding: 40px;

  @include respond-to(">=m") {
    flex-direction: row;
  }

  p {
    margin: 0;
    color: var(--color-analog-primary-white);
  }

  a.link {
    margin: 0;
    color: var(--color-analog-tertiary-blue);
  }
}
</style>
