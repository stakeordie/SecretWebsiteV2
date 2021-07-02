<template>
  <a class="animate" href="" id="activateAnimation">
    <svg
      class="theme-mode"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="circle"
        d="M12 21C16.9705 21 21 16.9705 21 12C15 18 6 9.5 12 3C7.02944 3 3 7.02944 3 12C3 16.9705 7.02944 21 12 21Z"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        class="rays"
        d="M12 1V3M12 21V23M4.21973 4.22021L5.63973 5.64021M18.3604 18.3599L19.7804 19.7799M1 12H3M21 12H23M4.21973 19.7799L5.63973 18.3599M18.3604 5.64021L19.7804 4.22021"
        stroke="black"
        stroke-width="0"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</template>

<script>
export default {
  mounted() {
    const activateAnimation = document.querySelector("#activateAnimation");
    activateAnimation.addEventListener("click", () => {
      let checkBodyThemeMode = document.body.getAttribute("theme");
      if (
        checkBodyThemeMode === "light" ||
        checkBodyThemeMode === "light-colored"
      ) {
        const timeline = this.$anime
          .timeline()
          .add({
            targets: ".circle",
            easing: "easeInElastic(1, .3)",
            d:
              "M12 21C16.9705 21 21 16.9705 21 12C15 18 6 9.5 12 3C7.02944 3 3 7.02944 3 12C3 16.9705 7.02944 21 12 21Z",
          })
          .add({
            targets: ".rays",
            easing: "spring(1, 80, 10, 0)",
            strokeWidth: "0",
          });
      } else if (
        checkBodyThemeMode === "dark" ||
        checkBodyThemeMode === "dark-colored"
      ) {
        const timeline = this.$anime
          .timeline()
          .add({
            targets: ".circle",
            easing: "easeInElastic(1, .2)",
            d:
              "M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z",
          })
          .add({
            targets: ".rays",
            easing: "spring(1, 80, 10, 0)",
            strokeWidth: "2",
          });
      }
    });
  },
};
</script>

<style lang="scss">
@import "../../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

.animate {
  display: grid;

  svg {
    @include theme(dark dark-colored) {
      filter: invert(1);
    }
  }
}
</style>
