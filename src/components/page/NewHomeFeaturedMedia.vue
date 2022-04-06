<template>
<div>
  <column class="" number="2" >

    <block>

      <h5>{{ media.title }}</h5>

    </block>

    <block style="text-align: right;"> 

      <btn class="link-arrow " style="color:var(--color-newBrand-blue-02); margin-top:0; padding:0 12px; justify-content:right" url="/media/features">{{ media.button_text }}</btn>

    </block>

  </column>

  <column class="" number="3" number-s="1">

    <!-- Left card -->
    <block>

      <card-media :class="`accent-${left.type}`" :url="left.link">
        <span class="type">{{ left.type }}</span>
        <h6>{{ left.title }}</h6>
        <img :src="left.cover_image.url" :alt="left.title">
      </card-media>

    </block>

    <!-- Center card -->
    <block>

      <card-media :class="`accent-${center.type}`" :url="center.link">
        <span class="type">{{ center.type }}</span>
        <h6>{{ center.title }}</h6>
        <img :src="center.cover_image.url" :alt="center.title">
      </card-media>

    </block>

    <!-- Right card -->
    <block>

      <card-media :class="`accent-${right.type}`" :url="right.link">
        <span class="type">{{ right.type }}</span>
        <h6>{{ right.title }}</h6>
        <img :src="right.cover_image.url" :alt="right.title">
      </card-media>

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
