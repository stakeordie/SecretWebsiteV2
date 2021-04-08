<template>
  <blog-posts-featured :posts="$static.posts.edges"></blog-posts-featured>
</template>

<script>
import BlogPostsFeatured from '@/components/blog/BlogPostsFeatured'

export default {
  components: { BlogPostsFeatured }
}
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
