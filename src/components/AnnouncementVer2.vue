<template>
  <section
    class="announcement-ver2"
    :weight="media.is == true ? 'right' : 'left'"
  >
    <div class="announcement-ver2__img" v-show="media.is">
      <img :src="media.url" />
    </div>
    <div class="announcement-ver2__cont">
      <h4>Announcement</h4>
      <h3>{{ announcement.title }}</h3>
      <p class="announcement-ver2__cont__p">{{ announcement.text }}</p>

      <btn class="no-arrow" v-if="buttonOne.is" :url="buttonOne.route">{{
        buttonOne.title
      }}</btn>
      <btn v-if="buttonTwo.is" :url="buttonTwo.route">{{
        buttonTwo.title
      }}</btn>

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
    announcementId: {
      type: Number,
      required: false,
    },
  },
  computed: {
    announcement() {
      const x = this.$static.announcements.edges.find((edge) => {
        return edge.node.id == this.announcementId;
      });
      return x.node;
    },
    buttonOne() {
      const button = {};
      button.is = true;
      if (
        !this.announcement.button_one_page?.route &&
        !this.announcement.button_one_page_manual
      ) {
        button.is = false;
      } else {
        if (this.announcement.button_one_title) {
          button.title = this.announcement.button_one_title;
        } else {
          button.title = "Read Me";
        }
        if (!this.announcement.button_one_page?.route) {
          button.route = this.announcement.button_one_page_manual;
        } else {
          button.route = this.announcement.button_one_page.route;
        }
      }
      return button;
    },
    buttonTwo() {
      const button = {};
      button.is = true;
      if (
        !this.announcement.button_two_page?.route &&
        !this.announcement.button_two_page_manual
      ) {
        button.is = false;
      } else {
        if (this.announcement.button_two_title) {
          button.title = this.announcement.button_two_title;
        } else {
          button.title = "Read Me";
        }
        if (!this.announcement.button_two_page?.route) {
          button.route = this.announcement.button_two_page_manual;
        } else {
          button.route = this.announcement.button_two_page.route;
        }
      }
      return button;
    },
    media() {
      const media = {};
      if (!this.announcement.media?.url) {
        media.is = false;
        media.url = "";
      } else {
        media.is = true;
        media.url = this.announcement.media.url;
      }
      return media;
    },
  },
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
          }
        }
      }
    }
  }
</static-query>

<style lang="scss"></style>
