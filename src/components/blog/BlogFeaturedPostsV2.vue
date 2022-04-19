<template>
  <blog-posts-featured-v2 :posts="postFeaturedV2"></blog-posts-featured-v2>
</template>

<script>
import BlogPostsFeaturedV2 from './BlogPostsFeaturedV2.vue';


export default {
  components: { BlogPostsFeaturedV2 },
  data() {
    return {
    postFeaturedV2: [],
    };
  },
  methods: {
    filterPostsFeatured() {
      const { edges: posts } = this.$static.posts;
      const hiddenTag = "hidden";
      this.postFeaturedV2 = posts.filter(({ node: post }) => {
        if (!post.primary_tag) return true;
        else {
          const hidden = post.tags.filter((tag) => tag.slug === hiddenTag);
          if (hidden.length == 0) return true;
        }
      });
    },
    mapImage() {
      const arrayPosts = this.$static.posts.edges;
      arrayPosts.forEach((el) => {
        if (el.node.feature_image) {
          const urlSplit = el.node.feature_image.split(":");
          if (urlSplit[0] !== "https" && urlSplit[0] !== "http") {
            el.node.feature_image =
              "https://ghost.scrt.network/" + el.node.feature_image;
          }
        } else el.node.feature_image = "/blog-cover.jpg";
      });
    },
  },
  mounted() {
    this.mapImage();
    this.filterPostsFeatured();
  },
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
