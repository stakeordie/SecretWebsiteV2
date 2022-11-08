<template>
  <div class="media-channels-wrapper">
    <div v-for="mediaChannel in mediaChannels" class="media-channel">
      <a :href="mediaChannel.url" target="blank" rel="noopener noreferrer"
        ><img
          :src="require(`@/assets${mediaChannel.picture}`)"
          :alt="mediaChannel.name"
          width="200"
          height="60"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
    },
  },
  data: function () {
    return {
      mediaChannels: [
        {
          name: "Coindesk",
          picture: "/media-channels/logo-coindesk.svg",
          url:
            "https://www.coindesk.com/secret-network-privacy-app-nft-development",
        },
        {
          name: "Nasdaq",
          picture: "/media-channels/logo-nasdaq.svg",
          url:
            "https://www.nasdaq.com/articles/secretswap-is-the-secret-networks-answer-to-defi-privacy-2021-02-17",
        },
        {
          name: "Yahoo Finance",
          picture: "/media-channels/logo-yahoofinance.svg",
          url:
            "https://finance.yahoo.com/news/secretswap-secret-network-answer-defi-200805609.html",
        },
        {
          name: "Cointelegraph",
          picture: "/media-channels/logo-cointelegraph.svg",
          url:
            "https://cointelegraph.com/news/polkadot-and-cosmos-connect-as-plasm-and-secret-network-release-bridge-mvp",
        },
        {
          name: "Decrypt",
          picture: "/media-channels/logo-decrypt.svg",
          url:
            "https://decrypt.co/resources/what-is-secret-network-scrt-formerly-enigma",
        },
        {
          name: "TechCrunch",
          picture: "/media-channels/logo-techcrunch.svg",
          url:
            "https://techcrunch.com/2021/05/03/in-the-race-towards-web-3-financial-privacy-secret-network-attracts-backing-from-key-players/",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

$accent-colors: (
  "blue",
  "turquoise",
  "green",
  "yellow",
  "cream",
  "orange",
  "red",
  "purple",
  "gray"
);

// @each $name, $color in $accent-colors {
// 	&.accent-#{$name} {
// 		color: var(--accent-#{$name});
// 	}
// }

.media-channels-wrapper {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--f-gutter-l);
  @include respond-to("<=s") {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
  }

  .media-channel {
    display: grid;
    justify-items: center;
    align-items: center;

    a {
      max-height: 64px;
      display: block;
      transition: 0.2s ease;

      @include respond-to(">=l") {
        &:hover {
          @include theme(dark dark-colored) {
            filter: contrast(300%);
          }

          @include theme(light light-colored) {
            filter: invert(1);
          }
        }
      }
    }
  }
}
</style>
