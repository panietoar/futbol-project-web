<template>
  <div>
    <app-navigation :open="navigationClosed"></app-navigation>

      <div class="container" :class="{expanded: navigationClosed}">

        <app-toolbar @toggle="toggleNavigation"></app-toolbar>

        <main>
          <transition name="custom-classes-transition" enter-active-class="animated fadeIn" mode="out-in">
            <router-view></router-view>
          </transition>
        </main>
      </div>

  </div>
</template>

<script>

import Navigation from './components/Navigation.vue';
import Toolbar from './components/Toolbar.vue';

export default {
  components: {
    appNavigation: Navigation,
    appToolbar: Toolbar
  },
  data() {
    return {
      navigationClosed: true
    }
  },
  methods: {
    toggleNavigation() {
        this.navigationClosed = !this.navigationClosed;
    }
  }
}
</script>

<style lang="scss">

  $font-color: #444;

  body {
    font-family: Arial, Helvetica, sans-serif;
    color: $font-color;
    background-color: #EEE;
  }

  a {
    color: $font-color;
  }

  i {
    color: #888;
  }

  .container {
    width: 75%;
    float: right;
    transition: width 0.5s;
  }

  .expanded {
    width: 100%;
  }

  .columns-8 { 
      width: 66.66%;
  }

  .centered {
    margin: auto;
  }

  .center-text {
    text-align: center;
  }

  .material-card {
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, .38);
    background-color: white;
    margin: 2em 1em;
  }

  .yellow-text {
    color: gold;
  }

  .red-text {
    color: red;
  }

</style>
