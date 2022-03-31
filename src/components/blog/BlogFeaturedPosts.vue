<template>
  <blog-posts-featured :posts="postFeatured"></blog-posts-featured>
</template>

<script>
import BlogPostsFeatured from "@/components/blog/BlogPostsFeatured";

export default {
  components: { BlogPostsFeatured },
  data(){
    return {
      postFeatured: []
    };
  },
  methods:{
    filterPostsFeatured() {
      const { edges: posts } = this.$static.posts;
      const hiddenTag = "hidden";
      this.postFeatured = posts.filter(({ node: post }) => {
        if (!post.primary_tag) return true;
        else {
          const hidden = post.tags.filter((tag) => tag.slug === hiddenTag);          
          if (hidden.length == 0) return true;
        }
      });
      
    },
  },
   mounted(){    
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
