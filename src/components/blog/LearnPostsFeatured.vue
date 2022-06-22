<template>
  <section class="blog-featured-posts">
    <learn-card-featured
      v-for="{ node } in posts"
      :key="node.id"
      :slug="node.slug"
    >
      <template #image
        ><g-image
          onerror="this.onerror=null;this.src='../blog-cover.jpg';"
          v-if="node.feature_image"
          :src="node.feature_image"
        ></g-image
      ></template>
      <template class="card-tag" #tag>{{
        node.primary_tag.name
      }}</template>
      <h5>{{ node.title }}</h5>
      <template #footer>
        <g-image
          picture
          onerror="this.onerror=null;this.src='../scrt-logo.png';"
          v-if="node.primary_author.profile_image"
          :src="node.primary_author.profile_image"
        ></g-image>
        <g-image picture v-else src="@/assets/scrt-logo.png"></g-image>
        <div info class="author-info">
          <div>{{ node.primary_author.name }}</div>
          <div>{{ node.date }} &#8226; {{ node.reading_time }} min read</div>
        </div>
      </template>
    </learn-card-featured>
  </section>
</template>

<script>
import LearnCardFeatured from "./LearnCardFeatured.vue";
// import BlogCardFeatured from './BlogCardFeatured.vue'

const truncateSize = 200;

export default {
  components: { LearnCardFeatured },
  props: {
    posts: {
      LearnCardFeatured: Array,
      required: true,
      default: () => [],
    },
  },
  filters: {
    truncate(value) {
      if (!value) return "";
      return value.length >= truncateSize
        ? `${value.substring(0, truncateSize - 1)}...`
        : value;
    },
  },
};
</script>
