<template>
  <div class="pagination">
    <hr
      v-for="(i, index) in totalPages"
      :key="index"
      @click="setPage(i)"
      :class="[currentPage === index ? 'current-page' : null]"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageSended: 0,
    };
  },

  props: {
    items: { type: Array, required: true },
    pageSize: { type: Number, required: true },
    currentPage: { type: Number, required: true },
  },

  methods: {
    setPage(page) {
      console.log(page)
      this.$emit("page", page - 1);
    },
  },

  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.pageSize);
    },

    totalItems() {
      return this.items.length;
    },
  },
};
</script>

<style lang="scss">
.pagination {
  margin-top: 20px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-column-gap: 12px;
  justify-content: center;

  hr {
    cursor: pointer;
    order: none;
    border-top: 1px;
    background-color: #c4c4c4;
    height: 8px;
    width: 27px;
    opacity: 0.2;

    &.current-page {
      opacity: 1;
    }
  }
}
</style>
