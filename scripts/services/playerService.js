define([
    'jquery'
], function($, Vue) {
    'use strict';
    return {

        API_HOST: 'json', //api service url
        URLS: {
            player: '/api/player',
            playerList: '/api/player/lists'
        },

        getPlayerList: function(search) {
            return $.getJSON(this.API_HOST + this.URLS.playerList + (search ? search : '') + '.json');
        },

        getPlayer: function(player) {
            return $.getJSON(this.API_HOST + this.URLS.player + '/' + player.id + '.json');
        },

        createPlayer: function(player) {
            var request = $.ajax(this.API_HOST + this.URLS.player + '.json', {
                method: 'POST',
                dataType: 'json',
                data: JSON.stringify(player)
            });
        },

        savePlayer: function(player) {
            var request = $.ajax(this.API_HOST + this.URLS.player + '/' + player.id + '.json', {
                method: 'POST',
                dataType: 'json',
                data: JSON.stringify(player)
            });
        },

        deletePlayer: function(player) {
            var request = $.ajax(this.API_HOST + this.URLS.player + '/' + player.id + '.json', {
                method: 'DELETE',
                dataType: 'json'
            });
        }

    }
});