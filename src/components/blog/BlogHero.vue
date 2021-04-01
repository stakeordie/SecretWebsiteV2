<template>
  <section class="blog-hero">
    <themed-image class="blog-hero__cover">
      <img light src="@/assets/hero-black.svg" alt="hero">
      <img dark src="@/assets/hero-white.svg" alt="hero">
      <img light-colored dark-colored src="@/assets/hero-color.svg" alt="hero">
    </themed-image>
    <div class="blog-hero__content">
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss">

</style>
