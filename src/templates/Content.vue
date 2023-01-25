<template>
  <default-layout class="content" :class="pageClass">
    <VueRemarkContent />
  </default-layout>
</template>

<script>
import {
  metaDataArray,
  pageMetaData,
  addScrollSmooth,
  canonicalTag,
} from "../utils";

export default {
  metaInfo() {
    return {
      title: this.getMetaData.title,
      meta: metaDataArray(this.getMetaData),
      link: canonicalTag(this.getMetaData),
    };
  },
  computed: {
    getMetaData() {
      return pageMetaData(this.$page, this.$page.content.path);
    },
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
