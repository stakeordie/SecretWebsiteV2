<template>
  <section class="blog-posts">
    <h3 class="blog-posts__title">Post</h3>
    <div class="blog-posts__container">
      <BlogCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </section>
</template>

<script>
import BlogCard from "@/components/blog/BlogCard.vue";

export default {
  components: { BlogCard },
  props: {
    posts: {
      type: Array,
      required: true,
      default: () => []
    },
    columns: {
      type: Number,
      required: false,
      default: 3
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";

.blog-posts {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__title {
    margin: 0;
  }

  &__container {
    display: grid;
    gap: var(--f-gutter);
    align-items: start;
    justify-items: center;

    @include respond-to(">=s") {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to(">=xl") {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
