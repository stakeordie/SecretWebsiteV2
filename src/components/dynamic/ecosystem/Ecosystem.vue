<template>
  <div class="ecosystem" :class="containerStyles">
    <div class="ecosystem__header">
      <h5>Explore</h5>
      <h2>{{ gridHeader.title }}</h2>
      <p>{{ gridHeader.subtitle }}</p>
      <filters
        :title="collection"
        :collections="collectionData"
        :categories="categories"
        @filterData="filterData"
      />
    </div>
    <div class="ecosystem__content" v-if="filteredData.length">
      <component
        v-for="(item, index) in filteredData"
        :is="componentName"
        :key="index"
        :data="item"
      />
    </div>
    <div class="ecosystem__empty" v-else>
      <img
        src="/img/icons/illustration-no-matches.svg"
        alt="Magnifying glass"
        loading="lazy"
      />
      <h3>No matches found</h3>
      <p>
        Please try another search or use one of
        <span>the predefined filters.</span>
      </p>
    </div>
  </div>
</template>

<script>
import { sizes } from "@/utils";
import Filters from "@/components/dynamic/ecosystem/Filters.vue";
import ContentCard from "@/components/dynamic/ecosystem/ContentCard.vue";

export default {
  components: { Filters, ContentCard },
  props: {
    collection: {
      type: String,
      required: true
    },
    padding_top: {
      type: String,
      required: true
    },
    padding_bottom: {
      type: String,
      required: true
    },
    background_color: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      filteredData: []
    };
  },
  computed: {
    containerStyles() {
      const paddingTop = sizes[this.padding_top] || sizes.none;
      const paddingBottom = sizes[this.padding_bottom] || sizes.small;

      return [`${paddingTop}-top`, `${paddingBottom}-bottom`];
    },
    collectionData() {
      return [...this.$static[this.collection].edges]
        .map(it => it.node)
        .sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
        });
    },
    categories() {
      const excludeCategories = {
        Contributors: "Contributors",
        Partners: "Partners"
      };

      if (excludeCategories[this.collection]) {
        return [];
      }

      return [...this.$static[this.collection].edges]
        .map(({ node }) => node.types)
        .flat()
        .map(({ name }) => name)
        .filter((item, i, arr) => arr.indexOf(item) === i);
    },
    gridHeader() {
      const headers = [...this.$static.gridHeaders.edges];
      const element = this.collection.toLowerCase();
      const data = headers.find(item =>
        item.node.title.toLowerCase().includes(element)
      );
      return {
        title: String(data?.node.title || this.collection),
        subtitle: String(data?.node.subtitle || this.collection)
      };
    },
    emptyData() {
      return !this.filteredData.length;
    },
    componentName() {
      const component = {
        Dapps: "ContentCard",
        Tools: "ContentCard",
        Exchanges: "ImageTitleCard",
        Contributors: "ImageTitleCard",
        Partners: "ImageCard"
      };

      return component[this.collection] || component.Partners;
    }
  },
  methods: {
    filterData(value) {
      this.filteredData = value;
    }
  }
};
</script>

<static-query>
query {
  gridHeaders: allStrapiCardGridHeader {
    edges {
      node {
        id
        title,
        subtitle
      }
    }
  }
  Dapps: allStrapiEcosystemDapp {
    edges {
      node {
        id
        sort
        title: name
        url: link
        description
        cta_title
        picture: logo {
          url
          ext
          name
          formats {
            large {
              url
            }
            medium {
              url
            }
            small {
              url
            }
          }
        }
        types: type {
          name
        }
      }
    }
  }
  Contributors: allStrapiContributor {
    edges {
      node {
        id
        sort
        title: name
        url: link
        picture: logo {
          url
          ext
          name
          formats {
            large {
              url
            }
            medium {
              url
            }
            small {
              url
            }
          }
        }
        types: type {
          name
        }
      }
    }
  }
  Tools: allStrapiToolAndWallet {
    edges {
      node {
        id
        sort
        title: name
        url: link
        description
        cta_title
        picture: logo {
          url
          ext
          name
          formats {
            thumbnail {
              url
            }
          }
        }
        types: type {
          name
        }
      }
    }
  }
  Communities: allStrapiInternationalCommunity {
    edges {
      node {
        id
        sort
        title: name
        url: link
        cta_title
        language: language
        picture: logo {
          url
          ext
          name
          formats {
            large {
              url
            }
            medium {
              url
            }
            small {
              url
            }
          }
        }
        types: type {
          name
        }
      }
    }
  }
  Exchanges: allStrapiExchange {
    edges {
      node {
        id
        sort
        title: name
        url: link
        description
        cta_title
        picture: logo {
          url
          ext
          name
          formats {
            medium {
              url
            }
            small {
              url
            }
          }
        }
        types: type {
          name
        }
      }
    }
  }
  Partners: allStrapiEcosystemPartner {
    edges {
      node {
        title: name
        picture: logo {
          url
          ext
          name
        }
        link
        order
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";

.ecosystem {
  display: flex;
  flex-direction: column;
  gap: var(--f-gutter-xl);
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-inline: var(--f-gutter);

  * {
    margin: 0;
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: var(--f-gutter);
    align-items: center;
    justify-content: center;
    text-align: center;
    h5 {
      color: var(--color-ver2-primary-turquoise);
      text-transform: uppercase;
    }

    h2 {
      font-size: 54px;
    }

    p {
      max-width: 650px;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--f-gutter);

    @include respond-to("<=xs") {
      justify-content: center;
      grid-template-columns: repeat(auto-fit, minmax(250px, 380px));
    }

    @include respond-to(">=l") {
      grid-template-columns: repeat(3, 1fr);
    }

    @include respond-to(">=xl") {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__empty {
    display: grid;
    grid-column: span 5;
    justify-items: center;
    gap: var(--f-gutter);
    padding: var(--f-gutter-l) 0;

    img {
      max-width: 150px;
    }
    p {
      text-align: center;

      span {
        @include respond-to(">=m") {
          display: block;
        }
      }
    }
  }
}
</style>
