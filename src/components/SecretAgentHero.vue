<template>
  <div class="secret-agent-hero">
    <div
      class="secret-agent-hero__container"
      v-for="(hero, index) in secretAgentHero"
      :key="index"
    >
      <div class="secret-agent-hero__container--left">
        <h2>{{ hero.title }} Become a <span>Secret Agent</span>.</h2>
        <p>{{ hero.subtitle }}</p>
        <form
          v-if="!formSubmitted"
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
            placeholder="enter your email"
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
            <span class="btn-text">{{ hero.form_button_text }}</span>
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

          <span>{{ hero.successful_submission_text }}</span>
        </h5>
      </div>
      <div class="secret-agent-hero__container--right">
        <video width="100%" height="334" controls>
          <source :src="hero.video.url" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      formSubmitted: false
    };
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
    secretAgentHero() {
      const content = this.$static.secretAgentHero.edges.map(it => it.node);
      return content;
    }
  }
};
</script>

<static-query>
  query {
    secretAgentHero: allStrapiAgentLandingHero {
      edges {
        node {
          id
          title
          subtitle
          form_button_text
          successful_submission_text
          video {
            url
          }
        }
      }
    }
  }
</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
@import "../sass/functions/theme";

.secret-agent-hero {
  &__container {
    width: 100%;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 502px;
    align-items: center;
    gap: 36px;

    @include respond-to("<=s") {
      grid-template-columns: 1fr;
      grid-auto-flow: row;
    }

    &--img-position--left {
      .secret-agent-hero__container--right {
        @include respond-to(">=m") {
          order: -1;
        }
      }
    }

    &--left {
      display: grid;
      align-items: center;
      justify-content: center;
      gap: var(--f-gutter);

      * {
        margin: 0;
      }

      h2 {
        font-family: var(--f-default-headers-font);
        font-size: 48px;
        font-weight: 600;
        span {
          color: #edc92b;
        }
      }

      h3 {
        @include respond-to("<=s") {
          text-align: center;
        }
      }

      .secret-agent-form {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: 1fr 149px;
        gap: var(--f-gutter-s);

        @include respond-to("<=s") {
          grid-auto-flow: row;
          grid-template-columns: 1fr;
        }

        &__input {
          background: transparent !important;
          border: 1px solid var(--color-analog-primary-white) !important;
        }

        button {
          width: 149px !important;
          margin: 0 !important;
          height: 100%;
          background: var(--color-neutral-dark-mode-04);

          &:hover {
            background: var(--color-analog-secondary-blue);
          }
        }
      }

      .success {
        display: grid;
        color: #5aa361;
        align-items: center;
        grid-auto-flow: column;
        gap: var(--f-gutter-xs);
        width: fit-content;
      }
    }

    &--right {
      display: grid;
      align-items: center;
      justify-content: center;

      video {
        border-radius: var(--f-gutter);
        overflow: hidden;
        width: 100% !important;
        height: auto !important;
      }
    }
  }
}
</style>
