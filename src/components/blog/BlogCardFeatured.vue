<template>
  <g-link
    class="blog-card-featured-v2"
    :class="`accent-` + color"
    :to="$tp(`/blog/${post.slug}`)"
  >
    <div class="blog-card-featured-v2__body">
      <div class="blog-card-featured-v2__tag">
        <g-image
          onerror="this.onerror=null;this.src='../blog-cover.jpg';"
          v-if="post.feature_image"
          :src="post.feature_image"
          alt="Featured graphic"
          loading="lazy"
        />
        <div v-if="post.primary_tag">{{ post.primary_tag.name }}</div>
      </div>
      <h5>{{ post.title }}</h5>
    </div>
    <BlogAuthor v-if="post" :post="post" />
  </g-link>
</template>

<script>
import BlogAuthor from "@/components/blog/BlogAuthor.vue";

const colors = {
  blockchain: "turquoise",
  collaboration: "green",
  community: "yellow",
  cosmos: "cream",
  design: "orange",
  feature: "orange",
  governance: "gray",
  introduction: "blue",
  nodes: "turquoise",
  privacy: "green",
  "secret apps": "yellow",
  solutions: "cream",
  staking: "orange",
  "": "red",
  null: "purple",
  undefined: "purple",
  nfts: "orange",
  announcement: "announcement",
  education: "education",
  how_tos: "education",
  explanations: "education",
  dev: "developers",
  developers: "developers",
  dev: "developers",
  "tech updates": "developers",
  hackathon: "developers",
  funding: "developers",
  ecosystem: "ecosystem",
  community: "ecosystem",
  dapp_launches: "ecosystem",
  "nft launches": "ecosystem",
  reports: "ecosystem",
  recaps: "ecosystem"
};

export default {
  components: {
    BlogAuthor
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      color: ""
    };
  },
  created() {
    this.color = this.getColor();
  },
  methods: {
    getColor() {
      return colors[this.post.primary_tag.name.toLowerCase()];
    }
  }
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";
$accent-colors: (
  "blue",
  "turquoise",
  "green",
  "yellow",
  "cream",
  "orange",
  "red",
  "purple",
  "gray",
  "announcement",
  "education",
  "developers",
  "ecosystem"
);

.blog-card-featured-v2 {
  max-width: 400px;
  width: 100%;
  flex-shrink: 0;
  border-radius: var(--f-radius);
  transition: 0.3s ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--f-gutter);
  white-space: normal;
  position: relative;
  scroll-snap-align: center;

  @include respond-to(">=s") {
    min-height: 400px;
  }

  &:hover {
    background: var(--color-neutral-dark-mode-04);
  }

  @each $name, $color in $accent-colors {
    &.accent-#{$name} {
      background: var(--color-neutral-dark-mode-03);

      .blog-card-featured-v2__tag {
        color: var(--accent-#{$name}-v2);
        text-transform: uppercase;
        margin-bottom: var(--f-gutter-xs);
        font-weight: 700;
        letter-spacing: 1px;

        & img {
          border-radius: var(--f-radius);
          overflow: hidden;
          margin-bottom: var(--f-gutter);

          @include respond-to("<=s") {
            min-height: auto;
            width: 100%;
          }
        }

        & .card-tag {
          margin-top: var(--f-gutter);
        }
      }

      & h5 {
        margin-bottom: 0;
        color: var(--theme-fg);
        font-size: var(--f-default-text-size);
        font-family: var(--f-default-headers-font);

        & a {
          color: var(--theme-fg);
        }
      }
    }
  }
}
</style>
