<template>
  <div>
    <span v-for="item in routeArray">{{item}}   /    </span>
  </div>
</template>

<script>
import { METHODS } from 'http';


export default {
  data() {
    return {
      routeUrls: Array()
    }
  },
  props: {
    route: {
      type: String,
      required: false,
    },
  },
  computed: {
    routeArray() {
      return this.route.split("/");
    } 
  },
  methods: {
    
  }
};
</script>