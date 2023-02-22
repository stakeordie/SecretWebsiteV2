<template>
  <section class="announcement-ver2">
    <div class="announcement-ver2__img" v-if="announcement.media">
      <ResponsiveImage :src="announcement.media" />
    </div>
    <div class="announcement-ver2__cont">
      <h4>Announcement</h4>
      <h3>{{ announcement.title }}</h3>
      <p class="announcement-ver2__cont__p">{{ announcement.text }}</p>
      <btn class="no-arrow" v-if="buttonOne.is" :url="buttonOne.route">
        {{ buttonOne.title }}
      </btn>
      <btn v-if="buttonTwo.is" :url="buttonTwo.route">
        {{ buttonTwo.title }}
      </btn>
      <div class="announcement-ver2__cont__social">
        <p class="announcement-ver2__cont__social-title">Follow us</p>
        <div class="announcement-ver2__cont__social-icons">
          <a
            href="https://twitter.com/SecretNetwork"
            target="blank"
            rel="noopener noreferrer"
          >
            <img
              src="@/assets/icon-social-twitter.svg"
              alt="Join the Conversation"
              loading="lazy"
            />
          </a>
          <a
            href="https://www.instagram.com/scrtnetwork/"
            target="blank"
            rel="noopener noreferrer"
          >
            <img
              src="@/assets/icon-social-instagram.svg"
              alt="Join the Conversation"
              loading="lazy"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCZPqj7h7mzjwuSfw_UWxQPw"
            target="blank"
            rel="noopener noreferrer"
          >
            <img
              src="@/assets/icon-social-youtube.svg"
              alt="Join the Conversation"
              loading="lazy"
            />
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
        is: Boolean(button_one_page?.route || button_one_page_manual),
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
        is: Boolean(button_two_page?.route || button_two_page_manual),
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
