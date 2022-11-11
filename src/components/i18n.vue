<template>
  <div class="i18n" :id="id">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },

  mounted() {
    if (process.isClient) {
      const msg = this.$t(this.id);

      if (msg === this.id) return;

      const el = document.getElementById(this.id);
      for (const it of el.children) {
        it.innerText = msg;
      }
    }
  },
};
</script>
