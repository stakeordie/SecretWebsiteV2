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
          <div class="card-element__date">
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
          <h3>{{ capitalize(event.name) }}</h3>
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
    capitalize(str) {
      return str
        .split(" ")
        .map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
    },
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

.upcoming-event {
  &__container {
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

      img {
        border-radius: var(--f-gutter-s);
        object-fit: cover;
        width: 100%;
        height: 206px;
        margin-bottom: 26px;
      }

      &__date {
        display: flex;
        h6 {
          color: var(--theme-card-text-color);
        }
      }

      p {
        margin-top: 10px;
      }

      button {
        width: 100%;
        padding: 15px 0px;
        background-color: var(--color-neutral-dark-mode-04);
      }
    }
  }
}
</style>
