<template>
  <section class="new-blog-grid-v2">
    <h3 class="new-blog-grid-v2__title-h5">Post</h3>
    <div class="new-blog-grid-v2__container">
      <BlogCard
        v-for="post in posts"
        :key="post.id"
        :tag="post.primary_tag ? post.primary_tag.name : ''"
        :slug="post.slug"
      >
        <template #image>
          <g-image
            onerror="this.onerror=null;this.src='../blog-cover.jpg';"
            alt="Blog"
            v-if="post.feature_image"
            :src="post.feature_image"
            loading="lazy"
          />
        </template>
        <template #tag v-if="post.primary_tag">
          {{ post.primary_tag.name }}
        </template>
        <h5>{{ post.title }}</h5>
        <template #footer>
          <BlogAuthor v-if="post" :post="post" />
        </template>
      </BlogCard>
    </div>
  </section>
</template>

<script>
import BlogCard from "@/components/blog/BlogCard.vue";
import BlogAuthor from "@/components/blog/BlogAuthor.vue";

export default {
  components: { BlogCard, BlogAuthor },
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

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.new-blog-grid-v2 {
  &__title {
    display: flex;
    justify-content: space-between;

    &-btns {
      @include respond-to("<=s") {
        display: flex;
      }

      & a {
        font-family: hind;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        cursor: pointer;
      }
    }
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @include respond-to("<=l") {
      grid-template-columns: repeat(2, 1fr);
    }

    @include respond-to("<=xs") {
      grid-template-columns: 1fr;
    }

    gap: var(--f-gutter);
    align-items: start;
    justify-items: center;
  }
}
</style>
