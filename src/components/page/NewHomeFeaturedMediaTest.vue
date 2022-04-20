<template>
<div>
  <column class="home-feature-media-test" number="2" >

    <block>

      <h5>{{ media.title }}</h5>

    </block>

    <block style="text-align: right;"> 

      <div class="new-blog-grid__title-btns">
        <btn class="link-arrow " style="color:var(--color-newBrand-blue-02); margin-top:0; padding:0 12px; justify-content:right" url="/media/features">VIEW ALL</btn>
      </div>

    </block>

  </column>

  <column class="" number="3" number-s="1">

    <!-- Left card -->
    <block>

      <new-card-media :class="`accent-${left.type}`" :url="left.link">
        <span class="type">{{ left.type }}</span>
        <h6>{{ left.title }}</h6>
        <img :src="left.cover_image.url" :alt="left.title">
      </new-card-media>

    </block>

    <!-- Center card -->
    <block>

      <new-card-media :class="`accent-${center.type}`" :url="center.link">
        <span class="type">{{ center.type }}</span>
        <h6>{{ center.title }}</h6>
        <img :src="center.cover_image.url" :alt="center.title">
      </new-card-media>

    </block>

    <!-- Right card -->
    <block>

      <new-card-media :class="`accent-${right.type}`" :url="right.link">
        <span class="type">{{ right.type }}</span>
        <h6>{{ right.title }}</h6>
        <img :src="right.cover_image.url" :alt="right.title">
      </new-card-media>

    </block>

  </column>
</div>
</template>

<script>
export default {
  computed: {
    media() {
      return this.$static.homeFeaturedMedia.edges[0].node;
    },

    left() {
      return this.media.left;
    },

    center() {
      return this.media.center;
    },

    right() {
      return this.media.right;
    }
  }
}
</script>

<static-query>
query {
  homeFeaturedMedia: allStrapiHomeFeaturedMedia {
    edges {
      node {
        title
        button_text
        left {
          title
          link
          cover_image {
            url
          }
          type
        }
        center {
          title
          link
          cover_image {
            url
          }
          type
        }
        right {
          title
          link
          cover_image {
            url
          }
          type
        }
      }
    }
  }
}
</static-query>

<style lang="scss">

.home-feature-media-test{
  

    & .link-arrow{

 & a{
        font-family: hind;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        cursor: pointer;
        

        &:hover{

          & span{
            color: var(--color-newBrand-blue-01) !important;
          }
          
        }
      }
    }
}

</style>
