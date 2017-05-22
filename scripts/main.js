define([
    'jquery',
    'vue',
    'app/services/playerService'
], function ($, Vue, playerService) {
    'use strict';
    return {

        appVm: null, 
        selectedPlayerId: null,

        componentMap: {
            '/players': 'player-list',
            '/player' : 'player-detail'
        },

        init: function () {
            this.registerComponents();
            this.registerNavEvents();
            this.appVm = new Vue({
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
            var root = this;
            Vue.component('player-card', {
                template: '#player-card-template',
                props: ['fullName', 'teamName', 'idPlayer'],
                methods: {
                    navigateToPlayer: function(event) {
                        var route = event.currentTarget.href;
                        root.changeCurrentView(route);
                        return false;
                    }
                }
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

            Vue.component('player-detail', {
                template: '#player-detail-template',
                data: function() {
                    return {
                        player: {}
                    }
                },
                methods: {
                    savePlayer: function() {
                        //Not implemented in web api
                    },
                    deletePlayer: function() {
                        //Not implemented in web api
                    }
                },
                mounted: function() {
                    var self = this;
                    playerService.getPlayer(root.selectedPlayerId).done(function (playerData) {
                        self.$data.player = playerData;
                    });
                }
            })
        },

        registerNavEvents: function() {
            var self = this;
            $('nav.main-nav ul li').click(function (event){
                $('nav.main-nav ul li').removeClass('active');
                $(this).addClass('active');
                var route = $(this).children('a').attr('href');
                self.changeCurrentView(route);
                return false;
            });
        },

        changeCurrentView: function(route) {
            if (route.includes('/player/')) {
                var paramDelimiterIndex = route.lastIndexOf('/') ;
                this.selectedPlayerId = route.slice(paramDelimiterIndex + 1);
                route = '/player';
            }
            var targetComponent = this.componentMap[route];
            if(targetComponent) {
                this.appVm.changeView(targetComponent)
            }
        }
    }
});