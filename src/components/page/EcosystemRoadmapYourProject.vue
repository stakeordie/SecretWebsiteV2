<template>
  <div class="ecosystem-roadmap-get-your-project">
    <h4>Get Your Project on the Roadmap!</h4>
    <p class="ecosystem-roadmap-get-your-project__message">
      Any developer can request to add their project to the roadmap. The project
      just needs to meet these criteria:
    </p>
    <ul>
      <li><p>Has a unique name or code name</p></li>
      <li><p>Has a clear value proposition for the network</p></li>
    </ul>
    <btn class="no-arrow" url="/ecosystem/submit-project">Submit Your Project</btn>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.ecosystem-roadmap-get-your-project {
  display: grid;
  gap: var(--f-gutter);
  *{margin: 0;}
  &__message {
    max-width: 710px;
  }
  ul {
      list-style-image: url(../../assets/icon-check.svg);
      padding-left: calc(var(--f-gutter-l) + 10px);
      margin-bottom: 0;
    li {
      margin-bottom: var(--f-gutter-xs);
        p {
          transform: translateY(-5px);
        }
    }
  }
  a {
    transform: translateY(-8px);
    min-width: 300px;
    margin: 0;
  }
}
</style>
