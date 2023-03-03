<template>
  <Column class="legal" mode="full" number="1" number-m="1" number-s="1">
    <Block class="rights-reserved">
      <p>© Secret Network. All Rights Reserved.</p>
      <nav class="documents">
        <span class="item">Terms of Service</span>
        <span class="divider"></span>
        <span class="item">Privacy Policy</span>
      </nav>
    </Block>
  </Column>
</template>

<style lang="scss" scoped>
@import "../../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

.legal {
  @include theme(light light-colored) {
    background: var(--color-neutral-light-mode-01);
  }
  @include theme(dark dark-colored) {
    background: var(--color-neutral-dark-mode-01);
  }
  @include respond-to("<=s") {
    grid-template-columns: 1fr;
    height: auto;
    text-align: center;
  }

  .content {
    display: grid;

    .box {
      padding-left: var(--f-gutter-xl);
      padding-right: var(--f-gutter-xl);
      display: grid;
      width: 100%;
      max-width: 1440px;
      margin-left: auto;
      margin-right: auto;
      grid-auto-flow: column;

      p {
        margin: 0;
        color: var(--color-analog-primary-white);
      }

      a {
        margin: 0;
        color: var(--color-analog-tertiary-blue);
      }

      .documents {
        display: grid;
        grid-auto-flow: column;
        gap: 20px;
        justify-content: end;

        .content {
          .box {
            display: grid;
            align-content: end;
          }
        }

        span.item {
          color: var(--color-analog-tertiary-blue);
          font-family: "Hind";
        }

        span.divider {
          width: 1px;
          background-color: white;
          height: 100%;
        }
      }
    }
  }
}
</style>
