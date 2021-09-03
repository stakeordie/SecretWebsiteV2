<template>
  <div class="secret-agent-email-banner">
    <div
      class="secret-agent-email-banner__container"
      v-for="(element, index) in secretAgentEmailBanner"
      :key="index"
    >
      <div class="secret-agent-email-banner__container--left">
        <h2>{{ element.CTA }}</h2>
      </div>
      <div class="secret-agent-email-banner__container--right">
         <form v-if="!formSubmitted"
          action="https://network.us2.list-manage.com/subscribe/post?u=7a05e306cd4c801a88ddcb060&amp;id=889f1a33bc"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate secret-agent-form"
          target="_blank"
          novalidate
        >
          <input
            type="email"
            value=""
            name="EMAIL"
            class="required email secret-agent-form__input"
            id="mce-EMAIL"
            :placeholder="element.placeholder_text"
            required
          />
          <button
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="btn button"
            v-on:click="submitForm"
          >
            <span class="btn-text">{{ element.submit_button_text }}</span>
          </button>
        </form>
        <h5 class="success" v-if="formSubmitted">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66663 17.3333L12 22.6667L25.3333 9.33333"
              stroke="#5AA361"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>{{ element.post_submission_message }}</span>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      formSubmitted: false,
    }
  },
  methods: {
    submitForm() {
      setTimeout(() => {
        this.formSubmitted = true;
        setTimeout(() => {
          this.formSubmitted = false;
        }, 5000);
      }, 1000);
    }
  },
  computed: {
    secretAgentEmailBanner() {
      const content = this.$static.secretAgentEmailBanner.edges.map(it => it.node);
      return content;
    }
  }
};
</script>

<static-query>
query {
  secretAgentEmailBanner: allStrapiAgentLandingEmailForm {
    edges {
      node {
        CTA
        placeholder_text
        submit_button_text
        post_submission_message
      }
    }
  }
}
</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
@import "../sass/functions/theme";

.secret-agent-email-banner {
  &__container {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: var(--f-gutter-xxl);
    padding: 132px 0;
    @include respond-to("<=s") {
      grid-template-columns: 1fr;
      grid-auto-flow: row;
    }
    &--left {
      display: grid;
      align-items: center;
      // justify-content: center;
      gap: var(--f-gutter);
      * {
          margin: 0;
        }
      h2 {
        font-size: 48px;
        @include respond-to("<=s") {
          font-size: 36px;
          text-align: center;       
        }
        span {
          color: var(--color-analog-secondary-yellow);
        }
      }
      h3 {
        @include respond-to("<=s") {
          text-align: center;
        }
      }
    }

    &--right {
      display: grid;
      align-items: center;
      // justify-content: center;
      * {
        margin: 0;
      }
      .secret-agent-form {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1fr 200px;
        gap: var(--f-gutter-s);
        @include respond-to("<=s") {
          grid-auto-flow: row;
         grid-template-columns: 1fr;       
          // gap: var(--f-gutter);
        }
        &__input {
          background: transparent !important;
          border: 1px solid var(--color-analog-primary-white) !important;
        }
        button {
          height: 100%;
          background: var(--color-neutral-dark-mode-04);
          &:hover {
            background: var(--color-analog-secondary-blue);
          }
        }
      }
      .success {
        display: grid;
        color: #5AA361;
        align-items: center;
        grid-auto-flow: column;
        gap: var(--f-gutter-xs);
        width: fit-content;
      }
    }
  }
}
</style>
