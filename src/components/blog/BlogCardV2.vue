<template>
  <g-link
    class="blog-card-v2 cta"
    :class="`accent-blog` + color"
    :to="$tp(`/blog/${slug}`)"
  >
  <div class="blog-card-v2__top">
  <div class="blog-card-v2__body">
      <div class="blog-card-v2__feature-image">
        <slot name="image"></slot>
      </div>
      <div class="blog-card-v2__tag">
        <slot name="tag"></slot>
      </div>
      <slot name="default"></slot>
    </div>
  </div>
    <blog-author class="blog-card-v2__footer">
      <slot name="footer"></slot>
    </blog-author>
  </g-link>
</template>

<script>
import BlogAuthor from "@/components/blog/BlogAuthor";

const colors = {
  announcement: "announcement",
  education: "education",
  "how to": "education",
  explanations: "education",

  "introduction": "education",
  
  dev: "developers",
  "texh updates": "developers",
  hackathon: "developers",
  funding: "developers",
  ecosystem: "ecosystem",  
  community: "ecosystem",
  
  "collaboration": "ecosystem",

  "dapp launches": "ecosystem",
  "nft projects": "ecosystem",
  reports: "ecosystem",
  recaps: "ecosystem",
  "reports/recaps": "ecosystem",
  "": "optional",
  undefined : "optional",
  null: "optional",
  defi: "optional",
  nfts: "optional",
  games: "optional",
  technology: "optional",
  tech:"optional",
  privacy: "optional",



  "blockchain": "optional",
  "cosmos": "optional",
  "design": "optional",
  "governance": "optional",
  "nodes": "optional",
  "secret apps": "optional",
  "solutions": "optional",
  "staking": "optional",
  "feature": "optional"

  
  
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

$accent-blog-colors: (
  "announcement",
  "education",
  "developers",
  "ecosystem",
  "optional",

  // "turquoise",
  // "green",
  // "yellow",
  // "cream",
  // "orange",
  // "red",
  // "purple",
  // "gray"
);

.blog-card-v2 {
  border-radius: var(--f-radius);
  overflow: hidden;//background: var(--theme-card-bg-default);
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

  @each $name, $color in $accent-blog-colors {
    &.accent-blog#{$name} {
      &:hover {
       
      }

      .blog-card-v2__top{
        display: block;
        
      }

      .blog-card-v2__body{

      }

      .blog-card-v2__feature-image{
        border-radius: 10px;
        height: 150px;
        overflow: hidden;

        & img{
          object-fit: cover;
          width: 368px;
          height: 150px;

          @include respond-to("<=s") {
            width: 100%;
          }

        }

      }

      .blog-card-v2__tag {
        color: var(--accent-blog-#{$name});
        text-transform: uppercase;
        font-size: var(--f-default-text-size);
        font-weight: 700;
        font-family: hind;

        padding-top: 10px;
        
      }

      & h5 {
        margin-bottom: 0;
        color: var(--theme-fg);
        font-size: 14px;
        line-height: 20px ;
        font-family: var( --f-default-headers-font);
        
        & a {
          color: var(--theme-fg);
        }
      }
    }
  }

  

  .blog-author {
    justify-content: flex-end;
    //padding: var(--f-gutter);
    display: grid;
    grid-auto-flow: column;
    // display: flex;
    align-items: center;
    justify-content: left;
    gap: var(--f-gutter);
    //position: absolute;
    //bottom: 0;
    //left: 0;

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
      //gap: var(--f-gutter-xxs);
      color: var(--theme-fg);

      & p{
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      }
    }
  }
}
</style>
