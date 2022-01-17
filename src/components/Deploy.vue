<template>
  <div class="scrt-deploy">
    <section class="scrt-deploy__intro">
      <p>
        By making click on the DEPLOY button, you will trigger a deployment from
        the main branch on the Secret Website repository. The build process
        takes a few minutes, once the build has finished you could refresh this
        website and see the changes applied.
      </p>
    </section>
    <section class="scrt-deploy__control">
      <transition-group
        name="fade"
        tag="section"
        class="scrt-deploy__control__deploy"
        :class="!deployIsVisible ? 'vanish' : ''"
      >
        <section key="deploy" v-if="!deployId">
          <p class="animation">Click to trigger a deploy</p>
          <button class="animation" @click="deployRender">DEPLOY</button>
        </section>
      </transition-group>

      <section
        key="status"
        v-show="deployId"
        class="scrt-deploy__control__status"
      >
        <ul>
          <li>
            <span class="header">Deploy ID</span>
            <span class="data">...{{ deployId.slice(-6) }}</span>
          </li>
          <li>
            <span class="header">Target Site</span>
            <span class="data">Secret Website</span>
          </li>
          <li>
            <span class="header">Environment</span>
            <span class="data">Production</span>
          </li>
          <li>
            <span class="header">Status</span>
            <span class="data status">
              <div
                class="indicator"
                :class="depStatus === 'live' ? 'live' : 'in-progress'"
              ></div>
              {{ depStatus === "live" ? "Deploy ready" : "In progress" }}
              <img
                v-if="depStatus !== 'live'"
                class="loader"
                :src="require(`@/assets/loader-three-dots.svg`)"
                alt=""
            /></span>
          </li>
        </ul>
        <p
          :class="changeColor ? 'vanish' : ''"
          class="scrt-deploy__control__status__message"
          v-show="depStatus === 'build_in_progress'"
        >
          This will take a few minutes.
        </p>
        <p
          :class="changeColor ? 'vanish' : ''"
          class="scrt-deploy__control__status__message"
          v-show="depStatus === 'live'"
        >
          Your deploy is ready, <a href="/">go to Home</a> and look for you
          changes or <a v-on:click="deployRender">trigger a new deploy</a>.
        </p>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeColor: false,
      deployIsVisible: true,
      serviceId: process.env.GRIDSOME_RENDER_SERVICE_ID,
      token: process.env.GRIDSOME_RENDER_TOKEN,
      deployId: "",
      depStatus: "",
      depUpdatedAt: "",
    };
  },
  methods: {
    deploy() {
      fetch(
        "https://api.render.com/deploy/srv-c25kv3bonmle4k346bcg?key=QA429JBAgc0"
      );
    },
    getDeployStatus(deployId) {
      this.changeColor = true;
      setTimeout(() => {
        this.changeColor = false;
      }, 5000);
      var headers = new Headers();
      headers.append("X-Service-Id", `${this.serviceId}`);
      headers.append("Authorization", `Bearer ${this.token}`);

      var requestOptions = {
        method: "GET",
        headers: headers,
        redirect: "follow",
      };

      fetch(
        `https://secret-website.stakeordie.workers.dev/deploys/${deployId}`,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          let deployStatus = JSON.parse(result);
          this.depStatus = deployStatus.status;
          this.depUpdatedAt = deployStatus.updatedAt;
          setTimeout(() => {
            if (this.depStatus === "build_in_progress") {
              this.getDeployStatus(deployId);
            } else {
              return;
            }
          }, 15000);
        })
        .catch((error) => console.log("error", error));
    },
    deployRender() {
      this.deployIsVisible = false;
      let headers = new Headers();
      headers.append("X-Service-Id", `${this.serviceId}`);
      headers.append("Authorization", `Bearer ${this.token}`);

      let requestOptions = {
        method: "POST",
        headers: headers,
        redirect: "follow",
      };

      fetch(
        "https://secret-website.stakeordie.workers.dev/deploys",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => {
          let deployResponse = JSON.parse(result);
          this.deployId = deployResponse.id;
          this.getDeployStatus(this.deployId);
        })
        .catch((error) => console.log("error", error));
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
.scrt-deploy {
  &__intro {
    max-width: 700px;
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
    &__deploy {
      display: grid;
      align-items: center;
      justify-items: center;
      transition: 0.5s ease;
      &.vanish {
        opacity: 0;
      }
      section {
        display: grid;
        align-items: center;
        justify-items: center;
      }
    }
    &__status {
      display: grid;
      gap: var(--f-gutter-xl);
      ul {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--f-gutter);
        padding: 0;
        margin: 0;
        @include respond-to("<=m") {
          grid-template-columns: 1fr;
        }
        li {
          margin: 0;
          display: grid;
          text-align: center;
          @include respond-to("<=m") {
            text-align: left;  
          }
          .header {
            color: var(--color-analog-secondary-gray);
          }
          .data {
            display: grid;
            grid-auto-flow: column;
            align-items: center;
            gap: var(--f-gutter-xs);
            &.status {
              grid-template-columns: var(--f-gutter-xs) 1fr;
              text-align: left;
            }
            .indicator {
              border-radius: 100px;
              width: var(--f-gutter-xs);
              height: var(--f-gutter-xs);
              background: var(--color-analog-secondary-gray);
              &.in-progress {
                background: var(--color-analog-secondary-yellow);
              }
              &.live {
                background: var(--color-analog-secondary-green);
              }
            }
            img {
              &.loader {
                height: var(--f-gutter-xs);
              }
            }
          }
        }
      }
      &__message {
        margin: 0;
        transition: 2s ease;
        @include respond-to("<=m") {
         text-align: left !important;       
        }
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
.fade-enter-active,
.fade-leave-active {
  transition: 0.2s ease;
  opacity: 1;
  width: 100%;
  position: absolute;
}
.fade-enter,
.fade-leave-to {
  position: absolute;
  opacity: 0;
}

.fade-status-enter-active,
.fade-status-leave-active {
  transition: 0.2s ease;
  opacity: 1;
}
.fade-status-enter,
.fade-status-leave-to {
  opacity: 0;
}

.color-enter-active,
.color-leave-active {
  transition: 3s ease;
  color: var(--color-highkey-tertiary-green);
}
.color-enter,
.color-leave-to {
  opacity: 0;
}
</style>
