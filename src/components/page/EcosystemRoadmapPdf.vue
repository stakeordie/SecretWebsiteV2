<template>
  <div class="scrt-pdf-viewer">
    <div class="scrt-pdf-viewer__intro">
      <div class="scrt-pdf-viewer__title">
        <p class="scrt-pdf-viewer__intro__date">{{ updatedDate }}</p>
        <h1>Ecosystem Roadmap</h1>
      </div>
      <div class="scrt-pdf-viewer__intro__message">
        <p>
          The Secret Network ecosystem roadmap is a community effort, stewarded
          by the Secret Foundation, to showcase all the projects currently in
          development.
        </p>
      </div>
      <ClientOnly v-if="isPdf">
        <pdf class="scrt-pdf-viewer__intro__file" :src="roadmap.url" />
      </ClientOnly>
      <img
        v-else
        :src="roadmap.url"
        class="scrt-pdf-viewer__intro__image"
        alt="Roadmap image"
        loading="lazy"
      />
      <div class="scrt-pdf-viewer__intro__download">
        <btn class="no-arrow" :url="pdfUrl">DOWNLOAD PDF</btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    pdf: () => import("vue-pdf-cdn").then((pdf) => pdf),
  },
  data() {
    return {
      pdfUrl:
        "https://ik.imagekit.io/secretnetwork/images/Secret_Ecosystem_Roadmap_Dec_2022_4639cc3ce9_wQaJuCkEr.pdf?updated_at=2022-12-15T18:10:48.096Z",
    };
  },
  computed: {
    roadmap() {
      return this.$static.strapiEcosystemRoadmap.edges[0].node.ecosystemRoadmap;
    },
    isPdf() {
      const splitted = String(this.roadmap.url).split(".");
      const fileType = splitted[splitted.length - 1];
      return fileType.includes("pdf");
    },
    updatedDate() {
      const date = new Date(this.roadmap.updated_at);
      const year = date.getFullYear();
      const month = date.toLocaleString("en-US", { month: "long" });
      return `Last Updated ${month} ${year}`;
    },
  },
};
</script>

<static-query>
query {
  strapiEcosystemRoadmap: allStrapiEcosystemRoadmap {
    edges {
      node {
        ecosystemRoadmap {
          url
          updated_at: updatedAt
        }
      }
    }
  } 
}
</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.scrt-pdf-viewer {
  &__title {
    padding-top: 26px;

    h1 {
      font-family: var(--f-default-headers-font);
      font-size: 54px;
      font-weight: 700;
      line-height: 60px;
    }
  }
  &__intro {
    text-align: center;

    &__date {
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 0;
      font-family: var(--f-default-text-font);
      letter-spacing: 1px;
      margin-bottom: 0;
      color: var(--color-ver2-primary-turquoise);

      @include respond-to("<=s") {
        font-size: var(--f-h5-text-size);
      }
    }

    &__file,
    &__image {
      padding-bottom: 32px;
    }

    &__download {
      display: grid;
      justify-content: center;

      a {
        min-width: 300px !important;
        margin: 0 !important;
      }
    }

    &__message {
      padding-bottom: 58px;

      p {
        max-width: 710px;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: -0.15px;
        margin: auto;
      }
    }
  }
}
</style>
