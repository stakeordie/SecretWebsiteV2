<template>
  <column class="announcement accent-green spacer-s" weight="left" number="2" number-s="1">
    <block>
      <h4>Announcement</h4>

      <h3>{{ announcement.title }}</h3>

      <p>{{ announcement.text }}</p>

      <btn v-if="buttonOne.is" :url="buttonOne.route">{{ buttonOne.title }}</btn>
      <btn v-if="buttonTwo.is" :url="buttonTwo.route">{{ buttonTwo.title }}</btn>
    </block>

  </column>

</template>

// <btn url="/blog/secretswap-is-live-on-mainnet">Read more</btn> <btn url="https://bridge.scrt.network/swap#Swap">Try It Out!</btn>

// </block>

// <block>

// ![](./img/announcement/secretswap.jpg)

// </block>

// </column>

<script>
  export default {
    props: {
      announcementId: {
        type: Number,
        required: false
      },
    },
    computed: {
      announcement() {
        const x = this.$static.announcements.edges.find((edge) => {
          return edge.node.id == this.announcementId;
        })
        return x.node;
      },
      buttonOne() {
        const button = {}
        button.is = true;
        if(!this.announcement.button_one_page?.route && !this.announcement.button_one_page_manual) {
          button.is = false;
        } else {
          if(this.announcement.button_one_title) {
            button.title = this.announcement.button_one_title;
          } else {
            button.title = "Read Me";
          }
          if(!this.announcement.button_one_page?.route) {
            button.route = this.announcement.button_one_page_manual
          } else {
            button.route = this.announcement.button_one_page.route
          }
        }
        return button;
      },
      buttonTwo() {
        const button = {}
        button.is = true;
        //console.log(this.announcement.button_two_page_manual);
        if(!this.announcement.button_two_page?.route && !this.announcement.button_two_page_manual) {
          button.is = false;
        } else {
          if(this.announcement.button_two_title) {
            button.title = this.announcement.button_two_title;
          } else {
            button.title = "Read Me";
          }
          if(!this.announcement.button_two_page?.route) {
            button.route = this.announcement.button_two_page_manual
          } else {
            button.route = this.announcement.button_two_page.route
          }
        }
        return button;
      },
    }
  }

</script>

<static-query>
  query{
    announcements: allStrapiAnnouncements {
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
        }
      }
    }
  }
</static-query>


<style lang="scss">

</style>
