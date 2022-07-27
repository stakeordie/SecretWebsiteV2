<template>
  <div class="learn-article-column-double">
    <!-- **DOUBLE PARAGRAPH -->

    <div class="learn-article-column-double__col-1">
      <vue-markdown>
        {{ data }}
      </vue-markdown>
    </div>

    <!-- ** PARAGRAPH + IMAGE-->

    <div class="learn-article-column-double__col-2">
      <vue-markdown>
        {{ data }}
      </vue-markdown>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      data: `
### H3 Title

Facilisi nunc sapien velit sollicitudin viverra enim nec. Ornare blandit interdum quisque sed habitasse augue orci. Volutpat amet ut nisi, in mauris sagittis scelerisque quis. Sit sed felis egestas mollis risus aliquam vitae, eget adipiscing. At aenean lorem tellus arcu id tincidunt. Mattis neque morbi eget eget ultrices sed aliquet. Porttitor amet, urna et in venenatis. Tortor metus, non pulvinar sit ut.  
  
Massa lectus at aliquet mauris habitant elementum purus. Aliquam dui diam fermentum libero magna suspendisse sed tristique mi. Praesent ut ultricies dignissim mi nunc in sit ac. Aliquet purus posuere ac justo, condimentum lorem. Risus sit aenean nisl nibh id dictum. Enim rhoncus vehicula vel sodales velit. Enim sit sit non at nulla. Tellus ultrices enim elit nulla faucibus. Mi nunc, leo commodo leo rhoncus placerat.

### H3 Title

Facilisi nunc sapien velit sollicitudin viverra enim nec. Ornare blandit interdum quisque sed habitasse augue orci. Volutpat amet ut nisi, in mauris sagittis scelerisque quis. Sit sed felis egestas mollis risus aliquam vitae, eget adipiscing. At aenean lorem tellus arcu id tincidunt. Mattis neque morbi eget eget ultrices sed aliquet. Porttitor amet, urna et in venenatis. Tortor metus, non pulvinar sit ut.  
  
Massa lectus at aliquet mauris habitant elementum purus. Aliquam dui diam fermentum libero magna suspendisse sed tristique mi. Praesent ut ultricies dignissim mi nunc in sit ac. Aliquet purus posuere ac justo, condimentum lorem. Risus sit aenean nisl nibh id dictum. Enim rhoncus vehicula vel sodales velit. Enim sit sit non at nulla. Tellus ultrices enim elit nulla faucibus. Mi nunc, leo commodo leo rhoncus placerat.`,
    };
  },
};
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-article-column-double {
  display: grid;
  gap: 64px;

  &__paragraph,
  &__paragraph-img {
    display: grid;
    gap: 64px;

    &__paragraph,
    &__paragraph-img {
      display: grid;
      gap: 26px;
      // gap: 54px;
      grid-template-columns: repeat(auto-fit, minmax(342px, 1fr));

      .learn-article-column__text {
        display: grid;
        // gap: 26px;
        padding: var(--f-gutter);
      }

      & .content {
        width: 100%;

        & .box {
          padding: 0;
        }
      }
    }

    .learn-article-column__text {
      align-self: center;
    }
  }
}
</style>
