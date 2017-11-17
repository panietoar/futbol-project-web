<template>
    <div class="columns-8 centered">
      <div class="material-card player-card">
        <header>
          <img :src="defaultAvatar" width="200px" class="mt-4">
          <h3>{{ playerDetails.fullName }}</h3>
          <p class="id-number">{{ playerDetails.id }}</p>
        </header>
        <section class="player-info">
          <div>
            <i class="material-icons">email</i>
            <div class="player-data-field">
              <input v-if="editMode" type="text" class="value-input" v-model="playerDetails.email" >
              <label v-else class="value">{{ playerDetails.email }}</label>
              <label class="label">Email</label>  
            </div>
          </div>

          <div>
            <i class="material-icons">star</i>
            <div class="player-data-field">
              <input v-if="editMode" type="text" class="value-input" v-model="playerDetails.goals" >
              <label v-else class="value">{{ playerDetails.goals }}</label>
              <label class="label">Goals</label>  
            </div>
          </div>

          <div>
            <i class="material-icons">group</i>
            <div class="player-data-field">
              <input v-if="editMode" type="text" class="value-input" v-model="playerDetails.team.name" >
              <label v-else class="value">{{ playerDetails.team.name }}</label>
              <label class="label">Team</label>  
            </div>
          </div>

          <div>
            <i class="material-icons">directions_run</i>
            <div class="player-data-field">
              <input v-if="editMode" type="text" class="value-input" v-model="playerDetails.position.name" >
              <label v-else class="value">{{ playerDetails.position.name }}</label>
              <label class="label">Position</label>  
            </div>
          </div>

          <div>
            <i class="material-icons yellow-text">style</i>
            <div class="player-data-field">
              <input v-if="editMode" type="text" class="value-input" v-model="playerDetails.yellowCard" >
              <label v-else class="value">{{ playerDetails.yellowCard }}</label>
              <label class="label">Yellow Cards</label>  
            </div>
          </div>

          <div>
            <i class="material-icons red-text">style</i>
            <div class="player-data-field">
              <input v-if="editMode" type="text" class="value-input" v-model="playerDetails.redCard" >
              <label v-else class="value">{{ playerDetails.redCard }}</label>
              <label class="label">Red Cards</label>  
            </div>
          </div>
          
        </section>
      </div>
    </div>
</template>

<script>
import playerService from "../js/services/PlayerService.js";

export default {
  data() {
    return {
      id: this.$route.params.id,
      defaultAvatar: "public/img/avatar.png",
      playerDetails: {},
      editMode: false
    };
  },
  beforeMount() {
    var vm = this;
    playerService.getPlayer(this.$route.params.id).then(function(response) {
      vm.playerDetails = response.data;
    });
  }
};
</script>

<style scoped lang="scss">
$secondary-text-color: #888;

input.value-input {
  border-bottom: 2px solid $secondary-text-color;
  border-left: none;
  border-top: none;
  border-right: none;

  &:focus {
    border-bottom-color: #4285f4;
    outline: none;
  }
}

.player-card {
  header {
    text-align: center;
    border-bottom: 1px solid #eee;

    h3 {
      margin-bottom: 0.3em;
    }

    img {
      margin-top: 1em;
    }

    p.id-number {
      color: $secondary-text-color;
      font-style: italic;
      font-size: 0.95em;
      margin-top: 0;
    }
  }

  .player-info {
    padding: 2em 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    & > div {
      margin: 1.5em 0;
      width: 30%;
    }

    i {
      padding-left: 16px;
    }

    .player-data-field {
      display: inline-block;
      padding-left: 16px;

      label,
      input {
        display: block;
      }

      label {
        &.label {
          padding-top: 0.2em;
          font-size: 12px;
          color: $secondary-text-color;
        }
      }
    }
  }
}
</style>