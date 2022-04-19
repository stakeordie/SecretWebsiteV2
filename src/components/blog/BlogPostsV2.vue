<template>
  <section class="new-blog-grid-v2">
          <h3 class="new-blog-grid-v2__title-h5">
        Post
      </h3>
    <div class="new-blog-grid-v2__container">

      <blog-card-v2 v-for="{ node } in posts" :key="node.id" :tag="node.primary_tag != null ? node.primary_tag.name : ''" :slug="node.slug">
        <template #image><g-image :src="node.feature_image"></g-image></template>
        <template #tag v-if="node.primary_tag">{{ node.primary_tag.name }}</template>
        <h5>{{ node.title }}</h5>
        <!-- <p>{{ node.description | truncate }}</p> -->
        <template #footer>
          <g-image picture v-if="node.primary_author.profile_image" :src="node.primary_author.profile_image"></g-image>
          <g-image picture v-else src="@/assets/scrt-logo.png"></g-image>
          <div info class="author-info">
            <p>{{ node.primary_author.name }}</p>
            <p>{{ node.date }} · {{ node.reading_time }} min read</p>
          </div>
        </template>
      </blog-card-v2>
    </div>
  </section>
</template>

<script>
import BlogCard from '@/components/blog/BlogCard'
import BlogCardV2 from '@/components/blog/BlogCardV2'

const truncateSize = 200;

export default {
  components: { BlogCardV2 },
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
  },
  filters: {
    truncate(value) {
      if (!value) return ''
      return value.length >= truncateSize ? `${value.substring(0, truncateSize - 1)}...` : value
    }
  }
}
</script>


<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";


.new-blog-grid-v2 {

  &__title{
    display: flex;
    justify-content: space-between;

    // @include respond-to("<=s"){
    //   flex-direction: column;
    // }

    &-h5{
      //color: var(--color-neutral-dark-mode-05);
      //text-transform: uppercase;
    }

    &-btns{
      // display: grid;
      // grid-template-columns: repeat(2, 1fr);
      // gap: 26px;
      
      @include respond-to("<=s"){
        display: flex;
        
      }
      
      

      & a{
        font-family: hind;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
        cursor: pointer;
      }
    }
  }

  &__container{
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
