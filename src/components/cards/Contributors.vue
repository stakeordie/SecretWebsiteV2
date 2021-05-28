<template>
  <div class="contributors">
    <div class="filter">
      <h4>Filters</h4>
      <ul class="custom-checkbox" :class="'selected-' + selectedTag">
        <li v-for="contributorCategory in contributorCategories" :key="contributorCategory.type">
          <label>
            <input type="checkbox" :value="contributorCategory.type" v-model="checkedContributorCategories">
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

        <div class="card-contributor" v-for="contributor in filteredContributors" :key="contributor.id">
          <a :href="contributor.url" target="blank">
            <img :src="contributor.picture.url" alt="picture" />
            <div class="meta">
              <h6>{{ contributor.title }}</h6>
              <p v-for="category in contributor.contributor_categories" :key="category.id" :class="'accent-'+ category.title">
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
    data() {
      return {
        contributorCategories: [{
          id: 1,
          title: 'validators',
          type: 'Validator'
        }, {
          id: 2,
          title: 'developers',
          type: 'Developer'
        }, {
          id: 3,
          title: 'fund',
          type: 'Fund'
        }, {
          id: 4,
          title: 'wallets',
          type: 'Wallet'
        }, ],

        checkedContributorCategories: [],

        selectedTag: "All",

      }
    },
    computed: {
      filteredContributors: function () {
        if(!this.checkedContributorCategories.length) {
          return this.contributors;
        }
        return this.contributors.filter(post =>
          post.contributor_categories.some(tag =>
            this.checkedContributorCategories.includes(tag.title)
          )
        )
      },

      contributors() {
        return this.$static.contributors.edges.map(it => it.node);
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

<static-query>
  query {
  	contributors: allStrapiContributors {
      edges {
        node {
          id,
          title: name,
          url: link,
          picture: logo {
          	url
          },
        	contributor_categories: types {
            title: type
          }
        }
      }
    }
  }
</static-query>

<style lang="scss">
  @import "../../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";

  $accent-colors: ("Validator",
    "Developer",
    "Fund",
    "Wallet",
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
            transform: var(--card-hover-transform);
            box-shadow: var(--card-hover-shadow) var(--accent-gray);
          }
            
          // &:hover {
          //   background: var(--theme-card-bg-hover);
          //   box-shadow: var(--card-hover-shadow-left-2) var(--accent-gray);
          // }

          // &.left {
          //   &:hover {
          //     transform: var(--card-hover-transform-left-2);
          //   }
            
          //   &:hover {
          //     background: var(--theme-card-bg-hover);
          //     box-shadow: var(--card-hover-shadow-left-2) var(--accent-gray);
          //   }
          // }

          // &.center-left {
          //   &:hover {
          //     transform: var(--card-hover-transform-left-1);
          //   }
            
          //   &:hover {
          //     background: var(--theme-card-bg-hover);
          //     box-shadow: var(--card-hover-shadow-left-1) var(--accent-gray);
          //   }
          // }

          // &.center {
          //   &:hover {
          //     transform: var(--card-hover-transform-center);
          //   }
            
          //   &:hover {
          //     background: var(--theme-card-bg-hover);
          //     box-shadow: var(--card-hover-shadow-center) var(--accent-gray);
          //   }
          // }

          // &.center-right {
          //   &:hover {
          //     transform: var(--card-hover-transform-right-1);
          //   }
            
          //   &:hover {
          //     background: var(--theme-card-bg-hover);
          //     box-shadow: var(--card-hover-shadow-right-1) var(--accent-gray);
          //   }
          // }

          // &.right {
          //   &:hover {
          //     transform: var(--card-hover-transform-right-2);
          //   }
            
          //   &:hover {
          //     background: var(--theme-card-bg-hover);
          //     box-shadow: var(--card-hover-shadow-right-2) var(--accent-gray);
          //   }
          // }

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
