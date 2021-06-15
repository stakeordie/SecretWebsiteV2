<template>
  <aside
    class="sidebar"
  >
    <nav>
      <ul>
        <li
          class="section"
          v-for="{ node } in $static.menu.edges"
          :key="node.id"
        >
          <h3 class="section-title">{{ node.section }}</h3>
          <ul class="section-subtitle">
            <li v-for="item in node.topics" :key="item.title">
              <a :class="isItemActive(item.path)" :href="item.path">{{ item.title }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
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
}
</static-query>

<script>
import GitLink from "./GitLink.vue";

export default {
  components: {
    GitLink,
  },
  methods:{
    isItemActive(itemPath) {
        if (this.$route.path == itemPath) {
            return "active";
        } else {
            return "";
        }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/docs/config/_maps.scss";
@import "../../sass/docs/config/_colors.scss";
@import "../../sass/docs/config/_mixins.scss";
@import "../../sass/docs/config/_functions.scss";

.sidebar {
  transition: background 0.15s ease-in-out, transform 0.15s ease-in-out,
  border-color 0.15s linear;
  padding: 40px 20px;
  // will-change: transform;
  border-right: 1px solid transparent;
  overflow: auto;
  position: sticky;
  height: fit-content;
  top:130px;
  @include respond-above(sm) {
    transform: translateX(0);
  }

  &--open {
    transform: translateX(0);
  }

  .bright & {
    background: $sidebarBright;
    border-color: shade($sidebarBright, 10%);
  }

  .dark & {
    background: $sidebarDark;
    border-color: shade($sidebarDark, 40%);
  }
}

nav {
  position: relative;
  min-height: 100%;
  border: 1px solid transparent;
  padding-bottom: 40px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;

  a {
    text-decoration: none;
    color: inherit;
    padding: 5px 0;
    display: block;

    &.active {
      color: $brandPrimary;
      font-weight: 600;
    }
  }
}

.section {
  margin-bottom: 30px;
  list-style: none;
}

.section-title {
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 20px;
  opacity: 0.3;
  letter-spacing: 0.15em;
  font-weight: 700;
}

.topic {
  font-weight: 700;
}

.sub-topic {
  font-size: 0.875rem;
  position: relative;
  opacity: 0.8;

  &::after {
    content: "";
    transition: opacity 0.15s ease-in-out;
    width: 6px;
    height: 6px;
    background: $brandPrimary;
    border-radius: 100%;
    display: block;
    opacity: 0;
    position: absolute;
    top: 13px;
    left: -15px;
  }

  &.current {
    &::after {
      opacity: 1;
    }
  }
}
.section-subtitle {
  padding-left: 1.5rem;
}
.section-sub-subtitle {
  padding-left: 1rem;
}
  li{
    margin: 0;
    padding: 0;
  }

.git {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>


