<template>
  <announcement-ver2 :announcementId="$static.homeAnnouncements.edges[0].node[location].id" />
</template>

<script>
export default {
  props: {
    location: {
        type: String,
        required: true
      },
  }
}
</script>

<static-query>
  query{
    homeAnnouncements: allStrapiHomeAnnouncements {
      edges{
        node{
            top {
              id
            }
            bottom {
              id
            }
        }
      }
    }
  }
</static-query>

<style lang="scss">
@import "@lkmx/flare/src/functions/_respond-to.scss";


 .announcement-ver2 {
   padding: 64px 0 32px 0;

   display: grid;
   grid-template-columns: repeat(2,1fr);
   gap:68px;

   @include respond-to("<=s"){
     grid-template-columns: 1fr;
     padding: var(--f-gutter);
     
   }

   &__img{
     height: 100%;
     
     padding: var(--f-gutter);
     object-fit: cover;
     
     img{
       object-fit: cover;
       height: 100%;
       min-width: 100%;
       margin-right: 0;
       

     }

    
   }
    &__cont{
      align-self: center;
      padding: var(--f-gutter);
      
       & h3 {
					color: var(--color-analog-primary-white);
                    font-size: 54px;
                    margin-bottom: 10px;
                    line-height: 60px;
				}

				& h4 {
					color: var(--color-analog-tertiary-yellow);
                    font-size: 18px;
                    font-weight: 600;
                    text-transform: uppercase;
                    margin-bottom: 0;

				}
        &__p {
          font-size: var(--paragraph-font-size-big);
          line-height: var(--paragraph-line-height-big);
          margin-bottom: 26px;
        }

				btn {
					margin-bottom: 26px;
				}

        &__title{
          margin-bottom: 0;
        }

        &__social{
          display: inline-grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
     }
   
  //  &__social{
  //       display: grid;
        
        
  //       a{
  //         width: 24px;
  //         height: 24px;

  //         img{
  //           width: 24px;
  //         height: 24px;
  //         }
  //       }
      
  //  }

	// // background: var(--theme-card-bg-variant);
	// .--flare-block {
	// 	background: var(--theme-card-bg-variant);

	// 	.content {
  //           align-self: center;
	// 		.box {
	// 			// display: grid;
	// 			// gap: var(--f-gutter);
	// 			 // padding: var(--f-gutter-xxl) var(--f-gutter-xl) 0 var(--f-gutter);

  //       @include respond-to("<=m") {
  //         padding: var(--f-gutter);
  //       }

  //       img{
  //           height: 375px;
  //           width: 100%;
  //         }

        


	// 			h3 {
	// 				color: var(--color-analog-primary-white);
  //                   font-size: 54px;
	// 			}

	// 			h4 {
					
	// 				color: var(--color-analog-tertiary-yellow);
  //                   font-size: 18px;
  //                   font-weight: 600;
  //                   text-transform: uppercase;
	// 			}

	// 			.btn {
	// 				margin-bottom: 0;
	// 			}
	// 		}
	// 	}
	// }
}

</style>