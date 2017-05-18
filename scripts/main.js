define([
    'jquery',
    'vue',
    'app/services/playerService'
], function($, Vue, playerService) {
    'use strict';
    return {

        init: function() {
            this.registerComponents();
            playerService.getPlayerList().done(this.processData);
        },

        processData: function(data) {

            var playersData = {
                players: data
            };

            var playersView = new Vue({
                el: '#player-list',
                data: function() {
                    return playersData;
                },
                methods: {
                    searchPlayer: function(event) {
                        //Not implemented in web api
                    }
                }
            });
        },

        registerComponents: function() {
            Vue.component('player-card', {
                template: '#player-card-template',
                props: ['fullName', 'teamName', 'idPlayer']
            });
        }
    }
});