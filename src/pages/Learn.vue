<template>
  <default-layout class="blog">
    <hero-title>
      <h2>Learn</h2>
    </hero-title>

    <column number="2">
      <block>
        <h3>Dev</h3>
      </block>

      <block class="justify-right">
        <scroll-horizontal-v2 tagSlug="dev"></scroll-horizontal-v2>
      </block>
    </column>

    <column class="horizontal-slider dev spacer-s" mode="full">
      <block>
        <learn-featured-posts tag-slug="dev"></learn-featured-posts>
      </block>
    </column>

    <column number="2">
      <block>
        <h3>Ecosystem</h3>
      </block>

      <block class="justify-right">
        <scroll-horizontal-v2 tagSlug="ecosystem"></scroll-horizontal-v2>
      </block>
    </column>
    <column class="horizontal-slider ecosystem spacer-s" mode="full">
      <block>
        <learn-featured-posts tag-slug="ecosystem"></learn-featured-posts>
      </block>
    </column>

    <column class="blog-all-posts">
      <block>
        <blog-filter-v2
          :tags="tags"
          id="left"
          @blog-filter:filter-applied="onFilterApplied"
        ></blog-filter-v2>
        <section class="all-posts">
          <!-- <h3>Posts</h3> -->
          <learn-posts :posts="posts"></learn-posts>
        </section>
      </block>
    </column>
  </default-layout>
</template>

<script>
import DefaultLayout from "../layouts/DefaultLayout";
// import BlogPosts from "@/components/blog/BlogPosts";
// import BlogPostsFeatured from "@/components/blog/BlogPostsFeatured";

import LearnFeaturedPosts from '../components/blog/LearnFeaturedPosts.vue';
import BlogFilterV2 from '../components/blog/BlogFilterV2.vue';
import LearnPosts from '../components/blog/LearnPosts.vue';

export default {
  components: {
    DefaultLayout,
    LearnFeaturedPosts,
    BlogFilterV2,
    LearnPosts,
  },
  data() {
    return {
      filters: [],

      categories: [
        {
          name: "All",
          content: "All",
        },
        {
          name: "Featured",
          content: "Featured",
        },
        {
          name: "Announcement",
          content: "Announcement",
        },
        {
          name: "Blockchain",
          content: "Blockchain",
        },
        {
          name: "Collaboration",
          content: "Collaboration",
        },
        {
          name: "Community",
          content: "Community",
        },
        {
          name: "Cosmos",
          content: "Cosmos",
        },
        {
          name: "Design",
          content: "Design",
        },
        {
          name: "Dev",
          content: "Dev",
        },
        {
          name: "Ecosystem",
          content: "Ecosystem",
        },
        {
          name: "Governance",
          content: "Governance",
        },
        {
          name: "Introduction",
          content: "Introduction",
        },
        {
          name: "Nodes",
          content: "Nodes",
        },
        {
          name: "Privacy",
          content: "Privacy",
        },
        {
          name: "Secret Apps",
          content: "Secret Apps",
        },
        {
          name: "Solutions",
          content: "Solutions",
        },
        {
          name: "Staking",
          content: "Staking",
        },
      ],
      selectedContent: "All",
      appliedFilters: [],
    };
  },
  computed: {
    filteredCategories: function () {
      var vm = this;
      var content = vm.selectedContent;

      if (content === "All") {
        return vm.categories;
      } else {
        return vm.categories.filter(function (category) {
          return category.content === content;
        });
      }
    },

    posts() {
      const { edges: posts } = this.$page.posts;
      const hiddenTag = "hidden";
      return posts.filter(({ node: post }) => {
        if (this.appliedFilters.length === 0) {
          if (!post.primary_tag) return true;
          else {
            const hidden = post.tags.filter((tag) => tag.slug === hiddenTag);
            if (hidden.length == 0) return true;
          }
        }

        if (!post.primary_tag) return false;

        return this.appliedFilters.includes(post.primary_tag.slug);
      });
    },
    tags() {
      const { edges: tags } = this.$page.tags;
      const { edges: posts } = this.$page.posts;
      const hiddenTag = "hidden";
      return tags.filter(({ node: tag }) => {
        return posts.some(
          ({ node: post }) =>
            post.primary_tag?.id == tag.id && tag.name != hiddenTag
        );
      });
    },
  },
  methods: {
    scroll_left() {
      let content = document.querySelector(
        ".horizontal-slider > .--flare-block > .content > .box"
      );
      content.scrollLeft -= 390;
    },
    scroll_right() {
      let content = document.querySelector(
        ".horizontal-slider > .--flare-block > .content > .box"
      );
      content.scrollLeft += 390;
    },

    onFilterApplied(filters) {
      this.appliedFilters = filters;
    },

    mapImage() {
      const arrayPosts = this.$page.posts.edges;
      arrayPosts.forEach((el) => {
        if (el.node.feature_image) {
          const urlSplit = el.node.feature_image.split(":");
          if (urlSplit[0] !== "https" && urlSplit[0] !== "http") {
            el.node.feature_image =
              "https://ghost.scrt.network/" + el.node.feature_image;
          }
        } else el.node.feature_image = "https://scrt.network/blog-cover.jpg";
      });
    },
  },
  mounted() {
    this.mapImage();
  },
  metaInfo: {
    title:
      "Learn | Secret Network - Bringing Privacy to Blockchains, Smart Contracts & Web3",
  },
};
</script>

<page-query>
  {
  posts: allGhostPost(
    sortBy: "published_at"
    order: DESC
    filter: { tags: { id: { in: ["62757008e2d5e80021a6c87e", "62757008e2d5e80021a6c893", "62757008e2d5e80021a6c87a"] } } }
  ) {
    edges {
      node {
        title
        description: excerpt
        date: published_at(format: "D MMM YYYY")
        id
        slug
        reading_time
        feature_image
        tags {
          name
          id
          slug
        }
        primary_tag {
          name
          id
          slug
        }
        primary_author {
          name
          profile_image
        }
      }
    }
  }

  tags: allGhostTag {
    edges {
      node {
        name
        id
        ghostId
      }
    }
  }
}
</page-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.horizontal-slider {
  .content {
    overflow: hidden;

    .box {
      scrollbar-width: none;
      overflow-x: scroll;
      overflow: auto;
      max-width: 99vw;
      scroll-behavior: smooth;


      @include respond-to("<=m") {
        max-width: 100vw;
      }

      padding-left: 1rem;
      padding-right: 1rem;

      @include respond-to(">=l") {
        padding-left: 3vw;
      }

      @include respond-to(">=xl") {
        padding-left: 9vw;
      }

      @include respond-to(">=xxl") {
        padding-left: 13vw;
      }

      @include respond-to("xxxl") {
        padding-left: 19vw;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .blog-featured-posts {
    white-space: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }

    .blog-card-featured-v2 {

      border-radius: var(--f-radius);
      //background: var(--theme-card-bg-default);
      transition: 0.2s ease;
      cursor: pointer;
      display: inline-block;
      /* flex-direction: column; */
      max-width: 400px;
      //min-height: 400px;
      min-height: 400px;
      white-space: normal;
      /* justify-content: space-between; */
      vertical-align: top;
      margin-right: var(--f-gutter);
      position: relative;
      overflow: hidden;

      @include respond-to("<=xs") {
       margin-right: var(--f-gutter);
      }
    }
  }
}

.blog-all-posts {
  margin-bottom: var(--spacer-1);

  .content {
    .box {
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: var(--f-gutter-xl);

      @include respond-to("<=m") {
        grid-template-columns: 1fr;
      }

      .blog-card {
        svg {
          display: none;
        }
      }
    }
  }
}
</style>