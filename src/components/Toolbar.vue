<template>
  <header class="toolbar">
    <i class="material-icons" @click.prevent="toggleNavigation">menu</i>
    <h2 class="app-title">{{ title }}</h2>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Football Project'
      }
    },
    methods: {
      toggleNavigation() {
        this.$emit('toggle');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .toolbar {
    $toolbarColor: #0082FF;
    background-color: $toolbarColor;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, .38);

    i, h2 {
      display: inline-block;
      vertical-align: middle;
      color: white;
    }

    i {
      margin-left: 20px;
      cursor: pointer;
    }

    h2 {
      margin: 0;
      padding: 0.5em 20px;

    }
  }
</style>
