<template>
  <g-link
    class="blog-card-v2 cta"
    :class="`accent-` + color"
    :to="$tp(`/blog/${slug}`)"
  >
    <div class="blog-card-v2__top">
      <div class="blog-card-v2__body">
        <div class="blog-card-v2__feature-image">
          <slot name="image" />
        </div>
        <div class="blog-card-v2__tag blog-card__tag-color">
          <slot name="tag" />
        </div>
        <slot name="default" />
      </div>
    </div>
    <blog-author class="blog-card-v2__footer">
      <slot name="footer" />
    </blog-author>
  </g-link>
</template>

<script>
import BlogAuthor from "./BlogAuthor.vue";

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
  recaps: "ecosystem",
};

export default {
  components: {
    BlogAuthor,
  },
  props: {
    tag: {
      type: String,
      required: false,
      default: "",
    },
    slug: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      color: "",
    };
  },
  created() {
    this.color = this.getColor();
  },
  methods: {
    getColor() {
      return colors[this.tag.toLowerCase()];
    },
  },
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

.blog-card-v2 {
  border-radius: var(--f-radius);
  overflow: hidden;
  background: var(--color-neutral-dark-mode-03);
  transition: 0.3s ease-in-out;
  cursor: pointer;
  height: 340px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--f-gutter);

  @include respond-to("<=s") {
    min-height: auto;
    width: 100%;
  }

  &:hover {
    background: var(--color-neutral-dark-mode-04);
  }

  @each $name, $color in $accent-colors {
    &.accent-#{$name} {
      .blog-card-v2__top {
        display: block;
      }

      .blog-card-v2__feature-image {
        border-radius: 10px;
        height: 150px;
        overflow: hidden;

        & img {
          object-fit: cover;
          width: 368px;
          height: 150px;

          @include respond-to("<=s") {
            width: 100%;
          }
        }
      }

      .blog-card-v2__tag {
        color: var(--accent-#{$name}-v2);
        text-transform: uppercase;
        font-size: var(--f-default-text-size);
        font-weight: 700;
        font-family: hind;
        letter-spacing: 1px;

        padding-top: 10px;
      }

      & h5 {
        margin-bottom: 0;
        color: var(--theme-fg);
        font-size: 14px;
        line-height: 20px;
        font-family: var(--f-default-headers-font);

        & a {
          color: var(--theme-fg);
        }
      }
    }
  }

  .blog-author {
    justify-content: flex-end;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: left;
    gap: var(--f-gutter);

    img {
      width: 40px;
      height: 40px;
      border-radius: 100px;
    }

    @include respond-to("<=s") {
      position: relative;
    }

    .author-info {
      display: grid;
      color: var(--theme-fg);

      & p {
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      }
    }
  }
}
</style>
