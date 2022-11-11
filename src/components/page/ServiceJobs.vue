<template>
  <section class="service-jobs">
    <ul class="service-jobs__list">
      <li
        class="service-jobs__list__item"
        v-for="(item, index) in jobsItems"
        :key="index"
      >
        <a
          @click.prevent="getJobById(item.id)"
          class="service-jobs__list__item__link"
        >
          <div class="service-jobs__list__item__link__container">
            <div class="service-jobs__list__item__link__container__info">
              <div
                class="service-jobs__list__item__link__container__info__logo"
              >
                <img :src="item.company.logo_url" />
              </div>
            </div>
            <div class="service-jobs__list__item__link__container__meta">
              <span
                class="service-jobs__list__item__link__container__meta__position"
                >{{ item.title }}</span
              >
              <span
                class="service-jobs__list__item__link__container__meta__company"
                >{{ item.company.name }}</span
              >

              <span
                class="service-jobs__list__item__link__container__meta__info location"
              >
                <img
                  src="	https://secretjobs.niceboard.co/static/img/icon-location.png"
                />
                {{ item.location.name }}
              </span>
              <span
                class="service-jobs__list__item__link__container__meta__info"
              >
                <img
                  src="	https://secretjobs.niceboard.co/static/img/icon-clock.png"
                />
                {{ item.jobtype.name }}
              </span>
              <span
                class="service-jobs__list__item__link__container__meta__info"
                v-if="item.salary_min"
              >
                <img
                  class="salaryimg"
                  src="		https://secretjobs.niceboard.co/static/img/icon-coin-alt.png"
                />
                {{ getSalaries(item) }}
              </span>
            </div>
            <div class="service-jobs__list__item__link__container__actions">
              <span
                class="service-jobs__list__item__link__container__actions__timeago"
              >
                {{ item.published_at | formatDate }}
              </span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      columns: [],
    };
  },
  methods: {
    async getJobsArray() {
      try {
        let response = await fetch(
          `https://secretjobs.niceboard.co/api/v1/jobs?key=KxF7alB8qq`
        );
        let data = await response.json();
        return data.results.jobs;
      } catch (err) {
        console.error(err);
        // Handle errors here
      }
    },
    mapArray(array) {
      array.map((i) => {
        if (i.salary_min) i.salary_min = i.salary_min / 1000;
        if (i.salary_max) i.salary_max = i.salary_max / 1000;
      });
      return array;
    },
    async getJobById(id) {
      try {
        let response = await fetch(
          `https://secretjobs.niceboard.co/api/v1/jobs/${id}?key=KxF7alB8qq`
        );
        let data = await response.json();
        //console.log(data.results.job);
      } catch (err) {
        console.error(err);
        // Handle errors here
      }
    },
    getSalaries(array) {
      if (array.salary_max)
        return "$" + array.salary_min + "-" + array.salary_max + "K";
      else return "$" + array.salary_min + "K+";
    },
  },
  filters: {
    formatDate(value) {
      if (!value || !new Date(value).toISOString()) return " ";
      let fullDate = new Date(value);
      var dd = fullDate.getDate();
      var mm = fullDate.getMonth() + 1; //January is 0!
      var yyyy = fullDate.getFullYear();
      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;
      var dateISO = mm + "/" + dd + "/" + yyyy.toString().substr(-2);

      return dateISO;
    },
  },
  computed: {
    jobsItems() {
      const content = this.mapArray(this.columns);

      return content;
    },
  },

  async mounted() {
    this.columns = await this.getJobsArray();
  },
};
</script>

<style scoped lang="scss">
@import "@lkmx/flare/src/functions/respond-to";
.service-jobs {
  &__list {
    overflow: hidden;
    height: auto;
    border-radius: 6px;
    padding: 0;

    &__item {
      background: #fff;
      margin: 0;
      border-bottom: 1px solid #ddd;
      cursor: pointer;

      &__link {
        display: block;
        height: 100%;
        width: 100%;
        padding: 20px;

        &__container {
          display: grid;
          grid-auto-flow: column;
          grid-template-columns: 60px 1fr 40px;
          grid-column-gap: 20px;

          &__info {
            display: flex;
            justify-content: center;

            &__logo {
              height: 50px;
              width: 50px;
              padding: 3px;
              box-sizing: border-box;
              background: #fff;
              box-shadow: 0 0 4px RGB(0 0 0 / 20%);
              border-radius: 8px;

              img {
                max-width: 100%;
                max-height: 100%;
                background: #fff;
                border-radius: 8px;
                line-height: 32px;
                color: transparent;
              }
            }
          }

          &__meta {
            display: flex;
            flex-direction: column;

            &__position {
              color: #111;
              font-weight: 800;
              font-size: 16px;
            }

            &__company {
              color: #222;
              font-weight: 500;
              font-size: 15.5px;

              line-height: 1.2;
            }

            &__info {
              color: #666;
              font-size: 14px;

              &.location {
                padding-top: 5px;
              }

              img {
                display: inline-block;
                height: 10px;
                width: 10px;
                margin-right: 6px;

                &.salaryimg {
                  transform: rotate(-75deg);
                }
              }
            }
          }

          &__actions {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-end;
            &__timeago {
              color: #888;
              text-transform: none;
              font-size: 11px;
              font-weight: 300;
            }
          }
        }
      }
    }
  }
}
</style>
