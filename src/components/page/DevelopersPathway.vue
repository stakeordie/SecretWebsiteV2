<template>
  <section class="page-developer-pathway">
    <div class="page-developer-pathway__inside" v-for="(path, index) in sectionContent" :key="index" >
      <div class="page-developer-pathway__description">
        <h6 v-if="path.pathDescription.subtitle">
          {{ path.pathDescription.subtitle }}
        </h6>
        <h3>{{ path.pathDescription.title }}</h3>
        <p>{{ path.pathDescription.description }}</p>
      </div>
      <div class="page-developer-pathway__content">
        <div  v-for="(resource, index) in path.items" :key="index">
          <ul class="page-developer-pathway__content__box">
            <a  :href="resource.url"  >
            <li class="page-developer-pathway__content__box__item">
              
                <div class="page-developer-pathway__content__box__item__icon">
                  <img :src="resource.image" alt="" />
                </div>
                <div class="page-developer-pathway__content__box__item__details">
                  <h6>{{ resource.title }}</h6>
                  <p>{{ resource.description }}</p>
                  <btn class="link-arrow" :url="resource.url">
                    {{resource.urlTitle}}
                    </btn>
                </div>
              
            </li>
            </a>
          </ul>
        </div>
        <!-- <div class="page-developer-pathway__content__box" v-for="(resource, index) in path.items" :key="index">
        <ul :url="resource.url">
          <li class="page-developer-pathway__content__box__item" >
            <div class="page-developer-pathway__content__box__item__icon">
              <img :src="resource.image" alt="" />
            </div>
            <div class="page-developer-pathway__content__box__item__details" >
              <h6>{{ resource.title }}</h6>
              <p>{{ resource.description }}</p>
              <btn class="link-arrow" :url="resource.url">{{
                resource.urlTitle
              }}</btn>
            </div>
          </li>
        
        </ul>
        </div> -->
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
              image: "/temp/icon-features-file.svg",
              title: "Overview",
              description:
                "Quickly get up to speed on what Secret is all about.",
              urlTitle: "View docs",
              url: "https://docs.scrt.network/overview.html",
            },
            {
              image: "/temp/icon-features-file.svg",
              title: "Secret Contracts",
              description:
                "Install the right tools and set up your first project.",
              urlTitle: "View docs",
              url: "https://docs.scrt.network/dev/secret-contracts.html",
            },
            {
              image: "/temp/icon-features-file.svg",
              title: "Protocol",
              description:
                "Learn how Secret works and the use cases it serves.",
              urlTitle: "View docs",
              url: "https://docs.scrt.network/protocol/protocol.html",
            },
            {
              image: "/temp/icon-features-file.svg",
              title: "Contract Privacy Model",
              description:
                "Get to know Secret’s privacy-preserving features and how you can use them. ",
              urlTitle: "View resource",
              url: "https://docs.scrt.network/dev/privacy-model-of-secret-contracts.html",
            },
            {
              image: "/temp/icon-features-file.svg",
              title: "Network Architecture",
              description:
                "Find out how Secret Contract interactions are executed and preserve data privacy.",
              urlTitle: "View docs",
              url: "https://docs.scrt.network/protocol/architecture.html",
            },
            {
              image: "/temp/icon-features-file.svg",
              title: "Awesome Secret",
              description:
                "An overview of all the Secret apps, tools, and resources you might need. ",
              urlTitle: "View resource",
              url: "https://github.com/SecretFoundation/awesome-secret",
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
              image: "/temp/icon-features-file.svg",
              title: "Secret Contract Dev Guide",
              description:
                "Get an IDE, know what functions to call, how to debug, and more.",
              urlTitle: "View resource",
              url: "https://docs.scrt.network/dev/developing-secret-contracts.html",
            },
            {
              image: "/temp/icon-features-file.svg",
              title: "Toolkit",
              description:
                "A set of Rust packages with common tools to develop Secret Contracts.",
              urlTitle: "View resource",
              url: "https://crates.io/crates/secret-toolkit",
            },
            {
              image: "/temp/icon-features-file.svg",
              title: "Secret Quickstarts",
              description:
                "Every step you need to create + deploy a Secret Contract in one place.",
              urlTitle: "View docs",
              url: "https://docs.scrt.network/dev/quickstart.html",
            },
            {
              image: "/temp/icon-features-file.svg",
              title: "Project Template",
              description:
                "Quickstart template to get started writing your own cosmwasm contracts.",
              urlTitle: "View resource",
              url: "https://github.com/scrtlabs/secret-template",
            },
            {
              image: "/temp/icon-features-file.svg",
              title: "Contract Privacy Model",
              description:
                "Learn about Secret’s privacy-preserving features and how you can use them.",
              urlTitle: "View resource",
              url: "https://docs.scrt.network/dev/privacy-model-of-secret-contracts.html",
            },
            
            {
              image: "/temp/icon-features-file.svg",
              title: "Fadroma",
              description:
                "Core workflows for smart contract development and deployment on Secret and Cosmos-based platforms.",
              urlTitle: "View resource",
              url: "https://github.com/hackbg/fadroma",
            },
            {
              image: "/temp/icon-features-file.svg",
              title: "Secret NFT Guide",
              description:
                "Mint your first Secret NFT and learn how their privacy-preserving features work.",
              urlTitle: "View resource",
              url: "https://learn.figment.io/tutorials/create-your-first-secret-nft",
            },
            
            
          ],
        },
        {
          pathDescription: {
            id: 2,
            subtitle: "DEVELOPER PATHWAY",
            title: "Build Secret Apps",
            description:
              "Create an interface for your private dApp and connect it to a Secret Contract.",
          },
          items: [
            {
              image: "/temp/icon-features-file.svg",
              title: "GripTapeJS",
              description:
                "Speed up your Secret App interface building with this development framework.",
              urlTitle: "View resource",
              url: "https://griptapejs.com/",
            },
            {
              image: "/temp/icon-features-file.svg",
              title: "Light Client",
              description:
                "Let your app interact with nodes on the network using Secret CLI.",
              urlTitle: "View resource",
              url: "https://docs.scrt.network/cli/install-cli.html",
            },
            {
              image: "/temp/icon-features-file.svg",
              title: "Secret Python",
              description:
                "Flex your Python skills to build and test components of Secret Apps.",
              urlTitle: "View resource",
              url: "https://pypi.org/project/secret-sdk/ ",
            },
            {
              image: "/temp/icon-features-file.svg",
              title: "Figment Learn",
              description:
                "An easy step-by-step tutorial to set up your first contract, made by our partner, Figment.",
              urlTitle: "View resource",
              url: "https://learn.figment.io/protocols/secret",
            },
            {
              image: "/temp/icon-features-file.svg",
              title: "SecretJS",
              description:
                "Connect your JavaScript interface to a Secret Contract with the SecretJS library.",
              urlTitle: "View template",
              url: "https://github.com/scrtlabs/Secret.js",
            },
            {
              image: "/temp/icon-features-file.svg",
              title: "Polar",
              description:
                "Project management tooling and smart contract development framework.",
              urlTitle: "View resource",
              url: "https://docs.arufaresearch.com/",
            },
          ],
        },
      ],
    };
  },
  computed: {
    sectionContent() {
      const content = this.pathway.filter((it) => {
        const filtered = it.pathDescription.id === Number(this.pathId);
        return filtered;
      });
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

.page-developer-pathway {
  display: grid;
  grid-gap: 68px;
  margin-top: 68px;

  &__inside {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 4px;
    margin-bottom: 76px;

    @include respond-to("<=m") {
      grid-template-columns: 1fr;
    }
  }

  &__description {
    min-width: 360px;

    h6 {
      font-family: montserrat;
      text-transform: uppercase;
      font-weight: 500;
      font-size: var(--f-h5-text-size);
      color: var(--color-neutral-dark-mode-05);
      line-height: 24px;

      @include respond-to("<=s") {
        font-size: var(--f-h6-text-size);
      }
    }

    h3 {
      font-size: var(--f-h3-text-size);
      line-height: 1;
    }
    p {
      font-size: var(--paragraph-font-size-big);
      font-weight: 100;
    }

    @include respond-to(">=l") {
      padding-right: 28px;
      border-right: solid 1px var(--color-neutral-dark-mode-04);
    }
    @include respond-to("<=m") {
      border-bottom: solid 1px var(--color-neutral-dark-mode-04);
    }
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    row-gap: 24px;
    margin-left: 36px;

    @include respond-to("<=m") {
      margin: 16px 0;
    }

    @include respond-to("<=xs") {
      grid-template-columns: 1fr;
    }

    &__box {
      border-radius: 10px;
        padding: var(--f-gutter);
        margin: 0;

      &:hover{
        background: var(--color-neutral-dark-mode-04);
      }
      &__item {
        display: grid;
        grid-template-columns: 24px 1fr;
        grid-gap: 10px;
        padding: 0;
        margin: 0;

        &__icon{
          color: var(--color-developers-blue-01);
        }
        
        &__details {
          display: grid;
          grid-gap: 4px;
          h6 {
            font-size: var(--f-h5-text-size);
            margin-bottom: 0;
            color: white;
          }

          p {
            margin-bottom: 0;
          }

          a {
            padding: 0;
          }
        }
      }
    }
  }
}
</style>
