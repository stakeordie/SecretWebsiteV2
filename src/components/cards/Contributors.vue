<template>
  <div class="contributors">
    <div class="filter">
      <h4>Filters</h4>
      <ul class="custom-checkbox" :class="'selected-' + selectedTag">
        <li v-for="contributorCategory in contributorCategories">
          <label>
            <input type="checkbox" :value="contributorCategory.id" v-model="checkedContributorCategories">
            <span class="title">{{contributorCategory.title}}</span>
            <img class="unchecked" src="../../assets/icon-checkbox-unchecked.svg" alt="unchecked">
            <img class="checked" src="../../assets/icon-checkbox-checked.svg" alt="checked">
          </label>
        </li>
      </ul>
    </div>
    <div class="contributors-container">
      <h3>Contributors</h3>
      <div class="contributors-grid">
        <div class="card-contributor">
          <a href="https://learn.scrt.network/foundation.html" target="blank">
            <img :src="require(`@/assets/contributors/image1.png`)" />
            <div class="meta">
              <h6>Secret Foundation</h6>
              <p class='accent-1'>&nbsp;</p>
            </div>
          </a>
        </div>
        <div class="card-contributor" v-for="contributor in filteredContributors">
          <a :href="contributor.url" target="blank">
            <img :src="require(`@/assets${contributor.picture}`)" />
            <div class="meta">
              <h6>{{ contributor.title }}</h6>
              <p v-for="category in contributor.contributor_categories" :class="'accent-'+category.title.toLowerCase()">
                {{category.title}}</p>
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
        checkedContributorCategories: [1,2,3,4],
        contributorCategories: [{
          id: 1,
          title: 'validators',
        }, {
          id: 2,
          title: 'developers',
        }, {
          id: 3,
          title: 'fund',
        }, {
          id: 4,
          title: 'wallets',
        }, ],
        contributors: [{
            id: 1,
            title: 'Secret Foundation',
            picture: '/contributors/image1.png',
            url: 'https://learn.scrt.network/foundation.html',
            contributor_categories: [{

            }]
          },
          {
            id: 2,
            title: 'Secret Nodes',
            picture: '/contributors/secret-nodes.png',
            url: 'https://secretnodes.org/#/',
            contributor_categories: [{
                id: 1,
                title: 'Validator',
              },
              {
                id: 2,
                title: 'Developer',
              },
            ]
          },
          {
            id: 3,
            title: 'Enigma',
            picture: '/contributors/image3.png',
            url: 'https://www.enigma.co/',
            contributor_categories: [{
              id: 2,
              title: 'Developer',
            }, ]
          },
          {
            id: 4,
            title: 'Chain of Secrets',
            picture: '/contributors/chain-secrets.png',
            url: 'https://chainofsecrets.org/',
            contributor_categories: [{
                id: 1,
                title: 'Validator',
              },
              {
                id: 2,
                title: 'Developer',
              },
            ]
          },
          {
            id: 5,
            title: 'Math Wallet',
            picture: '/contributors/mathwallet.png',
            url: 'http://mathwallet.org/',
            contributor_categories: [{
                id: 4,
                title: 'Wallet',
              },
              {
                id: 1,
                title: 'Validator',
              },
            ]
          },
          {
            id: 6,
            title: 'Outlier',
            picture: '/contributors/image6.png',
            url: 'https://outlierventures.io',
            contributor_categories: [{
                id: 3,
                title: 'Fund',
              },
              {
                id: 1,
                title: 'Validator',
              }
            ]
          }, {
            id: 7,
            title: 'Dokia Capital',
            picture: '/contributors/image7.png',
            url: 'https://dokia.capital/',
            contributor_categories: [{
              id: 1,
              title: 'Validator',
            }]
          }, {
            id: 8,
            title: 'Citadel.one',
            picture: '/contributors/image8.png',
            url: 'https://citadel.one',
            contributor_categories: [{
              id: 1,
              title: 'Validator',
            }]
          }, {
            id: 9,
            title: 'Fenbushi',
            picture: '/contributors/image9.png',
            url: 'https://fenbushi.vc',
            contributor_categories: [{
              id: 3,
              title: 'Fund',
            }]
          }, {
            id: 10,
            title: 'Hashed',
            picture: '/contributors/image10.png',
            url: 'https://hashed.com',
            contributor_categories: [{
              id: 3,
              title: 'Fund',
            }]
          }, {
            id: 11,
            title: 'B-Harvest',
            picture: '/contributors/image11.png',
            url: 'https://bharvest.io',
            contributor_categories: [{
              id: 1,
              title: 'Validator',
            }]
          }, {
            id: 12,
            title: 'Chorus One',
            picture: '/contributors/image12.png',
            url: 'https://chorus.one',
            contributor_categories: [{
              id: 1,
              title: 'Validator',
            }]
          }
        ],






        // secretContributors: [{
        //     picture: '/contributors/image1.png',
        //     name: "Secret Foundation",
        //     url: 'https://learn.scrt.network/foundation.html',
        //     tag: "",
        //     tagTwo: "",
        //   },
        //   {
        //     picture: '/contributors/secret-nodes.png',
        //     name: "Secret Nodes",
        //     url: 'https://secretnodes.org/#/',
        //     tag: "validator",
        //     tagTwo: "developer",
        //   },
        //   {
        //     picture: '/contributors/image3.png',
        //     name: "Enigma",
        //     url: 'https://www.enigma.co/',
        //     tag: "developer",
        //     tagTwo: "",
        //   },
        //   {
        //     picture: '/contributors/chain-secrets.png',
        //     name: "Chain of Secrets",
        //     url: 'https://chainofsecrets.org/',
        //     tag: "validator",
        //     tagTwo: "developer",
        //   },
        //   {
        //     picture: '/contributors/mathwallet.png',
        //     name: "Mathwallet",
        //     url: 'http://mathwallet.org/',
        //     tag: "wallet",
        //     tagTwo: "validator",
        //   },
        //   {
        //     picture: '/contributors/image6.png',
        //     name: "Outlier",
        //     url: 'https://outlierventures.io',
        //     tag: "fund",
        //     tagTwo: "validator",
        //   },
        //   {
        //     picture: '/contributors/image7.png',
        //     name: "Dokia Capital",
        //     url: 'https://dokia.capital/',
        //     tag: "validator",
        //     tagTwo: "",
        //   },
        //   {
        //     picture: '/contributors/image8.png',
        //     name: "Citadel.one",
        //     url: 'https://citadel.one',
        //     tag: "validator",
        //     tagTwo: "",
        //   },
        //   {
        //     picture: '/contributors/image9.png',
        //     name: "Fenbushi",
        //     url: 'https://fenbushi.vc',
        //     tag: "fund",
        //     tagTwo: "",
        //   },
        //   {
        //     picture: '/contributors/image10.png',
        //     name: "Hashed",
        //     url: 'https://hashed.com',
        //     tag: "fund",
        //     tagTwo: "",
        //   },
        //   {
        //     picture: '/contributors/image11.png',
        //     name: "B-Harvest",
        //     url: 'https://bharvest.io',
        //     tag: "validator",
        //     tagTwo: "",
        //   },
        //   {
        //     picture: '/contributors/image12.png',
        //     name: "Chorus One",
        //     url: 'https://chorus.one',
        //     tag: "validator",
        //     tagTwo: "",
        //   }
        // ],
        selectedTag: "All",

      }
    },
    computed: {
      // filteredTag: function () {
      //   var vm = this;
      //   var tag = vm.selectedTag;

      //   if (tag === "All") {
      //     return vm.secretContributors;
      //   } else {
      //     return vm.secretContributors.filter(function (tags) {
      //       return tags.tag === tag;
      //     });
      //   }
      // },
      filteredContributors: function () {
        return this.contributors.filter(post =>
          post.contributor_categories.some(tag =>
            this.checkedContributorCategories.includes(tag.id)
          )
        )
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

  $accent-colors: ("validator",
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
          grid-template-columns: repeat(3, 1fr);
        }
        @include respond-to("<=s") {
          grid-template-columns: repeat(2, 1fr);
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
            transform: translate(- 12px, - 12px);
          }

          &:hover {
            background: var(--theme-card-bg-hover);
            box-shadow: 12px 12px 0 0 var(--accent-gray);
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

            @each $name,
            $color in $accent-colors {
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
