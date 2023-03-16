<template>
  <section class="new-blog-grid">
    <div class="new-blog-grid__title">
      <h5 class="new-blog-grid__title-h5">BLOG POSTS</h5>

      <div class="new-blog-grid__title-btns">
        <btn
          class="link-arrow"
          style="
            color: var(--theme-links-default);
            margin-top: 0;
            padding: 0 12px;
            justify-content: right;
          "
          url="/blog"
        >
          VIEW ALL
        </btn>
      </div>
    </div>
    <div class="new-blog-grid__container">
      <new-blog-card
        v-for="{ node } in posts"
        :key="node.id"
        :tag="node.primary_tag != null ? node.primary_tag.name : ''"
        :slug="node.slug"
      >
        <template #image>
          <g-image
            onerror="this.onerror=null;this.src='../scrt-logo.png';"
            :src="node.feature_image"
            alt="Post image"
            loading="lazy"
          />
        </template>
        <template #tag v-if="node.primary_tag">
          {{ node.primary_tag.name }}
        </template>
        <h5>{{ node.title }}</h5>
        <template #footer>
          <BlogAuthor :post="node" />
        </template>
      </new-blog-card>
    </div>
  </section>
</template>

<script>
import NewBlogCard from "@/components/blog/NewBlogCard.vue";
import BlogAuthor from "@/components/blog/BlogAuthor.vue";

export default {
  components: { NewBlogCard, BlogAuthor },
  props: {
    posts: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.new-blog-grid {
  @include respond-to("<=s") {
    padding: var(--f-gutter);
  }

  &__title {
    display: flex;
    justify-content: space-between;

    &-h5 {
      color: var(--color-neutral-dark-mode-05);
      text-transform: uppercase;
    }

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

        &:hover {
          & span {
            color: var(--color-newBrand-blue-01) !important;
          }
        }
      }
    }
  }

  &__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @include respond-to("<=m") {
      gap: var(--f-gutter-s);
    }

    @include respond-to("<=s") {
      grid-template-columns: 1fr;
      gap: var(--f-gutter-l);
    }

    gap: var(--f-gutter-l);
    align-items: start;
    justify-items: center;
  }
}
</style>
