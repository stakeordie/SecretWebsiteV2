<template>
  <section>
    <div class="get-scrt__text-block">
      <h5>BUY SCRT</h5>
      <h3 class="h3-scrt-logo">
        <span>Where to get</span>
        <img
          src="/img/icons/getscrt-filled-icon.svg"
          alt="Secret logo"
          loading="lazy"
        />
        <span>SCRT</span>
      </h3>
      <p class="get-scrt__p">
        Here are the different ways to get SCRT, from beginner to pro. Note:
        what methods you can use depend on your jurisdiction (i.e. the country
        you live in).
      </p>
    </div>
    <get-scrt-buy-options-list
      :optionsList="sectionContent"
      :uniqueGroups="uniqueGroups"
    />
  </section>
</template>

<script>
import GetScrtBuyOptionsList from "@/components/page/GetScrt/GetScrtBuyOptionsList.vue";

export default {
  components: { GetScrtBuyOptionsList },
  data() {
    return {
      sectionContent: [],
      uniqueGroups: [],
    };
  },
  methods: {
    getSectionContent() {
      this.sectionContent = this.$static.buyScrtOptions.edges.filter(
        (option) => {
          option.node.resource = option.node.buy_scrt_option.sort(
            (a, b) => a.order - b.order,
          );

          const hasGroupValue = option.node.buy_scrt_option.some((opt) => {
            return opt.group !== null && opt.group.trim() !== "";
          });

          option.node.hasGroup = hasGroupValue;

          // Extract the unique 'group' values from 'buy_scrt_option' array
          option.node.buy_scrt_option.forEach((opt) => {
            if (opt.group !== null && opt.group.trim() !== "") {
              if (!this.uniqueGroups.includes(opt.group)) {
                this.uniqueGroups.push(opt.group);
              }
            }
          });

          return option;
        },
      );
    },
  },
  mounted() {
    this.getSectionContent();
  },
};
</script>

<static-query>
query {
  buyScrtOptions: allStrapiScrtBuyingOption(sortBy: "order", order: ASC) {
    edges {
      node {
        id
        subtitle
        title
        description
        buy_scrt_option {
          icon {
            url
            ext
            name
          }
          order
          title
          description
          cta_title
          cta_url
          group
        }
      }
    }
  }
}
</static-query>
