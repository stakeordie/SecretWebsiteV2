<template>
  <nav class="learn-anchors" v-if="data.length">
    <span class="learn-anchors__title">Quick menu</span>
    <div
      v-for="(first, index) in data"
      :key="index"
      class="learn-anchors__grid"
    >
      <div
        class="anchor"
        :class="[
          `lvl--0${first.navLevel}`,
          !first.nested.length ? 'anchor__empty' : '',
        ]"
      >
        <a class="anchor__title" :href="'#' + first.id">
          {{ first.title }}
        </a>
        <button
          v-if="first.nested.length"
          type="button"
          class="anchor__control"
          @click="first.isOpen = !first.isOpen"
        >
          <img
            :class="
              first.isOpen
                ? 'anchor__control--is-open'
                : 'anchor__control--is-closed'
            "
            src="../../assets/chev-learn.svg"
            alt=""
          />
        </button>
      </div>
      <div
        v-show="first.isOpen"
        v-for="(second, index) in first.nested"
        :key="index"
        class="parent-control"
        :class="`parent-${second.idParent}`"
      >
        <div :class="`lvl--0${second.navLevel}`" class="anchor">
          <a
            class="anchor__title"
            :href="'#' + second.id"
            :class="'anchor__title-0' + second.navLevel"
          >
            {{ second.title }}
          </a>
          <button
            type="button"
            class="anchor__control"
            v-on:click="second.isOpen = !second.isOpen"
          >
            <img
              :class="
                second.isOpen
                  ? 'anchor__control--is-open'
                  : 'anchor__control--is-closed'
              "
              v-show="second.nested.length !== 0"
              src="../../assets/chev-learn.svg"
              alt=""
            />
          </button>
        </div>
        <div
          v-show="second.isOpen"
          v-for="(third, index) in second.nested"
          :key="index"
          class="parent-control"
          :class="`parent-${third.idParent}`"
        >
          <div :class="`lvl--0${third.navLevel}`" class="anchor">
            <a
              class="anchor__title"
              :href="`#${third.id}`"
              :class="`anchor__title-0${third.navLevel}`"
            >
              {{ third.title }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article {
  .learn-anchors {
    position: sticky;
    top: 100px;
    display: grid;
    gap: 10px;
    align-self: baseline;
    background: #1a2128;
    border-radius: 10px;
    padding: var(--f-gutter);

    @include respond-to("<=m") {
      position: inherit;
    }

    &__title {
      color: var(--color-neutral-dark-mode-05);
      font-family: "Montserrat";
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
    }

    &__grid {
      display: grid;
      gap: 0;

      .parent-control {
        transition: 0.2s ease;
        height: auto;
        max-height: 600px;

        &.hidding {
          opacity: 0;
          max-height: 0px;
        }

        &.erased {
          display: none;
        }
      }
    }

    .anchor {
      display: grid;
      grid-template-columns: 1fr 24px;
      gap: var(--f-gutter);
      min-height: 32px;
      justify-content: space-between;

      &__empty {
        grid-template-columns: 1fr;
      }

      &__title {
        font-family: "Hind";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #d1d5db;
        display: flex;
        align-items: center;

        &-02 {
          padding-left: 11px;
          border-left: 2px solid #b2bfcd;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        &-03 {
          margin-left: 22px;
          padding-left: 11px;
          border-left: 2px solid #b2bfcd;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        &:hover {
          color: #ffffff;
        }
        &:focus,
        &:active {
          color: #ffffff;
          font-weight: 700;
        }
      }

      &__control {
        display: flex;
        justify-content: center;
        background: transparent;
        margin: 0;
        padding: 0;
        align-self: center;
        transition: 0.2s ease;
        &--is-open {
          transition: 0.2s ease;
          transform: rotate(0);
        }
        &--is-closed {
          transition: 0.2s ease;
          transform: rotate(180deg);
        }
      }

      &.lvl {
        &--01 {
          padding-left: 0;
        }

        &--02 {
          padding-left: 11px;
        }

        &--03 {
          margin-left: 11px;
          margin-top: 0;
          padding-left: 11px;
          border-left: 2px solid #b2bfcd;
          grid-template-columns: 1fr;
        }
      }
    }
  }
}
</style>
