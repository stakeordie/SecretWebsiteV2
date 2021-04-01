<template>
  <default-layout class="post">
    <template #title>
      <div tag v-if="$page.post.primary_tag">{{ $page.post.primary_tag.name }}</div>
      <h1>{{ $page.post.title }}</h1>
      <p>{{ $page.post.description }}</p>
    </template>
    <slim-column>
      <blog-author :includeShareButtons="true">
        <g-image picture :src="coverImage"></g-image>
        <div info>
          <div>{{ $page.post.primary_author.name }}</div>
          <div>{{ $page.post.date }} &#8226; {{ $page.post.reading_time }} min read</div>
        </div>
        <div class="share-icons">
          <ShareNetwork
            v-for="network in networks"
            :network="network.network"
            :key="network.network"
            :style="{backgroundColor: network.color}"
            :url="url"
            :title="$page.post.title"
            :description="$page.post.description"
          >
            <i :class="network.icon"></i>
            <span>{{ network.name }}</span>
          </ShareNetwork>
        </div>
      </blog-author>
      <hr>
      <g-image class="cover-image" picture :src="$page.post.coverImage"></g-image>
      <div class="post__content" v-html="$page.post.content"></div>
    </slim-column>
  </default-layout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import BlogAuthor from '@/components/blog/BlogAuthor'

const url = `https://scrt.network`

export default {
  components: { DefaultLayout, BlogAuthor },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { name: 'title', content: this.$page.post.title },
        { name: 'author', content: this.$page.post.primary_author.name },
        { key: 'og:url', property: 'og:url', content: `${url}${this.$route.fullPath}` },
        { key: 'og:title', property: 'og:title', content: this.$page.post.title },
        { key: 'og:description', property: 'og:description', content: this.$page.post.description },
        { key: 'og:image', property: 'og:image', content: this.$page.post.coverImage },
        { key: 'twitter:image', property: 'twitter:image', content: this.$page.post.coverImage }
      ],
    }
  },
  data() {
    return {
      url: 'https://scrt.network' + this.$route.fullPath,
      networks: [
        { network: 'twitter', name: 'Twitter', icon: 'fab fah fa-lg fa-twitter', color: '#1da1f2' },
        { network: 'linkedin', name: 'LinkedIn', icon: 'fab fah fa-lg fa-linkedin', color: '#007bb5' }
      ]
    }
  },
  computed: {
    coverImage: function() {
      return this.$page.post.primary_author.profile_image ? this.$page.post.primary_author.profile_image : '@/assets/scrt-logo.png';
    }
  }
}
</script>

<style lang="scss">

</style>

<page-query>
query Post ($path: String!) {
  post: ghostPost (path: $path) {
    title
    path
    date: published_at (format: "D MMM YYYY")
    description: excerpt
    content: html
    coverImage: feature_image
    primary_tag {
      name
    }
    primary_author {
      name
      profile_image
    }
  }
}
</page-query>
