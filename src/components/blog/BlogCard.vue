<template>
  <a :href="`/blog/${post.slug}`" class="blog-card">
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
    </div>
    <div class="blog-card__body">
      <h5 class="title">{{ post.title }}</h5>
      <BlogAuthor :post="post" />
    </div>
  </a>
</template>

<script>
import BlogAuthor from "@/components/blog/BlogAuthor.vue";

export default {
  components: { BlogAuthor },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";

.blog-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 22px;
  background: var(--color-neutral-dark-mode-03);
  cursor: pointer;

  &:hover {
    transition: 0.3s ease-in-out;
    background: var(--color-neutral-dark-mode-04);
  }

  &__content {
    .image {
      border-top-left-radius: 22px;
      border-top-right-radius: 22px;
      width: 100%;
      overflow: hidden;

      img {
        object-fit: cover;
        aspect-ratio: 16 / 9;
        width: 100%;
      }
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: var(--f-gutter);
    padding: var(--f-gutter);
    .title {
      margin-bottom: 0;
      color: #ffffff;
      font-size: 16px;
      min-height: 48px;
    }
  }
}
</style>
