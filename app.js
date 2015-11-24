/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */


'use strict';

// Declare app level module which depends on other modules
angular.module('demoApp', [
    'ngRoute',
    'as.sortable',
    'ui.bootstrap'
  ]).
  config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false); // testing issue #144
  }]).
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'views/kanban.html'});
    $routeProvider.when('/kanban', {templateUrl: 'views/kanban.html', controller: 'KanbanController'});
    $routeProvider.when('/sprint', {templateUrl: 'views/sprint.html', controller: 'SprintController'});
    $routeProvider.when('/clone', {templateUrl: 'views/clone.html', controller: 'CloneController'});
      $routeProvider.when('/horizontal', {templateUrl: 'views/horizontal.html', controller: 'HorizontalController'});
    //$routeProvider.otherwise({redirectTo: '/'});
  }]).
  controller('DemoController', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      var active = false;
      if ($location.$$path.indexOf(viewLocation) !== -1) {
        active = true;
      }
      return active;
    };

  }]);
