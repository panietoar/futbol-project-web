define([
    'jquery',
    'vue',
    'app/services/playerService'
], function($, Vue, futbolService) {
    'use strict';
    return {

        init: function() {
            this.registerComponents();
            futbolService.getPlayerList().done(this.processData);
        },

        processData: function(data) {

            var playersData = {
                players: data
            };

            var playersView = new Vue({
                el: '#player-list',
                data: function() {
                    return playersData;
                }
            });
        },

        registerComponents: function() {
            Vue.component('player-card', {
                template: '#player-card-template',
                props: ['fullName', 'idTeam', 'position', 'yellowCard', 'redCard', 'idPlayer']
            });
        }
    }
});