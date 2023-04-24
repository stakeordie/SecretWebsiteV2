<template>
  <a
    v-if="href"
    :href="href"
    :target="is_external_link ? '_blank' : '_self'"
    :rel="is_external_link ? 'noopener noreferrer' : ''"
  >
    <slot />
  </a>
  <button v-else disabled class="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: false,
      default: null,
    },
    is_external_link: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
