<template>
  <div class="secret-agents">
    <!-- <infinite-slide-bar duration="450s" :barStyle="{ background: '', padding: '5px 0' }"> -->
      <!-- <span style="color: #fff;">Helo World, I love Vue Infinite Slide Bar</span> -->
      <!-- <div v-for="(secretAgent, index) in secretAgents" :key="index" class="card-secret-agent">
        <img :src="require(`@/assets${secretAgent.picture}`)" />
        <div class="meta">
          <h6>{{secretAgent.name}}</h6>
          <p class="location">{{secretAgent.location}}</p>
        </div>
      </div>
    </infinite-slide-bar> -->
    <infinite-slide-bar direction="reverse" duration="150s" :barStyle="{ background: '', padding: '5px 0' }">
      <div v-for="(secretAgent, index) in $static.secretAgents.edges" :key="index" class="card-secret-agent">
        <g-image :src="secretAgent.node.image.url"/>
        <div class="meta">
          <h6>{{secretAgent.node.name}}</h6>
          <p class="location">{{secretAgent.node.location}}</p>
        </div>
      </div>
    </infinite-slide-bar>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        secretAgents: [
          // {
          //   name: 'Mohammed',
          //   location: 'Canada',
          //   picture: '/agents/Mohammed-Canada.png'
          // },
          // {
          //   name: 'Taariq',
          //   location: 'South Africa',
          //   picture: '/agents/Taariq-SouthAfrica.png'
          // },
          // {
          //   name: 'Brendan',
          //   location: 'USA',
          //   picture: '/agents/Brendan-USA.png'
          // },
          {
            name: 'Ian',
            location: 'Delta Quadrant',
            picture: '/agents/Ian-DeltaQuadrant.png'
          },
          {
            name: 'Laura',
            location: 'USA',
            picture: '/agents/Laura-USA.png'
          },
          {
            name: 'Vlad',
            location: 'Russia',
            picture: '/agents/Vlad-Russia.png'
          },
          {
            name: 'Rina',
            location: 'Russia',
            picture: '/agents/Rina-Russia.png'
          },
          {
            name: 'Vladimir',
            location: 'Planet Earth',
            picture: '/agents/Vladimir-PlanetEarth.png'
          },
          {
            name: 'Carter',
            location: 'USA',
            picture: '/agents/Carter-USA.png'
          },
          {
            name: 'Josh',
            location: 'UK',
            picture: '/agents/Josh-UK.png'
          },
          {
            name: 'Robin',
            location: 'Switzerland',
            picture: '/agents/Robin-Switzerland.png'
          },
          {
            name: 'Eckhard',
            location: 'Norway',
            picture: '/agents/Eckhard-Norway.png'
          },
          {
            name: 'Marcel',
            location: 'Germany',
            picture: '/agents/Marcel-Germany.png'
          },
          {
            name: 'Julian',
            location: 'Switzerland',
            picture: '/agents/Julian-Switzerland.png'
          },
          {
            name: 'Zach',
            location: 'USA',
            picture: '/agents/Zach-USA.png'
          },
          {
            name: 'Jangsa',
            location: 'Japan',
            picture: '/agents/Jangsa-Japan.png'
          },
          {
            name: 'Taz',
            location: 'Earth',
            picture: '/agents/Taz-Earth.png'
          },
          {
            name: 'Jan',
            location: 'Belgium',
            picture: '/agents/Jan-Belgium.png'
          },
          {
            name: 'Xavier',
            location: 'France',
            picture: '/agents/Xavier-France.png'
          },
          {
            name: 'Dan',
            location: 'Cayman Islands',
            picture: '/agents/Dan-CaymanIslands.png'
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

<static-query>
  query{
    secretAgents: allStrapiSecretAgents {
      edges{
        node{
          name
          location
          image {
            id
            name
            alternativeText
            caption
            width
            height
            formats {
              thumbnail {
                url
              }
            }
            hash
            ext
            mime
            size
            url
            provider
            created_at
            updated_at
          }
        }
      }
    }
  }
</static-query>

<style lang="scss">
  @import "../../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";

  $accent-colors: ("blue",
    "turquoise",
    "green",
    "yellow",
    "cream",
    "orange",
    "red",
    "purple",
    "gray",
  );

  // @each $name, $color in $accent-colors {
  // 	&.accent-#{$name} {
  // 		color: var(--accent-#{$name});
  // 	}
  // }

  .vifnslb-bar {
    display: grid;
    grid-auto-flow: column;
    gap: var(--f-gutter);
    padding-right: 10px;
  }

  .secret-agents {
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-template-columns: 1fr;
    gap: var(--f-gutter);
    row-gap: var(--f-gutter-s);

    .card-secret-agent {
      border-radius: var(--f-radius);
      // padding: var(--f-gutter-l);
      overflow: hidden;
      background: var(--theme-card-bg-default);
      transition: .2s ease;
      display: flex;
      flex-direction: column;
      // gap: var(--f-gutter);
      text-align: center;

      height: 250px;
    width: 170px;

      * {
        margin: 0;
      }

      p {
        color: var(--theme-card-text-color);
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

</style>
