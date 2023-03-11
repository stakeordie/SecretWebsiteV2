<template>
  <section class="footer-contact">
    <div class="social">
      <a href="/" class="scrt-logo">
        <img
          src="/img/icons/new-secret-logo.svg"
          width="124"
          height="58"
          alt="Secret logo"
          loading="lazy"
        />
      </a>
      <nav class="social-navigation">
        <a
          v-for="(item, index) in socialMedias"
          :key="index"
          :href="item.url"
          target="blank"
          rel="noopener noreferrer"
        >
          <img
            :src="item.icon"
            :alt="item.alt"
            width="24"
            height="24"
            loading="lazy"
          />
        </a>
      </nav>
      <a
        href="https://forms.monday.com/forms/746a913d8974a232da2ccabbcce68408?r=use1"
        target="_blank"
        rel="noopener noreferrer"
        class="icon-icon-arrow-external"
      >
        Report a bug
      </a>
    </div>
    <div class="subscribe">
      <h3>Subscribe to Our Newsletter</h3>
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
      socialMedias: [
        {
          url: "https://forum.scrt.network/",
          icon: "/img/icons/icon-social-forum.svg",
          alt: "Join the Conversation"
        },
        {
          url: "https://github.com/SecretFoundation/SecretWebsite",
          icon: "/img/icons/icon-social-github.svg",
          alt: "Github icon"
        },
        {
          url: "https://discord.com/invite/SJK32GY",
          icon: "/img/icons/icon-social-discord.svg",
          alt: "Discord icon"
        },
        {
          url: "https://t.me/SCRTcommunity",
          icon: "/img/icons/icon-social-telegram.svg",
          alt: "Telegram icon"
        },
        {
          url: "https://twitter.com/SecretNetwork",
          icon: "/img/icons/icon-social-twitter.svg",
          alt: "Twitter icon"
        },
        {
          url: "https://www.instagram.com/scrtnetwork/",
          icon: "/img/icons/icon-social-instagram.svg",
          alt: "Instagram icon"
        },
        {
          url: "https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw",
          icon: "/img/icons/icon-social-youtube.svg",
          alt: "Youtube icon"
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;
  padding: 40px;
  flex-direction: column;
  gap: var(--f-gutter-xxl);
  align-items: center;

  @include respond-to(">=l") {
    justify-content: space-between;
    flex-direction: row;
  }

  .social {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--f-gutter);

    @include respond-to(">=l") {
      align-items: flex-start;
      text-align: left;
    }

    .scrt-logo {
      height: auto;
      display: inline-block;

      img {
        width: 182px;
      }
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
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    max-width: 445px;
    gap: 16px;

    @include respond-to(">=l") {
      align-self: flex-end;
      text-align: left;
    }

    form {
      display: grid;
      gap: var(--f-gutter-s);
        grid-template-columns: 1fr;
      grid-template-rows: 46px;
      place-items: stretch;

      @include respond-to(">=l") {
        grid-template-columns: 1fr 150px;
      }

      input {
        margin: 0;
        padding: 10px 16px;
        background-color: var(--color-neutral-dark-mode-03);
        border: none;

        &::placeholder {
          color: var(--color-analog-primary-white);
          opacity: 0.6;
        }
      }

      .button {
        margin: 0;
        background-color: #303c4a;
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
