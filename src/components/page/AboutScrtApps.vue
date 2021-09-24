<template>
  <div class="about-scrt-apps">
    <div class="wrapper" v-for="(element, index) in aboutScrtStakeGovApps" :key="index">
      <h6>{{element.Subtitle}}</h6>
      <h3>{{element.title}}</h3>
      <vue-markdown :source="element.message"></vue-markdown>

        <btn class="no-arrow bg-invert" v-for="(btn, index) in aboutScrtStakeGovApps[0].link" :key="index" v-bind:url="btn.url">{{btn.Title}}</btn>

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
				stakeGovernanceApps {
          id
          Subtitle
          title
          message
          link {
            Title
            url
          }
        }
      }
    }
  } 
}

</static-query>

<style lang="scss">
.about-scrt-apps {
  .wrapper {

    display: grid;
    justify-items: center;
    gap: var(--f-gutter);
    * {
      // margin: 0;
    }
    p {
      max-width: 768px;
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 10px;
    }
  
h6 {
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: var(--color-highkey-secondary-yellow);
  text-align: center;
}
h3 {
  font-weight: 600;
  font-size: 36px;
  line-height: 30px;
  text-align: center;
}
  }
}
</style>
