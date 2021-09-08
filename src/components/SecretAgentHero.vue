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
          @submit.prevent="submitForm"
          class="validate secret-agent-form"
        >
          <input
            type="email"
            v-model="email"
            value=""
            name="email"
            class="required email secret-agent-form__input"
            placeholder="enter your email"
            required
          />
          <button
            type="submit"
            value="Subscribe"
            name="subscribe"
            class="btn button"
            :disabled="loading"
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
        <video width="100%" height="334" controls poster="../assets/poster-video.jpg">
          <source src="https://vod-progressive.akamaized.net/exp=1631072352~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4937%2F23%2F599685100%2F2817081474.mp4~hmac=36325696a286b57cdbeac2a0830b2bc96966f52134b93074c968768911206d82/vimeo-prod-skyfire-std-us/01/4937/23/599685100/2817081474.mp4?filename=Final+CRV+Draft.mp4" type="video/mp4" />
          <!-- <source :src="hero.video.url" type="video/mp4" /> -->
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import mailchimp from '@/apis/mailchimp';

export default {
  data: function() {
    return {
      loading: false,
      formSubmitted: false,
      email: ''
    };
  },
  methods: {
    async submitForm() {
      if (!this.email) return;

      this.loading = true;

      try {
        await mailchimp.subscribe(this.email);
        this.formSubmitted = true;
      } catch (e) {
        // ignore
        // TODO remove this
        console.error(e);
      } finally {
        this.loading = false;
      }
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
        letter-spacing: -0.9px !important;
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

        input {
          &::placeholder {
            color: white;
          }
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
        border-radius: 10px;
        overflow: hidden;
        width: 100% !important;
        height: auto !important;
      }
    }
  }
}
</style>
