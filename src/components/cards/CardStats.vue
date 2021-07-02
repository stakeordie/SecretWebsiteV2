<template>
  <column number="5" number-s="1">
    <block>
      <div class="card-stats" :class="{ cta: url }">
        <h3>{{ formatNumber(price) }}</h3>
        <h4>Price</h4>
      </div>
    </block>
    <!--block>
      <div class="card-stats" :class="{ cta: url }">
        <h3>{{ formatNumber(totalValueLocked) }}</h3>
        <h4>TVL</h4>
      </div>
    </block-->
    <block>
      <div class="card-stats" :class="{ cta: url }">
        <h3>{{ formatNumber(circulatingSupply) }}</h3>
        <h4>Circ. Supply</h4>
      </div>
    </block>
    <block>
      <div class="card-stats" :class="{ cta: url }">
        <h3>{{ formatNumber(totalSupply) }}</h3>
        <h4>Total Supply</h4>
      </div>
    </block>
    <block>
      <div class="card-stats" :class="{ cta: url }">
        <h3>{{ formatNumber(marketCap) }}</h3>
        <h4>Market Cap</h4>
      </div>
    </block>
    <block>
      <div class="card-stats" :class="{ cta: url }">
        <h3>{{ formatNumber(volume) }}</h3>
        <h4>Volume</h4>
      </div>
    </block>
  </column>
</template>

<script>
import { getScrtInfo } from '@/clients/coingecko';

function abbreviate(n) {
  if (n < 1) return n.toFixed(2)
  var exp = n
      .toExponential()
      .split('e+')
      .map(function(el) { return +el; })
  ;
  var mod = exp[1] % 3;
  exp[0] = exp[0] * Math.pow(10, mod);
  exp[1] = [
      '',
      'k',
      'm',
      'M',
      'T',
      'quad',
      'quint'
  ][(exp[1] - mod) / 3];

  if (exp[1] === '') {
    return exp[0].toFixed(2);
  }

  return exp[0].toFixed(0) + exp[1];
}

export default {
  props: {
    url: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      price: undefined,
      marketCap: undefined,
      volume: undefined,
      totalValueLockedL: undefined,
      totalSupply: undefined,
      circulatingSupply: undefined
    }
  },

  methods: {
    formatNumber(value) {
      if (typeof value === 'undefined') return '';
      return `$${abbreviate(value)}`;
    }
  },

  async mounted() {
    const { data } = await getScrtInfo();
    this.price = data.market_data.current_price.usd;
    this.marketCap = data.market_data.market_cap.usd;
    this.volume = data.market_data.total_volume.usd;
    this.totalValueLocked = data.market_data.total_value_locked.usd;
    this.totalSupply = data.market_data.total_supply;
    this.circulatingSupply = data.market_data.circulating_supply;
  }
};
</script>

<style lang="scss">
@import "../../sass/functions/theme";
@import "@lkmx/flare/src/functions/respond-to";

$accent-colors: (
  "blue",
  "turquoise",
  "green",
  "yellow",
  "cream",
  "orange",
  "red",
  "purple",
  "gray"
);

// @each $name, $color in $accent-colors {
// 	&.accent-#{$name} {
// 		color: var(--accent-#{$name});
// 	}
// }

.card-stats {
  border-radius: var(--f-radius);
  padding: 26px;
  background: var(--theme-card-bg-default);
  transition: 0.2s ease;
  display: grid;
  height: 100%;
  align-items: center;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--theme-fg);
    margin-bottom: 0;
  }

  h3 {
    text-transform: uppercase;
  }

  h4 {
    color: var(--theme-card-text-color);
  }

  p {
    color: var(--theme-card-text-color);
    margin-top: var(--f-gutter);
    margin-bottom: 0;
  }

  &.no-bg {
    background: transparent;
    gap: var(--f-gutter);
  }

  button,
  .button,
  .btn {
    margin: var(--f-gutter) 0 0 0;
    width: 100%;
  }

  @each $name, $color in $accent-colors {
    &.accent-#{$name} {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        &:first-child {
          color: var(--accent-#{$name});
        }
      }
    }
  }

  &.icon-next {
    @include respond-to(">=l") {
      position: relative;

      &:after {
        content: "";
        width: 28px;
        height: 28px;
        background: url(../../assets/icon-arrow-right-light.svg);

        @include theme(light light-colored) {
          background: url(../../assets/icon-arrow-right-dark.svg);
          background-size: cover;
        }

        background-size: cover;
        position: absolute;
        right: -34px;
        top: var(--f-gutter-xxxl);
      }
    }
  }
}
</style>
