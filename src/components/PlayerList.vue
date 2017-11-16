<template>
    <div class="columns-8 centered">
      <h3>Players</h3>

      <table class="material-card">
        <thead>
          <tr class="table-header">
            <th v-for="header in headers" :key="header.value">
              {{ header.text }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="player in players" :key="player.id" @click="viewPlayer(player.id)">
            <td class="center-text"><img width="40" :src="player.avatar ? player.avatar : defaultAvatar" alt="Player avatar"></td>
            <td>{{ player.fullName }}</td>
            <td>{{ player.id }}</td>
            <td>{{ player.team.name }}</td>
          </tr>
        </tbody>
      </table>

    </div>

</template>

<script>
import playerService from "../js/services/PlayerService.js";

export default {
  data() {
    return {
      headers: [
        {},
        {
          text: "Full Name",
          value: "fullName",
          align: "center"
        },
        {
          text: "Id",
          value: "id",
          align: "center"
        },
        {
          text: "Team",
          value: "team",
          align: "center"
        }
      ],
      players: [],
      defaultAvatar: "public/img/avatar.png"
    };
  },
  methods: {
    viewPlayer(id) {
      this.$router.push({ name: 'playerDetail', params: { id }})
    }
  },
  beforeMount() {
    var vm = this;
    playerService.getPlayerList().then(function(response) {
      vm.players = response.data;
    });
  }
};
</script>

<style lang="scss" scoped>

table {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;

  thead {
    tr.table-header {
        font-size: 12px;
        color: rgba(0, 0, 0, .54);
        text-align: left;
        line-height: 2;
    }
  }

  tbody {

    tr {
      border-top: 1px solid #DFDFDF;
      cursor: pointer;

      td {
        color: rgba(0, 0, 0, .87);
        font-size: 13px;

        img {
          transform: translateY(5%);
        }

      }

      &:hover {
        background-color: #EEE;
      }
    }
  }
}

</style>