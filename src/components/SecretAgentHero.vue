<template>
  <div class="secret-agent__hero">
    <div class="secret-agent__hero__container" v-for="(hero, index) in secretAgentHero" :key="index">
      <div class="secret-agent__hero__container__left">
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
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66663 17.3333L12 22.6667L25.3333 9.33333" stroke="#5AA361" stroke-width="4"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <span>{{ hero.successful_submission_text }}</span>
        </h5>
      </div>

      <div class="secret-agent__hero__container__right">
        <video controls poster="../assets/poster-video.jpg">
          <!-- <source src="https://vod-progressive.akamaized.net/exp=1631072352~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4937%2F23%2F599685100%2F2817081474.mp4~hmac=36325696a286b57cdbeac2a0830b2bc96966f52134b93074c968768911206d82/vimeo-prod-skyfire-std-us/01/4937/23/599685100/2817081474.mp4?filename=Final+CRV+Draft.mp4" type="video/mp4" /> -->
          <source :src="hero.video_url" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import mailchimp from '@/apis/mailchimp';
import md5 from 'md5'

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
        const emailMd5 = md5(this.email);
        await mailchimp.subscribe(this.email, emailMd5);
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
          video_url
        }
      }
    }
  }
</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
@import "../sass/functions/theme";

.get-involved-become-secret-agent__hero {
  // background: red ;
  background-image: url("../assets/enrollment-background.jpg");
  background-repeat: no-repeat;
  background-size:cover;
  background-position: right;
}

.secret-agent__hero{
  padding: 120px 0 70px 0;
  &__container{
    padding: var(--f-gutter);
    display: grid;
    grid-template-columns: 1fr 502px;
    gap: 36px;
    

    @include respond-to("<=m"){
      grid-template-columns: 1fr;
    }
    
    @include respond-to("<=l"){
      // grid-template-columns: 2fr 1fr;
    }

    // display: flex;
    // gap: 36px;

    // @include respond-to("<=m"){
    //   flex-direction: column;
    // }
    

    &__left{align-self: center;

      h2{
        font-family: var(--f-default-headers-font);
        font-size: 48px;
        font-weight: 600;
        letter-spacing: 0px !important;
        span {
          color: #edc92b;
        }

         @include respond-to("<=m") {
            font-size: 28px;
            line-height: 32px;       
            // letter-spacing: -0.3px;
          }
          
          @include respond-to("<=l") {
            font-size: 36px;
            line-height: 48px;       
            // letter-spacing: -0.3px;
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
          height: 50px;
        }

        input {
          // display: none;
          &::placeholder {
            color: white;
          }
        }
        button {
          margin: 0 !important;
          height: 50px;
          background: var(--color-ver2-primary-yellow) !important;
          color: var(--color-neutral-dark-mode-01) !important;
          width: 149px !important;
          max-width: 149px;
          span {
            color: rgba(31, 22, 0, 1) !important;
          }
          &:hover {
            background: var(--color-neutral-dark-mode-02);
          }
        }
      }
    }

    &__right{
      align-self: center;
      justify-self: center;
      max-width: 100% !important;

      video{
        // -object-fit: contain;
        width: 100%;
        cursor: pointer;
      }

       @include respond-to("<=m") {
          max-width: 100% !important;
        }
    }
  }
}
</style>
