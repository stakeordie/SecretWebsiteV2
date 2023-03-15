<template>
  <a
    v-if="url"
    :href="url"
    :target="externalLink ? '_blank' : '_self'"
    :rel="externalLink ? 'noopener noreferrer' : ''"
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
