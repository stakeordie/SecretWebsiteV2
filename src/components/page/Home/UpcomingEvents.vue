<template>
  <section>
    <div class="items horizontal-slider upcoming-event__container">
      <div class="card-element" v-for="event in upcomingEvents" :key="event.id">
        <g-image
          v-if="event.cover_image.url"
          :src="event.cover_image.url"
          onerror="this.onerror=null;this.src='/blog-cover.jpg';"
          alt="Blog"
          loading="lazy"
        />
        <div class="card-element__body">
          <div class="card-element__body__content">
            <div>
              <span>{{ event.event_date }}</span>
              <h5>{{ event.name }}</h5>
              <span v-if="event.location" class="location">
                {{ event.location }}
              </span>
            </div>
            <p>{{ event.description }}</p>
          </div>
          <div class="card-element__body__footer">
            <a
              :href="event.link"
              :target="event.is_external_link ? '_blank' : '_self'"
              :rel="event.is_external_link ? 'noopener noreferrer' : ''"
            >
              <button>{{ event.button_text }}</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    upcomingEvents() {
      const upcomingEvents = this.$static.upcomingEvent.edges.map((edge) => {
        return edge.node;
      });
      return upcomingEvents;
    },
  },
  methods: {
    formatDateTime(dateTimeStr) {
      const [hours, minutes] = dateTimeStr.split(":");
      return `${hours}:${minutes}`;
    },
  },
};
</script>

<static-query>
  query {
    upcomingEvent: allStrapiUpcomingEvent(sortBy: "order", order: ASC) {
      edges {
        node {
          id
          event_date
          order
          name
          description
          location
          button_text
          is_external_link
          link
          cover_image {
            id
            url
          }
        }
      }
    }
  }
</static-query>


<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";

.upcoming-event__container {
  white-space: nowrap;
  display: inline-flex;
  gap: 26px;

  &::-webkit-scrollbar {
    display: none;
  }

  .card-element {
    display: flex;
    flex-direction: column;
    position: relative;
    flex-shrink: 0;
    border-radius: 24px;
    overflow: hidden;
    background: var(--theme-card-bg-default);
    transition: 0.2s ease;
    max-width: 382px;
    width: 100%;
    vertical-align: top;
    * {
      margin: 0;
    }
    &:hover {
      background: var(--color-neutral-dark-mode-04);
      button {
        border: 1px solid white;
      }
    }
    img {
      border-top-left-radius: 22px;
      border-top-right-radius: 22px;
      width: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
    }
    &__body {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 16px;
      white-space: normal;
      height: 100%;
      &__content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        gap: 10px;
        span {
          color: var(--theme-card-text-color);
          font-size: 14px;
          height: 20px;
          font-family: "Hind";
        }
        span {
          color: var(--color-neutral-dark-mode-05);
        }
      }
      &__footer {
        margin-top: auto;
        button {
          width: 100%;
          padding: 10px 0px;
          background-color: var(--color-neutral-dark-mode-04);
        }
      }
    }
  }
}
</style>
