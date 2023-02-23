<template>
  <a
    v-if="url"
    :href="url"
    :target="is_external_link ? '_blank' : ''"
    :rel="is_external_link ? 'noopener noreferrer' : ''"
  >
    <slot></slot>
  </a>
  <article v-else>
    <slot></slot>
  </article>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false
    },
    externalLink: {
      type: Boolean,
      required: false
    }
  }
};
</script>
