<template>
  <div>
    <div class="color-block">
      <h2>Analog Colors</h2>
      <h3>Primary</h3>
      <div class="colors-grid">
        <div class="color-card primary" v-for="color in analogPrimaryColors">
          <div class="color" :style="{background:color.hex}"></div>
          <div>
            <p>{{color.hex}}</p>
            <p>{{color.rgb}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="color-block">
      <h3>Secondary</h3>
      <div class="colors-grid">
        <div class="color-card" v-for="color in analogSecondaryColors">
          <div class="color" :style="{background:color.hex}"></div>
          <div>
            <p>{{color.hex}}</p>
            <p>{{color.rgb}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="color-block">
      <h3>Tertiary</h3>
      <div class="colors-grid">
        <div class="color-card" v-for="color in analogTertiaryColors">
          <div class="color" :style="{background:color.hex}"></div>
          <div>
            <p>{{color.hex}}</p>
            <p>{{color.rgb}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="color-block">
      <h2>High Key Colors</h2>
      <h3>Primary</h3>
      <div class="colors-grid">
        <div class="color-card primary" v-for="color in analogPrimaryColors">
          <div class="color" :style="{background:color.hex}"></div>
          <div>
            <p>{{color.hex}}</p>
            <p>{{color.rgb}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="color-block">
      <h3>Secondary</h3>
      <div class="colors-grid">
        <div class="color-card" v-for="color in highKeySecondaryColors">
          <div class="color" :style="{background:color.hex}"></div>
          <div>
            <p>{{color.hex}}</p>
            <p>{{color.rgb}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="color-block">
      <h3>Tertiary</h3>
      <div class="colors-grid">
        <div class="color-card" v-for="color in highKeyTertiaryColors">
          <div class="color" :style="{background:color.hex}"></div>
          <div>
            <p>{{color.hex}}</p>
            <p>{{color.rgb}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        analogPrimaryColors: [{
            hex: '#151A20',
            rgb: 'rgb(21, 26, 32)',
          },
          {
            hex: '#FFFFFF',
            rgb: 'rgb(255, 255, 255)',
          },
        ],
        analogSecondaryColors: [{
            hex: '#5F5F6B',
            rgb: 'rgb(95, 95, 107)',
          },
          {
            hex: '#816DA8',
            rgb: 'rgb (129, 109, 168)',
          },
          {
            hex: '#D53A2C',
            rgb: 'rgb(213, 58, 44)',
          },
          {
            hex: '#EA7534',
            rgb: 'rgb(234, 117, 52)',
          },
          {
            hex: '#E5C7A3',
            rgb: 'rgb(229, 199, 163)',
          },
          {
            hex: '#FFD72E',
            rgb: 'rgb(255, 215, 46)',
          },
          {
            hex: '#5AA361',
            rgb: 'rgb(90, 163, 97)',
          },
          {
            hex: '#3EB7AC',
            rgb: 'rgb(62, 183, 172)',
          },
          {
            hex: '#4195C4',
            rgb: 'rgb(65, 149, 196)',
          },
        ],
        analogTertiaryColors: [{
            hex: '#BCBCCC',
            rgb: 'rgb(188, 188, 204)',
          },
          {
            hex: '#D2BEED',
            rgb: 'rgb(210, 190, 237)',
          },
          {
            hex: '#EF726C',
            rgb: 'rgb(239, 114, 108)',
          },
          {
            hex: '#FFAA88',
            rgb: 'rgb(255, 170, 136)',
          },
          {
            hex: '#FFE6D2',
            rgb: 'rgb(255, 230, 210)',
          },
          {
            hex: '#FFEB97',
            rgb: 'rgb(255, 235, 151)',
          },
          {
            hex: '#B1D8A3',
            rgb: 'rgb(177, 216, 163)',
          },
          {
            hex: '#9AE8DA',
            rgb: 'rgb(154, 232, 218)',
          },
          {
            hex: '#8FD2EA',
            rgb: 'rgb(143, 210, 234)',
          },
        ],
        highKeySecondaryColors: [{
            hex: '#5F5F6B',
            rgb: 'rgb(95, 95, 107)',
          },
          {
            hex: '#7A5CD6',
            rgb: 'rgb(122, 92, 214)',
          },
          {
            hex: '#FF144E',
            rgb: 'rgb(255, 20, 78)',
          },
          {
            hex: '#FF6510',
            rgb: 'rgb(255, 101, 16)',
          },
          {
            hex: '#FFCE99',
            rgb: 'rgb(255, 206, 153)',
          },
          {
            hex: '#FFEC00',
            rgb: 'rgb(255, 236, 0)',
          },
          {
            hex: '#25A02B',
            rgb: 'rgb(37, 160, 43)',
          },
          {
            hex: '#00DDBE',
            rgb: 'rgb(0, 221, 190)',
          },
          {
            hex: '#00B3EA',
            rgb: 'rgb(0, 179, 234)',
          },
        ],
        highKeyTertiaryColors: [{
            hex: '#BCBCCC',
            rgb: 'rgb(188, 188, 204)',
          },
          {
            hex: '#D2BEED',
            rgb: 'rgb(210, 190, 237)',
          },
          {
            hex: '#EF726C',
            rgb: 'rgb(239, 114, 108)',
          },
          {
            hex: '#FFAA88',
            rgb: 'rgb(255, 170, 136)',
          },
          {
            hex: '#FFE6D2',
            rgb: 'rgb(255, 230, 210)',
          },
          {
            hex: '#FFEB97',
            rgb: 'rgb(255, 235, 151)',
          },
          {
            hex: '#B1D8A3',
            rgb: 'rgb(177, 216, 163)',
          },
          {
            hex: '#9AE8DA',
            rgb: 'rgb(154, 232, 218)',
          },
          {
            hex: '#AEE0ED',
            rgb: 'rgb(174, 224, 237)',
          },
        ],
      }
    },
  }

</script>


<style lang="scss">
  @import "../../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";

  $accent-colors: (article,
    podcast,
    video,
  );

  // @each $name, $color in $accent-colors {
  // 	&.accent-#{$name} {
  // 		color: var(--accent-#{$name});
  // 	}
  // }

  .color-block {
    margin-bottom: var(--spacer-xs);

    h2 {
      margin-bottom: var(--f-gutter-xl);
    }

    .colors-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: var(--f-gutter);

      @include respond-to("<=m") {
        grid-template-columns: repeat(5, 1fr);
      }

      @include respond-to("<=s") {
        grid-template-columns: repeat(2, 1fr);
      }

      .color-card {
        display: grid;
        grid-auto-flow: row;
        gap: var(--f-gutter);

        &.primary {
          &:first-child {
            .color {
            outline: 1px solid var(--color-analog-primary-white);
          }
          }
          &:last-child {
            .color {
            outline: 1px solid var(--color-analog-primary-black);
          }
          }
        }

        .color {
          height: 116px;
          width: 100%;
        }

        p {
          margin-bottom: 0;
        }

      }
    }
  }

</style>
