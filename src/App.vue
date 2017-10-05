<template>
  <v-app id="futbol-teams">

    <v-navigation-drawer 
      persistent 
      clipped
      app
      disable-route-watcher
      v-model="navigationOpen">

      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title" :to="item.route">
          
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="blue" app dark fixed>
      <v-toolbar-side-icon @click.stop="toggleNavigation"></v-toolbar-side-icon>
      <v-toolbar-title>Futbol Teams</v-toolbar-title>
    </v-toolbar>

    <main>
      <v-content>
        <v-container fluid>
          <transition name="custom-classes-transition" enter-active-class="animated fadeIn" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-container>
      </v-content>
    </main>

  </v-app>
</template>

<script>

export default {
  data() {
    return {
      items: [
        { title: 'Players', icon: 'person', route: '/' },
        { title: 'Teams', icon: 'group', route: '/teams' }
      ],
      navigationOpen: false
    }
  },
  methods: {
    toggleNavigation() {
      this.navigationOpen = !this.navigationOpen;
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
