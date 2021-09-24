<template>
  <section class="community-support__component">
    <div
      class="community-support__component__loop"
      v-for="(element, index) in AboutScrtCommunitySupport"
      :key="index"
    >
      <h4>{{ element.title }}</h4>
      <btn v-bind:url="element.link.url">{{ element.link.Title }}</btn>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    AboutScrtCommunitySupport() {
      let content = this.$static.aboutScrtCommunitySupport.edges.map(
        (it) => it.node.communitySupport
      );
      return content;
    },
  },
};
</script>

<static-query>

query {
  aboutScrtCommunitySupport: allStrapiAboutScrt {
    edges {
      node {
        communitySupport {
          title
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
.community-support__component {
  &__loop {
    display: grid;
    gap: 36px;
    justify-items: center;
    * {
      margin: 0;
    }
  }
}
</style>
