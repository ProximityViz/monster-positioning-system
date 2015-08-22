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
  	$scope.emptySpaces = [];
  	$scope.playerOneSpaces = [];
  	$scope.playerTwoSpaces = [];

  	$scope.getPoint = function(e) {
  		// add  ng-click="getPoint($event)" to board div to use

      var relativeX = (e.pageX);
      var relativeY = (e.pageY);

      alert(relativeX + "," + relativeY);
  	}

  	var drawSpaces = function() {
  		gameBoard = GameFactory.getGameBoard();
  		for (var i = 0; i < gameBoard.length; i++) {
  			var space = gameBoard[i];
  			if (space.player === 0) {
  				$scope.emptySpaces.push(space);
  			} else if (space.player === 1) {
  				$scope.playerOneSpaces.push(space);
  			} else if (space.player === 2) {
  				$scope.playerTwoSpaces.push(space);
  			}
  		}
  	};

  	$scope.startGame = function() {
  		console.log("start");
  		GameFactory.startNewGame();
  		$scope.gameInProgress = true;
  		$scope.currentPlayer = GameFactory.getCurrentPlayer();
  		console.log(GameFactory.getCurrentLegalClicks());
  		drawSpaces();
  	};

  });
