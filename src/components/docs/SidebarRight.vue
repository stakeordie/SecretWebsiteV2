<template>
    <nav v-if="items" class="sidebar-right">
      <h3 class="title">On this page</h3>
        <ul class="section-sub-subtitle" >
          <li v-for="heading in items" :key="heading.value">
            <a
              :class="'sub-topic ' + isItemActive(basePath+heading.anchor)"
              :href="basePath+ heading.anchor"
              >{{ heading.value }}</a
            >
          </li>
        </ul>
    </nav>
</template>

<static-query>
query Menu {
  menu: allMenu(order:ASC) {
    edges {
      node {
        section
        topics {
          title
          path
        }
      }
    }
  }
  docs: allDoc {
    edges {
      node {
        path
        headings {
          value
          anchor
        }
      }
    }
  }
}
</static-query>

<script>
export default {
    watch: {
        $route() {
            this.$store.commit("closeSidebar");
        },
    },
    methods:{
        isItemActive(itemPath) {
            if (this.$route.fullPath == itemPath) {
                return "active";
            } else {
                return "";
            }
        },
    },
    computed:{
        items:function(){
            return this.$static.docs.edges.find((ele)=> (ele.node.path == this.$route.path))?.node?.headings;
        },
        basePath:function(){
          return this.$route.path
        }
    }
}
</script>

<style scoped>
.title{
  text-transform: uppercase;
    font-size: 12px;
    margin-bottom: 20px;
    opacity: 0.3; 
    font-weight: 700; 
}
.active{
      color: #10c186;
    font-weight: 600;
}
.sidebar-right{
    transition: background 0.15s ease-in-out, transform 0.15s ease-in-out, border-color 0.15s linear;
    padding: 10px;
    width: 300px;
    will-change: transform;
    border-right: 1px solid transparent;
    overflow: auto;
    position: sticky;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    top: 250px;
    right: 100px;
}
li{
  padding: 0;
  margin: 0;
}
</style>