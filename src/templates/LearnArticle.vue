<template>
  <default-layout class="content">
    <column class="spacer-s bg-black-gradient">
    <div v-for="component in $context.components">
      <block>
        <component :is="component.comp_name" v-bind="component">
          {{ component.content ? component.content : "" }}
        </component>
      </block>
    </div>
    </column>
  </default-layout>
</template>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.content {
  .learn-article-column-single {
  max-width: 742px;
  &--narrow {
    max-width: 485px;
  }
  &--wide {
    max-width: 843px;
  }
  margin: auto;
  padding: var(--f-gutter);
  .title__align-center {
    text-align: center;
  }
  p {
    max-width: auto;
    width: 100%;
    line-height: 28px;
    color: var(--color-analog-primary-white);
  }
  h3 {
    max-width: auto;
    width: 100%;
    font-size: 28px;
    line-height: 36.4px;
  }
  }
  .learn-article-column-double {
    display: grid;
    gap: 26px;
    grid-template-columns: repeat(auto-fit, minmax(385px, 1fr));
    @include respond-to("<=m") {
      grid-template-columns: repeat(auto-fit, minmax(342px, 1fr));
    }
    &__col-1,
    &__col-2 {
      padding: var(--f-gutter);
    }
    p {
      max-width: auto;
      width: 100%;
      line-height: 28px;
      color: var(--color-analog-primary-white);
    }
    h3 {
      max-width: auto;
      width: 100%;
      font-size: 28px;
      line-height: 36.4px;
    }
  }
  .learn-article-hero {
    padding: 0 42px;

    @include respond-to("<=s"){
      padding: 0 0;
    }
  }
  .learn-article-image {
    display: grid;
    gap: 16px;
    padding: var(--f-gutter);
    .img-caption {
      font-size: 16px;
      color: var(--theme-card-text-color);

      text-align: center;
      max-width: 710px;
      margin: auto;
      line-height: 24px;

      @include respond-to("<=m") {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
}
</style>