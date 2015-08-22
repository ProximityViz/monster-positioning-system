'use strict';

/**
 * @ngdoc function
 * @name morningtonCrescentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the morningtonCrescentApp
 */
angular.module('morningtonCrescentApp')
  .controller('MainCtrl', function ($scope, GameFactory) {

  	var gameBoard = [];
  	$scope.gameInProgress = false;
  	$scope.currentPlayer = GameFactory.getCurrentPlayer();
  	$scope.playerOneSpaces = [];
  	$scope.playerTwoSpaces = [];
  	$scope.legalMoves = [];

  	// $scope.getPoint = function(e) {
  	// 	// add  ng-click="getPoint($event)" to board div to use

   //    var relativeX = (e.pageX);
   //    var relativeY = (e.pageY);

   //    alert(relativeX + "," + relativeY);
  	// }

  	var drawSpaces = function() {
	  	$scope.playerOneSpaces = [];
	  	$scope.playerTwoSpaces = [];
	  	$scope.legalMoves = [];
  		gameBoard = GameFactory.getGameBoard();
  		for (var i = 0; i < gameBoard.length; i++) {
  			var space = gameBoard[i];
  			if (space.player === 1) {
  				$scope.playerOneSpaces.push(space);
  			} else if (space.player === 2) {
  				$scope.playerTwoSpaces.push(space);
  			}
  		}
  		$scope.legalMoves = GameFactory.getCurrentLegalMoves();
  		console.log($scope.legalMoves);
  	};

  	$scope.startGame = function() {
  		console.log("start");
  		GameFactory.startNewGame();
  		$scope.gameInProgress = true;
  		$scope.currentPlayer = GameFactory.getCurrentPlayer();
  		drawSpaces();
  	};

  	$scope.makeAMove = function(space) {
  		GameFactory.makeAMove(space);
  		$scope.currentPlayer = GameFactory.getCurrentPlayer();
  		drawSpaces();
  	};

  });
