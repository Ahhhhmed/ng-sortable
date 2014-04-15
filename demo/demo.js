
(function() {
    'use strict';

    angular.module('demoApp', ['ui.sortable'])
        .controller('demoController', ['$scope', function($scope) {

            $scope.board = {"name":"Kanban Board","numberOfColumns":3,
                "columns":[
                   // {"name":"Ideas","cards":[{"name":"Come up with a POC for new Project"},{"name":"Design new framework for reporting module"}]},
                    {"name":"Not started","cards":[{"name":"Explore new IDE for Development"},{"name":"Get new resource for new Project"}]},
                    {"name":"In progress","cards":[{"name":"Develop ui for tracker module"},{"name":"Develop backend for plan module"}]},
                    {"name":"Done","cards":[{"name":"Test user module"},{"name":"End to End Testing for user group module"},{"name":"CI for user module"}]}]};

            $scope.sortOptions = {

                orderChanged: function (scope, sourceItem) {

                }
            };

            $scope.remove = function(scope) {
                scope.removeItem();
            }
        }]);
})();