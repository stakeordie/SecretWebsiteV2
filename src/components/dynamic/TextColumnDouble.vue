<template>
  <div class="text-column-double">
      <div class="text-column-double__col-1">
        <h3 class="text-column-double__title">
          {{ first_paragraph_title }}
        </h3>
        <vue-markdown :source="first_paragraph" class="text-column-double__paragraph">
          <!-- {{ first_paragraph }} -->
        </vue-markdown>
      </div>
      <div class="text-column-double__col-2">
        <h3 class="text-column-double__title">
          {{ second_paragraph_title }}
        </h3>
        <vue-markdown :source="second_paragraph" class="text-column-double__paragraph" >
          <!-- {{ second_paragraph }} 999 -->
        </vue-markdown>
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