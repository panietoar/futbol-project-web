import axios from 'axios';

export default {

    API_HOST: 'public/json', //api service url
    URLS: {
        player: '/api/player',
        playerList: '/api/player/lists'
    },

    getPlayerList: function () {
        return axios.get(this.API_HOST + this.URLS.playerList + '.json');
    },

    getPlayer: function () {
        return axios.get(this.API_HOST + this.URLS.player + '/' + player.id + '.json');
    },
/*
    createPlayer: function (player) {
        var request = axios.ajax(this.API_HOST + this.URLS.player + '.json', {
            method: 'POST',
            dataType: 'json',
            data: JSON.stringify(player)
        });
    },

    savePlayer: function (player) {
        var request = axios.ajax(this.API_HOST + this.URLS.player + '/' + player.id + '.json', {
            method: 'POST',
            dataType: 'json',
            data: JSON.stringify(player)
        });
    },

    deletePlayer: function (player) {
        var request = axios.ajax(this.API_HOST + this.URLS.player + '/' + player.id + '.json', {
            method: 'DELETE',
            dataType: 'json'
        });
    }*/

}