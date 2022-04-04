<template>
  <announcement :announcementId="$static.homeAnnouncements.edges[0].node[location].id" />
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


 .announcement {

	// background: var(--theme-card-bg-variant);
	.--flare-block {
		background: var(--theme-card-bg-variant);

		.content {
            align-self: center;
			.box {
				// display: grid;
				// gap: var(--f-gutter);
				padding: var(--f-gutter-xxl) var(--f-gutter-xl) var(--f-gutter-xxl) var(--f-gutter);

                    @include respond-to("<=m") {
                        padding: var(--f-gutter);
                    }

				h3 {
					color: var(--color-analog-primary-white);
                    font-size: 54px;
				}

				h4 {
					
					color: var(--color-analog-tertiary-yellow);
                    font-size: 18px;
                    font-weight: 600;
                    text-transform: uppercase;
				}

				.btn {
					margin-bottom: 0;
				}

                img {
                    
                    
                }
			}
		}
	}
}

</style>