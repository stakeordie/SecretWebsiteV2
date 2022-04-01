<template>
  <blog-posts :posts="latestPost"></blog-posts>
</template>

<script>
import BlogPosts from '@/components/blog/BlogPosts'

export default {
  components: { BlogPosts },
  data(){
    return {
      latestPost: []
    };
  },
  methods:{
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
  },
   mounted(){    
    this.filterlatestPost();
  },
}
</script>

<static-query>
{
  posts: allGhostPost(sortBy: "published_at", order: DESC, limit: 3) {
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
