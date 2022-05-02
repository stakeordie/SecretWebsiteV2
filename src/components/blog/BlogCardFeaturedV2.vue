<template>
  <g-link class="blog-card-featured-v2 cta" :class="`accent-`+color" :to="$tp(`/blog/${slug}`)">
 <div class="blog-card-featured-v2-container">
   <div class="blog-card-featured-v2__body">
        <div class="blog-card-featured-v2__tag">
          <slot name="image"></slot>
          <slot class="card-tag" name="tag"></slot>
        </div>
        <slot name="default"></slot>
      </div>
      <blog-author class="blog-card-featured-v2__footer">
        <slot name="footer"></slot>
      </blog-author>
 </div>
  </g-link>
</template>

<script>
  import BlogAuthor from '@/components/blog/BlogAuthor'
  

  const colors = {
    // announcement: "announcement",
  blockchain: "turquoise",
  collaboration: "green",
  community: "yellow",
  cosmos: "cream",
  design: "orange",
  //dev: "red",
  feature: "orange",
  //ecosystem: "purple",
  governance: "gray",
  //hackathon: "yellow",
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
  how_tos:"education",
  explanations: "education",
  
  dev: "developers",
  'tech updates':"developers",
  hackathons:"developers",
  funding:"developers",

  ecosystem:"ecosystem",
  community:"ecosystem",
  dapp_launches:"ecosystem",
  'nft launches':"ecosystem",
  reports:"ecosystem",
  recaps:"ecosystem",

  }

  export default {
    components: {
      BlogAuthor
    },
    props: {
      tag: {
        type: String,
        required: false,
        default: ''
      },
      slug: {
        type: String,
        required: false,
        default: ''
      }
    },
    data() {
      return {
        color: ''
      }
    },
    created() {
      this.color = this.getColor()
    },
    methods: {
      getColor() {
        return colors[this.tag.toLowerCase()]

      }
    }
  }

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

    &-container{
      border-radius: var(--f-radius);
      overflow: hidden;//background: var(--theme-card-bg-default);
      transition: 0.3s ease-in-out;
      cursor: pointer;
      height: 424px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: var(--f-gutter);

      @include respond-to("<=s") {
        min-height: auto;
        width: 320px;
      }
      

      &:hover {
        background: var(--color-neutral-dark-mode-04);
        
      }
    }
    
  

    @each $name,
    $color in $accent-colors {
      &.accent-#{$name} {


        .blog-card-featured-v2__tag {
          color: var(--accent-#{$name}-v2);
          text-transform: uppercase;
          margin-bottom: var(--f-gutter-xs);
          font-weight: 700;
          letter-spacing: 1px;

          & img{
            border-radius: var(--f-radius);
            overflow: hidden;
            margin-bottom: var(--f-gutter);

            @include respond-to("<=s") {
              min-height: auto;
              width: 100%;
            }
          }

          & .card-tag{
            margin-top: var(--f-gutter);
            
          }
        }

        & h5 {
        margin-bottom: 0;
        color: var(--theme-fg);
        font-size: var(--f-default-text-size);
        font-family: var( --f-default-headers-font);
        
        & a {
          color: var(--theme-fg);
        }
      }
      }
    }

   .blog-card-featured-v2__footer {
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
      //color: var(--theme-fg);

      & div{
        margin-bottom: 0;
        font-size: 14px;
        color: var(--color-neutral-dark-mode-05);
      }

      & p{
        // margin-bottom: 0;
        // font-size: 12px;
        // font-weight: 500;
        // line-height: 20px;


      }
    }
  }
}

</style>
