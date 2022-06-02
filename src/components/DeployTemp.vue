<template>
  <div class="scrt-deploytemp">
    <section class="scrt-deploytemp__intro">
      <p v-if="!showDeployButton">
        Smart contracts are
        <span @click.prevent="countClicks()"> self-executing </span>
        pieces of code that are managed on a blockchain. Most blockchains that
        support smart contracts, such as Ethereum, are public by default. This
        means all the data used in their smart contracts is exposed to the
        public. Secret Network improves upon traditional smart contracts by
        supporting encrypted inputs, encrypted outputs, and encrypted state for
        smart contracts – data privacy for sensitive information stored on the
        blockchain.
      </p>
      <p v-else>
        By making click on the DEPLOY button, you will trigger a deployment from
        the main branch on the Secret Website repository.
        <span class="vanish">The build process takes up to 8 minutes</span>,
        once the build has finished you could refresh this website and see the
        changes applied.
      </p>
    </section>
    <section class="scrt-deploytemp__control" v-if="showDeployButton">
      <transition-group
        name="fade"
        tag="section"
        class="scrt-deploytemp__control__deploytemp"
      >
        <section key="deploy">
          <p class="animation">Click to trigger a deploy</p>
          <button class="animation" @click="deploy">DEPLOY</button>
        </section>
      </transition-group>

      <section class="scrt-deploytemp__control__status" v-if="deployment">
        <p class="scrt-deploytemp__control__status__message vanish">
          Deploy started at <span> {{currentTime}} </span>, it can take up to 8 minutes
        </p>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counterClicks: 0,
      showDeployButton: false,
      deployment: false,
      currentTime: ""
    };
  },
  methods: {
    deploy() {
      this.deployment = true;  
      var currentDate = new Date();
      this.currentTime = currentDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })   
      fetch(
        "https://api.render.com/deploy/srv-c9pcuons437om8ugf2k0?key=2fvI1p8NSa4"
      );
    },
    countClicks() {
      this.counterClicks++;
      if (this.counterClicks == 5) {
        this.showDeployButton = true;
      }
    }
    
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
.scrt-deploytemp {
  &__intro {
    max-width: 700px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    span {
      &.vanish {
        color: var(--color-analog-tertiary-yellow);
      }
    }
  }
  &__control {
    background: var(--color-neutral-dark-mode-01);
    padding: var(--f-gutter-xl) var(--f-gutter);
    display: grid;
    align-items: center;
    justify-items: center;
    p {
      text-align: center;
    }
    button {
      margin: 0;
    }
    &__deploytemp {
      display: grid;
      align-items: center;
      justify-items: center;
      transition: 0.5s ease;

      section {
        display: grid;
        align-items: center;
        justify-items: center;
      }
    }

    &__status {
      display: grid;

      margin-top: 10px;
      &__message {
        margin: 0;
        transition: 2s ease;

        &.vanish {
          color: var(--color-analog-tertiary-yellow);
        }
        a {
          cursor: pointer;
        }
      }
    }
  }
}

</style>
