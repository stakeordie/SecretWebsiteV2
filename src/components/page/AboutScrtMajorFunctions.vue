<template>
  <section>
    <div
      class="about__major-functions__grid"
      v-for="(element, index) in aboutScrtMajorFunctions"
      :key="index"
    >
      <div class="about__major-functions__grid__item">
        <img
          :src="element.aboutScrtMajorFunctionsPayingFees[0].icon.url"
          alt=""
        />
        <h6>{{ element.aboutScrtMajorFunctionsPayingFees[0].title }}</h6>
        <p>{{ element.aboutScrtMajorFunctionsPayingFees[0].message }}</p>
      </div>
      <div class="about__major-functions__grid__item">
        <img :src="element.aboutScrtMajorFunctionsStaking[0].icon.url" alt="" />
        <h6>{{ element.aboutScrtMajorFunctionsStaking[0].title }}</h6>
        <p>{{ element.aboutScrtMajorFunctionsStaking[0].message }}</p>
      </div>
      <div class="about__major-functions__grid__item">
        <img
          :src="element.aboutScrtMajorFunctionsGovernance[0].icon.url"
          alt=""
        />
        <h6>{{ element.aboutScrtMajorFunctionsGovernance[0].title }}</h6>
        <p>{{ element.aboutScrtMajorFunctionsGovernance[0].message }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    aboutScrtMajorFunctions() {
      const content = this.$static.aboutScrtMajorFunctions.edges.map(
        (it) => it.node
      );
      return content;
    },
  },
};
</script>

<static-query>
query {
  aboutScrtMajorFunctions: allStrapiAboutScrt {
    edges {
      node {
        aboutScrtMajorFunctionsPayingFees: about_scrt_major_functions_paying_fees {
          id
          icon {
            url
          }
          title
          message
        }
        aboutScrtMajorFunctionsStaking: about_scrt_major_functions_staking {
          id
          icon {
            url
          }
          title
          message
        }
        aboutScrtMajorFunctionsGovernance: about_scrt_major_functions_governance {
          id
          icon {
            url
          }
          title
          message
        }
      }
    }
  } 
}
</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
.about__major-functions__grid {
  display: grid;
  gap: var(--f-gutter-xl);
  grid-template-columns: repeat(3, 1fr);
  @include respond-to("<=m") {
    grid-template-columns: 1fr;
  }
  &__item {
    display: grid;
    gap: 6px;
    align-content: start;
    * {
      margin: 0;
    }
  }
}
</style>
