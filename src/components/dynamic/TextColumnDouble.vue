<template>
  <div class="learn-article-column-double">
      <div class="learn-article-column-double__col-1">
        <h3 class="learn-article-column-double__title">
          {{ first_paragraph_title }}
        </h3>
        <p class="learn-article-column-double__paragraph">
          {{ first_paragraph }}
        </p>
      </div>
      <div class="learn-article-column-double__col-2">
        <h3 class="learn-article-column-double__title">
          {{ second_paragraph_title }}
        </h3>
        <p class="learn-article-column-double__paragraph" >
          {{ second_paragraph }}
        </p>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    first_paragraph_title: String,
    first_paragraph: String,
    second_paragraph_title: String,
    second_paragraph: String
  }
};
</script>