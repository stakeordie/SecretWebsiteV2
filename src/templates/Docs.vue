<template>
  <DocsLayout :subtitles="subtitles" :links="links">
      <VueRemarkContent class="post mb"/>
  </DocsLayout>
</template>

<page-query>
query ($id: ID!) {
  doc: docPage (id: $id) {
    title
    headings (depth: h1) {
      value
    }
    subtitles: headings {
      depth
      value
      anchor
    }
  }
}
</page-query>

<script>
const links =[
  {
    title:'prologue',
    items:[
      {
        title:'Intro',
        link:'/docs/'
      },
      {
        title:'Click here',
        link:'/docs/something-else'
      },
    ]
  },
]
export default {
  computed: {
    links () {
      return links
    },
    subtitles() {
      // Remove h1, h4, h5, h6 titles
      let subtitles = this.$page.doc.subtitles.filter(function(value, index, arr){
        return [2,3].includes(value.depth)
      })
      return subtitles
    }
  },
  metaInfo() {
      return {
        title: this.$page.doc.title,
        meta: [
          {
            key: 'og:title',
            property: 'og:title',
            content: 'Secret Network - ' + this.$page.doc.title
          }
        ]
      }
    }
}
</script>