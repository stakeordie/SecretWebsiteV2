<template>
  <section class="announcement-ver2">
    <div class="announcement-ver2__img" v-if="announcement.media">
      <ResponsiveImage :src="announcement.media" />
    </div>
    <div class="announcement-ver2__cont">
      <h4>Announcement</h4>
      <h3>{{ announcement.title }}</h3>
      <p class="announcement-ver2__cont__p">{{ announcement.text }}</p>
      <btn class="no-arrow" v-if="buttonOne.exists" :url="buttonOne.route">
        {{ buttonOne.title }}
      </btn>
      <btn v-if="buttonTwo.exists" :url="buttonTwo.route">
        {{ buttonTwo.title }}
      </btn>
      <div class="announcement-ver2__cont__social">
        <p class="announcement-ver2__cont__social-title">Follow us</p>
        <div class="announcement-ver2__cont__social-icons">
          <a
            v-for="(item, index) in socialMedia"
            :key="index"
            :href="item.url"
            target="blank"
            rel="noopener noreferrer"
          >
            <img :src="item.image" :alt="item.alt" loading="lazy" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: false
    }
  },
  data() {
    return {
      socialMedia: [
        {
          url: "https://twitter.com/SecretNetwork",
          image: "/img/icons/icon-social-twitter.svg",
          alt: "Twitter"
        },
        {
          url: "https://www.instagram.com/scrtnetwork/",
          image: "/img/icons/icon-social-instagram.svg",
          alt: "Instagram"
        },
        {
          url: "https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw",
          image: "/img/icons/icon-social-youtube.svg",
          alt: "Youtube"
        }
      ]
    };
  },
  computed: {
    announcement() {
      const announcements = [...this.$static.announcements.edges];
      return announcements.find(({ node }) => node.id == this.id)?.node;
    },
    buttonOne() {
      const {
        button_one_page,
        button_one_page_manual,
        button_one_title
      } = this.announcement;

      return {
        exists: Boolean(button_one_page?.route || button_one_page_manual),
        title: button_one_title || "Read Me",
        route: button_one_page?.route || button_one_page_manual
      };
    },
    buttonTwo() {
      const {
        button_two_page,
        button_two_page_manual,
        button_two_title
      } = this.announcement;

      return {
        exists: Boolean(button_two_page?.route || button_two_page_manual),
        title: button_two_title || "Read Me",
        route: button_two_page?.route || button_two_page_manual
      };
    }
  }
};
</script>

<static-query>
  query{
    announcements: allStrapiAnnouncement {
      edges{
        node{
          id
          name
          title
          text
          button_one_title
          button_one_page {
            route
          }
          button_one_page_manual
          button_two_title
          button_two_page {
            route
          }
          button_two_page_manual
          media {
            url
            ext
            name
            formats {
              large {
                url
              }
              small {
                url
              }
              medium {
                url
              }
            }
          }
        }
      }
    }
  }
</static-query>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/_respond-to.scss";

.announcement-ver2 {
  padding: 114px var(--f-gutter) var(--f-gutter) var(--f-gutter);
  display: grid;
  gap: 24px;

  @include respond-to(">=l") {
    grid-template-columns: repeat(2, 1fr);
    padding: 114px 0 32px;
    gap: 68px;
    align-items: center;
  }

  &__img {
    min-width: 100%;
    padding: var(--f-gutter);
    object-fit: cover;

    img {
      object-fit: cover;
      height: 100%;
      max-height: 500px;
      margin-right: 0;

      @include respond-to(">=l") {
        max-height: none;
      }
    }
  }
  &__cont {
    align-self: center;
    padding: var(--f-gutter);

    & h3 {
      color: var(--color-analog-primary-white);
      font-size: 54px;
      margin-bottom: 10px;
      line-height: 60px;
    }

    & h4 {
      color: var(--color-analog-tertiary-yellow);
      font-size: 18px;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 0;
    }
    &__p {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
      margin-bottom: 26px;
    }

    & .btn {
      margin-bottom: 26px !important;

      @include respond-to(">=m") {
        max-width: 285px;
      }
    }

    &__social {
      text-align: center;

      @include respond-to(">=m") {
        text-align: left;
      }

      &-title {
        margin-bottom: 10px;
      }

      &-icons {
        display: inline-grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;

        & a {
          & img {
            fill: var(--color-neutral-dark-mode-05);
            opacity: 0.75;
          }
        }
      }
    }
  }
}
</style>
