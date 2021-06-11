<template>
  <button @click="toggleSidebar()" class="toggle" aria-label="Toggle the sidebar">
    <transition name="toggle">
    </transition>
    <transition name="toggle">
    </transition>
  </button>
</template>

<script>
export default {
  methods: {
    toggleSidebar: function() {
      if (process.isClient) {
        this.$store.commit('toggleSidebar')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../sass/docs/config/_maps.scss";
@import "../../sass/docs/config/_colors.scss";
@import "../../sass/docs/config/_mixins.scss";
@import "../../sass/docs/config/_functions.scss";

button {
  background: none;
  border: 0;
  padding: 0;
  transition: color .15s ease-in-out;
  cursor: pointer;
  width: 48px;
  height: 48px;
  position: relative;

  @include respond-above(sm) {
    display: none;
  }

  &:focus {
    outline: none;
  }
  
  .bright & {
    color: $textBright;
  }

  .dark & {
    color: $textDark;
  }
}

svg {
  position: absolute;
  top: 12px;
  left: 12px;
}

.toggle-enter-active, .toggle-leave-active {
  transition: transform .25s ease-in-out, opacity .25s ease-in-out;
}
.toggle-enter, .toggle-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: rotateZ(-180deg);
  opacity: 0;
}
</style>

