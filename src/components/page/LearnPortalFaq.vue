<template>
  <section class="learn-portal-faq">
    <div class="learn-portal-faq__header">
      <h3>Frequently asked questions</h3>
      <p>
        Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
        Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus
        elementum blandit et.
      </p>
    </div>
    <div class="learn-portal-faq__content" >
      <div class="learn-portal-faq__content__question" v-for="(item, index) in faq" :key="index">
        <h6 >{{ item.question }}</h6>
        <p>
          {{ item.answere }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        {
          question: "What's the best thing about Switzerland?",
          answere:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
          question: "Why do you never see elephants hiding in trees?",
          answere:
            "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
          question: "How do you make holy water?",
          answere:
            "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
          question: "Why can't you hear a pterodactyl go to the bathroom?",
          answere:
            "Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
          question: "How do you make holy water?",
          answere:
            "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
          question: "Why can't you hear a pterodactyl go to the bathroom?",
          answere:
            "Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-portal-faq {
    padding: 32px;
    display: grid;
    gap: 80px;

    @include respond-to('<=s') {
        gap: 54px;
      }
    
   

  &__header {
      max-width: 672px;
      margin: auto;
      text-align: center;

      @include respond-to('<=m') {
        padding: 0 32px ;
      }
      @include respond-to('<=s') {
        padding: 0 ;
      }


    & h2 {
      @include respond-to('<=s') {
        line-height: var(--f-h2-text-size);
      }
    }


    & p {
      font-size: var(--paragraph-font-size-big);
      line-height: var(--paragraph-line-height-big);
      margin-bottom: 0;
    }
  }

  &__content{
      display: grid;
      gap: 32px;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

      @include respond-to('<=m') {
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      }

      &__question{

          &__p{

          }
      }

  }

}
</style>