/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

angular.module('demoApp').controller('KanbanController', ['$scope', 'BoardService', 'BoardDataFactory', '$timeout', function ($scope, BoardService, BoardDataFactory, $timeout) {

  $scope.kanbanBoard = BoardService.kanbanBoard(BoardDataFactory.kanban);

  $scope.asd = true;

  function Drndaj(){
    $timeout(function () {
      $scope.asd = !$scope.asd;
      console.log($scope.asd);
      Drndaj();
    }, 3000);
  }
  Drndaj();


  $scope.kanbanSortOptions = {

    //restrict move across columns. move only within column.
    /*accept: function (sourceItemHandleScope, destSortableScope) {
     return sourceItemHandleScope.itemScope.sortableScope.$id === destSortableScope.$id;
     },*/
    itemMoved: function (event) {
      event.source.itemScope.modelValue.status = event.dest.sortableScope.$parent.column.name;
    },
    orderChanged: function (event) {
    },
    containment: '#board',
    allowOverflow: true
  };

  $scope.removeCard = function (column, card) {
    BoardService.removeCard($scope.kanbanBoard, column, card);
  };

  $scope.addNewCard = function (column) {
    BoardService.addNewCard($scope.kanbanBoard, column);
  }
}]);

