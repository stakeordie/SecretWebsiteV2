<template>
  <div>
    <div class="committees">
      <div v-for="(committee, index) in committees" class="committee" :class="`accent-`+committee.name.toLowerCase()">
        <h3>{{committee.name}}</h3>
        <div class="date-set">
          <h6>Meetings</h6>
          <h4>{{committee.date}}</h4>
        </div>
        <a class="button" target="blank" :href="committee.url">Join</a>
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
</template>

<script>
  export default {
    data: function () {
      return {
        committees: [{
            name: 'Devs',
            date: 'Mondays, 5pm UTC',
            url: 'https://airtable.com/shr6FPA7SW6p2gDTY',
            purpose: 'Engineering a secret source of truth.',
            goals: `- Onboarding valuable contributors
  - Building useful secret apps together`,
            responsibilities: `- Improving documentation for developers.`,
            initiatives: `- Hackathons.`
          },
          {
            name: 'Education',
            date: 'Thursdays, 4pm UTC',
            url: 'https://airtable.com/shr6FPA7SW6p2gDTY',
            purpose: 'Helping anyone understand the importance of programmable privacy.',
            goals: `- Producing relevant and accessible content.
  - Clarifying Secret Network and our technologies.
  - Advancing privacy as a public good.`,
            responsibilities: `- Creating effective content efficiently.`,
            initiatives: `- Secret Foundation Wiki.`
          },
          {
            name: 'Awareness',
            date: 'Mondays, 4pm UTC',
            url: 'https://airtable.com/shr6FPA7SW6p2gDTY',
            purpose: 'Amplifying our network and our materials in order to drive adoption and community growth.',
            goals: `- Increasing Secret awareness.
  - Identifying important channels and communities.
  - Connecting with high-leverage individuals and organizations.`,
            responsibilities: `- Disseminating and amplifying relevant content.`,
            initiatives: `- Secret branding.
  - Community outreach.
  - Supporting Sharing Secrets and other content initiatives.`
          },
          {
            name: 'Puzzle',
            date: 'Tuesdays 4PM UTC',
            url: 'https://airtable.com/shr6FPA7SW6p2gDTY',
            purpose: 'To facilitate opportunities for collaboration between the community and Puzzle. ',
            goals: `- Collect feedback and feature requests for Puzzle.
  - Determine the biggest pain points users are having with Puzzle.
  - Implement features that empower users, committees, and other ecosystem participants.`,
            responsibilities: `- Making sure Puzzle development continues to fullfil community needs.`,
          },
          {
            name: 'Governance',
            date: 'Wednesdays, 4pm UTC',
            url: 'https://airtable.com/shr6FPA7SW6p2gDTY',
            purpose: 'Facilitating coordination of Secret Network participants.',
            goals: `- Promoting transparent collaboration.
  - Inviting everyone to join our community.
  - Communicating about proposals, voting, etc.`,
            responsibilities: `- Making decisions cooperatively.`,
            initiatives: `- Discussing project updates and governance issues.`
          },
          {
            name: 'Website / Design',
            date: 'Fridays, 4pm UTC',
            url: 'https://airtable.com/shr6FPA7SW6p2gDTY',
            purpose: 'To oversee ongoing build and maintainence of scrt.network',
            goals: `- An ongoing website and design roadmap.
  - Weekly reviews of current build and of latest Figma's.
  - An engaged group of members that represents the community as a whole.`,
            responsibilities: `- Provide a link between the broader community and the website developers and designers. 
  - Provide ideation and feedback for developers and designers.
  - Provide community endorsement for website and design initiatives, both volunteer and paid.
  - Provide oversight of community fund spends for the website.`,
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

  $accent-colors: (
    devs,
    education,
    awareness,
    puzzle,
    governance,
    website,
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

      h6, h4, h3, a {
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
          .info-set {
            display: grid;
            gap: var(--f-gutter-s);
            li {
              margin-bottom: var(--f-gutter-xs);
            }
          }
        }
      }
    }
  }

</style>
