<template>
  <announcement :announcementId="$static.homeAnnouncements.edges[0].node[location].id" />
</template>

<script>
export default {
  props: {
    location: {
        type: String,
        required: true
      },
  }
}
</script>

<static-query>
  query{
    homeAnnouncements: allStrapiHomeAnnouncements {
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

<style>

</style>