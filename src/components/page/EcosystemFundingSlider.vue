<template>
  <div class="flui-slider">
    <ul class="flui-slider__items">
      <div class="line-spacer">&nbsp;</div>

      <li class="flui-slider__items__item current">
        <div class="flui-slider__items__item__container">
          <img
            src="../../assets/funding/logos/defiance.svg"
            alt=""
            height="64px"
          />

          <p class="flui-slider__items__item__container-quote">
            “DeFiance is excited to support Secret Network, the only
            privacy-by-default smart contract blockchain that enables
            groundbreaking technologies like front-run resistant DEXes, Secret
            NFTs, and more. The Secret team has been relentless in working
            towards their mission since Enigma and we think that the ecosystem
            is now ready to tackle the next phase of growth.”
          </p>
          <div class="flui-slider__items__item__container-author">
            <div class="author-block">
              <p>Arthur Cheong</p>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.5 0H14.5L9.5 20H6.5L11.5 0Z" fill="#60A0DC" />
              </svg>
            </div>
            <p class="author-position">Founding Partner at DeFiance Capital</p>
          </div>
        </div>
      </li>
      <li class="flui-slider__items__item">
        <div class="flui-slider__items__item__container">
          <img
            src="../../assets/funding/logos/alameda.svg"
            alt=""
            height="64px"
          />

          <p class="flui-slider__items__item__container-quote">
            “Secret Network is the first mover and market leader in solving what
            is still a core need for Web3: data privacy for applications. We are
            excited to become supporters of the Secret ecosystem and look
            forward to helping accelerate its global growth across all verticals
            and aspects.”
          </p>
          <div class="flui-slider__items__item__container-author">
            <div class="author-block">
              <p>Brian Lee</p>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.5 0H14.5L9.5 20H6.5L11.5 0Z" fill="#60A0DC" />
              </svg>
            </div>
            <p class="author-position">Partner at Alameda Research</p>
          </div>
        </div>
      </li>
      <li class="flui-slider__items__item">
        <div class="flui-slider__items__item__container">
          <img
            src="../../assets/funding/logos/coinfund.svg"
            alt=""
            height="64px"
          />

          <p class="flui-slider__items__item__container-quote">
            “The availability of readily scalable, provable, and compliant
            privacy technology is an integral component of mass-market
            consumer-friendly Web3 applications. CoinFund is proud to support
            Secret Network in its mission to enable and accelerate
            trust-minimized privacy within the composable base layer.”
          </p>
          <div class="flui-slider__items__item__container-author">
            <div class="author-block">
              <p>Evan Feng</p>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.5 0H14.5L9.5 20H6.5L11.5 0Z" fill="#60A0DC" />
              </svg>
            </div>
            <p class="author-position">Director of Research at CoinFund</p>
          </div>
        </div>
      </li>
    </ul>
    <!-- controls -->
    <flui-button
      label=""
      data-off-canvas-name="demo"
      class="flui-slider__controls__arrow--left"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21 12C21 11.5858 20.6642 11.25 20.25 11.25H3.75C3.33579 11.25 3 11.5858 3 12C3 12.4142 3.33579 12.75 3.75 12.75H20.25C20.6642 12.75 21 12.4142 21 12Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.0303 4.71967C10.7374 4.42678 10.2626 4.42678 9.96967 4.71967L3.21967 11.4697C2.92678 11.7626 2.92678 12.2374 3.21967 12.5303L9.96967 19.2803C10.2626 19.5732 10.7374 19.5732 11.0303 19.2803C11.3232 18.9874 11.3232 18.5126 11.0303 18.2197L4.81066 12L11.0303 5.78033C11.3232 5.48744 11.3232 5.01256 11.0303 4.71967Z"
          fill="white"
        />
      </svg>
    </flui-button>

    <flui-button
      label=""
      data-off-canvas-name="demo"
      class="flui-slider__controls__arrow--right"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.9697 4.71967C13.2626 4.42678 13.7374 4.42678 14.0303 4.71967L20.7803 11.4697C21.0732 11.7626 21.0732 12.2374 20.7803 12.5303L14.0303 19.2803C13.7374 19.5732 13.2626 19.5732 12.9697 19.2803C12.6768 18.9874 12.6768 18.5126 12.9697 18.2197L19.1893 12L12.9697 5.78033C12.6768 5.48744 12.6768 5.01256 12.9697 4.71967Z"
          fill="white"
        />
      </svg>
    </flui-button>
    <div class="flui-slider__indicators"></div>
  </div>
</template>

<script>
import FluiButton from "../../components/FluiButton.vue";

export default {
  components: { FluiButton },
  // data: function () {
  //   return {
  //     alertIsVisible: true,
  //   };
  // },
  methods: {
    fluiSlider() {
      const slides = document.querySelectorAll(".flui-slider__items__item");
      const btnLeft = document.querySelector(
        ".flui-slider__controls__arrow--left"
      );
      const btnRight = document.querySelector(
        ".flui-slider__controls__arrow--right"
      );
      const dotContainer = document.querySelector(".flui-slider__indicators");

      let curSlide = 0;
      const maxSlide = slides.length;
      //console.log(maxSlide);

      const createDots = function () {
        slides.forEach(function (_, i) {
          dotContainer.insertAdjacentHTML(
            "beforeend",
            `<button class="flui-slider__indicators__dot" data-slide="${i}"></button>`
          );
        });
      };

      const activateDot = function (slide) {
        document
          .querySelectorAll(".flui-slider__indicators__dot")
          .forEach((dot) =>
            dot.classList.remove("flui-slider__indicators__dot--active")
          );

        document
          .querySelector(`.flui-slider__indicators__dot[data-slide="${slide}"]`)
          .classList.add("flui-slider__indicators__dot--active");
      };

      const goToSlide = function (slide) {
        slides.forEach(
          (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
        );
      };

      // Next slide
      const nextSlide = function () {
        if (curSlide === maxSlide - 1) {
          curSlide = 0;
        } else {
          curSlide++;
        }

        goToSlide(curSlide);
        activateDot(curSlide);
      };
      const prevSlide = function () {
        if (curSlide === 0) {
          curSlide = maxSlide - 1;
        } else {
          curSlide--;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
      };
      // initialization
      const init = function () {
        createDots();
        activateDot(0);
        goToSlide(0);
      };
      init();

      btnRight.addEventListener("click", nextSlide);
      btnLeft.addEventListener("click", prevSlide);

      document.addEventListener("keydown", function (e) {
        //console.log(e);
        if (e.key === "ArrowLeft") prevSlide();
        e.key === "ArrowRight" && nextSlide();
      });

      // slider scrolling with dots and event delegation
      dotContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("flui-slider__indicators__dot")) {
          const slide = Number(e.target.dataset.slide);
          curSlide = slide;
          goToSlide(slide);
          activateDot(slide);
        }
      });
    },
  },
  mounted() {
    this.fluiSlider();
  },
  props: {},
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";
:root {
  --flui-slider-height: 450px;
  --flui-slider-indicators-bg-color: transparent;
  --flui-slider-indicators-bg-color-current: var(--color-neutral-dark-mode-04);
  --flui-slider-indicators-border-color: var(--color-neutral-dark-mode-04);
  --flui-slider-indicators-border-color-hover: var(
    --color-neutral-dark-mode-04
  );
  --flui-slider-indicators-size: 10px;
  --flui-slider-indicators-position: absolute;
  --flui-slider-arrow-background: var(--color-neutral-dark-mode-04);
  --flui-slider-arrow-background-hover: var(--color-neutral-dark-mode-02);
  --flui-slider-arrow-border-color: var(--color-neutral-dark-mode-04);
  --flui-slider-arrow-border-radius: var(--f-gutter-l);
  --flui-slider-arrow-chevron-color: var(--color-analog-primary-white);
}

// .line-spacer{
//   background: var(--color-neutral-dark-mode-04);
//   height: 2px;
//   position: absolute;
// }

.flui-slider {
  border-top: solid 2px var(--color-neutral-dark-mode-04);
  position: relative;
  display: grid;
  width: 98%;
  height: calc(var(--flui-slider-height) + 64px);
  padding: 0;

  * {
    margin: 0;
  }

  @include respond-to("<=xs") {
    height: 740px;
  }

  &__items {
    display: block;
    position: relative;
    width: 1200px;
    // height: var(--flui-slider-height);
    padding: 0px;
    margin: 0px;
    white-space: nowrap;
    overflow: hidden;

    @include respond-to("<=l") {
      width: 960px;
    }

    @include respond-to("<=m") {
      width: 760px;
    }

    @include respond-to("<=s") {
      width: calc(100% - 110px);

      margin-left: auto;
      margin-right: auto;
    }
    @include respond-to("<=xs") {
      width: calc(100% - 68px);
      padding: 0 16px;
    }

    &__item {
      // display: grid;
      // grid-template-columns: 1fr;
      // row-gap: var(--f-gutter);
      // justify-items: center;
      width: 100%;
      height: 100%;
      position: absolute;
      transition: 0.8s ease-in-out;

      &__container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: min-content;
        gap: var(--f-gutter-l);
        height: 100%;
        white-space: normal;
        justify-items: center;
        align-content: center;
      }

      img {
        color: red;
      }
      &__container-quote {
        width: 768px;
        font-size: var(--paragraph-font-size-big);
        line-height: var(--paragraph-line-height-big);

        @include respond-to("<=m") {
          width: 520px;
        }

        @include respond-to("<=s") {
          width: calc(100% - 68px);
          font-size: var(--paragraph-font-size-small);
        }
      }

      &__container-author {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: var(--f-gutter-xxs);

        @include respond-to("<=s") {
          width: calc(100% - 68px);
          font-size: var(--paragraph-font-size-small);
          grid-template-columns: 1fr;
        }
        .author-block {
          display: inline-flex;

          p {
            color: var(--color-neutral-dark-mode-06);
          }
        }

        .author-position {
          color: var(--color-neutral-dark-mode-05);
        }

        // @include respond-to ("<=s"){
        //
        // }
      }

      //al div una altura de 100%
    }
  }
  &__controls {
    &__arrow {
      &--left {
        align-items: center;
        display: grid;
        background: var(--flui-slider-arrow-background);
        border-color: var(--flui-slider-arrow-border-color);
        border-radius: var(--flui-slider-arrow-border-radius);
        position: absolute;
        padding: var(--f-gutter-s);
        top: 50%;
        bottom: 50%;
        margin-bottom: auto;
        margin-top: auto;
        left: var(--f-gutter);
        z-index: 3;
        &:hover {
          background: var(--flui-slider-arrow-background-hover);
        }
        svg {
          path {
            fill: var(--flui-slider-arrow-chevron-color);
          }
        }
      }
      &--right {
        align-items: center;
        display: grid;
        background: var(--flui-slider-arrow-background);
        border-color: var(--flui-slider-arrow-border-color);
        border-radius: var(--flui-slider-arrow-border-radius);
        position: absolute;
        padding: var(--f-gutter-s);
        top: 50%;
        bottom: 50%;
        right: var(--f-gutter);
        margin-bottom: auto;
        margin-top: auto;
        z-index: 3;
        &:hover {
          background: var(--flui-slider-arrow-background-hover);
        }
        svg {
          path {
            fill: var(--flui-slider-arrow-chevron-color);
          }
        }
        // &:hover {
        // }
      }
    }
  }
  .disabled {
    opacity: 0.5;
  }
  &__indicators {
    position: var(--flui-slider-indicators-position);
    bottom: 0;
    width: 100%;
    z-index: 3;
    // display: grid;
    display: none;
    grid-auto-flow: column;
    gap: var(--f-gutter-s);
    column-width: auto;
    justify-content: center;
    padding: var(--f-gutter);
    @include respond-to("<=s") {
      padding: var(--f-gutter-xs);
    }
    &__dot {
      padding: 0;
      vertical-align: middle;
      place-self: center;
      width: var(--flui-slider-indicators-size);
      height: var(--flui-slider-indicators-size);
      background-color: var(--flui-slider-indicators-bg-color);
      border: 2px solid var(--flui-slider-indicators-border-color);
      border-radius: var(--f-gutter);
      &:hover {
        background-color: var(--flui-slider-indicators-bg-color);
        border: 2px solid var(--flui-slider-indicators-border-color-hover);
        cursor: pointer;
      }
      &:active {
        background-color: var(--flui-slider-indicators-bg-color-current);
        border: 2px solid var(--flui-slider-indicators-border-color-hover);
      }
      &--active {
        background-color: var(--flui-slider-indicators-bg-color-current);
        border: 2px solid var(--flui-slider-indicators-border-color-hover);
      }
    }
  }
}
</style>
