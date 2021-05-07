<template>
  <div>
    <div class="all-media">
      <div class="media-filter">
        <div class="filter">
          <h4>Filters</h4>
          <ul class="custom-checkbox" :class="'selected-' + selectedCategory">
            <li>
              <label>
                <input id="all" type="radio" v-model="selectedCategory" value="All" />
                All
                <img class="unchecked" src="../../assets/icon-checkbox-unchecked.svg" alt="unchecked">
                <img class="checked" src="../../assets/icon-checkbox-checked.svg" alt="checked">
              </label>
            </li>
            <li>
              <label>
                <input type="radio" v-model="selectedCategory" value="article" />
                Article
                <img class="unchecked" src="../../assets/icon-checkbox-unchecked.svg" alt="unchecked">
                <img class="checked" src="../../assets/icon-checkbox-checked.svg" alt="checked">
              </label>
            </li>
            <li>
              <label>
                <input type="radio" v-model="selectedCategory" value="podcast" />
                Podcast
                <img class="unchecked" src="../../assets/icon-checkbox-unchecked.svg" alt="unchecked">
                <img class="checked" src="../../assets/icon-checkbox-checked.svg" alt="checked">
              </label>
            </li>
            <li>
              <label>
                <input type="radio" v-model="selectedCategory" value="video" />
                Video
                <img class="unchecked" src="../../assets/icon-checkbox-unchecked.svg" alt="unchecked">
                <img class="checked" src="../../assets/icon-checkbox-checked.svg" alt="checked">
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="media-items">
        <h3>{{selectedCategory}}</h3>

        <div class="items">
          <div v-for="media in filteredType" class="item" :class="`accent-`+media.category">
            <a :href="media.url">
              <p class="type">{{media.category}}</p>
              <h6>{{media.title}}</h6>
              <p>{{media.description}}</p>
              <img :src="require(`@/assets${media.picture}`)" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        mediaItems: [{
            category: 'article',
            title: 'What is Secret Network (SCRT)?',
            picture: '/media/dycrpt-secret-hero.png',
            url: 'https://decrypt.co/resources/what-is-secret-network-scrt-formerly-enigma',
          },
          {
            category: 'podcast',
            title: 'Private Smart Contracts: Pomp Podcast',
            picture: '/media/podcast_1.png',
            url: 'https://www.youtube.com/watch?v=Kx9hb3U7pfs',
          },
          {
            category: 'podcast',
            title: 'Secret Network on The Defiant Podcast',
            picture: '/media/image2.png',
            url: 'https://anchor.fm/thedefiant/episodes/Privacy-Might-be-the-Only-Thing-Left-That-Makes-Web-3-0-a-Viable-Alternative-Tor-Bair-of-Secret-Foundation-el9n52',
          },
          {
            category: 'video',
            title: 'zkp-privacy Summit: Secret Contracts',
            picture: '/media/privacysummit.png',
            url: 'https://www.crowdcast.io/e/zkp-privacy-summit/5',
          },
          {
            category: 'video',
            title: 'Defi Privacy Is Here: Ivan on Tech',
            picture: '/media/video_ivan.png',
            url: 'https://www.youtube.com/watch?v=rvkMPcMK_7Ah',
          },
          {
            category: 'video',
            title: 'Sharing Secrets Ep. 2 - Ed Moncada',
            picture: '/media/image4.png',
            url: 'https://www.youtube.com/watch?v=7JL5N8R2HKI',
          },
          {
            category: 'video',
            title: 'Increasing Blockchain Adoption with Privacy',
            picture: '/media/image5.png',
            url: 'https://www.youtube.com/watch?v=7-eUMvH84mU',
          },
          {
            category: 'video',
            title: 'Secret Tokens Explained',
            picture: '/media/video_tokens.png',
            url: 'https://www.youtube.com/watch?v=fkgy83Hu8Bc',
          },
          {
            category: 'video',
            title: 'Introducing Secret Network',
            picture: '/media/video_introducing_scrt.png',
            url: 'https://www.youtube.com/watch?v=c70BBVUCxxk',
          },
          {
            category: 'video',
            title: 'Sharing Secrets Ep. 0 - What is a Secret?',
            picture: '/media/video_whats_scrt.png',
            url: 'https://www.youtube.com/watch?v=Jk7kV1ph-FQ',
          },
        ],
        selectedCategory: "All"
      }
    },
    computed: {
      filteredType: function () {
        var vm = this;
        var category = vm.selectedCategory;

        if (category === "All") {
          return vm.mediaItems;
        } else {
          return vm.mediaItems.filter(function (type) {
            return type.category === category;
          });
        }
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

  $accent-colors: (article,
    podcast,
    video,
  );

  // @each $name, $color in $accent-colors {
  // 	&.accent-#{$name} {
  // 		color: var(--accent-#{$name});
  // 	}
  // }

  .featured-media {

    .content {
      .box {
        overflow-x: scroll;
        max-width: 98vw;
        padding-left: 1rem;
        padding-right: 1rem;

        &::-webkit-scrollbar {
          display: none;
        }
      }
    }

    .items {
      white-space: nowrap;

      &::-webkit-scrollbar {
        display: none;
      }

      .item {
        background: var(--theme-card-bg-default);
        transition: .2s ease;
        cursor: pointer;
        display: inline-block;
        /* flex-direction: column; */
        width: 350px;
        white-space: normal;
        /* justify-content: space-between; */
        vertical-align: top;
        margin-right: var(--f-gutter-l);
        border-radius: var(--f-radius);
        padding: var(--f-gutter);
        background: var(--theme-card-bg-default);

      }
    }
  }

  .all-media {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: var(--f-gutter-xl);

    @include respond-to("<=m") {
      grid-template-columns: 1fr;
    }

    .media-filter {}

    .media-items {
      h3 {
        text-transform: capitalize;
      }

      .items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--f-gutter);
        
        @include respond-to("<=m") {
          grid-template-columns: repeat(2, 1fr);
        }

        @include respond-to("<=s") {
          grid-template-columns: 1fr;
        }

        .item {
          border-radius: var(--f-radius);
          padding: var(--f-gutter);
          background: var(--theme-card-bg-default);
          transition: .2s ease;
          cursor: pointer;
          min-height: 300px;
          position: relative;

          @each $name,
          $color in $accent-colors {
            &.accent-#{$name} {
              &:hover {
                background: var(--theme-card-bg-hover);
                box-shadow: var(--f-gutter-s) var(--f-gutter-s) 0 0 var(--accent-#{$name});
              }

              .type {
                color: var(--accent-#{$name});
              }
            }
          }

          a {
            color: var(--theme-fg);
            display: flex;
            flex-flow: column;
          }

          p {
            &:first-child {
              text-transform: uppercase;
              margin-bottom: var(--f-gutter-s);
            }

            &:last-child {
              margin-bottom: 0;
            }
          }

          img {
            position: absolute;
            bottom: 0;
            padding: var(--f-gutter);
            border-radius: var(--f-gutter-l);
            left: 0;
            right: 0;
          }
        }
      }
    }
  }

</style>
