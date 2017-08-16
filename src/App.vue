<template>
  <v-app id="futbol-teams" toolbar>
    <v-navigation-drawer permanent clipped light>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
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
        <v-btn @click="getPlayers" primary dark>Click me</v-btn>
        <!--v-router-->
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
        { title: 'Players', icon: 'person' },
        { title: 'Teams', icon: 'group' }
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
