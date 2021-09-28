<template>
  <div>
    <button @click="deploy">DEPLOY</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    deploy() {
      fetch('https://api.render.com/deploy/srv-c25kv3bonmle4k346bcg?key=QA429JBAgc0')
    }
  }
}
</script>

<style>

</style>