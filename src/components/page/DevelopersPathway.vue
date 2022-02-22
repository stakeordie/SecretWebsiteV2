<template>
  <section class="page-developer-pathway">
    <div class="page-developer-pathway__inside" v-for="(path, index) in sectionContent" :key="index">
      <div class="page-developer-pathway__description">
        <h6 v-if="path.pathDescription.subtitle">{{ path.pathDescription.subtitle }}</h6>
        <h3>{{ path.pathDescription.title }}</h3>
        <p>{{ path.pathDescription.description }}</p>
      </div>
      <div class="page-developer-pathway__content">
        <ul v-for="(resource, index) in path.items" :key="index">
          <li class="page-developer-pathway__content__item">
            <div class="page-developer-pathway__content__item__icon">
              <img :src="resource.image" alt="" />
            </div>
            <div class="page-developer-pathway__content__item__details">
              <h6>{{ resource.title }}</h6>
              <p>{{ resource.description }}</p>
              <btn class="link-arrow" :url="resource.url">{{
                resource.urlTitle
              }}</btn>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pathId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pathway: [
        {
          pathDescription: {
            id: 0,
            subtitle: "",
            title: "Learn the Fundamentals",
            description:
              "Get to know the ins and outs of Secret Network’s tech stack.",
          },
          items: [
            {
              image: "/temp/icon-developers-path.svg",
              title: "Overview",
              description:
                "Quickly get up to speed on what Secret is all about.",
              urlTitle: "View docs",
              url: "google.com",
            },
            {
              image: "/temp/icon-developers-path.svg",
              title: "Secret Contracts",
              description:
                "Install the right tools and set up your first project.",
              urlTitle: "View docs",
              url: "/",
            },
            {
              image: "/temp/icon-developers-path.svg",
              title: "Protocol",
              description:
                "Learn how Secret works and the use cases it serves.",
              urlTitle: "View docs",
              url: "/",
            },
            {
              image: "/temp/icon-developers-path.svg",
              title: "Contract Privacy Model",
              description:
                "Get to know Secret’s privacy-preserving features and how you can use them. ",
              urlTitle: "View resource",
              url: "/",
            },
            {
              image: "/temp/icon-developers-path.svg",
              title: "Network Architecture",
              description:
                "Find out how Secret Contract interactions are executed and preserve data privacy.",
              urlTitle: "View docs",
              url: "/",
            },
            {
              image: "/temp/icon-developers-path.svg",
              title: "Awesome Secret",
              description:
                "An overview of all the Secret apps, tools, and resources you might need. ",
              urlTitle: "View resource",
              url: "/",
            },
          ],
        },
        {
          pathDescription: {
            id: 1,
            subtitle: "DEVELOPER PATHWAY",
            title: "Design Smart Contracts",
            description:
              "Start creating and deploying privacy-preserving smart contracts.",
          },
          items: [
            {
              image: "/temp/icon-developers-path.svg",
              title: "Overview",
              description:
                "Quickly get up to speed on what Secret is all about.",
              urlTitle: "View docs",
              url: "google.com",
            }
          ],
        },
      ],
    };
  },
  computed: {
    sectionContent() {
      const content = this.pathway.filter(it => {
        const filtered = it.pathDescription.id === Number(this.pathId)
        return filtered
      })
      // const content = this.$static.aboutContent.edges.map(
      //   (it) => it.node[this.section]
      // );
      return content;
    },
  },
};
</script>

<style lang="scss">

@import "@lkmx/flare/src/functions/respond-to";


.page-developer-pathway{
  position: relative;
  top: 120px;
  
  &__inside{
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 4px;

    @include respond-to("<=m"){
      grid-template-columns: 1fr;
    }
  }

  

  &__description{
    min-width: 360px;


    h3{
      font-size: var(--f-h3-text-size);
    }
    p{
      font-size: var(--paragraph-font-size-big);
      font-weight: 100;
    }
    
     @include respond-to(">=l"){
       padding-right: 28px;
      border-right:  solid 1px var(--color-neutral-dark-mode-04);
    }
    
    
  }

  &__content{
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    row-gap: 24px;
    margin: var(--f-gutter);
   

   

    @include respond-to("<=xs"){
      grid-template-columns: 1fr;
    }
    
    &__item{
      display: grid;
      grid-template-columns: 24px 1fr;
      grid-gap: 10px;

      

      &__details{
        

        h6{
          font-size: var(--f-h5-text-size);
          margin-bottom: 0%;
        }

        p{
          margin-bottom: 0;
          
        }

        .link-arrow{
            color:var(--color-highkey-secondary-blue);
          }


      }


    }
  }
  
}

</style>
