<template>
  <div>
    <div class="all-media">
      <div class="media-filter">
        <div class="filter">
          <h4>Filters</h4>
          <ul>
            <li><button>Videos <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></button></li>
            <li><button>Articles <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></button></li>
            <li><button>Podcasts <img src="../../assets/icon-checkbox-unchecked.svg" alt=""></button></li>
          </ul>
        </div>
      </div>
      <div class="media-items">
        <h3>All Media</h3>
        <div class="items">
          <div v-for="(media, index) in mediaItems" class="item" :class="`accent-`+media.type">
            <a :href="media.url">
              <p class="type">{{media.type}}</p>
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
            type: 'article',
            title: 'What is Secret Network (SCRT)?',
            picture: '/media/dycrpt-secret-hero.png',
            url: 'https://decrypt.co/resources/what-is-secret-network-scrt-formerly-enigma',
          },
          {
            type: 'podcast',
            title: 'Private Smart Contracts: Pomp Podcast',
            picture: '/media/image1.png',
            url: 'https://www.youtube.com/watch?v=Kx9hb3U7pfs',
          },
          {
            type: 'podcast',
            title: 'Secret Network on The Defiant Podcast',
            picture: '/media/image2.png',
            url: 'https://anchor.fm/thedefiant/episodes/Privacy-Might-be-the-Only-Thing-Left-That-Makes-Web-3-0-a-Viable-Alternative-Tor-Bair-of-Secret-Foundation-el9n52',
          },
          {
            type: 'video',
            title: 'zkp-privacy Summit: Secret Contracts',
            picture: '/media/privacysummit.png',
            url: 'https://www.crowdcast.io/e/zkp-privacy-summit/5',
          },
          {
            type: 'video',
            title: 'Defi Privacy Is Here: Ivan on Tech',
            picture: '/media/image3.png',
            url: 'https://www.youtube.com/watch?v=rvkMPcMK_7Ah',
          },
          {
            type: 'video',
            title: 'Sharing Secrets Ep. 2 - Ed Moncada',
            picture: '/media/image4.png',
            url: 'https://www.youtube.com/watch?v=7JL5N8R2HKI',
          },
          {
            type: 'video',
            title: 'Increasing Blockchain Adoption with Privacy',
            picture: '/media/image5.png',
            url: 'https://www.youtube.com/watch?v=7-eUMvH84mU',
          },
          {
            type: 'video',
            title: 'Secret Tokens Explained',
            picture: '/media/image6.png',
            url: 'https://www.youtube.com/watch?v=fkgy83Hu8Bc',
          },
          {
            type: 'video',
            title: 'Introducing Secret Network',
            picture: '/media/image7.png',
            url: 'https://www.youtube.com/watch?v=c70BBVUCxxk',
          },
          {
            type: 'video',
            title: 'Sharing Secrets Ep. 0 - What is a Secret?',
            picture: '/media/image8.png',
            url: 'https://www.youtube.com/watch?v=Jk7kV1ph-FQ',
          },
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
      .items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--f-gutter);
        @include respond-to("<=m") {
          grid-template-columns: 1fr;
        }
        .item {
          border-radius: var(--f-radius);
          padding: var(--f-gutter);
          background: var(--theme-card-bg-default);
          transition: .2s ease;
          cursor: pointer;
          height: 100%;

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
            height: 100%;
            justify-content: space-between;
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

          h6 {
            // margin-bottom: var(--f-gutter-l);
            // transform: translateY(-40px);
          }
        }
      }
    }
  }

</style>
