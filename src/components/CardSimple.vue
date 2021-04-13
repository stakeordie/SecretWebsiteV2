<template>
  <div class="card-simple" :class="[orientation, kind]" :style="{ '--custom-color-hover': `var(--color-analog-secondary-${accent})` }">
    <div class="first-block">
      <h3 :style="{ color: `var(--color-analog-secondary-${accent})` }">{{ titleFirstLine }}</h3>
      <h4>{{ titleSecondLine }}</h4>
      <p>{{ cardMessage }}</p>
      <slot></slot>
    </div>
    <div class="second-block">
      <g-image v-if="cardImage" :src="require(`!!assets-loader!@images/${cardImage}`)"></g-image>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      kind: {
        type: String,
        required: false
      },
      orientation: {
        type: String,
        required: false
      },
      accent: {
        type: String,
        required: false
      },
      titleFirstLine: {
        type: String,
        required: false
      },
      titleSecondLine: {
        type: String,
        required: false
      },
      cardMessage: {
        type: String,
        required: false
      },
      cardImage: {
        type: String,
        required: false
      }
    }
  }

</script>

<style lang="scss">
  @import "../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";

  .card-simple {
    border-radius: var(--f-radius);
    padding: var(--f-gutter-l);
    background: var(--theme-card-bg-default);
    display: grid;
    gap: var(--f-gutter-xxl);
    transition: .2s ease;
    &.cta {
      cursor: pointer;
      &:hover {
        box-shadow: var(--f-gutter-s) var(--f-gutter-s) 0 0 var(--custom-color-hover);
      }
    }

    &.vertical {
      grid-template-columns: 1fr;
      gap: var(--f-gutter-xxl);
    }
    &.horizontal {
      grid-template-columns: 1fr 60%;
      gap: var(--f-gutter);
    }
    .first-block {
      display: flex;
      flex-direction: column;
      h3 {
        margin-bottom: var(--f-gutter-s);
      }
      h4 {
        margin-bottom: var(--f-gutter-l);
      }
      p {
        font-size: 20px;
        color: var(--theme-card-text-color);
      }
    }
  }

</style>
