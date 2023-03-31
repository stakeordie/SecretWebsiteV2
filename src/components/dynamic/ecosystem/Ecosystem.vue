<template>
  <div class="ecosystem" :class="containerStyles">
    <div class="ecosystem__header">
      <h5>Explore</h5>
      <h2>{{ headers.title }}</h2>
      <p>{{ headers.subtitle }}</p>
      <filters
        :title="collection"
        :collections="collectionData"
        :categories="categories"
        @filterData="filterData"
      />
    </div>
    <div
      v-if="filteredData.length"
      class="ecosystem__content"
      :class="gridStyles"
    >
      <component
        v-for="(item, index) in filteredData"
        :is="componentName"
        :key="index"
        v-bind="bindProps(item)"
      />
    </div>
    <div v-else class="ecosystem__empty">
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
import ImageTitleCard from "@/components/dynamic/ecosystem/ImageTitleCard.vue";
import ImageCard from "@/components/dynamic/ecosystem/ImageCard.vue";

export default {
  components: { Filters, ContentCard, ImageTitleCard, ImageCard },
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
      filteredData: [],
      comp: {
        Dapps: "Dapps",
        Tools: "Tools",
        Exchanges: "Exchanges",
        Contributors: "Contributors",
        Partners: "Partners"
      }
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
    headers() {
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
    componentName() {
      const component = {
        Dapps: "ContentCard",
        Tools: "ContentCard",
        Exchanges: "ImageTitleCard",
        Contributors: "ImageTitleCard",
        Partners: "ImageCard"
      };

      return component[this.collection] || component.Partners;
    },
    gridStyles() {
      return {
        "small-gap":
          this.collection === this.comp.Dapps ||
          this.collection === this.comp.Tools,
        "ecosystem-columns": this.collection === this.comp.Contributors,
        "partners-columns": this.collection === this.comp.Partners
      };
    }
  },
  methods: {
    filterData(value) {
      this.filteredData = value;
    },
    bindProps(data) {
      const props = { data };

      if (this.collection === this.comp.Contributors) {
        props.column = true;
      }

      return props;
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
    max-width: 650px;

    h5 {
      color: var(--color-ver2-primary-turquoise);
      text-transform: uppercase;
    }

    h2 {
      font-size: 54px;
    }
  }

  &__content {
    width: 100%;
    display: grid;
    gap: var(--f-gutter-l);

    @include respond-to(">=s") {
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
    }

    @include respond-to(">=l") {
      grid-template-columns: repeat(3, 1fr);
    }

    @include respond-to(">=xl") {
      grid-template-columns: repeat(4, 1fr);
    }

    @mixin custom-columns {
      justify-content: center;
      text-align: center;

      @include respond-to(">=s") {
        grid-template-columns: repeat(auto-fit, minmax(200px, 212px));
      }
      @include respond-to(">=xl") {
        grid-template-columns: repeat(5, 1fr);
      }
    }

    &.ecosystem-columns {
      @include custom-columns();
    }

    &.partners-columns {
      grid-template-columns: repeat(2, 1fr);
      @include custom-columns();
    }

    &.small-gap {
      gap: var(--f-gutter);
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
