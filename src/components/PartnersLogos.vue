<template>
  <section class="partners-logos-container">
          <div  class="logo-container" v-for="element in filteredElements" :key="element.id">
            <a class="logo__link" :href="element.url" target="blank"
              rel="noopener noreferrer">
              <div class="logo__link__element">
                <img class="logo__link__element__img" :src="element.picture.url" alt="picture" />
                <div class="meta" :class="{ 'meta--with-categories': hasCategories }" >
                </div>
              </div>
              <div class="logo__link__element__cat" :class="{ 'meta--with-categories': hasCategories }">
                <div class="logo__link__element__cat__header">
                  <h4 class="logo__link__element__cat__title">{{ element.title }}</h4>
                </div>
              </div>
            </a> 
          </div> 
  </section>
</template>

<script>
export default {
  // data: function () {
  //   return {
  //     secretInvestors: [
  //      { image: "/img/investor-Alameda.png" },
  //       { image: "/img/investor-Arca.png" },
  //       { image: "/img/investor-Arkstream.png" },
  //       { image: "/img/investor-Arrington.png" },
  //       { image: "/img/investor-Bison.png" },
  //       { image: "/img/investor-Blacktower.png" },
  //       { image: "/img/investor-Coinfund.png" },
  //       { image: "/img/investor-Defiance.png" },
  //       { image: "/img/investor-Dragonly.png" },
  //       { image: "/img/investor-Fenbushi.png" },
  //       { image: "/img/investor-Figment.png" },
  //       { image: "/img/investor-GalaxyDigital.png" },
  //       { image: "/img/investor-Hartman.png" },
  //       { image: "/img/investor-Hashed.png" },
  //       { image: "/img/investor-HashkeyGroup.png" },
  //       { image: "/img/investor-Huobi.png" },
  //       { image: "/img/investor-Iconium.png" },
  //       { image: "/img/investor-Kucoin.png" },
  //       { image: "/img/investor-Magnus.png" },
  //       { image: "/img/investor-NGC.png" },
  //       { image: "/img/investor-Sanctor.png" },
  //       { image: "/img/investor-SCRTLabs.png" },
  //       { image: "/img/investor-Shima.png" },
  //       { image: "/img/investor-Skynet.png" },
  //       { image: "/img/investor-Skyvision.png" },
  //     ]
  //   }
  // }

  data() {
    return {
      search: "",
      searchInputValue: "",
      searchNoResults: false,

      currentPage: 0,

      checkedCategories: [],

      selectedTag: "All",
    };
  },

  props: {
    props: ["value"],
    title: { type: String, required: true },
    collection: { type: String, required: true },
    header: { type: String, required: false, default: "" },
    pageSize: { type: Number, required: false, default: 10 },
    isPaginated: { type: Boolean, required: false, default: false },
    hasCategories: { type: Boolean, default: true },
  },

  methods: {
    searchFilter() {
      const cardEl = document.querySelectorAll(".logo-container");
      let hiddenEls = [];
      this.resetCheck();
      this.search = this.searchInputValue.toLowerCase();

      cardEl.forEach((item) => {
        if (!item.innerText.toLowerCase().includes(this.search)) {
          item.classList.add("hidden");
          hiddenEls.push(".");
        }
        if (
          !this.search ||
          item.innerText.toLowerCase().includes(this.search)
        ) {
          item.classList.remove("hidden");
        }
      });
      if (cardEl.length !== hiddenEls.length) this.searchNoResults = false;
      if (cardEl.length === hiddenEls.length) this.searchNoResults = true;

      // console.log("total array", cardEl.length);
      // console.log("hiddens", hiddenEls.length);
      //////////////////////////////////////////////////////////////////
      // console.log('hiddens', cardEl.classList.contains(hidden))
    },
    searchFilterReset() {
      this.search = "";
      const cardEl = document.querySelectorAll(".logo-container");
      this.searchInputValue = "";
      cardEl.forEach((item) => {
        item.classList.remove("hidden");
      });
    },
    gridHeaderTitle(x) {
      let headers = this.$static.gridHeaders.edges;
      for (let i = 0; i < headers.length; i++) {
        let headerEdge = headers[i];
        let headerTitle = headerEdge.node.title;
        let headerSubtitle = headerEdge.node.subtitle;
        if (headerTitle == x) {
          // console.log(i);
          headerTitle = this.$static.gridHeaders.edges[i].node.title;
          headerSubtitle = this.$static.gridHeaders.edges[i].node.subtitle;
          return headerTitle;
        }
      }
    },
    gridHeaderSubtitle(x) {
      let headers = this.$static.gridHeaders.edges;
      for (let i = 0; i < headers.length; i++) {
        let headerEdge = headers[i];
        let headerTitle = headerEdge.node.title;
        let headerSubtitle = headerEdge.node.subtitle;
        if (headerTitle == x) {
          // console.log(i);
          headerTitle = this.$static.gridHeaders.edges[i].node.title;
          headerSubtitle = this.$static.gridHeaders.edges[i].node.subtitle;
          return headerSubtitle;
        }
      }
    },
    formatCategory(category) {
      if (!category) return "";
      return category.includes("_") ? category.replace("_", " ") : category;
    },
    setPagesFather(number) {
      this.currentPage = number;
    },
    resetCheck() {
      this.checkedCategories = [];
    },
    hashToFilter(hash, filter) {
      if (window.location.hash === "#get-scrt") {
        // console.log(window.location.hash);
        // console.log("hit");
        ///////////////////////////////////////
        window.scrollTo(0, 0);
        // HERE
        this.checkedCategories = ["wallet"];
      }

      if (window.location.hash === hash) {
        if (this.collection === "toolsAndWallets") {
          setTimeout(() => {
            window.location.href = "#toolswallets";
            this.checkedCategories = [filter];
          }, 500);
        }
      }
    },
    hash(hash, collection, link) {
      if (window.location.hash === hash) {
        // console.log(window.location.hash)
        if (this.collection === collection) {
          setTimeout(() => {
            window.location.href = link;
          }, 500);
        }
      }
    },

    evaluateTags(size) {
      if (!size) return;

      if (size < 5) {
        return "tag-card-" + size;
      } else {
        return "tag-card-5";
      }
    },
  },

  computed: {
    // WALTER WAS HERE
    filteredElements() {
      const sortedCollection = this.collections;
      for (const [i, element] of sortedCollection.entries()) {
        if (element.sort == null) {
          element.sort = 99999;
        }
      }
      // array.sort(function(a, b){
      // var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
      // if (nameA < nameB) //sort string ascending
      //   return -1;
      // if (nameA > nameB)
      //   return 1;
      // return 0; //default return value (no sorting)
      // });
      sortedCollection.sort(function (a, b) {
        let titleA = a.title.toLowerCase();
        let titleB = b.title.toLowerCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
      // sortedCollection.sort(function (a, b) {
      //   return a.sort - b.sort;
      // });
      if (!this.checkedCategories.length) {
        return sortedCollection;
      }
      const collection = sortedCollection.filter((post) =>
        post.types.some((tag) => this.checkedCategories.includes(tag.name))
      );
      return collection;
    },

    // OLD FUNCTION
    // filteredElements() {
    //   this.collections.sort(sortBySorting);
    //   if (!this.checkedCategories.length) {
    //     return this.collections;
    //   }
    //   const collection = this.collections.filter(post =>
    //     post.types.some(tag => this.checkedCategories.includes(tag.name))
    //   );
    //   console.log(collection);
    //   console.log('🌮');
    //   return collection;
    // },

    pagedArray() {
      const start = this.currentPage * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredElements.slice(start, end);
    },

    collections() {
      return this.$static[this.collection].edges.map((it) => it.node);
    },

    categories() {
      const data = this.$static[this.collection].edges.filter((element) => {
        return element.node.types.length > 0;
      });

      const categoryData = data.map((item) => {
        return {
          name: item.node.types[0]?.name,
        };
      });

      let uniqueCategories = [];

      categoryData.filter((cat) => {
        if (!uniqueCategories.find((cat_some) => cat_some.name == cat.name)) {
          uniqueCategories.push(cat);
        }
      });

      return uniqueCategories;
    },
  },

  mounted() {
    this.hashToFilter("#wallets", "wallet");
    this.hashToFilter("#tools", "tool");
    this.hash("#dapps", "dApps", "#dapps");
    this.hash("#exchanges", "exchanges", "#exchanges");
    this.hash("#contributors", "contributors", "#contributors");
  },
  updated() {},


 }
</script>

<static-query>

query{
  ecosystemPartners: allStrapiEcosystemPartner {
    edges{
      node{
        title: name
        picture: logo {
          url
        }
        url:link
        order
      }
    }
  }
}

</static-query>

<style lang="scss">

.partners-logos-container{

& .logo__link__element__cat{
    display: none;
  }
}

</style>