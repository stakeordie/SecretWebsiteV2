<template>
  <section>
    <div class="items horizontal-slider upcoming-event__container">
      <div class="card-element" v-for="event in upcomingEvents" :key="event.id">
        <div class="card-element__content">
          <g-image
            v-if="event.cover_image.url"
            :src="event.cover_image.url"
            onerror="this.onerror=null;this.src='/blog-cover.jpg';"
            alt="Blog"
            loading="lazy"
          />
          <div class="date">
            <h6>
              {{ event.start_date_day }} at
              {{ formatDateTime(event.start_date_hour) }} UTC
              {{
                event.end_date_day
                  ? `- ${event.end_date_day} at ${formatDateTime(
                      event.end_date_hour,
                    )}`
                  : ""
              }}
            </h6>
          </div>
          <h3 class="name">{{ event.name }}</h3>
          <h6 v-if="event.location" class="location">
            {{ event.location }}
          </h6>
          <p>{{ event.description }}</p>
        </div>
        <a
          :href="event.link"
          :target="event.is_external_link ? '_blank' : '_self'"
          :rel="event.is_external_link ? 'noopener noreferrer' : ''"
        >
          <button>{{ event.button_text }}</button>
        </a>
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
    upcomingEvent: allStrapiUpcomingEvent(sortBy: "start_date_day", order: ASC) {
      edges {
        node {
          id
          start_date_day (format: "D MMM YY")
          start_date_hour
          end_date_day (format: "D MMM YY")
          end_date_hour
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
  gap: var(--f-gutter-l);

  &::-webkit-scrollbar {
    display: none;
  }

  .card-element {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--f-gutter-l);
    padding: var(--f-gutter);
    border-radius: var(--f-radius);
    overflow: hidden;
    background: var(--theme-card-bg-default);
    transition: 0.2s ease;
    max-width: 382px;
    width: 100%;
    white-space: normal;
    vertical-align: top;
    position: relative;
    flex-shrink: 0;

    * {
      margin: 0;
    }

    &:hover {
      background: var(--color-neutral-dark-mode-04);
      button {
        border: 1px solid white;
      }
    }

    &__content {
      img {
        border-radius: var(--f-gutter-s);
        width: 100%;
        height: 206px;
        margin-bottom: 26px;
      }
      .date {
        display: flex;
        color: var(--theme-card-text-color);
        text-transform: uppercase;
      }
      .name {
        text-transform: capitalize;
      }
      .location{
        text-transform: uppercase;
        color: var(--color-neutral-dark-mode-05);
      }
      p {
        margin-top: 10px;
      }
    }
    button {
      width: 100%;
      padding: 15px 0px;
      background-color: var(--color-neutral-dark-mode-04);
    }
  }
}
</style>
