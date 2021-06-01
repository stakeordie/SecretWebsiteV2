<template>
  <div class="elements">

    <div class="filter">
      <h4>Filters</h4>
      <ul class="custom-checkbox" :class="'selected-' + selectedTag">
        <li v-for="category in categories" :key="category.type">
          <label>
            <input type="checkbox" :value="category.type" v-model="checkedCategories">
            <span class="title">{{category.title}}</span> 
            <img class="unchecked" src="../assets/icon-checkbox-unchecked.svg" alt="unchecked">
            <img class="checked" src="../assets/icon-checkbox-checked.svg" alt="checked">
          </label>
        </li>
      </ul>
    </div>

    <div class="elements-container">
      <h3>{{title}}</h3>
      <div class="elements-grid">
        <div class="card-element" v-for="element in filteredElements" :key="element.id">
          <a :href="element.url" target="blank"> 
            <img :src="element.picture.url" alt="picture" />
            <div class="meta">
              <h6>{{ element.title }}</h6> 
              <p v-for="category in element.contributor_categories" :key="category.id" :class="'accent-'+ category.title">
                {{category.title}}</p> 
            </div>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {

        checkedCategories: [],

        selectedTag: "All",

      }
    },

    props:{
       title: {type: String, required: true},
       categories: {type: Array, required: true},
       elements:{ type: Array, required: true},
       url: {type: String, required: false},
    },

    computed: {
      filteredElements: function () {
        if(!this.checkedCategories.length) {
          return this.elements;
        }
        return this.elements.filter(post =>
          post.contributor_categories.some(tag =>
            this.checkedCategories.includes(tag.title)
          )
        )
      },
    },

  }
</script>

<style lang="scss">
  @import "../sass/functions/theme";
  @import "@lkmx/flare/src/functions/respond-to";

  $accent-colors: ("Validator",
    "Developer",
    "Fund",
    "Wallet",
  );

  .elements {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: var(--f-gutter-xl);

    @include respond-to("<=m") {
      grid-template-columns: 1fr;
    }

    .elements-container {

      .elements-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: var(--f-gutter);

        @include respond-to("<=m") {
          grid-template-columns: repeat(3, 1fr);
        }
        @include respond-to("<=s") {
          grid-template-columns: repeat(2, 1fr);
        }

        .card-element {
          border-radius: var(--f-radius);
          overflow: hidden;
          background: var(--theme-card-bg-default);
          transition: .2s ease;
          display: flex;
          flex-direction: column;
          text-align: center;

          &:hover {
            transform: var(--card-hover-transform);
            box-shadow: var(--card-hover-shadow) var(--accent-gray);
          }
            
          * {
            margin: 0;
          }

          h6 {
            color: var(--theme-fg);
          }

          p {
            &.tag {
              text-transform: capitalize;
            }

            @each $name,
            $color in $accent-colors {
              &.accent-#{$name} {
                color: var(--accent-#{$name});
              }
            }
          }

          .meta {
            padding: var(--f-gutter);
            display: flex;
            flex-direction: column;
            gap: var(--f-gutter-xxs);

            .location {
              color: var(--color-analog-secondary-blue);
            }
          }
        }
      }

    }
  }

</style>
