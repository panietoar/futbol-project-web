define([
    'jquery',
    'vue',
    'app/services/playerService'
], function ($, Vue, playerService) {
    'use strict';
    return {

        appVm: null, 

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

            Vue.component('player-detail', {
                template: '<h2>Hola mundo</h2>'
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
            var targetComponent = this.componentMap[route];
            if(targetComponent) {
                this.appVm.changeView(targetComponent)
            }
        }
    }
});