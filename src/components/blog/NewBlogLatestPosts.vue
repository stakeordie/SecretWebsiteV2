<template>
  <new-blog-posts :posts="latestPost"></new-blog-posts>
</template>

<script>
import BlogPosts from "@/components/blog/BlogPosts";
import NewBlogPosts from "@/components/blog/NewBlogPosts";


export default {
  components: { NewBlogPosts },
  data() {
    return{
      latestPost: [],
    };
  },
  methods: {
    filterlatestPost() {
      const { edges: posts } = this.$static.posts;
      const hiddenTag = "hidden";
      this.latestPost = posts.filter(({ node: post }) => {
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
        } else el.node.feature_image = "https://scrt.network/blog-cover.jpg";
      });
    },
  },
  mounted() {
    this.mapImage();
    this.filterlatestPost();
  },
};
</script>

<static-query>
{
  posts: allGhostPost(sortBy: "published_at", order: DESC, limit: 3, filter: {tags:{id: {ne: "62460c5faa18ef05f57689b1"}}}) {
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
