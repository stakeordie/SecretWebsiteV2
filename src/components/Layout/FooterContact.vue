<template>
  <section class="footer-contact">
    <div class="social">
      <g-link :to="$tp(`/`)">
        <img
          class="scrt-logo"
          src="@/assets/new-secret-logo.svg"
          width="124"
          height="58"
          alt="Secret logo"
          loading="lazy"
        />
      </g-link>
      <nav class="social-navigation">
        <a
          href="https://forum.scrt.network/"
          target="blank"
          rel="noopener noreferrer"
        >
          <img
            src="@/assets/icon-social-forum.svg"
            alt="Join the Conversation"
            width="24"
            height="24"
            loading="lazy"
          />
        </a>
        <a
          href="https://github.com/SecretFoundation/SecretWebsite"
          target="blank"
          rel="noopener noreferrer"
        >
          <img
            src="@/assets/icon-social-github.svg"
            alt="Github icon"
            width="24"
            height="24"
            loading="lazy"
          />
        </a>
        <a
          href="https://discord.com/invite/SJK32GY"
          target="blank"
          rel="noopener noreferrer"
        >
          <img
            src="@/assets/icon-social-discord.svg"
            alt="Discord icon"
            width="24"
            height="24"
            loading="lazy"
          />
        </a>
        <a
          href="https://t.me/SCRTcommunity"
          target="blank"
          rel="noopener noreferrer"
        >
          <img
            src="@/assets/icon-social-telegram.svg"
            alt="Telegram icon"
            width="24"
            height="24"
            loading="lazy"
          />
        </a>
        <a
          href="https://twitter.com/SecretNetwork"
          target="blank"
          rel="noopener noreferrer"
        >
          <img
            src="@/assets/icon-social-twitter.svg"
            alt="Twitter icon"
            width="24"
            height="24"
            loading="lazy"
          />
        </a>
        <a
          href="https://www.instagram.com/scrtnetwork/"
          target="blank"
          rel="noopener noreferrer"
        >
          <img
            src="@/assets/icon-social-instagram.svg"
            alt="Instagram icon"
            width="24"
            height="24"
            loading="lazy"
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw"
          target="blank"
          rel="noopener noreferrer"
        >
          <img
            src="@/assets/icon-social-youtube.svg"
            alt="Youtube icon"
            width="24"
            height="24"
            loading="lazy"
          />
        </a>
      </nav>
      <g-link
        v-bind:key="index + link"
        v-for="(link, index) in linksForSocial"
        :to="$tp(link.path)"
        :target="link.target"
      >
        <span :class="{ 'icon icon-icon-arrow-external': link.external }">
          {{ link.title }}
        </span>
      </g-link>
    </div>
    <div class="subscribe">
      <h3>Get Updates</h3>
      <form
        action="https://network.us2.list-manage.com/subscribe/post?u=7a05e306cd4c801a88ddcb060&amp;id=889f1a33bc"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <input
          type="email"
          value=""
          name="EMAIL"
          class="required email"
          id="mce-EMAIL"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          class="button"
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      linksForSocial: [
        {
          title: "Submit an issue",
          path: "https://github.com/stakeordie/SecretWebsiteV2/issues",
          external: true,
          target: "blank"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

.footer-contact {
  display: grid;
  grid-template-columns: 1fr 445px;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;

  a {
    &:hover {
      color: var(--mega-header-color-nav-exanded-hover) !important;
    }
  }
  @include respond-to("<=m") {
    grid-template-columns: 1fr;
    gap: var(--f-gutter-xxl);
  }
  .social {
    display: grid;
    gap: var(--f-gutter);
    place-items: start;

    @include respond-to("<=s") {
      text-align: center;
      justify-content: center;
    }

    .scrt-logo {
      width: 182px;
      height: auto;
      display: inline-block;
    }

    .social-navigation {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      gap: var(--f-gutter);
    }

    .submit-issue {
      display: grid;
      grid-auto-flow: column;
      gap: var(--f-gutter);
      align-items: center;
      grid-auto-columns: max-content;

      p {
        margin: 0;
      }
    }

    a,
    span {
      color: var(--color-analog-tertiary-blue);
    }
  }
  .subscribe {
    align-self: end;

    h3 {
      margin-bottom: var(--f-gutter);
      @include respond-to("<=s") {
        text-align: center;
      }

      span {
        @include theme(dark dark-colored) {
          color: var(--color-newBrand-blue-01);
        }
        @include theme(light light-colored) {
          color: var(--color-analog-secondary-purple);
        }
      }
    }

    form {
      display: grid;
      gap: var(--f-gutter-s);
      grid-template-columns: 1fr 150px;
      grid-template-rows: 46px;
      place-items: stretch;

      @include respond-to("<=s") {
        grid-template-columns: 1fr;

        .button,
        input {
          margin: 0 !important;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
      }
      .button,
      input {
        margin: 0;
      }

      input {
        padding: 10px 16px;
        background-color: var(--color-neutral-dark-mode-03);
        border: none;

        &::placeholder {
          color: var(--color-analog-primary-white);
          opacity: 0.6;
        }
      }

      .button {
        background-color: var(--color-ver2-primary-orange);
        text-transform: uppercase;
        font-family: "Hind";
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 1px;
        height: 100%;
        padding: 17px 32px 15px 32px;
      }
    }
  }
}
</style>
