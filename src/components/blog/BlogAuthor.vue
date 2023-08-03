<template>
  <div class="blog-author" :class="showButtons">
    <div class="author-info">
      <g-image
        class="author-info__img"
        picture
        onerror="this.onerror=null;this.src='../scrt-logo.png';"
        :src="profileImage"
        alt="Author picture"
        loading="lazy"
      />
      <div class="author-info__content">
        <span>{{ post.primary_author.name }}</span>
        <span>{{ post.date }} &#8226; {{ post.reading_time }} min read</span>
      </div>
    </div>
    <div class="share-icons" v-if="includeShareButtons">
      <ShareNetwork
        v-for="network in networks"
        :network="network.network"
        :key="network.network"
        :url="url"
        :title="post.title"
        :description="post.description"
        :style="{ backgroundColor: network.color }"
      >
        <i :class="network.icon"></i>
        <span>{{ network.name }}</span>
      </ShareNetwork>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    includeShareButtons: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {
      url: "https://scrt.network" + this.$route.fullPath,
      networks: [
        {
          network: "twitter",
          name: "Twitter",
          icon: "fab fah fa-lg fa-twitter",
          color: "#1da1f2"
        },
        {
          network: "linkedin",
          name: "LinkedIn",
          icon: "fab fah fa-lg fa-linkedin",
          color: "#007bb5"
        }
      ]
    };
  },
  computed: {
    profileImage() {
      return this.post.primary_author.profile_image
        ? this.post.primary_author.profile_image
        : "/img/icons/scrt-logo.png";
    },
    showButtons() {
      return this.includeShareButtons ? "show-buttons" : "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";

.blog-author {
  display: grid;
  align-items: center;
  gap: var(--f-gutter);
  width: 100%;

  .author-info {
    display: flex;
    gap: 12px;
    align-items: center;

    &__img {
      width: 40px;
      height: 40px;
      border-radius: 999px;
    }

    &__content {
      display: grid;

      span {
        text-align: left;
        font-family: var(--f-default-text-font);
        line-height: 20px;
        margin: 0;
        font-weight: 500;
        font-size: 14px;
        color: var(--color-neutral-dark-mode-05);
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

  &.show-buttons {
    padding: 16px 0;

    @include respond-to(">=s") {
      grid-template-columns: repeat(2, 1fr);
    }

    .author-info__content {
      span {
        color: #ffffff;
        font-size: 16px;
      }
    }
  }
}
</style>
