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
          >VIEW ALL</btn
        >
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
          <g-image
            picture
            onerror="this.onerror=null;this.src='../scrt-logo.png';"
            v-if="node.primary_author.profile_image"
            :src="node.primary_author.profile_image"
            :alt="node.primary_author.name"
            loading="lazy"
          />
          <g-image
            picture
            v-else
            src="@/assets/scrt-logo.png"
            alt="Secret Network logo"
            loading="lazy"
          />
          <div info class="author-info">
            <p>{{ node.primary_author.name }}</p>
            <p>{{ node.date }} · {{ node.reading_time }} min read</p>
          </div>
        </template>
      </new-blog-card>
    </div>
  </section>
</template>

<script>
const truncateSize = 200;

export default {
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

.new-blog-grid {
  @include respond-to("<=s") {
    padding: var(--f-gutter);
  }

  &__title {
    display: flex;
    justify-content: space-between;

    // @include respond-to("<=s"){
    //   flex-direction: column;
    // }

    &-h5 {
      color: var(--color-neutral-dark-mode-05);
      text-transform: uppercase;
    }

    &-btns {
      // display: grid;
      // grid-template-columns: repeat(2, 1fr);
      // gap: 26px;

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
      //grid-template-columns: repeat(2, 1fr);
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
