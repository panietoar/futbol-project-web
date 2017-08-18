<template>
  <div>
      <h1>Player {{ id }} details</h1>
      <router-link to="/">Ir a lista</router-link>
  </div>
</template>

<script>

import playerService from '../js/services/PlayerService.js';

export default {
  data() {
    return {
      id: this.$route.params.id
    };
  }
}
</script>

<style>
  
</style>
