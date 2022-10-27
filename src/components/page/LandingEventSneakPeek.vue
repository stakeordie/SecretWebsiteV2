<template>
  
<section class="landing-event-sneak-peek">
  <div class="landing-event-sneak-peek__content">
    <h1>Summit 2022</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, inventore eaque? In dolorem eum aliquid, earum vero delectus dignissimos fuga voluptate consequuntur, eos vel amet perspiciatis dicta doloremque suscipit fugit?
    </p>
  </div>
</section>

</template>

<script>
export default {
  methods: {
    sneakPeek() {
      let sumHeights = 0;
      let swirlTop = document.querySelector('.swirl-wrapper')
      let swirlBottom = document.querySelector('.swirl-wrapper-bottom')
      let header = document.querySelector('.mega-header')
      let sneakPeek = document.querySelector('.landing-event-sneak-peek')

      swirlTop.classList.add('remove')
      swirlBottom.classList.add('remove')


      if([header][0].previousSibling.className === 'alert-bar') {
        sumHeights = [header][0].previousSibling.offsetHeight
      } else {
        sumHeights = [header][0].offsetHeight
      }
      sneakPeek.style.setProperty('--sum-heights', sumHeights + 'px')
      sneakPeek.style.setProperty('--headerHeight', [header][0].offsetHeight + 'px')
      



      console.log(sumHeights)
      // console.log([header][0].offsetHeight)
      // console.log([header][0].previousSibling.offsetHeight)
      // console.log([header][0].previousSibling.className)
    }
  },
  mounted() {
    this.sneakPeek()
  }
}
</script>

<style lang="scss">
// .summit {
//   .landing-event-sneak-peek {
//     background: black;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     // height: calc(100vh - var(--sum-heights));
//     padding-top: var(--headerHeight);

//     position: fixed;
//     left: 0;
//     right: 0;
//     height: 100%;
//     &__content {
//       max-width: 700px;
//       padding: var(--f-gutter);
//     }
//   }
//   .swirl-wrapper, .swirl-wrapper-bottom {
//     display: none;
//   }
//   .simple-footer, .legal {
//     display: none;
//   }
//   .no-padding {
//     margin-bottom: 0;
//     .content {
//       .box {
//         padding: 0;
//       }
//     }
//   }
// }
</style>