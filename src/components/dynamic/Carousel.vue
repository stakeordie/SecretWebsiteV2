<template>
  <div class="mover">

    <div class="items horizontal-slider learn-article__carouselItem">
      <p>{{image}}</p>
      <div
        class="card-element item"
        v-for="(element, index) in articlesCarousel.data.learn_pages"
        :key="index"
      >
        <a
          class="card-element__overall-link"
          :href="element.dynamic_learn_article.data.route"
          target="blank"
          rel="noopener noreferrer"
        >
          <div class="card-element__header">
            <img
              class="card-element__header__logo"
              src="/img/learn/learnThumbnail-00002.jpg"
              alt="picture"
            />
          </div>
          <div class="card-element__title-desc">
            <div class="card-element__title-desc__header">
              <!-- <p>{{dynamic_page_groups_learn_article}}</p> -->
              <h6 class="element-grid-main-tag">{{ tagCarousel }}</h6>
              <h5 class="element-grid-title">{{ element.name }}</h5>
              <!-- <div v-for="(article, index) in element.learn_pages" :key="index">
                <h5 class="element-grid-title">{{ article.name }}</h5>
              </div> -->
            </div>
          </div>
        </a>
      </div>
    </div>
    
    <!-- </block>
    
    </column> -->
  </div>
</template>

<script>
export default {
  props: {
    dynamic_page_groups_learn_article: Object,
    image: Object
  },

  data() {
    return {
      articlesCarousel: [],
      tagCarousel: [],
      articles: [
        //BOTTOM CTAs
        {
          imageUrl: "/img/learn/learnThumbnail-00001.jpg",
          mainTag: "Tutorial",
          title: "Secret-BSC Bridge",
          url: "/learn/test",
        },
        {
          imageUrl: "/img/learn/learnThumbnail-00002.jpg",
          mainTag: "Tutorial",
          title: "Secret-XRM Bridge",
          url: "/learn/test",
        },
        {
          imageUrl: "/img/learn/learnThumbnail-00003.jpg",
          mainTag: "Tutorial",
          title: "How to buy SCRT using Osmosis ZOne & ATOM",
          url: "/learn/test",
        },
        {
          imageUrl: "/img/learn/learnThumbnail-00004.jpg",
          mainTag: "Tutorial",
          title: "How to buy SCRT using Switchwhere",
          url: "/learn/test",
        },
        {
          imageUrl: "/img/learn/learnThumbnail-00005.jpg",
          mainTag: "Tutorial",
          title: "How to buy SCRT using Transak on Secret Swap",
          url: "/learn/test",
        },
        {
          imageUrl: "/img/learn/learnThumbnail-00006.jpg",
          mainTag: "Tutorial",
          title: "How to Stake SCRT",
          url: "/learn/test",
        },
      ],
    };
  },

  methods: {
    scroll_left() {
      let content = document.querySelector(
        ".media-featured > .--flare-block > .content > .box"
      );
      content.scrollLeft -= 390;
      console.log("left");
    },
    scroll_right() {
      let content = document.querySelector(
        ".media-featured > .--flare-block > .content > .box"
      );
      content.scrollLeft += 390;
      // console.log("right");
      // console.log(content);
    },
    onFilterApplied(filters) {
      this.appliedFilters = filters;
    },
    carouselItems() {
      this.articlesCarousel = this.dynamic_page_groups_learn_article
      this.tagCarousel = this.articlesCarousel.data.name
      return this.articlesCarousel
    },
  },

  beforeMount() {
    this.carouselItems();
  },

  

  
};
</script>

<static-query>
  query {
    coolStuff: allStrapiCoolStuff {
      edges {
        node {
          id
          title: name
          url: link
          description
          cta_title
          logo {
            url
          }
          types: type {
            name
          }
        }
      }
    }
  }
</static-query>


