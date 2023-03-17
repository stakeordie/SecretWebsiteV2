<template>
  <column>
    <block>
      <section class="basic-hero" :class="[paddingTop, paddingBottom]">
        <DynamicBreadcrumb v-if="show_breadcrumb" :route="$context.route" />
        <ResponsiveImage v-if="image" :src="image" high-quality />
      </section>
    </block>
  </column>
</template>

<script>
import { sizes } from "@/utils";
import DynamicBreadcrumb from "@/components/dynamic/basic/DynamicBreadcrumb.vue";

export default {
  components: { DynamicBreadcrumb },
  props: {
    image: {
      type: Object,
      required: true
    },
    show_breadcrumb: {
      type: Boolean,
      required: true
    },
    padding_top: {
      type: String,
      required: true
    },
    padding_bottom: {
      type: String,
      required: true
    }
  },
  computed: {
    paddingTop() {
      const size = sizes[this.padding_top];
      return size ? `${size}-top` : "none-top";
    },
    paddingBottom() {
      const size = sizes[this.padding_bottom];
      return size ? `${size}-bottom` : "small-bottom";
    }
  }
};
</script>

<style lang="scss">
.basic-hero {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
