<template>
  <default-layout class="content" :class="pageClass">
    <VueRemarkContent />
  </default-layout>
</template>

<script>
import { addScrollSmooth } from "../utils";

export default {
  metaInfo() {
    return {
      title: this.getMetaData("title"),
      meta: [
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:image",
          content: this.getMetaData("ogImage"),
        },
        {
          key: "og:title",
          property: "og:title",
          content: this.getMetaData("title"),
        },
        {
          key: "og:description",
          property: "og:description",
          content: this.getMetaData("ogDescription"),
        },
        {
          key: "og:image",
          property: "og:image",
          content: this.getMetaData("ogImage"),
        },
        {
          key: "description",
          property: "description",
          content: this.getMetaData("description"),
        },
        {
          name: "description",
          content: this.getMetaData("description"),
        },
      ],
    };
  },
  methods: {
    getMetaData(strapiData) {
      let arr = [];
      let pages = this.$page.strapiPages.edges;
      let filtered;
      let result;

      pages.forEach((el) => {
        arr.push({
          route: el.node.route,
          title: el.node.og_title,
          description: el.node.meta_description
            ? el.node.meta_description
            : "Blockchain-based and open-source protocol that lets anyone perform computations on encrypted data, bringing privacy to smart contracts and public blockchains.",
          ogDescription: el.node.og_description
            ? el.node.og_description
            : "Blockchain-based and open-source protocol that lets anyone perform computations on encrypted data, bringing privacy to smart contracts and public blockchains.",
          ogImage: el.node.og_image
            ? el.node.og_image.url
            : "https://scrt.network/cover.png",
        });
      });

      // Discard Homepage from slice
      if (this.$page.content.path !== "/") {
        filtered = arr.filter((x) => {
          return x.route.substr(-1) === "/"
            ? x.route === this.$page.content.path
            : x.route === this.$page.content.path.slice(0, -1);
        });
      } else {
        filtered = arr.filter((x) => x.route === this.$page.content.path);
      }

      if (filtered.length >= 1) {
        result = filtered[0][strapiData];
      } else {
        result = "Secret Network";
      }

      return result;
    },
  },
  computed: {
    pageClass() {
      const dir = this.$page.content.fileInfo.directory;
      const name = this.$page.content.fileInfo.name;
      return dir ? `${dir}-${name}` : name;
    },
  },
  watch: {
    $route: {
      handler(to, from) {
        addScrollSmooth(to);
      },
      immediate: true,
    },
  },
};
</script>

<page-query>
  query($id: ID!) {
    content(id: $id) {
      title
      path
      fileInfo {
        name
        directory
      }
    }
  strapiPages: allStrapiPage {
    edges {
      node {
        name
        title
        route
        og_description
        og_image {
          url
        }
        og_title
        meta_description
      }
    }
  }
}
</page-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.content {
  --f-h5-text-size: 18px;
  --f-h5-text-line-height: 25px;

  --f-h3-text-size: 28px;
  --f-h3-text-line-height: 36.5px;

  --f-h4-text-size: 22px;
  --f-h4-text-line-height: 30px;

  --f-paragraph-line-height: 24px;

  .accent-yellow {
    @include respond-to(">=l") {
      padding-bottom: 24px;
    }
  }
  .bottom-second {
    .box {
      @include respond-to(">=l") {
        padding-right: 56px;
      }
    }
  }
  .bottom-third {
    .box {
      @include respond-to(">=l") {
        padding-left: 56px;
      }
    }
  }
  .bottom-fourth {
    .box {
      @include respond-to(">=l") {
        padding-right: 56px;
      }
    }
  }
  .bottom-fifth {
    .box {
      @include respond-to(">=l") {
        padding-left: 56px;
      }
    }
  }
}
</style>
