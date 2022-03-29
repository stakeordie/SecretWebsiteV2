<template>
  <default-layout class="blog">
    <hero-title>
      <h2>Secret Network Blog</h2>
    </hero-title>

    <column number="2">
      <block>
        <h3>Featured</h3>
      </block>

      <block class="justify-right">
        <button class="theme padding-small control" @click="scroll_left">
          <img src="../assets/icon-circle-left.svg" alt="left" />
        </button>
        <button class="theme padding-small control" @click="scroll_right">
          <img src="../assets/icon-circle-right.svg" alt="right" />
        </button>
      </block>
    </column>

    <column class="horizontal-slider spacer-s" mode="full">
      <block>
        <blog-featured-posts :posts="$page.posts.edges"></blog-featured-posts>
      </block>
    </column>

    <column class="blog-all-posts">
      <block>
        <blog-filter
          :tags="tags"
          id="left"
          @blog-filter:filter-applied="onFilterApplied"
        ></blog-filter>
        <section class="all-posts">
          <h3>Posts</h3>
          <blog-posts :posts="posts"></blog-posts>
        </section>
      </block>
    </column>
  </default-layout>
</template>

<script>
import DefaultLayout from "../layouts/DefaultLayout";
import BlogPosts from "@/components/blog/BlogPosts";
import BlogPostsFeatured from "@/components/blog/BlogPostsFeatured";

export default {
  components: {
    DefaultLayout,
    BlogPosts,
    BlogPostsFeatured,
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
      const hiddenTag = 'hidden';
      return posts.filter(({ node: post }) => {
        if (this.appliedFilters.length === 0) {
          if (!post.primary_tag) return true;
          else if(post.primary_tag && post.primary_tag.slug != hiddenTag) return true;
        }

        if (!post.primary_tag) return false;

        return this.appliedFilters.includes(post.primary_tag.slug);
      });
    },
    tags() {
      const { edges: tags } = this.$page.tags;
      const { edges: posts } = this.$page.posts;
      const hiddenTag = 'hidden';
      return tags.filter(({ node: tag }) => {
        return posts.some(({ node: post }) => post.primary_tag?.id == tag.id && tag.name != hiddenTag);
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
  },
  metaInfo: {
    title: "Blog",
  },
};
</script>

<page-query>
  {
    posts: allGhostPost(sortBy: "published_at", order: DESC) {
      edges {
        node {
          title
          description: excerpt
          date: published_at (format: "D MMM YYYY")
          id
          slug
          reading_time
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

    .blog-card-featured {
      border-radius: var(--f-radius);
      background: var(--theme-card-bg-default);
      transition: 0.2s ease;
      cursor: pointer;
      display: inline-block;
      /* flex-direction: column; */
      width: 400px;
      min-height: 467px;
      white-space: normal;
      /* justify-content: space-between; */
      vertical-align: top;
      margin-right: var(--f-gutter-l);
      position: relative;
      overflow: hidden;
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
