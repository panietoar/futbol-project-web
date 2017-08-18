<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <div class="text-xs-center">
          <img :src="defaultAvatar" width="200px" class="mt-4">
        </div>
        <v-layout column class="media">
          <v-card-title class="gray--text">
            <div class="display-1 pl-5 pt-3">{{ playerDetails.fullName}}</div>
          </v-card-title>
        </v-layout>
        <v-list two-line>
          <v-list-tile>

            <v-list-tile-action>
              <v-icon class="indigo--text">mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ playerDetails.email }}</v-list-tile-title>
              <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="indigo--text">group</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ playerDetails.teamName }}</v-list-tile-title>
              <v-list-tile-sub-title>Team</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="indigo--text">directions_run</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ playerDetails.position }}</v-list-tile-title>
              <v-list-tile-sub-title>Position</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="indigo--text">looks_one</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ playerDetails.shirt }}</v-list-tile-title>
              <v-list-tile-sub-title>Shirt</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="indigo--text">fa-futbol-o</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ playerDetails.goals }}</v-list-tile-title>
              <v-list-tile-sub-title>Goals</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="indigo--text">fa-warning</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ playerDetails.fouls }}</v-list-tile-title>
              <v-list-tile-sub-title>Fouls</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="yellow--text text--darken-2">style</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ playerDetails.yellowCard }}</v-list-tile-title>
              <v-list-tile-sub-title>Yellow Cards</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon class="red--text">style</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ playerDetails.redCard }}</v-list-tile-title>
              <v-list-tile-sub-title>Red Cards</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import playerService from '../js/services/PlayerService.js';

  export default {
    data() {
      return {
        id: this.$route.params.id,
        defaultAvatar: "public/img/avatar.png",
        playerDetails: {}
      };
    },
    beforeMount() {
      var vm = this;
      playerService.getPlayer(this.$route.params.id).then(function (response) {
        vm.playerDetails = response.data;
      });
    }

  }

</script>

<style scoped>
</style>