<template>
  <aside
    class="sidebar"
    :class="{ 'sidebar--open': this.$store.state.sidebarOpen }"
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
              <g-link :to="item.path">{{ item.title }}</g-link>
              <ul
                class="section-sub-subtitle"
                v-if="checkAnchors(node.path, item.path)"
                v-for="{ node } in $static.docs.edges"
                :key="node.id"
              >
                <li v-for="heading in node.headings" :key="heading.value">
                  <a
                    :class="
                      'sub-topic ' + isItemActive(item.path + heading.anchor)
                    "
                    :href="item.path + heading.anchor"
                    >{{ heading.value }}</a
                  >
                </li>
              </ul>
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
import GitLink from "./GitLink.vue";

export default {
  components: {
    GitLink,
  },
  watch: {
    $route() {
      this.$store.commit("closeSidebar");
    },
  },
  methods: {
    checkAnchors(slug, item) {
      if (slug == item) {
        return true;
      }
    },
    stateFromSize: function () {
      if (
        window.getComputedStyle(document.body, ":before").content == '"small"'
      ) {
        this.$store.commit("closeSidebar");
      } else {
        this.$store.commit("openSidebar");
      }
    },
    sidebarScroll: function () {
      let mainNavLinks = document.querySelectorAll(
        ".topic.active + ul .sub-topic"
      );
      let fromTop = window.scrollY;

      mainNavLinks.forEach((link) => {
        let section = document.querySelector(link.hash);
        let allCurrent = document.querySelectorAll(".current"),
          i;

        if (section.offsetTop <= fromTop) {
          for (i = 0; i < allCurrent.length; ++i) {
            allCurrent[i].classList.remove("current");
          }
          link.classList.add("current");
        } else {
          link.classList.remove("current");
        }
      });
    },
    isItemActive(itemPath) {
      // console.log(this.$route)
      // const location = window.location
      // const pathName = location.pathname+location.hash
      console.log(
        `Current path= ${this.$route.fullPath} vs itemPath = ${itemPath}`
      );
      if (this.$route.fullPath == itemPath) {
        return "active";
      } else {
        return "";
      }
    },
  },
  beforeMount() {
    this.stateFromSize();
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
  padding: 30px 30px 30px;
  width: 300px;
  will-change: transform;
  transform: translateX(-300px);
  border-right: 1px solid transparent;
  overflow: auto;

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

.git {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>


