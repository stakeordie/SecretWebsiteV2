<template>
  <default-layout class="blog">
    <!-- swirl -->
    <column class="purple__swirl__top" mode="full">
      <block>
        <img
          class="get-scrt__align-img"
          src="/img/icons/swirl-purple-top.svg"
          alt="Purple swirl top graphic"
          loading="lazy"
        />
      </block>
    </column>
    <section class="blog-post">
      <section class="blog-post-excerpt">
        <p
          class="tag"
          :class="`accent-` + $page.post.primary_tag.name"
          tag
          v-if="$page.post.primary_tag"
        >
          {{ $page.post.primary_tag.name }}
        </p>

        <h1 class="title">{{ $page.post.title }}</h1>
        <p class="description">{{ $page.post.description }}</p>
        <g-image
          class="cover-image"
          onerror="this.onerror=null;this.src='../blog-cover.jpg';"
          picture
          :src="coverImage"
          alt="Cover post graphic"
          loading="lazy"
        />
        <blog-author class="info" :includeShareButtons="true">
          <div class="left">
            <g-image
              picture
              onerror="this.onerror=null;this.src='../scrt-logo.png';"
              :src="profileImage"
              alt="Author picture"
              loading="lazy"
            />
            <div class="author" info>
              <p>{{ $page.post.primary_author.name }}</p>
              <p>
                {{ $page.post.date }} &#8226; {{ $page.post.reading_time }} min
                read
              </p>
            </div>
          </div>
          <div class="share-icons">
            <ShareNetwork
              v-for="network in networks"
              :network="network.network"
              :key="network.network"
              :style="{ backgroundColor: network.color }"
              :url="url"
              :title="$page.post.title"
              :description="$page.post.description"
            >
              <i :class="network.icon"></i>
              <span>{{ network.name }}</span>
            </ShareNetwork>
          </div>
        </blog-author>
      </section>
      <div class="post-content" v-html="postContent"></div>
    </section>

    <!-- swirl -->
    <column class="purple__swirl__bottom" mode="full">
      <block>
        <img
          class="get-scrt__align-img"
          src="/img/icons/swirl-purple-bottom.svg"
          alt="Purple swirl bottom graphic"
          loading="lazy"
        />
      </block>
    </column>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import BlogAuthor from "@/components/blog/BlogAuthor";
import { canonicalTag, metaDataArray } from "@/utils";

const domain = "https://scrt.network";

export default {
  components: {
    DefaultLayout,
    BlogAuthor,
  },
  data() {
    return {
      url: domain + this.$route.fullPath,
      networks: [
        {
          network: "twitter",
          name: "Twitter",
          icon: "fab fah fa-lg fa-twitter",
          color: "#1da1f2",
        },
        {
          network: "linkedin",
          name: "LinkedIn",
          icon: "fab fah fa-lg fa-linkedin",
          color: "#007bb5",
        },
      ],
    };
  },
  metaInfo() {
    return {
      title: this.getMetaData.title,
      meta: metaDataArray(this.getMetaData),
      link: canonicalTag(this.getMetaData),
    };
  },
  computed: {
    profileImage: function () {
      return this.$page.post.primary_author.profile_image
        ? this.$page.post.primary_author.profile_image
        : "/img/icons/scrt-logo.png";
    },
    coverImage() {
      if (this.$page.post.feature_image) {
        const urlSplit = this.$page.post.feature_image.split(":");
        if (urlSplit[0] == "https" || urlSplit[0] == "http") {
          return this.$page.post.feature_image;
        }
        return "https://ghost.scrt.network/" + this.$page.post.feature_image;
      } else return "https://scrt.network/blog-cover.jpg";
    },
    postContent() {
      const transformedPost = this.$page.post.content.replace(
        /src="\//g,
        'src="https://ghost.scrt.network/'
      );
      return transformedPost;
    },
    getMetaData() {
      const title = this.$page.post.meta_title
        ? this.$page.post.meta_title
        : this.$page.post.title + " | Secret Network Blog";

      const description = this.$page.post.meta_description
        ? this.$page.post.meta_description
        : this.$page.post.description;

      return {
        domain,
        url: this.url,
        title,
        description,
        ogDescription: description,
        ogImage: this.coverImage,
        canonicalUrl: this.url,
        author: this.$page.post.primary_author.name,
      };
    },
  },
  methods: {
    getMetaInfoLength() {
      const metadataContainerEl = document.querySelectorAll(
        ".kg-bookmark-metadata"
      );
      setTimeout(() => {
        for (const [i, meta] of metadataContainerEl.entries()) {
          const metaLength = meta.innerText.length;
          if (metaLength >= 32) {
            meta.classList.add("row-mode");
          }
        }
      }, 500);
    },
  },
  mounted() {
    this.getMetaInfoLength();
  },
};
</script>

<page-query>
  query Post ($path: String!) {
  post: ghostPost (path: $path) {
  title
  path
  date: published_at (format: "D MMM YYYY")
  description: excerpt
  content: html
  feature_image
  meta_title  
  meta_description
  primary_tag {
  name
  }
  primary_author {
  name
  profile_image
  }
  }
  }
</page-query>

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
  "blockchain",
  "nodes",
  "collaboration",
  "privacy",
  "secret",
  "Cosmos",
  "solutions",
  "design",
  "Feature",
  "staking",
  "nfts",
  "governance",
  "Introduction",
  "null",
  "undefined",
  "announcement",
  "education",
  "developers",
  "dev",
  "ecosystem",
  "how-to",
  "explanations",
  "texk-updates",
  "Hackathon",
  "funding",
  "community",
  "dapp-launches",
  "nft-launches",
  "reports",
  "recap"
);

.blog-post {
  background: var(--theme-card-bg-default);
  padding: var(--f-gutter-xl);
  display: grid;
  justify-items: center;

  @include respond-to("<=m") {
    padding: var(--f-gutter);
  }

  img {
    height: auto;
  }

  .blog-post-excerpt {
    text-align: center;
    display: grid;
    align-items: center;
    gap: var(--f-gutter-l);
    margin-bottom: var(--f-gutter-xl);
    max-width: var(--blog-content-width);

    .tag {
      text-transform: uppercase;
      font-size: var(--f-default-text-size);
      font-weight: 700;
      font-family: hind;
      letter-spacing: 1px;

      padding-top: 10px;

      @each $name, $color in $accent-colors {
        &.accent-#{$name} {
          color: var(--accent-#{$name}-v2);
        }
      }
    }

    h1 {
      line-height: 60px;
      font-size: 54px;
      @include respond-to("<=m") {
        font-size: var(--f-h2-text-size);
        line-height: var(--f-h2-line-height);
      }
    }

    h1,
    p {
      max-width: auto;
      width: 100%;
      margin: 0;

      word-break: break-word;
    }

    p {
      margin: 0;
      color: var(--theme-card-text-color);

      &.description {
        font-family: var(--blog-text-font-family);
        font-size: var(--blog-text-font-size);
        line-height: var(--blog-text-font-line-height);
      }
    }
  }

  .blog-author {
    padding: var(--f-gutter);
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: var(--f-gutter);
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    grid-template-columns: repeat(2, 1fr);

    @include respond-to("<=s") {
      grid-template-columns: 1fr;
      grid-auto-flow: row;
    }

    img {
      width: 44px;
      height: 44px;
      border-radius: 100px;
    }

    .author-info {
      display: grid;
      gap: var(--f-gutter-xxs);
    }

    @include respond-to("<=s") {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--f-gutter-l);
    }

    .left {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: max-content;
      gap: var(--f-gutter-s);
      align-items: center;

      .author {
        text-align: left;
        display: grid;
        gap: var(--f-gutter-xxs);

        p {
          font-family: var(--f-default-text-font);
          line-height: var(--f-paragraph-line-height);
          color: white;
        }
      }
    }

    .share-icons {
      display: grid;
      gap: var(--f-gutter-s);
      grid-auto-flow: column;

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0;
        padding: var(--f-gutter-s) var(--f-gutter);
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 14px;
        color: var(--color-analog-primary-white);
        border-radius: var(--f-forms-button-radius);
        transition: 0.2s ease;

        &:hover {
          filter: contrast(1.5);
        }

        span {
          transform: translateY(2px);
        }
      }
    }
  }

  .post-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--f-gutter);
    max-width: var(--blog-content-width);

    * {
      word-break: break-word;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      max-width: var(--blog-content-width);
      width: 100%;
    }

    p,
    ol,
    ul,
    li {
      max-width: var(--blog-content-width);
      width: 100%;
      line-height: var(--blog-text-font-line-height);
      font-family: var(--blog-text-font-family);
      font-size: var(--blog-text-font-size);

      code {
        padding: 0 var(--f-gutter-xs);
      }
    }
    ul {
      li {
        list-style: disc;
      }
    }

    blockquote {
      max-width: var(--blog-content-width);
      line-height: 28px;
    }

    .kg-embed-card {
      margin-bottom: var(--f-gutter-l);
      max-width: var(--blog-content-width);
      width: 100%;

      iframe {
        width: 100%;
        height: 350px;
      }
    }

    .kg-image-card {
      // margin-top: var(--spacer-xs);
      margin-bottom: var(--f-gutter-l);
      display: grid;
      gap: var(--f-gutter);
    }

    .kg-bookmark-card {
      max-width: var(--blog-content-width);
      width: 100%;
      background: var(--theme-card-bg-variant);
      margin-bottom: var(--f-gutter-xxl);

      a {
        display: grid;
        grid-template-columns: 1fr 230px;
        gap: var(--f-gutter);
        padding: var(--f-gutter);

        @include respond-to("<=s") {
          grid-template-columns: 1fr;
          gap: var(--f-gutter);
        }

        .kg-bookmark-content {
          line-height: 1.5;
          display: grid;
          gap: var(--f-gutter-s);

          @include respond-to("<=s") {
            order: 2;
          }

          .kg-bookmark-title {
            font-size: var(--f-h6-text-size);
          }

          .kg-bookmark-description {
            color: var(--theme-fg);
          }

          .kg-bookmark-metadata {
            display: grid;
            grid-auto-flow: column;
            gap: var(--f-gutter-s);
            grid-auto-columns: max-content;
            color: var(--theme-fg);

            &.row-mode {
              @include respond-to("<=m") {
                grid-auto-flow: row;
                grid-auto-columns: auto;
                // row-gap: var(--f-gutter-xxs);
              }

              @include respond-to(">=l") {
                grid-template-columns: 24px 1fr;
                grid-auto-flow: row;

                // row-gap: var(--f-gutter-xxs);
                .kg-bookmark-publisher {
                  grid-column: 2;
                }
              }
            }

            .kg-bookmark-icon {
              width: 24px;
              height: 24px;
              border-radius: 100px;
            }
          }

          .kg-bookmark-author {
            &:after {
              content: "·";
              padding-left: var(--f-gutter-s);
            }
          }
        }

        .kg-bookmark-thumbnail {
          @include respond-to("<=s") {
            order: 1;
          }
        }
      }
    }
  }
}
</style>
