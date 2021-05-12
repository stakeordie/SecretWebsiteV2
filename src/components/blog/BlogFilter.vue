<template>
  <div class="blog-filter">
    <h4>Filters</h4>
    <ul>
      <li v-for="filter in theFilters"
          :key="filter.slug"
          @click="applyFilter">
        {{ filter.label }}

        <div class="checkbox">
          <input type="checkbox" :id="filter.slug" :value="filter.slug">
          <label :for="filter.slug"></label>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
const filters = [
  { slug: 'wallet', label: 'Wallet' },
  { slug: 'voting', label: 'Voting' },
  { slug: 'tutorial', label: 'Tutorial' },
  { slug: 'testnet', label: 'Testnet' },
  { slug: 'staking', label: 'Staking' },
  { slug: 'solutions', label: 'Solutions' },
  { slug: 'security', label: 'Security' },
  { slug: 'secret-games', label: 'Secret' },
  { slug: 'secret-apps', label: 'Secret' },
  { slug: 'privacy', label: 'Privacy' },
  { slug: 'nodes', label: 'Nodes' },
  { slug: 'nft', label: 'Nft' },
  { slug: 'introduction', label: 'Introduction' },
  { slug: 'governance', label: 'Governance' },
  { slug: 'ethereum', label: 'Ethereum' },
  { slug: 'ecosystem', label: 'Ecosystem' },
  { slug: 'dev', label: 'Dev' },
  { slug: 'design', label: 'Design' },
  { slug: 'defi', label: 'Defi' },
  { slug: 'cosmos', label: 'Cosmos' },
  { slug: 'community', label: 'Community' },
  { slug: 'collaboration', label: 'Collaboration' },
  { slug: 'blockchain', label: 'Blockchain' },
  { slug: 'announcement', label: 'Announcement' }
];

export default {
  data() {
    return {
      filters,

      appliedFilters: []
    }
  },

  methods: {
    applyFilter(event) {
      const { value, checked } = event.target;

      if (checked) {
        this.appliedFilters.push(value);
      } else {
        const index = this.appliedFilters.findIndex(it => it === value);
        if (index != -1) {
          this.appliedFilters.splice(index, 1);
        }
      }

      this.$emit('blog-filter:filter-applied', this.appliedFilters);
    }
  },

  computed: {
    theFilters() {
      return this.filters.sort((f1, f2) => f1.label === f2.label ? 0 : f1.label > f2.label ? 1 : -1)
    }
  }
}
</script>


<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";
.blog-filter {
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(110px, auto));
    padding-left: 0;
    gap: var(--f-gutter);
    @include respond-to("m") {
      // flex-direction: row;
      // flex-flow: wrap;
      grid-template-columns: min-content auto;
      display: grid;
      grid-template-columns: repeat(6,auto);
    }
    li {
      display: flex;
      justify-content: space-between;
      margin: 0;

      // Custom checkbox
      .checkbox {
        display: grid;
        grid-auto-flow: column;

        label {
          display: block;
          width: 24px;
          height: 24px;

          background-image: url("../../assets/icon-checkbox-unchecked.svg");
        }

        input[type=checkbox] {
          visibility: hidden;

          &:checked + label {
            background-image: url("../../assets/icon-checkbox-checked.svg");
          }
        }
      }
    }
  }
}

</style>
