<template>
  <Announcement :id="$static.homeAnnouncements.edges[0].node[location].id" />
</template>

<script>
import Announcement from "@/components/page/Home/Announcement.vue";

export default {
  components: { Announcement },
  props: {
    location: {
      type: String,
      required: true
    }
  }
};
</script>

<static-query>
  query{
    homeAnnouncements: allStrapiHomeAnnouncement {
      edges{
        node{
            top {
              id
            }
            bottom {
              id
            }
        }
      }
    }
  }
</static-query>
