<template>
  <div>
    <button
      class="btn-pag"
      :v-for="pageNumber in totalPages"
      :click="setPage(pageNumber)"
    >
      {{ pageNumber + 1 }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perPage: 3,
      pagination: {},
    };
  },
  props: {
    data: { type: Array, required: true },
  },
  computed: {
    totalPages: function () {
      return Math.ceil(this.resultCount / this.itemsPerPage);
    },
  },
  methods: {
    setPage: function (pageNumber) {
      this.currentPage = pageNumber;
    },
    isCurrentPage: function (pageNumber) {
      return this.currentPage === pageNumber;
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  .btn-pag {
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
  }
}
</style>
