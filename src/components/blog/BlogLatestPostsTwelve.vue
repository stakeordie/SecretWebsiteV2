<template>
  <blog-posts :posts="$static.posts.edges" :columns="columns"></blog-posts>
</template>

<script>
import BlogPosts from '@/components/blog/BlogPosts'

export default {
  components: { BlogPosts },
  data () {
    return {
      columns: 3
    }
  }
}
</script>

<static-query>
{
  posts: allGhostPost(sortBy: "published_at", order: DESC, limit: 9) {
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
