<template>
  <div>
    <ul>
      <li v-for="secretAgent in $static.secretAgents.edges" :key="secretAgent.node.last_name">
        {{secretAgent.node.first_name}} {{secretAgent.node.last_name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<static-query>
  query{
    secretAgents: allStrapiSecretAgents {
      edges{
        node{
          first_name
          last_name
          level
        }
      }
    }
  }
</static-query>

<style>

</style>