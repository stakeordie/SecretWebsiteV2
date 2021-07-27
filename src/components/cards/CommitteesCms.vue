<template>
  <div>
    <div class="committees">
      <div v-bind:key="`${committee.id}`" v-for="committee in committeesItems.reverse()" class="committee" :class="`accent-`+committee.name.toLowerCase()">
        <h3>{{committee.name}}</h3>
        <div class="date-set">
          <h6>Meetings</h6>
          <h4>{{committee.date}}</h4>
        </div>
        <a class="button" target="blank" :href="committee.url">Join</a>
        <div class="info-wrapper">
          <div class="info-set" v-if="committee.lead">
            <h6>Lead</h6>
            <p>{{committee.lead}}</p>
          </div>
          <div class="info-set">
            <h6>Purpose</h6>
            <p>{{committee.purpose}}</p>
          </div>
          <div class="info-set">
            <h6>Goals</h6>
            <p>
              <vue-markdown>{{committee.goals}}</vue-markdown>
            </p>
          </div>
          <div class="info-set">
            <h6>Responsibilities</h6>
            <p><vue-markdown>{{committee.responsibilities}}</vue-markdown></p>
          </div>
          <div class="info-set" v-if="committee.initiatives">
            <h6>Initiatives</h6>
            <p><vue-markdown>{{committee.initiatives}}</vue-markdown></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    //     data: function () {
    //       return {
    //         committees: [{
    //             name: 'Devs',
    //             date: 'Mondays, 4-5pm UTC',
    //             url: 'https://airtable.com/shr6FPA7SW6p2gDTY',
    //             purpose: 'Engineering a secret source of truth for developers across the ecosystem.',
    //             goals: `- Onboarding valuable contributors
    //   - Building useful secret apps together`,
    //             responsibilities: `- Improving documentation for developers.`,
    //             initiatives: `- Hackathons.`,
    //             lead: '---'
    //           },
    //           {
    //             name: 'Education',
    //             date: 'Thursdays, 3-4pm UTC',
    //             url: 'https://airtable.com/shr6FPA7SW6p2gDTY',
    //             purpose: 'Helping anyone understand the importance of programmable privacy.',
    //             goals: `- Producing relevant and accessible content.
    //   - Clarifying Secret Network and our technologies.
    //   - Advancing privacy as a public good.`,
    //             responsibilities: `- Creating effective content efficiently.`,
    //             initiatives: `- Secret Foundation Wiki.`,
    //             lead: 'Stefan, Darren'
    //           },
    //           {
    //             name: 'Awareness',
    //             date: 'Mondays, 3-4pm UTC',
    //             url: 'https://airtable.com/shr6FPA7SW6p2gDTY',
    //             purpose: 'Amplifying our network and our materials in order to drive adoption and community growth.',
    //             goals: `- Increasing Secret awareness.
    //   - Identifying important channels and communities.
    //   - Connecting with high-leverage individuals and organizations.`,
    //             responsibilities: `- Disseminating and amplifying relevant content.`,
    //             initiatives: `- Secret branding.
    //   - Community outreach.
    //   - Supporting Sharing Secrets and other content initiatives.`,
    //             lead: 'Brendan'

    //           },
    //           {
    //             name: 'BizDev',
    //             date: 'Mondays 6-7PM UTC',
    //             url: 'https://airtable.com/shr6FPA7SW6p2gDTY',
    //             purpose: 'To provide research and intelligence to the secret community, to leadership as well as committees on constantly evolving crypto world and where Secret Network fits in. ',
    //             goals: `- serve as a liaison between the larger crypto ecosystem outside of Secret Network and the internal organizations, committees, and products within Secret Network.`,
    //             responsibilities: `- Secure cross promotion channels with other crypto projects
    //   - Work with the dev committee and large Secret Network contributors on partner & product integrations
    //   -  Work with new products in the Secret Network ecosystem on creating their unique selling points and brand strategy`,
    //             lead: 'John I.'
    //           },
    //           {
    //             name: 'Governance',
    //             date: 'Wednesdays, 3-4pm UTC',
    //             url: 'https://airtable.com/shr6FPA7SW6p2gDTY',
    //             purpose: 'Facilitating coordination of Secret Network participants.',
    //             goals: `- Promoting transparent collaboration.
    //   - Inviting everyone to join our community.
    //   - Communicating about proposals, voting, etc.`,
    //             responsibilities: `- Making decisions cooperatively.`,
    //             initiatives: `- Discussing project updates and governance issues.`,
    //             lead: '---'
    //           },
    //           {
    //             name: 'Design',
    //             date: 'Tuesday, 5-6pm UTC',
    //             url: 'https://airtable.com/shr6FPA7SW6p2gDTY',
    //             purpose: 'A space for discussing, collaborating on, and contributing to design for Secret Network and the projects within it.',
    //             goals: `- Connect designers in the community with available design opportunities.
    // - Create a collaborative and open-source design environment that benefits the entire network.`,
    // responsibilities: `- Foster and promote design best practices in Secret Network.
    // - Encourage collaboration between committee members and community projects.
    // - Share design assets, knowledge, and resources with other members and the larger community.
    // - Recommend new design-related initiatives for funding.`,
    //             lead: 'John B.'
    //           },
    //         ]
    //       }
    //     },
    props: {
      url: {
        type: String,
        required: false
      },
    },
    computed: {
      committeesItems() {
        return this.$static.committees.edges.map(({
          node: committee
        }) => {
          return {
            id: committee.id,
            name: committee.name,
            url: committee.charter_link,
            purpose: committee.purpose,
            goals: committee.goals,
            responsibilities: committee.responsibilities,
            date: committee.date,
            color: committee.color,
            lead: committee.lead,
            initiatives: committee.initiatives,
          };
        });
      }
    }
  }

</script>


<static-query>
query {
  committees: allStrapiCommittees {
    edges {
      node {
        id,
        name,
        charter_link,
        purpose,
        goals,
        responsibilities,
        date,
        lead,
        initiatives,
      }
    }
  }
}
</static-query>


<style lang="scss">
  @import "../../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";

  $accent-colors: (devs,
    education,
    awareness,
    bizdev,
    governance,
    design,
  );

  // @each $name, $color in $accent-colors {
  // 	&.accent-#{$name} {
  // 		color: var(--accent-#{$name});
  // 	}
  // }s

  .committees {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--f-gutter);

    @include respond-to("<=m") {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to("<=s") {
      grid-template-columns: 1fr;
    }

    .committee {
      border-radius: var(--f-radius);
      padding: var(--f-gutter);
      background: var(--theme-card-bg-default);
      transition: .2s ease;
      // height: 100%;
      display: grid;
      gap: var(--f-gutter-l);
      align-content: start;

      h6,
      h4,
      h3,
      a {
        margin: 0;
      }

      @each $name,
      $color in $accent-colors {
        &.accent-#{$name} {
          h3 {
            color: var(--accent-#{$name});
          }

          a.button {
            background: var(--accent-#{$name});
            color: var(--color-analog-primary-black);
            cursor: pointer;

            &:hover {
              background: var(--color-analog-primary-black);
              color: var(--color-analog-primary-white);
            }
          }

          .date-set {
            h6 {
              color: var(--theme-card-text-color);
            }
          }

          .info-wrapper {
            display: grid;
            gap: var(--f-gutter-l);

            .info-set {
              display: grid;
              gap: var(--f-gutter-xxs);

              p,
              ul {
                margin-bottom: 0;
                list-style-image: url("../../assets/list-dash.svg");
              }

              li {
                margin-bottom: var(--f-gutter-xs);
              }
            }
          }
        }
      }
    }
  }

</style>
