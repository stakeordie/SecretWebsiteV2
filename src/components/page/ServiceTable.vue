<template>
  <section class="service-status">
    <div class="service-status__filter">
      
    </div>
    <div class="service-status__table">
      <ul class="service-status__table__columns">
        <li>Service</li>
        <li>Status 1 </li>
        <li>Status 2</li>
        <li>Status 3</li>
        <li>Last updated</li>
      </ul>
      <ul class="service-status__table__row" >
        <li class="service-status__table__row__item">
          <h6>Service item</h6> 
          <a href="#" class="item-link">Service link</a></li>
        <li class="service-status__table__row__status">Item status 1</li>
        <li class="service-status__table__row__status">Item status 2</li>
        <li class="service-status__table__row__status">Item status 3</li>
        <li class="service-status__table__row__update">Last updated</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">

.service-status{
    &__table{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 0;
        border-radius: 10px;
        overflow: hidden;


        &__columns{
            display: grid;
            grid-template-columns: repeat(5,1fr);
            grid-gap: 4px;
            background: var(--color-neutral-dark-mode-03);
            margin: 0;

            li{
              color: var(--color-analog-tertiary-gray);
              text-transform: uppercase;
              font-size: var( --f-h6-text-size);
              font-weight: 600;
              padding: var(--f-gutter) var(--f-gutter-l);
              margin: 0;
            }
        }
         &__row{
            display: grid;
            grid-template-columns: repeat(5,1fr);
            grid-gap: 4px;
            background: var(--color-neutral-dark-mode-04);
            margin: 0;
            border-top: 1px solid var(--color-analog-secondary-gray);

            li{
              padding: var(--f-gutter) var(--f-gutter-l);
              margin-bottom: 0;
            }
            
            &__item{
              display: grid;

              h6{
                font-size: var( --f-h6-text-size);
              font-weight: 600;
              margin-bottom: 0;
              }
              

              a{
                font-size: 12px;
                font-weight: 400;
                font-family: var(--f-default-text-font);
                color: var(--color-analog-tertiary-blue);
              }
            }
            &__status{
              text-transform: uppercase;
              font-size: var( --f-h6-text-size);
              font-weight: 100;
              align-self: center;
              
              
            }

            &__update{
              font-size: var(--f-default-text-size);
              font-weight: 200;
              color: var(--color-neutral-dark-mode-05);
              align-self: center;
            }

        }
    }
}

</style>