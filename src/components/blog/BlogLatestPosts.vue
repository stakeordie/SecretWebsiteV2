<template>
  <blog-posts :posts="$static.posts.edges"></blog-posts>
</template>

<script>
import BlogPosts from '@/components/blog/BlogPosts'

export default {
  components: { BlogPosts }
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
