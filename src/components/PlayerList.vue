<template>
  <div>
    <h3>All Players</h3>
    <v-layout row>
      <v-flex sm4 xs6 offset-xs5 offset-sm8>
        <v-text-field label="search" v-model="searchTerm" append-icon="search" type="text" class="text-xs-right">
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-list two-line class="elevation-3">
      <template v-for="player in playerList">
        <v-list-tile avatar :key="player.id" :to="{ name: 'playerDetail', params: { id: player.id } }">
          <v-list-tile-avatar>
            <img :src="player.avatar ? player.avatar : defaultAvatar"></v-list-tile-avatar>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="player.fullName"></v-list-tile-title>
            <v-list-tile-sub-title v-text="player.teamName"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>

<script>
  import playerService from '../js/services/PlayerService.js';

  export default {
    data() {
      return {
        players: [],
        defaultAvatar: "public/img/avatar.png",
        searchTerm: ''
      };
    },
    beforeMount() {
      var vm = this;
      playerService.getPlayerList().then(function (response) {
        vm.players = response.data;
      });
    },
    computed: {
      playerList() {
        return this.players.filter(player => {
          return player.fullName.match(this.searchTerm)
                  || player.teamName.match(this.searchTerm);
        });
      }
    }
  }

</script>

<style lang="sass" scoped>

</style>