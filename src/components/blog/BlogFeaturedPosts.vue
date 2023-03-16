<template>
  <section class="blog-featured-posts">
    <div class="header">
      <h3 class="header__title">Featured</h3>
      <div class="header__controls">
        <button @click="scroll('left')">
          <img src="img/icons/icon-circle-left.svg" alt="left" loading="lazy" />
        </button>
        <button @click="scroll()">
          <img
            src="/img/icons/icon-circle-right.svg"
            alt="right"
            loading="lazy"
          />
        </button>
      </div>
    </div>
    <div class="featured-posts" ref="featured_posts">
      <BlogCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </section>
</template>

<script>
import BlogCard from "@/components/blog/BlogCard.vue";

export default {
  components: { BlogCard },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    filterPostsFeatured() {
      const posts = [...this.$static.posts.edges].map(x => x.node);
      const hiddenTag = "hidden";
      const defaultImage = "https://scrt.network/blog-cover.jpg";
      this.posts = posts
        .filter(({ tags }) => {
          const hiddenData = tags.find(({ slug }) => slug === hiddenTag);
          return !Boolean(hiddenData);
        })
        .map(data => ({
          ...data,
          feature_image: data.feature_image || defaultImage
        }));
    },
    scroll(direction = "right") {
      const content = this.$refs.featured_posts;

      if (direction === "right") {
        content.scrollLeft += 390;
      } else {
        content.scrollLeft -= 390;
      }
    }
  },
  mounted() {
    this.filterPostsFeatured();
  }
};
</script>

<static-query>
{
  posts: allGhostPost(filter: { featured: { eq: true }}, sortBy: "published_at", limit: 8) {
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
        }
        primary_author {
          name
          profile_image
        }
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";

.blog-featured-posts {
  display: grid;
  gap: 16px;
  padding-bottom: 64px;

  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;
    padding: 0 var(--f-gutter-l);
    max-width: 1200px;

    @include respond-to(">=s") {
      flex-direction: row;
    }

    @include respond-to(">=xl") {
      justify-self: center;
    }

    &__title {
      flex: 1;
    }

    &__controls {
      display: flex;
      gap: 16px;

      button {
        all: unset;
        width: 44px;
        height: 44px;
        user-select: none;
        border-radius: 100%;
        cursor: pointer;

        :hover {
          filter: brightness(1.5);
        }
      }
    }
  }

  .featured-posts {
    width: 100%;
    display: flex;
    overflow-x: auto;
    flex-wrap: nowrap;
    gap: 16px;
    scroll-behavior: smooth;
    padding-right: 16px;
    padding-left: 16px;
    scroll-snap-type: x mandatory;
    scroll-snap-stop: always;

    @include respond-to(">=l") {
      padding-left: 3vw;
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

    ::v-deep {
      .blog-card {
        max-width: 400px;
      }
    }
  }
}
</style>
