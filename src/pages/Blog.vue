<template>
  <DefaultLayout class="blog">
    <!-- swirl -->
    <Column class="purple__swirl__top" mode="full">
      <Block>
        <img
          class="get-scrt__align-img"
          src="/img/icons/swirl-purple-top.svg"
          alt="Purple swirl top graphic"
          loading="lazy"
        />
      </Block>
    </Column>

    <HeroTitle>
      <h2>Secret Network Blog</h2>
    </HeroTitle>

    <Column class="blog-featured-carousel" mode="full">
      <Block>
        <BlogFeaturedPosts />
      </Block>
    </Column>

    <Column class="blog-all-posts">
      <Block>
        <BlogFilter :tags="tags" id="left" @filter-applied="onFilterApplied" />
        <section class="all-posts">
          <BlogPosts :posts="filteredPosts" />
        </section>
      </Block>
    </Column>

    <!-- swirl -->
    <Column class="purple__swirl__bottom" mode="full">
      <Block>
        <img
          class="get-scrt__align-img"
          src="/img/icons/swirl-purple-bottom.svg"
          alt="Purple swirl bottom graphic"
          loading="lazy"
        />
      </Block>
    </Column>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import BlogFeaturedPosts from "@/components/blog/BlogFeaturedPosts.vue";
import BlogFilter from "@/components/blog/BlogFilter.vue";
import BlogPosts from "@/components/blog/BlogPosts.vue";
import { canonicalTag, metaDataArray, pageMetaData } from "@/utils";

export default {
  components: {
    DefaultLayout,
    BlogFeaturedPosts,
    BlogFilter,
    BlogPosts
  },
  metaInfo() {
    return {
      title:
        "Blog | Secret Network - Bringing Privacy to Blockchains, Smart Contracts & Web3",
      meta: metaDataArray(this.getMetaData),
      link: canonicalTag(this.getMetaData)
    };
  },
  data() {
    return {
      appliedFilters: []
    };
  },
  computed: {
    posts() {
      const posts = [...this.$page.posts.edges].map(x => x.node);
      const hiddenTag = "hidden";
      const defaultImage = "https://scrt.network/blog-cover.jpg";
      return posts
        .filter(({ tags }) => {
          const hiddenData = tags.find(({ slug }) => slug === hiddenTag);
          return !Boolean(hiddenData);
        })
        .map(data => ({
          ...data,
          feature_image: data.feature_image || defaultImage
        }));
    },
    filteredPosts() {
      return [...this.posts].filter(post =>
        this.appliedFilters.length
          ? this.appliedFilters.includes(post.primary_tag.slug)
          : true
      );
    },
    tags() {
      const tags = [...this.$page.tags.edges].map(x => x.node);
      const posts = [...this.posts];
      return tags.filter(({ id }) =>
        posts.some(post => post.primary_tag?.id === id)
      );
    },
    getMetaData() {
      return pageMetaData(this.$page, "/blog");
    }
  },
  methods: {
    onFilterApplied(filters) {
      this.appliedFilters = filters;
    }
  }
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

.blog-featured-carousel {
  > .--flare-block > .content > .box {
    padding: 0;
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
