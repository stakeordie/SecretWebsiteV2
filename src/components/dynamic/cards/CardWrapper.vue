<template>
  <a
    v-if="url"
    :href="url"
    :target="externalLink ? '_blank' : '_self'"
    :rel="externalLink ? 'noopener noreferrer' : ''"
  >
    <slot></slot>
  </a>

  <component v-else :is="element ? element : 'article'">
    <slot></slot>
  </component>
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
    },
    element: {
      type: String,
      required: false,
      default: "article"
    }
  }
};
</script>
