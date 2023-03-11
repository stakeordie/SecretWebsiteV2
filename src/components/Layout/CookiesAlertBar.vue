<template>
  <div class="cookies-alert" v-if="isOpen">
    <div class="cookies-alert-content">
      <p class="text">
        We use cookies to improve our website performance and serve better
        content. We never collect any personal data. By allowing cookies you'll
        help us give you a better experience, but you can always choose to opt
        out.
      </p>
      <div class="buttons">
        <a href="/privacy-policy" class="button">Learn more</a>
        <button class="button" @click="closeAlert('false')">
          Decline
        </button>
        <button class="button primary" @click="closeAlert('true')">
          Allow cookies
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    validateIsOpen() {
      if (!process.isClient) return;
      const localData = localStorage.getItem("allowCookies");
      this.isOpen = Boolean(!localData);
    },
    closeAlert(state = "false") {
      if (!process.isClient) return;
      localStorage.setItem("allowCookies", state);
      this.validateIsOpen();
    }
  },
  mounted() {
    this.validateIsOpen();
  },
  updated() {
    this.validateIsOpen();
  }
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";
.cookies-alert {
  position: fixed;
  z-index: 1;
  bottom: 0;
  background-color: var(--color-neutral-dark-mode-01);
  width: 100%;
  transition: 0.5s;

  &-content {
    max-width: 1440px;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding: 16px;

    @include respond-to(">=s") {
      padding: 16px 60px;
    }

    @include respond-to(">=l") {
      padding: 16px 120px;
      flex-direction: row;
    }

    .text {
      margin: 0;
      color: var(--color-neutral-gray-03);
    }

    .buttons {
      display: flex;
      flex-direction: column;
      gap: 16px;

      @include respond-to(">=m") {
        flex-direction: row;
        align-self: flex-end;
      }

      @include respond-to(">=l") {
        align-self: center;
      }

      .button {
        all: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        padding: 16px 10px 14px;
        border-radius: 10px;
        font-family: "Hind";
        font-size: 16px;
        line-height: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        cursor: pointer;
        transition: 0.3s;

        @include respond-to(">=m") {
          width: max-content;
          padding-inline: 0;
        }

        &.primary {
          background-color: var(--color-neutral-dark-mode-04);

          @include respond-to(">=m") {
            width: 220px;
          }
        }

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}
</style>
