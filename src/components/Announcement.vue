<template>
  <column class="announcement accent-green spacer-s" weight="left" number="2" number-s="1">
    <block>
      <h4>Announcement</h4>

      <h3>{{ announcement.title }}</h3>

      <p>{{ announcement.text }}</p>

      <btn :url="announcement.button_one_page_manual">{{ buttonOneTitle }}</btn>

    </block>

  </column>

</template>

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
          console.log(edge.node.id,this.announcementId);
          return edge.node.id == this.announcementId;
        })
        return x.node;
      },
      buttonOneTitle() {
        if(this.announcement.button_one_title) {
          return this.announcement.button_one_title;
        } else {
          return "Read Me";
        }
      }
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
        }
      }
    }
  }
</static-query>


<style lang="scss">

</style>
