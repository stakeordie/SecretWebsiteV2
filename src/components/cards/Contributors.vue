<template>
  <div class="contributors">
    <div class="filter">
      <h4>Filters</h4>
      <ul>
        <li><button>Validators <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></button></li>
        <li><button>Developers <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></button></li>
        <li><button>Fund <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></button></li>
        <li><button>Wallets <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></button></li>
      </ul>
    </div>
    <div class="contributors-container">
      <h3>Contributors</h3>
      <div class="contributors-grid">
        <div v-for="(secretContributor, index) in secretContributors" class="card-contributor">
          <a :href="secretContributor.url" target="blank">
            <img :src="require(`@/assets${secretContributor.picture}`)" />
            <div class="meta">
              <h6>{{secretContributor.name}}</h6>
              <p class="tag" v-if="secretContributor.tag" :class="'accent-'+secretContributor.tag">{{secretContributor.tag}}</p>
              <p class="tag" v-if="secretContributor.tagTwo" :class="'accent-'+secretContributor.tagTwo">{{secretContributor.tagTwo}}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        secretContributors: [
          {
            picture: '/contributors/image1.png',
            name: "Secret Foundation",
            url: 'https://learn.scrt.network/foundation.html',
            tag: "",
            tagTwo: "",
          },
          {
            picture: '/contributors/secret-nodes.png',
            name: "Secret Nodes",
            url: 'https://secretnodes.org/#/',
            tag: "validator",
            tagTwo: "developer",
          },
          {
            picture: '/contributors/image3.png',
            name: "Enigma",
            url: 'https://www.enigma.co/',
            tag: "developer",
            tagTwo: "",
          },
          {
            picture: '/contributors/chain-secrets.png',
            name: "Chain of Secrets",
            url: 'https://chainofsecrets.org/',
            tag: "validator",
            tagTwo: "developer",
          },
          {
            picture: '/contributors/mathwallet.png',
            name: "Mathwallet",
            url: 'http://mathwallet.org/',
            tag: "wallet",
            tagTwo: "validator",
          },
          {
            picture: '/contributors/image6.png',
            name: "Outlier",
            url: 'https://outlierventures.io',
            tag: "fund",
            tagTwo: "validator",
          },
          {
            picture: '/contributors/image7.png',
            name: "Dokia Capital",
            url: 'https://dokia.capital/',
            tag: "validator",
            tagTwo: "",
          },
          {
            picture: '/contributors/image8.png',
            name: "Citadel.one",
            url: 'https://citadel.one',
            tag: "validator",
            tagTwo: "",
          },
          {
            picture: '/contributors/image9.png',
            name: "Fenbushi",
            url: 'https://fenbushi.vc',
            tag: "fund",
            tagTwo: "",
          },
          {
            picture: '/contributors/image10.png',
            name: "Hashed",
            url: 'https://hashed.com',
            tag: "fund",
            tagTwo: "",
          },
          {
            picture: '/contributors/image11.png',
            name: "B-Harvest",
            url: 'https://bharvest.io',
            tag: "validator",
            tagTwo: "",
          },
          {
            picture: '/contributors/image12.png',
            name: "Chorus One",
            url: 'https://chorus.one',
            tag: "validator",
            tagTwo: "",
          }
        ]
      }
    },
    props: {
      url: {
        type: String,
        required: false
      },
    }
  }

</script>

<style lang="scss">
  @import "../../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";

  $accent-colors: (
    "validator",
    "developer",
    "fund",
    "wallet",
  );

  // @each $name, $color in $accent-colors {
  // 	&.accent-#{$name} {
  // 		color: var(--accent-#{$name});
  // 	}
  // }

  .contributors {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: var(--f-gutter-xl);
    @include respond-to("<=m") {
      grid-template-columns: 1fr;
    }
    .contributors-container {

      .contributors-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: var(--f-gutter);
        @include respond-to("<=m") {
          grid-template-columns: repeat(2,1fr);
        }
        .card-contributor {
          border-radius: var(--f-radius);
          // padding: var(--f-gutter-l);
          overflow: hidden;
          background: var(--theme-card-bg-default);
          transition: .2s ease;
          display: flex;
          flex-direction: column;
          text-align: center;
          &:hover {
            background: var(--theme-card-bg-hover);
            box-shadow: var(--f-gutter-s) var(--f-gutter-s) 0 0 var(--accent-gray);
          }

          * {
            margin: 0;
          }

          h6 {
            color: var(--theme-fg);
          }

          p {
            &.tag {
              text-transform: capitalize;
            }
            @each $name, $color in $accent-colors {
              &.accent-#{$name} {
                color: var(--accent-#{$name});
              }
            }
          }

          .meta {
            padding: var(--f-gutter);
            display: flex;
            flex-direction: column;
            gap: var(--f-gutter-xxs);

            .location {
              color: var(--color-analog-secondary-blue);
            }
          }
        }
      }

    }
  }

</style>
