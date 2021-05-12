<template>
  <div>
    <div class="items">
      <div v-for="(media, index) in filterMediaItems" class="item" :class="`accent-`+media.type">
        <a :href="media.url">
          <p class="type">{{media.type}}</p>
          <h6>{{media.title}}</h6>
          <p>{{media.description}}</p>
          <img :src="require(`@/assets${media.picture}`)" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        mediaItems: [
          {
            type: 'article',
            title: 'What is Secret Network (SCRT)?',
            picture: '/media/dycrpt-secret-hero.png',
            url: 'https://decrypt.co/resources/what-is-secret-network-scrt-formerly-enigma',
            isFeatured:true,
          },
          {
            type: 'podcast',
            title: 'Private Smart Contracts: Pomp Podcast',
            picture: '/media/podcast_1.png',
            url: 'https://www.youtube.com/watch?v=Kx9hb3U7pfs',
            isFeatured:true,
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
            picture: '/media/video_ivan.png',
            url: 'https://www.youtube.com/watch?v=rvkMPcMK_7Ah',
            isFeatured:true,
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
            picture: '/media/video_tokens.png',
            url: 'https://www.youtube.com/watch?v=fkgy83Hu8Bc',
          },
          {
            type: 'video',
            title: 'Introducing Secret Network',
            picture: '/media/video_introducing_scrt.png',
            url: 'https://www.youtube.com/watch?v=c70BBVUCxxk',
          },
          {
            type: 'video',
            title: 'Sharing Secrets Ep. 0 - What is a Secret?',
            picture: '/media/video_whats_scrt.png',
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
    },
    computed:{
      filterMediaItems: function(){
        return this.mediaItems.filter((mediaItem)=>mediaItem.isFeatured == true)
      }
    },
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

  .media-featured {

    .content {
      .box {
        overflow-x: scroll;
        max-width: 98vw;
        @include respond-to("<=m") {
          max-width: 97vw;
        }
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
        display: inline-flex;
        flex-direction: column;
        width: 350px;
        height: 300px;
        white-space: normal;
        justify-content: space-between;
        vertical-align: top;
        margin-right: var(--f-gutter-l);
        border-radius: var(--f-radius);
        padding: var(--f-gutter);
        background: var(--theme-card-bg-default);
        position: relative;
        &:hover {
          transform: var(--card-hover-transform);
        }

        @each $name,
        $color in $accent-colors {
          &.accent-#{$name} {
            &:hover {
              background: var(--theme-card-bg-hover);
              box-shadow: var(--card-hover-shadow) var(--accent-#{$name});
            }

            .type {
              color: var(--accent-#{$name});
            }
          }
        }
        .type {
          text-transform: uppercase;
          margin: 0;
        }
        h6 {
          color: var(--theme-fg);
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

</style>
