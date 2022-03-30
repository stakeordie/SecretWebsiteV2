<template>
  <section class="service-status__alert">
    <div
      class="service-status__alert__stable"
      v-if="!alertMessage.node.experiencing_issues"
    >
      <img
        src="../../assets/icon-check2.svg"
        alt=""
        class="service-status__alert__stable__icon"
      />
      <div class="service-status__alert__stable__content">
        <h6 class="service-status__alert__stable__content__title">
          Network is stable
        </h6>
        <p class="service-status__alert__stable__content__text">
          If you suspect there is an issue occuring
          <g-link
            class="service-status__alert__stable__content__text__link"
            :to="'https://linktr.ee/SCRTSupport'"
          >
            contact us here.
          </g-link>
        </p>
      </div>
    </div>

    <div class="service-status__alert__issues" v-else>
      <img
        src="../../assets/icon-exclamation.svg"
        alt=""
        class="service-status__alert__issues-icon"
      />
      <div class="service-status__alert__issues__content">
        <h6 class="service-status__alert__issues__content__title">
          Network is experiencing performance issues
        </h6>
        <vue-markdown
          :source="alertMessage.node.message"
          :toc="true"
          :toc-anchor-link="false"
        ></vue-markdown>
        <!-- <p class="service-status__alert__issues__content__text">
          {{ alertMessage.node.message }}
          <a class="service-status__alert__issues__content__text__link"
            >Read more.</a
          >
        </p> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    alertMessage() {
      var content = this.$static.servicesAlert.edges.map((it) => it);

      return content[0];
    },
  },
};
</script>

<static-query>
  query {
    servicesAlert: allStrapiServicesAlert {
      edges {
        node {
          message
          experiencing_issues
        }
      }
    }
  }
</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/respond-to";

.service-status__alert {
  //infividual styles

  &__stable {
    border: 1px solid var(--color-analog-secondary-green);

    &__content {
      &__title {
        color: var(--color-analog-tertiary-green);
      }
      p {
        margin: 0;
      }
    }
  }

  &__issues {
    border: 1px solid var(--color-analog-tertiary-yellow);

    &__content {
      &__title {
        color: var(--color-analog-tertiary-yellow);
      }
      p {
        margin: 0;
      }
    }
  }

  //Shared styles

  &__stable,
  &__issues {
    display: grid;
    grid-template-columns: 24px 1fr;
    grid-gap: 13px;

    border-radius: 10px;

    padding: var(--f-gutter);
    margin: var(--f-gutter-xl) 0;

    
    &__content {
      display: grid;
      gap: 9.5px;

      &__title {
        margin-bottom: 0;
      }

      &__text{

        &__link{
          color: var(--color-newBrand-blue-02);
        }
      }
    }
  }
}
</style>