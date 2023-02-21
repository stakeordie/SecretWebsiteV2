<template>
  <div class="ecosystem-roadmap-whats-been-built">
    <div class="ecosystem-roadmap-whats-been-built__left">
      <img
        src="../../assets/illustration-space-city.png"
        alt="Universe graphic"
        loading="lazy"
      />
    </div>
    <div class="ecosystem-roadmap-whats-been-built__right">
      <h3>See What’s Been Built</h3>
      <p>
        Check out the current ecosystem of Secret Network DApps, tools, and
        products.
      </p>
      <btn class="bg-invert no-arrow" url="/ecosystem/overview"
        >VIEW ALL SECRET APPS</btn
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swirlIsVisible: true,
    };
  },
  methods: {
    // removeSwirl: function(swirlStatus) {
    //   const swirlBottom = document.querySelector(".swirl-wrapper-bottom");
    //   const simpleFooter = document.querySelector(".simple-footer");
    //   this.swirlIsVisible = swirlStatus;
    //   if(!this.swirlIsVisible) {
    //     swirlBottom.classList.add("swirlIsOff");
    //     simpleFooter.classList.add("swirlIsOff");
    //   } else if(this.swirlIsVisible) {
    //     swirlBottom.classList.remove("swirlIsOff");
    //     simpleFooter.classList.remove("swirlIsOff");
    //   }
    //   console.log(this.swirlIsVisible)
    // },
  },
  mounted() {
    // this.removeSwirl(false);
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
body {
  .--flare.swirl-wrapper-bottom.swirlIsOff {
    display: none;
  }
  .simple-footer.swirlIsOff {
    margin-top: 0;
  }
}

.ecosystem-roadmap-whats-been-built {
  background: var(--color-black);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @include respond-to("<=s") {
    grid-template-columns: 1fr;
  }
  &__left {
    padding: var(--f-gutter);
    padding-left: 0;
    display: grid;
    justify-content: center;
  }
  &__right {
    padding: var(--f-gutter);
    display: grid;
    // justify-content: center;
    align-items: center;
    gap: 16px;
    * {
      margin: 0;
    }
    p {
      font-size: 18px;
      line-height: 27px;
    }
  }
}
</style>
