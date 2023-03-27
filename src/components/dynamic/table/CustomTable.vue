<template>
  <div :class="containerStyles" v-if="table">
    <table>
      <thead>
        <tr>
          <th
            v-for="(header, index) in tableHeaders"
            :key="index"
            :style="headerStyles(header)"
          >
            {{ header.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ row_fields, id } in tableRows" :key="id">
          <td
            v-for="(item, index) in row_fields"
            :key="index"
            :style="textStyles(item)"
          >
            <span class="header">{{ tableHeaders[index].name }}</span>
            <div class="cell" :class="{ 'has-image': item.image }">
              <ResponsiveImage v-if="item.image" :src="item.image" />
              <div class="info" v-if="item.value || item.second_value">
                <CardWrapper
                  v-if="item.value"
                  :url="item.is_value_link ? item.value_url : ''"
                  element="span"
                  externalLink
                  class="info__text"
                >
                  {{ item.value }}
                </CardWrapper>
                <CardWrapper
                  v-if="item.second_value"
                  :url="item.is_second_value_link ? item.second_value_url : ''"
                  element="span"
                  externalLink
                  class="info__secondary-text"
                >
                  {{ item.second_value }}
                </CardWrapper>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { sizes } from "@/utils";
import CardWrapper from "@/components/dynamic/cards/CardWrapper.vue";

export default {
  components: { CardWrapper },
  props: {
    table: {
      type: Object,
      required: false
    },
    padding_top: {
      type: String,
      required: true
    },
    padding_bottom: {
      type: String,
      required: true
    }
  },
  computed: {
    tableHeaders() {
      return this.table.table_headers;
    },
    tableRows() {
      return this.table.table_rows;
    },
    containerStyles() {
      const paddingTop = sizes[this.padding_top] || sizes.none;
      const paddingBottom = sizes[this.padding_bottom] || sizes.small;

      return [`${paddingTop}-top`, `${paddingBottom}-bottom`];
    }
  },
  methods: {
    headerStyles({ text_weight = "normal", text_color = "" }) {
      const defaultColor = "var(--color-neutral-dark-mode-05)";
      const weights = {
        normal: 600,
        bold: 700
      };

      return {
        "--text-weight": weights[text_weight] || weights.normal,
        "--headers-color": text_color || defaultColor
      };
    },
    textStyles({ text_color = "", text_alignment = "left" }) {
      const defaultColor = "var(--color-analog-primary-white)";
      const align = {
        left: "left",
        center: "center",
        right: "right"
      };

      return {
        "--text-color": text_color || defaultColor,
        "--text-alignment": align[text_alignment] || align.left
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@lkmx/flare/src/functions/respond-to";

table {
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  background: var(--color-neutral-dark-mode-04);

  > thead {
    background: var(--color-neutral-dark-mode-03);
    display: none;

    @include respond-to(">=m") {
      display: table-header-group;
    }

    th {
      padding: var(--f-gutter) var(--f-gutter-l);
      text-align: left;
      font-weight: var(--text-weight);
      color: var(--headers-color);
    }
  }

  > tbody {
    > tr {
      display: grid;
      width: 100%;

      &:not(:first-child) {
        border-top: 1px solid var(--color-analog-secondary-gray);
      }

      @include respond-to(">=m") {
        display: table-row;
      }

      > td {
        padding: var(--f-gutter) var(--f-gutter-l);
        vertical-align: middle;
        text-align: var(--text-alignment);

        @include respond-to(">=m") {
          max-width: 300px;
        }

        .header {
          font-size: 12px;
          font-weight: 100;
          text-transform: none;
          color: var(--color-neutral-dark-mode-05);
          margin: 0;

          @include respond-to(">=m") {
            display: none;
          }
        }

        .cell {
          display: grid;
          gap: 16px;

          &.has-image {
            grid-template-columns: 42px 1fr;
          }

          .info {
            display: flex;
            flex-direction: column;
            justify-content: center;

            &__text {
              font-size: 16px;
              font-weight: 600;
              margin-bottom: 0;
              color: var(--text-color);

              &:is(a) {
                color: var(--color-analog-tertiary-blue);
              }
            }

            &__secondary-text {
              font-size: 12px;
              font-weight: 400;
              margin-bottom: 0;
              font-family: var(--f-default-text-font);
              line-height: 16px;
              color: var(--color-neutral-dark-mode-05);

              &:is(a) {
                color: var(--color-analog-tertiary-blue);
                overflow-wrap: break-word;
              }
            }
          }
        }
      }
    }
  }
}
</style>
