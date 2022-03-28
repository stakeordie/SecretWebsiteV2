<template>
  <section class="service-status">
    <div class="service-status__tabs">
      <button
        class="service-status__tabs__tab"
        :class="[indexTables == 0 ? 'focused' : '']"
        @click.prevent="setArrayIndex(0)"
      >
        CEXes
      </button>
      <button
        class="service-status__tabs__tab"
        :class="[indexTables == 1 ? 'focused' : '']"
        @click.prevent="setArrayIndex(1)"
      >
        DEXes
      </button>
      <button
        class="service-status__tabs__tab"
        :class="[indexTables == 2 ? 'focused' : '']"
        @click.prevent="setArrayIndex(2)"
      >
        Wallets
      </button>
      <button
        class="service-status__tabs__tab"
        :class="[indexTables == 3 ? 'focused' : '']"
        @click.prevent="setArrayIndex(3)"
      >
        Bridges
      </button>
      <button
        class="service-status__tabs__tab"
        :class="[indexTables == 4 ? 'focused' : '']"
        @click.prevent="setArrayIndex(4)"
      >
        Websites
      </button>
      <button
        class="service-status__tabs__tab"
        :class="[indexTables == 5 ? 'focused' : '']"
        @click.prevent="setArrayIndex(5)"
      >
        Bots
      </button>
    </div>

    <div class="service-status__table">
      <ul class="service-status__table__columns">
        <li
          v-for="(item, index) in serviceTableItems.headers"
          :key="index"
          :class="`${index == 0 ? 'row-service' : 'row-status'}`"
        >
          {{ item }}
        </li>
      </ul>

      <ul
        class="service-status__table__row"
        v-for="(item, index) in serviceTableItems.items"
        :key="index"
      >
        <li class="service-status__table__row__item">
          <img class="item-img" :src="item.node.logo.url" alt="" />
          <div class="item-info">
            <h6>{{ item.node.service_name }}</h6>
            <a rel="noopener noreferrer" :href="item.node.url" class="item-link" target="blank">{{ item.node.url }}</a>
          </div>
        </li>
        <li
          class="service-status__table__row__status"
          :class="{
            active: getValueByKey(1, item) == 'active',
            inactive: getValueByKey(1, item) == 'inactive',
          }"
        >
          <h6 class="status-heading">{{ serviceTableItems.headers[1] }}</h6>
          {{ getValueByKey(1, item) }}
        </li>
        <li
          class="service-status__table__row__status"
          :class="{
            active: getValueByKey(2, item) == 'active',
            inactive: getValueByKey(2, item) == 'inactive',
          }"
        >
          <h6 class="status-heading">{{ serviceTableItems.headers[2] }}</h6>
          {{ compareIndexColumns ? getValueByKey(2, item) : "" }}
        </li>
        <li
          class="service-status__table__row__status"
          :class="{
            active: getValueByKey(3, item) == 'active',
            inactive: getValueByKey(3, item) == 'inactive',
            time_est: indexTables == 3,
          }"
        >
          <h6 class="status-heading">{{ serviceTableItems.headers[3] }}</h6>
          {{ compareIndexColumns ? getValueByKey(3, item) : "" }}
        </li>

        <li class="service-status__table__row__update">
          <h6 class="status-heading">{{ serviceTableItems.headers[4] }}</h6>
          {{ item.node.reported_on | formatDate }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      columns: [],
      indexTables: 0,
      response_headers: [
        {
          title: "servicesCexes",
          headers: [
            "EXCHANGE",
            "DEPOSIT",
            "WITHDRAWS",
            "TRADING",
            "REPORTED ON",
          ],
        },
        {
          title: "servicesDexes",
          headers: [
            "EXCHANGE",
            "DEPOSIT",
            "WITHDRAWS",
            "TRADING",
            "REPORTED ON",
          ],
        },
        {
          title: "serviceWallets",
          headers: ["WALLET", "TRANSACTIONS", " ", " ", "REPORTED ON"],
        },
        {
          title: "servicesBridges",
          headers: ["BRIDGE", "IN", "OUT", "TIME EST.", "REPORTED ON"],
        },
        {
          title: "serviceWebsites",
          headers: ["WEBSITE", "STATUS", " ", " ", "REPORTED ON"],
        },
        {
          title: "servicesBots",
          headers: ["BOTS", "STATUS", " ", " ", "REPORTED ON"],
        },
      ],
    };
  },
  methods: {
    setArrayIndex(index) {
      this.indexTables = index;
      //this.searchInactivesValues();
    },
    //return value by key because every query has different structure
    getValueByKey(itemNumber, item) {
      let value = "";
      switch (itemNumber) {
        case 1:
          if (this.indexTables == 0 || this.indexTables == 1) value = item.node["deposit_status"];
          else if (this.indexTables == 2) value = item.node["transaction_status"];
          else if (this.indexTables == 3) value = item.node["in_status"];
          else if (this.indexTables > 3) value = item.node["status"];
          break;
        case 2:
          if (this.indexTables == 0 || this.indexTables == 1) value = item.node["withdraws_status"];
          else value = item.node["out_status"];
          break;
        case 3:
          if (this.indexTables == 0 || this.indexTables == 1) value = item.node["trading_status"];
          else value = item.node["amount_time_estimated"] + " " + item.node["type_time_estimated"];
          break;
      }
      return value;
    },
    //to show warning message
    // searchInactivesValues() {
    //   var counterInactives = 0;
    //   this.serviceTableItems.items.forEach((el) => {
    //     Object.keys(el.node).map((key) => {
    //       if (el.node[key] == "inactive") {counterInactives++;}
    //     });
    //   });
    //   if (counterInactives > 0) this.$store.commit("showNetworkWarning");
    //   else this.$store.commit("hideNetworkWarning");
    // },
  },
  filters: {
    formatDate(value) {      
      if (!value || !new Date(value).toISOString() || new Date(value).getFullYear() == 0) return " ";            
      let time = value.match(/\d\d:\d\d/); 
      let fullDate = new Date(value);      
      var dd = fullDate.getDate();
      var mm = fullDate.getMonth() + 1; //January is 0!
      var yyyy = fullDate.getFullYear();
            
      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;
      var dateISO = dd + "/" + mm + "/" + yyyy;
      let finalDate = time + '  ' + dateISO;

      return finalDate;
    },
  },

  computed: {
    serviceTableItems() {
      var table = this.response_headers[this.indexTables].title;
      var headers = this.response_headers[this.indexTables].headers;
      var content = this.$static[table].edges.map((it) => it);

      this.columns.items = [];
      this.columns.items = content;
      this.columns.headers = headers;

      return this.columns;
    },
    compareIndexColumns() {
      return (
        this.indexTables != 2 && this.indexTables != 4 && this.indexTables != 5
      );
    },
  },
  mounted() {
    //this.searchInactivesValues();
  },
};
</script>

<static-query>
query {
  servicesCexes: allStrapiServicesCeXes {
    edges {
      node {
        id
        service_name
        url
        logo {
          url
        }
        deposit_status
        withdraws_status
        trading_status
        reported_on
      }
    }
  }
  servicesDexes: allStrapiServicesDeXes {
    edges {
      node {
        service_name
        url
        logo {
          url
        }
        deposit_status
        withdraws_status
        trading_status
        reported_on
      }
    }
  }
  serviceWallets: allStrapiServicesWallets {
    edges {
      node {
        service_name
        url
        logo {
          url
        }
        transaction_status
        reported_on
      }
    }
  }
  servicesBridges: allStrapiServicesBridges {
    edges {
      node {
        id
        service_name
        url
        logo {
          url
        }
        in_status
        out_status
        amount_time_estimated
        type_time_estimated
        reported_on
      }
    }
  }
  serviceWebsites: allStrapiServicesWebsites {
    edges {
      node {
        service_name
        url
        logo {
          url
        }
        status
        reported_on
      }
    }
  }
  servicesBots: allStrapiServicesBots {
    edges {
      node {
        id
        service_name
        status
        reported_on
        url
        logo {
          url
        }
      }
    }
  }
}
</static-query>


<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.service-status {
  &__tabs {
    margin-bottom: 16px;

    &__tab {
      cursor: pointer;
      background-color: transparent;
      color: var(--color-neutral-dark-mode-05);
      font-weight: 600;
      font-size: var(--f-h5-text-size);
      padding: 10px 16px;
      border-radius: 10px;
      margin: 0;

      &:hover {
        background: transparent;
      }

      &.focused {
        background: var(--color-neutral-dark-mode-03);
        color: var(--color-analog-primary-white);
      }
    }
  }

  &__table {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0;
    border-radius: 10px;
    overflow: hidden;

    &__columns {
      display: grid;
      grid-template-columns: 2fr repeat(4, 1fr);
      grid-gap: 4px;
      background: var(--color-neutral-dark-mode-03);
      margin: 0;
      padding: 0;

      @include respond-to("<=s") {
        grid-template-columns: 1fr;
      }

      li {
        color: var(--color-neutral-dark-mode-05);
        text-transform: uppercase;
        font-size: var(--f-h6-text-size);
        font-weight: 600;
        padding: var(--f-gutter) var(--f-gutter-l);
        margin-bottom: 0;
      }

      .row-service {
        @include respond-to("<=s") {
        }
      }

      .row-status {
        @include respond-to("<=s") {
          display: none;
        }
      }
    }
    &__row {
      display: grid;
      grid-template-columns: 2fr repeat(4, 1fr);
      grid-gap: 4px;
      background: var(--color-neutral-dark-mode-04);
      margin: 0;
      padding: 0;
      border-top: 1px solid var(--color-analog-secondary-gray);

      @include respond-to("<=s") {
        grid-template-columns: 1fr;
      }

      li {
        padding: var(--f-gutter) var(--f-gutter-l);
        margin-bottom: 0;
        vertical-align: top;
      }

      &__item {
        display: grid;
        grid-template-columns: 42px 1fr;
        gap: 16px;

        .item-img {
          object-fit: contain;
          width: 42px;
          height: 42px;
        }

        h6 {
          font-size: var(--f-h6-text-size);
          font-weight: 600;
          margin-bottom: 0;
        }

        a {
          font-size: 12px;
          font-weight: 400;
          font-family: var(--f-default-text-font);
          line-height: 0;
          color: var(--color-analog-tertiary-blue);
        }
      }
      &__status {
        text-transform: uppercase;
        font-size: var(--f-h6-text-size);
        font-weight: 700;
        &.active {
          color: var(--color-analog-secondary-green);
        }
        &.inactive {
          color: var(--color-analog-secondary-orange);
        }

        &.time_est {
          text-transform: lowercase;
          font-weight: 400;
          font-family: var(--blog-text-font-family);
        }

        align-self: center;

        @include respond-to("<=s") {
          align-self: auto;
        }

        @include respond-to("<=s") {
          transform: translateX(58px);
        }
      }

      &__update {
        font-size: var(--f-default-text-size);
        font-weight: 200;
        color: var(--color-neutral-dark-mode-05);
        align-self: center;

        @include respond-to("<=s") {
          transform: translateX(58px);
        }
      }

      .status-heading {
        font-size: 12px;
        font-weight: 100;
        text-transform: none;
        color: var(--color-neutral-dark-mode-05);
        margin: 0;

        @include respond-to(">=m") {
          display: none;
        }
      }
    }
  }
}
</style>