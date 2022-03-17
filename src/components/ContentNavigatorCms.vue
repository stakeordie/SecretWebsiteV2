<template>
  <column number="2" number-m="1" number-s="1" weight="right" class="content-navigator">
    <block class="content-navigation">
      <nav id="content-navigator-items" @click="toggleFaq" :class="{ 'content-navigator-items-is-open': isFaqOpen }">
      </nav>
    </block>
    <block class="content-body">

        <vue-markdown v-for="(element, index) in sectionContent" :key="index" :source="element.mainContent" :toc="true" :toc-anchor-link="false"></vue-markdown>

    </block>
  </column>
</template>


<script>
  export default {
    data: function () {
      return {
        showVideo: false,
        isFaqOpen: true
      };
    },
    props: {
      section: {
        type: String,
        required: true
      },
      accent: {
        type: String,
        required: false
      },
      content: {
        type: String,
        required: false
      }
    },
    methods: {
      toggleFaq() {
        this.isFaqOpen = !this.isFaqOpen;
      },
      getTitles() {
        let titles = [];
        let matches = document.querySelectorAll(
          ".content-body > .content > .box > div > h3, .content-body > .content > .box > div > h4"
        );
        titles = [...matches];
        // console.log(titles);
        for (let i = 0; i < titles.length; i++) {
          let newNavItem = document.createElement("a");
          let newNavItemContent = document.createTextNode(titles[i].innerText);
          newNavItem.setAttribute("href", `#${titles[i].id}`);
          newNavItem.setAttribute("class", `${titles[i].nodeName.toLowerCase()}`);
          newNavItem.appendChild(newNavItemContent);

          const parent = document.getElementById("content-navigator-items");
          const before = document.getElementById("content-navigator-items-empty");
          parent.insertBefore(newNavItem, before);
        }
      },
    },
    mounted() {
      this.getTitles(); 
    },
    computed: {
      sectionContent() {
        const content = this.$static.aboutSubpages.edges.map(
          (it) => it.node[this.section]
        );
        return content;
      },
    },
  };

</script>

<static-query>
query {
  aboutSubpages: allStrapiAboutSecretTokensBridges {
    edges {
      node {
         AboutSecretTokensBridges{
          heroColor
          heroImage {
            url
          }
          heroSubtitle
          heroTitle
          heroBody
          mainContent
        }
        aboutSecretFinance {
          heroColor
          heroImage {
            url
          }
          heroSubtitle
          heroTitle
          heroBody
          mainContent
        }
        secretNfts {
          heroColor
          heroImage {
            url
          }
          heroSubtitle
          heroTitle
          heroBody
          mainContent
        }
        faq {
          heroColor
          heroImage {
            url
          }
          heroSubtitle
          heroTitle
          heroBody
          mainContent
        }
        secretContracts {
          heroColor
          heroImage {
            url
          }
          heroSubtitle
          heroTitle
          heroBody
          mainContent
        }
      }
    }
  }
}
</static-query>

<style lang="scss">
  @import "../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";

  .content-navigator {
    padding-top: var(--f-gutter-xl);

    .content-navigation {
      nav {
        position: sticky;
        top: 150px;
        display: grid;
        gap: 10px;

        a {
          font-family: var(--f-default-headers-font);
          font-weight: 600;

          @include theme(dark dark-colored) {
            color: var(--color-analog-primary-white);

            &:hover {
              color: var(--color-analog-secondary-orange);
            }
          }

          &:hover {
            color: var(--color-analog-secondary-orange);
          }

          &.h3 {
            margin-bottom: var(--f-gutter-s);
            margin-top: var(--f-gutter-l);
            text-transform: uppercase;
            color: var(--color-neutral-dark-mode-05) !important;

            &:first-of-type {
              margin-top: 0;
            }
          }
        }

        .chevron {
          @include respond-to(">=l") {
            display: none;
          }

          @include respond-to("<=m") {
            position: absolute;
            width: 24px;
            height: 24px;
            right: var(--f-gutter);
            top: 18px;
          }
        }

        @include respond-to("<=m") {
          background: var(--theme-card-bg-default);
          padding: var(--f-gutter);
        }

        &.content-navigator-items-is-open {
          @include respond-to("<=m") {
            gap: 10px;

            li {
              display: block !important;
            }
          }
        }
      }
    }

    .content-body {
      .content {
        .box {
          h3 {
            margin-bottom: var(--f-gutter-l);
            padding-top: 6em;
            margin-top: -6em;
          }

          h4 {
            padding-top: 6em;
            margin-top: -6em;
            // &:first-of-type {
            //   color: var(--color-analog-secondary-yellow);
            // }
          }

          hr {
            width: 120px;
            height: 4px;
            background: var(--color-analog-secondary-yellow);
          }
        }
      }
    }
  }

</style>
