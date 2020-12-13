<template>
  <simple-layout>
    <template #header>
      <simple-header>
        <img class="header__logo" src="@/assets/flare--white.png">
        <nav>
          <g-link to="/">Index</g-link>
          <g-link to="/about">About</g-link>
        </nav>
      </simple-header>
    </template>

    <page>

      <slot></slot>

    </page>

    <template #footer>
      <simple-footer>
        <p>Flare Project</p>
      </simple-footer>
    </template>

  </simple-layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
.header {
  &__logo {
    height: 60px;
    padding: var(--f-gutter-s) var(--f-gutter);
  }
}
</style>
