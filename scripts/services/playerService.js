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

        getPlayerList: function() {
            return $.getJSON(this.API_HOST + this.URLS.playerList + '.json');
        },

        getPlayer: function() {
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