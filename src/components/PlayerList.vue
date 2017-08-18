<template>
  <div>
    <h3>All Players</h3>
    <v-list two-line 
          class="elevation-3">
      <template v-for="player in players" >
        <v-list-tile avatar 
          :key="player.id" 
          :to="{ name: 'playerDetail', params: { id: player.id } }">
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
  data(){
    return {
      players: [],
      defaultAvatar: "public/img/avatar.png"
    };
  },
  beforeMount() {
    var vm = this;
    playerService.getPlayerList().then(function(response) {
      vm.players = response.data;
    });
  },
  methods: {
    getPlayers() {
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
