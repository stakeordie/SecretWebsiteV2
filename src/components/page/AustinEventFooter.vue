<template>
  <section class="austin-event-footer">
    <div class="austin-event-footer__links">
      <a
        target="_blank"
        href="https://www.eventbrite.com/e/the-secret-after-party-with-kevin-smith-tickets-343052458137"
        class="austin-event-footer__links__link"
        >Tickets</a
      >
      <a
        target="_blank"
        href="https://www.eventbrite.com/e/the-secret-after-party-with-kevin-smith-tickets-343052458137"
        class="austin-event-footer__links__link"
        >Directions</a
      >
      <a
        target="_blank"
        href="https://scrt.network/"
        class="austin-event-footer__links__link"
        >Secret</a
      >
      <a
        target="_blank"
        href="https://scrtlabs.com/"
        class="austin-event-footer__links__link"
        >SCRTLabs</a
      >
      <a
        target="_blank"
        href="https://legendao.io/"
        class="austin-event-footer__links__link"
        >Legendao</a
      >
    </div>

    <nav class="austin-event-footer__social">
      <a href="#" target="blank" rel="noopener noreferrer">
        <img
          src="../../assets/community-icons/facebook-gray.svg"
          alt="Join the Conversation"
          width="24"
          height="24"
        />
      </a>
      <a
        href="https://www.instagram.com/scrtnetwork/"
        target="blank"
        rel="noopener noreferrer"
      >
        <img
          src="../../assets/community-icons/instagram-gray.svg"
          alt="Join the Conversation"
          width="24"
          height="24"
        />
      </a>
      <a
        href="https://twitter.com/SecretNetwork"
        target="blank"
        rel="noopener noreferrer"
      >
        <img
          src="../../assets/community-icons/twitter-gray.svg"
          alt="Join the Conversation"
          width="24"
          height="24"
        />
      </a>

      <a
        href="https://github.com/SecretFoundation/SecretWebsite"
        target="blank"
        rel="noopener noreferrer"
      >
        <img
          src="../../assets/community-icons/github-gray.svg"
          alt="Join the Conversation"
          width="24"
          height="24"
        />
      </a>

      <a href="#" target="blank" rel="noopener noreferrer">
        <img
          src="../../assets/community-icons/dribble-gray.svg"
          alt="Join the Conversation"
          width="24"
          height="24"
        />
      </a>
    </nav>

    <div class="austin-event-footer__legal">
      <p>© 2022 Secret Network. All Rights Reserved.</p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.austin-event-footer {
  display: grid;
  grid-gap: 12px;
  text-align: center;
  max-width: 540px;
  margin: auto;

  &__links {
    display: flex;
    justify-content: space-evenly;

    @include respond-to("<=xs") {
      flex-direction: column;
      //padding: 14px 8px;
    }

    & a {
      color: rgba(107, 114, 128, 1) !important;
      padding: 14px;

      &:hover {
        color: var(--theme-links-hover) !important;
      }
    }
  }

  &__social {
    display: flex;
    justify-content: center;
    //opacity: 0.5;

    & a {
      padding: 14px;
    }
  }

  &__legal {
    font-weight: 400;
    font-size: 16px;
    padding: 14px;

    & p {
      color: rgba(156, 163, 175, 1) !important;
    }
  }
}
</style>
