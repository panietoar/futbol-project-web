<template>
  <v-app id="futbol-teams" toolbar>

    <v-navigation-drawer permanent clipped light>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title">
          
          <v-list-tile-action :href="item.route">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="blue" dark>
      <v-toolbar-title>Futbol Teams</v-toolbar-title>
    </v-toolbar>

    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>

  </v-app>
</template>

<script>

import playerService from './js/services/PlayerService.js';

export default {
  data() {
    return {
      items: [
        { title: 'Players', icon: 'person', route: '/' },
        { title: 'Teams', icon: 'group', route: '/teams' }
      ]
    }
  },
  methods: {
    getPlayers() {
      playerService.getPlayerList().then(function(response) {
        console.log(JSON.stringify(response.data));
      });
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
