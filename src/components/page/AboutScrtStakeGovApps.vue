<template>
  <div :class="aboutScrtStakeGovApps">
    <div v-for="(element, index) in aboutScrtStakeGovApps" :key="index">
      <h6>{{element.Subtitle}}</h6>
      <h3>{{element.title}}</h3>
      <vue-markdown :source="element.message"></vue-markdown>
      <div class="about__stake-governance__btn-cluster">
        <btn v-for="(btn, index) in aboutScrtStakeGovApps[0].link" :key="index" v-bind:url="btn.url">{{btn.Title}}</btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    block: {
      type: String,
      required: false,
    },
  },
  computed: {
    aboutScrtStakeGovApps(block) {
      let content = this.$static.aboutScrtStakeGovApps.edges.map((it, i) =>
        it.node.stakeGovernanceApps.filter((el) => el.Subtitle === this.block)
      );
      content = content[0];
      // console.log(content);
      return content;
    },
  },
};
</script>

<static-query>

query {
  aboutScrtStakeGovApps: allStrapiAboutScrt {
    edges {
      node {
				stakeGovernanceApp: stake_governance_apps {
          id
          Subtitle
          title
          message
          link {
            Title: title
            url
          }
        }
      }
    }
  } 
}

</static-query>

<style></style>
