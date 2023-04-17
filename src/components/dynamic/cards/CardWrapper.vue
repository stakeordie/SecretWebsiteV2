<template>
  <a
    v-if="url"
    :href="url"
    :target="externalLink ? '_blank' : '_self'"
    :rel="externalLink ? 'noopener noreferrer' : ''"
  >
    <slot />
  </a>
  <component :is="element ? element : 'article'" v-else>
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
      default: "",
    },
    externalLink: {
      type: Boolean,
      required: false,
    },
    element: {
      type: String,
      required: false,
      default: "article",
    },
  },
};
</script>
