<template>
  <div>
    <!-- FILTER HEADER -->
      <div class="learn-filter__header">
          <h5 class="learn-portal__eyebrow">
              EYEBROW TEXT
              </h5>
          <h2 class="learn-portal__title">
              All Topics
          </h2>
      </div>
    
    <!-- CONTENT -->
    <div class="learn-filter__content">

        <!-- Search bar -->
        <!-- <div class="search">
          <input
            class="search-bar"
            type="text"
            ref="inputSearch"
            v-model="searchInputValue"
            @keyup="searchFilter()"
            placeholder="Search"
          />
        </div> -->
        <div class="search-bar">
          <div class="search-filter">
            <img class="search-icon" src="../../assets/search-icon-gray.svg" />
            <input class="search-input" placeholder="Search" type="text" >
          </div>
        </div>  

        <ul class="learn-filter__checkbox">
            <li class="learn-filter__checkbox-custom">
                <input type="checkbox" id="topic" class="learn-filter__checkbox-original">
                     <label for="topic" class="learn-filter__checkbox-label" >
                        <span class="learn-filter__checkbox-title">Tag title</span>
                         </label>

            </li>
        </ul>

        <!-- Search results -->
        <div class="learn-filter__results">
            <learn-card></learn-card>
            <learn-card></learn-card>
            <learn-card></learn-card>
        </div>

    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-filter {

  &__header {
    text-align: center;
  }

  &__content {
      display: grid;
      gap: 32px;


  .search-filter {
    position: relative;
    display: flex;
    min-width: 100px;
    margin: auto;
    //height: 20px;
    justify-self: center;
    max-width: 400px;
    height: 36px;


    .search-icon {
      position: absolute;
      top: 8px;
      left: 6px;
      width: 16px;
    }

    .search-input {
    border: none;
    border-radius: 5px;
     max-width: 400px;
    padding: 2px 23px 2px 30px;
    outline: 0;
    background-color: var(--color-neutral-dark-mode-04)  ;
    margin-bottom: 0;

    &::placeholder{
            color: var(--color-neutral-dark-mode-06);
            font-size: 16px;
          }
  }


  }


      // .search{
      //   justify-content: center;

      //   .search-bar {
      //   position: relative;
      //     max-width: 400px;
      //     margin: auto;
      //     margin-bottom: 0;
      //     background-color: var(--color-neutral-dark-mode-04) !important ;
      //     background-image: url(../../assets/search-icon-gray.svg) !important;
      //     background-repeat: no-repeat !important;
      //     border: none;
      //     padding-left: 32px;

      //     &::placeholder{
      //       color: var(--color-neutral-dark-mode-06);
      //       font-size: 16px;
      //     }       
      // }
      // .search .search-bar{
      //   &::before{
      //       position: absolute;
      //       z-index: 100;
      //       content: '';
      //       background-color: red;
      //       width: 16px;
      //       height: 16px;
      //       left: 392px;
      //       top: 8px;

            
            
      //       @include respond-to("<=l"){
      //         left: 292px;
      //       }

      //       @include respond-to("<=m"){
      //         left: 178px;
      //       }
      //         @include respond-to("<=s"){
      //         left: 153px;
      //       }
      //     }
      // }

    
          
    

    .learn-filter__checkbox {
      gap: 10px;
      display: flex;
      justify-content: center;
      padding: 0;
      margin-bottom: 0;

      &-original {
        display: none;

        &:checked {
          ~.learn-filter__checkbox-label {
            background-color: var(--about-color-orange);
          }
        }
      }

      &-label {
        background: var(--color-neutral-dark-mode-04);
        border-radius: 50px;
        cursor: pointer;
        font-size: var(--f-h5-text-size);
        font-weight: 700;
        letter-spacing: 1px;
        display: grid;
        transition: 0.2s ease;

        &:checked,
        &:hover {
          background-color: var(--about-color-orange);
        }
      }

      &-title {
        padding: 6px 16px;
      }
    }

    .learn-filter__results{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

        // display: flex;
        gap: 26px;

        @include respond-to("<=s"){
            justify-items: center;
        }
    }
  }
}


</style>