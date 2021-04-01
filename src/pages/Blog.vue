<template>
  <default-layout class="blog">
    <type title="title">
      <h2>Secret Network Blog</h2>
    </type>
    <type title="Featured posts">

      <h2>Featured</h2>
      <featured-posts :posts="$page.posts.edges"></featured-posts>
    </type>

    <type title="All posts">
      <h2>All posts</h2>
      <posts :posts="$page.posts.edges"></posts>
    </type>

  </default-layout>
</template>

<script>
  import DefaultLayout from '../layouts/DefaultLayout'
  import Posts from '@/components/blog/Posts'
  import PostsFeatured from '@/components/blog/PostsFeatured'

  export default {
    components: {
      DefaultLayout,
      Posts,
      PostsFeatured
    },
    data() {
      return {
        categories: [{
            name: 'All',
            content: 'All'
          },
          {
            name: 'Featured',
            content: 'Featured'
          },
          {
            name: 'Announcement',
            content: 'Announcement'
          },
          {
            name: 'Blockchain',
            content: 'Blockchain'
          },
          {
            name: 'Collaboration',
            content: 'Collaboration'
          },
          {
            name: 'Community',
            content: 'Community'
          },
          {
            name: 'Cosmos',
            content: 'Cosmos'
          },
          {
            name: 'Design',
            content: 'Design'
          },
          {
            name: 'Dev',
            content: 'Dev'
          },
          {
            name: 'Ecosystem',
            content: 'Ecosystem'
          },
          {
            name: 'Governance',
            content: 'Governance'
          },
          {
            name: 'Introduction',
            content: 'Introduction'
          },
          {
            name: 'Nodes',
            content: 'Nodes'
          },
          {
            name: 'Privacy',
            content: 'Privacy'
          },
          {
            name: 'Secret Apps',
            content: 'Secret Apps'
          },
          {
            name: 'Solutions',
            content: 'Solutions'
          },
          {
            name: 'Staking',
            content: 'Staking'
          }
        ],
        selectedContent: "All"
      }
    },
    computed: {
      filteredCategories: function () {
        var vm = this;
        var content = vm.selectedContent;

        if (content === "All") {
          return vm.categories;
        } else {
          return vm.categories.filter(function (category) {
            return category.content === content;
          });
        }
      }
    }
  }

</script>

<page-query>
  {
  posts: allGhostPost(sortBy: "published_at", order: DESC) {
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
  id
  slug
  }
  primary_author {
  name
  profile_image
  }
  }
  }
  }

  tags: allGhostTag {
  edges {
  node {
  name
  id
  ghostId
  }
  }
  }
  }
</page-query>

<style lang="scss">

</style>
