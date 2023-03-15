<template>
  <default-layout>
    <!-- Title -->
    <hero-title>
      <h2>Page Not Found</h2>
    </hero-title>

    <!-- intro -->
    <column mode="slim" class="text-center spacer-s">
      <block>
        <h4>
          Oops! The page you're looking for doesn't exist. Head over to our
          <a href="/">Homepage</a> or choose one of the options below.
        </h4>
      </block>
    </column>

    <!-- block header -->

    <column class="text-center">
      <block>
        <h3>Try one of these pages</h3>
      </block>
    </column>

    <!-- try one of this pages -->
    <column class="spacer-s" number="3" number-m="2" number-s="1">
      <block>
        <card-minimal class="accent-orange">
          <h4>About the Network</h4>
          <p>
            Find out why Secret Network is a first-of-its-kind, open-source
            blockchain that provides data privacy by default.
          </p>
          <btn class="text-center" url="/about/about-secret-network"
            >Go to page</btn
          >
        </card-minimal>
      </block>

      <block>
        <card-minimal class="accent-green">
          <h4>Ecosystem</h4>
          <p>
            Lean about the applications, validators, contributors and elements
            that make the Network come together.
          </p>
          <btn class="text-center" url="/ecosystem/overview">Go to page</btn>
        </card-minimal>
      </block>

      <block>
        <card-minimal class="accent-blue">
          <h4>Developers</h4>
          <p>
            Use Secret Contracts to build decentralized applications with
            improved usability and explore new frontiers in web3.
          </p>
          <btn class="text-center" url="/developers">Go to page</btn>
        </card-minimal>
      </block>

      <block>
        <card-minimal class="accent-purple">
          <h4>Blog</h4>
          <p>
            Stay up to date about news, announcements and relevant information
            about Secret Network.
          </p>
          <btn class="text-center" url="/blog">Go to page</btn>
        </card-minimal>
      </block>

      <block>
        <card-minimal class="accent-turquoise">
          <h4>Community</h4>
          <p>
            Whether you’re a developer, an artist, a writer, an entrepreneur, or
            a dreamer, there are many ways for you to contribute to Secret
            Network.
          </p>
          <btn class="text-center" url="/get-involved/international-communities"
            >Go to page</btn
          >
        </card-minimal>
      </block>

      <block>
        <card-minimal class="accent-red">
          <h4>Media Content</h4>
          <p>
            Explore featured articles, podcast episodes and videos to learn more
            about the Network.
          </p>
          <btn class="text-center" url="/media/features">Go to page</btn>
        </card-minimal>
      </block>
    </column>

    <!-- block header -->

    <column class="text-center">
      <block>
        <h3>Join the Conversation</h3>
      </block>
    </column>

    <!-- Join the conversation -->
    <column class="spacer-s img-invert" number="4" number-m="2" number-s="2">
      <block>
        <card-simple
          class="accent-gray text-center cta"
          url="https://forum.scrt.network/"
        >
          <img
            src="/img/icons/icon-social-forum-big.svg"
            alt="Big messages icon"
            loading="lazy"
          />
          <h6>Forum</h6>
        </card-simple>
      </block>

      <block>
        <card-simple
          class="accent-purple text-center cta"
          url="https://discord.com/invite/SJK32GY"
        >
          <img
            src="/img/icons/icon-social-discord-big.svg"
            alt="Discord big logo"
            loading="lazy"
          />
          <h6>Discord</h6>
        </card-simple>
      </block>

      <block>
        <card-simple
          class="accent-blue text-center cta"
          url="https://t.me/SCRTcommunity"
        >
          <img
            src="/img/icons/icon-social-telegram-big.svg"
            alt="Telegram big logo"
            loading="lazy"
          />
          <h6>Telegram</h6>
        </card-simple>
      </block>

      <block>
        <card-simple
          class="accent-turquoise text-center cta"
          url="https://twitter.com/SecretNetwork"
        >
          <img
            src="/img/icons/icon-social-twitter-big.svg"
            alt="Twitter big logo"
            loading="lazy"
          />
          <h6>Twitter</h6>
        </card-simple>
      </block>

      <block>
        <card-simple
          class="accent-red text-center cta"
          url="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw"
        >
          <img
            src="/img/icons/icon-social-youtube-big.svg"
            alt="Youtube big logo"
            loading="lazy"
          />
          <h6>Youtube</h6>
        </card-simple>
      </block>

      <block>
        <card-simple
          class="accent-orange text-center cta"
          url="https://www.instagram.com/scrtnetwork/"
        >
          <img
            src="/img/icons/icon-social-instagram-big.svg"
            alt="Instagram big logo"
            loading="lazy"
          />
          <h6>Instagram</h6>
        </card-simple>
      </block>

      <block>
        <card-simple
          class="accent-red text-center cta"
          url="https://www.reddit.com/r/SecretNetwork/"
        >
          <img
            src="/img/icons/icon-social-reddit-big.svg"
            alt="Reddit big logo"
            loading="lazy"
          />
          <h6>Reddit</h6>
        </card-simple>
      </block>

      <block>
        <card-simple
          class="accent-gray text-center cta"
          url="https://www.secretcalendar.org/"
        >
          <img
            src="/img/icons/icon-social-events-big.svg"
            alt="Calendar icon"
            loading="lazy"
          />
          <h6>Events</h6>
        </card-simple>
      </block>
    </column>
  </default-layout>
</template>

<script>
import CardMinimal from "@/components/cards/CardMinimal.vue";
export default {
  components: { CardMinimal },
  metaInfo() {
    return {
      title: "Page Not Found"
    };
  }
};
</script>
