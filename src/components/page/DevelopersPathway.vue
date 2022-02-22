<template>
  <section class="page-developer-pathway">
    <div v-for="(path, index) in sectionContent" :key="index">
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

<style lang="scss"></style>
