<template>
  <div class="learn-card">
      <a href="#" class="learn-card__link">
          <div class="learn-card__img">
              <img src="../../assets/blog-cover.jpg" alt="" class="learn-card__img-object">
              </div>
          <div class="learn-card__info">
              <h5 class="learn-card__main-tag">
                  Main tag
              </h5>
              <h5 class="learn-card__title">
                  Title of article or tutorial
              </h5>
          </div>
          <!-- <div class="learn-card__subtags">
              <p class="learn-card__subtag">
                  Subtag
              </p>
          </div> -->
      </a>

  </div>

  
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";

.learn-card{
    border-radius: var(--f-radius);
    overflow: hidden;
    background: var(--color-neutral-dark-mode-03);
    transition: 0.3s ease-in-out;
    cursor: pointer;
    
    max-width: 400px;


  &:hover {
    background: var(--color-neutral-dark-mode-04); 

    .learn-card__subtag{
        border: 1px solid var(--color-neutral-dark-mode-05);
    }
    
  }
    
    &__link{
        display: grid;
        gap: 10px;
        padding: var(--f-gutter);
        overflow: hidden;
    }

    &__img{
        width: 100%;
        height: 206px;
        border-radius: var(--f-radius);
        overflow: hidden;
        display: flex;

        &-object{
            object-fit: cover;
            width: 100%;
        }
        
    }

    &__info{

        .learn-card__main-tag{
            color: var(--learn-color-secondary-orange);
            margin-bottom: 0;
            
        }

        .learn-card__title{
            color: var(--color-analog-primary-white);
        }
    }

    &__subtags{
        display: flex;

        .learn-card__subtag{
            display: block;
            border-radius: 50px;
            border: 1px solid var(--color-neutral-dark-mode-04);
            margin-bottom: 0;
            padding: 6px 8px;
            transition: 0.3s ease-in-out;


        }
    }
}

</style>