<template>
  <section class="new-blog">
    <div class="new-blog__header">
      <h4>Blog Posts</h4>
      <a href="/blog">
        <span>view all</span>
        <img
          src="/img/icons/icon-arrow-right-light.svg"
          alt="Arrow left"
          loading="lazy"
        />
      </a>
    </div>
    <div class="new-blog__container">
      <BlogCard v-for="post in latestPost" :key="post.id" :post="post" />
    </div>
  </section>
</template>

<script>
import BlogCard from "@/components/blog/BlogCard.vue";

export default {
  components: { BlogCard },
  data() {
    return {
      latestPost: [],
    };
  },
  methods: {
    filterlatestPost() {
      const posts = [...this.$static.posts.edges].map((x) => x.node);
      const hiddenTag = "hidden";
      const defaultImage = "https://scrt.network/blog-cover.jpg";

      this.latestPost = posts
        .filter(({ tags }) => {
          const hiddenData = tags.find(({ slug }) => slug === hiddenTag);
          return !Boolean(hiddenData);
        })
        .map((data) => ({
          ...data,
          feature_image: data.feature_image || defaultImage,
        }));
    },
  },
  mounted() {
    this.filterlatestPost();
  },
};
</script>

<static-query>
{
  posts: allGhostPost(sortBy: "published_at", order: DESC, limit: 3, filter: {tags:{id: {ne: "62757008e2d5e80021a6c898"}}}) {
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

.new-blog {
  display: flex;
  flex-direction: column;
  padding: var(--f-gutter);

  @include respond-to(">=s") {
    padding: 0;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 16px;
    align-items: center;

    @include respond-to("<=s") {
      padding: 16px 0px;
    }

    h4 {
      color: var(--color-neutral-dark-mode-05);
      margin: 0;
      text-transform: uppercase;
    }

    a {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 0;
      justify-content: right;
      text-transform: uppercase;
      font-weight: 600;
      line-height: 16px;

      span {
        padding: 10px 0px 10px 0px;
        font-family: hind;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        color: var(--theme-links-default);
        transform: translateY(2px);
        transition: 0.2s ease-in-out;
      }

      img {
        width: 16px;
        height: 16px;
      }

      &:hover {
        & span {
          transform: translateY(3px);
        }
      }
    }
  }

  &__container {
    display: grid;
    gap: 26px;
    align-items: start;
    justify-items: center;

    @include respond-to(">=s") {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to(">=l") {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
