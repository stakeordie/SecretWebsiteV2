<template>
  <a :href="`/blog/${post.slug}`"  class="blog-card">
    <div class="blog-card__content">
      <div class="image">
        <g-image
          v-if="post.feature_image"
          :src="post.feature_image"
          onerror="this.onerror=null;this.src='/blog-cover.jpg';"
          alt="Blog"
          loading="lazy"
        />
        <g-image v-else src="/blog-cover.jpg" alt="Blog" loading="lazy" />
      </div>
      <h5 class="title">{{ post.title }}</h5>
    </div>
    <BlogAuthor :post="post" />
  </a>
</template>

<script>
import BlogAuthor from "@/components/blog/BlogAuthor.vue";

export default {
  components: { BlogAuthor },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";

.blog-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  border-radius: var(--f-radius);
  background: var(--color-neutral-dark-mode-03);
  transition: 0.3s ease-in-out;
  padding: var(--f-gutter);
  cursor: pointer;
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: center;

  @include respond-to(">=s") {
    height: 100%;
  }

  &:hover {
    background: var(--color-neutral-dark-mode-04);
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .image {
      border-radius: 10px;
      width: 100%;
      overflow: hidden;
      aspect-ratio: 16/9;

      @include respond-to(">=s") {
        max-height: 200px;
      }

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }

    .title {
      margin-bottom: 0;
      color: #ffffff;
      font-size: 16px;
    }
  }
}
</style>
