define([
    'jquery',
    'vue',
    'app/services/playerService'
], function ($, Vue, playerService) {
    'use strict';
    return {

        init: function () {
            this.registerComponents();

            var playersView = new Vue({
                el: '#app',
                data: {
                    currentView: 'player-list'
                },
                
                methods: {
                    changeView: function (viewId) {
                        this.currentView = viewId;
                    }
                }
                
            });
        },

        registerComponents: function () {
            Vue.component('player-card', {
                template: '#player-card-template',
                props: ['fullName', 'teamName', 'idPlayer']
            });

            Vue.component('player-list', {
                template: '#player-list-template',
                data: function () {
                    return {
                        players: []
                    };
                },
                methods: {
                    searchPlayer: function (event) {
                        //Not implemented in web api
                    }
                },
                mounted: function () {
                    var self = this;
                    playerService.getPlayerList().done(function name(playersData) {
                        self.$data.players = playersData;
                    });
                }
            });
        }
    }
});