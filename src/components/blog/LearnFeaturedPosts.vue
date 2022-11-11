<template>
  <div>
    <learn-posts-featured :posts="postFeaturedV2"></learn-posts-featured>
  </div>
</template>

<script>
import LearnPostsFeatured from "./LearnPostsFeatured.vue";

export default {
  components: { LearnPostsFeatured },
  props: {
    tagSlug: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      postFeaturedV2: [],
      slug: this.slugz,
    };
  },
  methods: {
    filterPostsFeatured() {
      const { edges: posts } = this.$static.posts;
      const hiddenTag = "hidden";
      this.postFeaturedV2 = posts.filter(({ node: post }) => {
        const selected = post.tags[0] ? post.tags[0].slug : "";
        // const slag = this.slug
        // console.log(selected)
        if (selected == this.tagSlug) {
          return selected;
        }
        // if (post.id === "6275700be2d5e80021a6c938") {
        //   console.log(post.tags[0].id === "62757008e2d5e80021a6c87e")
        //   return true;
        // }
        // else {
        //   const hidden = post.tags.filter((tag) => tag.slug === hiddenTag);
        //   if (hidden.length == 0) return true;
        // }
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
        } else el.node.feature_image = "https://scrt.network/blog-cover.jpg";
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
  posts: allGhostPost(
    sortBy: "published_at") {
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
