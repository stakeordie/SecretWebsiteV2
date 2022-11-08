<template>
  <section class="blog-grid">
    <blog-card
      v-for="{ node } in posts"
      :key="node.id"
      :tag="node.primary_tag != null ? node.primary_tag.name : ''"
      :slug="node.slug"
    >
      <template #tag v-if="node.primary_tag">{{
        node.primary_tag.name
      }}</template>
      <h4>{{ node.title }}</h4>
      <p>{{ node.description | truncate }}</p>
      <template #footer>
        <g-image
          picture
          v-if="node.primary_author.profile_image"
          :src="node.primary_author.profile_image"
        ></g-image>
        <g-image picture v-else src="@/assets/scrt-logo.png"></g-image>
        <div info class="author-info">
          <div>{{ node.primary_author.name }}</div>
          <div>{{ node.date }} &#8226; {{ node.reading_time }} min read</div>
        </div>
      </template>
    </blog-card>
  </section>
</template>

<script>
import BlogCard from "@/components/blog/BlogCard";

const truncateSize = 200;

export default {
  components: { BlogCard },
  props: {
    posts: {
      type: Array,
      required: true,
      default: () => [],
    },
    columns: {
      type: Number,
      required: false,
      default: 3,
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

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @include respond-to("<=l") {
    grid-template-columns: repeat(2, 1fr);
  }
  @include respond-to("<=s") {
    grid-template-columns: 1fr;
  }
  gap: var(--f-gutter-l);
  align-items: start;
  justify-items: center;
}
</style>
