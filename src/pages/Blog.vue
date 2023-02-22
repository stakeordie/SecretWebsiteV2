<template>
  <default-layout class="blog">
    <!-- swirl -->
    <column class="purple__swirl__top" mode="full">
      <block>
        <img
          class="get-scrt__align-img"
          src="../../src/assets/swirl-purple-top.svg"
          alt="Purple swirl top graphic"
          loading="lazy"
        />
      </block>
    </column>
    <hero-title>
      <h2>Secret Network Blog</h2>
    </hero-title>

    <column number="2">
      <block>
        <h3>Featured</h3>
      </block>

      <block class="justify-right">
        <button class="theme padding-small control" @click="scroll_left">
          <img src="../assets/icon-circle-left.svg" alt="left" loading="lazy" />
        </button>
        <button class="theme padding-small control" @click="scroll_right">
          <img
            src="../assets/icon-circle-right.svg"
            alt="right"
            loading="lazy"
          />
        </button>
      </block>
    </column>

    <column class="horizontal-slider spacer-s" mode="full">
      <block>
        <blog-featured-posts-v2 />
      </block>
    </column>

    <column class="blog-all-posts">
      <block>
        <blog-filter-v2
          :tags="tags"
          id="left"
          @blog-filter:filter-applied="onFilterApplied"
        />
        <section class="all-posts">
          <!-- <h3>Posts</h3> -->
          <blog-posts-v2 :posts="posts" />
        </section>
      </block>
    </column>

    <!-- swirl -->
    <column class="purple__swirl__bottom" mode="full">
      <block>
        <img
          class="get-scrt__align-img"
          src="../../src/assets/swirl-purple-bottom.svg"
          alt="Purple swirl bottom graphic"
          loading="lazy"
        />
      </block>
    </column>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import BlogFeaturedPostsV2 from "@/components/blog/BlogFeaturedPostsV2.vue";
import BlogFilterV2 from "@/components/blog/BlogFilterV2.vue";
import BlogPostsV2 from "@/components/blog/BlogPostsV2.vue";
import { canonicalTag, metaDataArray, pageMetaData } from "@/utils";

export default {
  components: {
    DefaultLayout,
    BlogFeaturedPostsV2,
    BlogFilterV2,
    BlogPostsV2,
  },
  metaInfo() {
    return {
      title:
        "Blog | Secret Network - Bringing Privacy to Blockchains, Smart Contracts & Web3",
      meta: metaDataArray(this.getMetaData),
      link: canonicalTag(this.getMetaData),
    };
  },
  data() {
    return {
      appliedFilters: [],
    };
  },
  computed: {
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
      return tags.filter(({ node: tag }) =>
        posts.some(
          ({ node: post }) =>
            post.primary_tag?.id == tag.id && tag.name != hiddenTag
        )
      );
    },
    getMetaData() {
      return pageMetaData(this.$page, "/blog");
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
        } else {
          el.node.feature_image = "https://scrt.network/blog-cover.jpg";
        }
      });
    },
  },
  mounted() {
    this.mapImage();
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

    strapiPages: allStrapiPage {
    edges {
      node {
        name
        title
        route
        og_description
        og_image {
          url
        }
        og_title
        meta_description
        canonical_url
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
      transition: 0.2s ease;
      cursor: pointer;
      display: inline-block;
      max-width: 400px;
      min-height: 400px;
      white-space: normal;
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
