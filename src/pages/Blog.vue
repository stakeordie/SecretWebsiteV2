<template>
  <default-layout class="blog">
    <hero-title>
      <h2>Secret Network Blog</h2>
    </hero-title>


    <column class="horizontal-slider" mode="full">
      <h3>Featured</h3>
      <blog-featured-posts :posts="$page.posts.edges"></blog-featured-posts>
    </column>


    <column class="blog-all-posts">
      <blog-filter id="left"></blog-filter>
      <section class="all-posts">
        <h3>All posts</h3>
        <blog-posts :posts="$page.posts.edges"></blog-posts>
      </section>
    </column>

  </default-layout>
</template>

<script>
  import DefaultLayout from '../layouts/DefaultLayout'
  import BlogPosts from '@/components/blog/BlogPosts'
  import BlogPostsFeatured from '@/components/blog/BlogPostsFeatured'

  export default {
    components: {
      DefaultLayout,
      BlogPosts,
      BlogPostsFeatured
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
@import "@lkmx/flare/src/functions/respond-to";
  .horizontal-slider {

    // overflow: hidden;
    // display: inline-block;
    // background: red;
    margin-bottom: var(--spacer-1);
    .blog-featured-posts {
      display: block;
      overflow: auto;
      width: 100vw;
      /* gap: var(--f-gutter-l); */
      padding: 1rem;
      // background: red;
      white-space: nowrap;
      transform: translateX(-16px);

      &::-webkit-scrollbar {
        display: none;
      }

      .blog-card-featured {
        border-radius: var(--f-radius);
        background: var(--theme-card-bg-default);
        transition: .2s ease;
        cursor: pointer;
        min-height: 450px;
        display: inline-block;
        /* flex-direction: column; */
        width: 350px;
        white-space: normal;
        /* justify-content: space-between; */
        vertical-align: top;
        margin-right: var(--f-gutter-l);
      }
    }
  }

  .blog-all-posts {
    margin-bottom: var(--spacer-1);
    .content {
      .box {
        display: grid;
        grid-template-columns: 200px 1fr;
        gap: var(--f-gutter-xl);
        @include respond-to("<=m") {
          grid-template-columns: 1fr;
        }
        .blog-card {
          svg {
            display: none;
          }
        }
      }
    }
  }

</style>
