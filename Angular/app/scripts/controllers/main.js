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
    $scope.turnInProgress = false;
  	$scope.currentPlayer = GameFactory.getCurrentPlayer();
    $scope.currentPlayerMovable = [];
    var grabbedMonster = {};
  	$scope.playerOneMonsters = [];
  	$scope.playerTwoMonsters = [];
    $scope.playerOneGoal = {};
    $scope.playerTwoGoal = {};
  	$scope.legalMoves = []; // where you can drop a monster
    $scope.playerOneScore = 0;
    $scope.playerTwoScore = 0;

  	var drawSpaces = function() {
	  	$scope.playerOneMonsters = [];
	  	$scope.playerTwoMonsters = [];
	  	$scope.legalMoves = [];
  		gameBoard = GameFactory.getGameBoard();
  		for (var i = 0; i < gameBoard.length; i++) {
  			var space = gameBoard[i];
  			if (space.player === 1) {
  				$scope.playerOneMonsters.push(space);
  			} else if (space.player === 2) {
  				$scope.playerTwoMonsters.push(space);
  			} else if (space.player === 'p1goal') {
          $scope.playerOneGoal = space;
        } else if (space.player === 'p2goal') {
          $scope.playerTwoGoal = space;
        }
  		}
  	};

    $scope.grabMonster = function(space) {
      var audio = new Audio('../sounds/pick-up-piece.wav');
      audio.play();

      $scope.legalMoves = [];
      grabbedMonster = space;
      var playerGoal = $scope.currentPlayer === 1 ? 'p1goal' : 'p2goal';
      // find legal spaces
      for (var i = 0; i < space.adjacent.length; i++) {
        // better way to find key in array of dictionaries?
        for (var j = 0; j < gameBoard.length; j++) {
          if (gameBoard[j].id === space.adjacent[i]) {
            if (gameBoard[j].player === 0 || gameBoard[j].player === playerGoal) {
              $scope.legalMoves.push(gameBoard[j]);
            }
          }
        }
      }

      // if monster gets tapped again, put it down
    };

    $scope.moveMonster = function(space) {
      var audio = new Audio('../sounds/place-piece.wav');
      audio.play();
      // maybe double-check that move is valid?

      // push monster to playerOneMonsters or playerTwoMonsters
      // also check for goal
      if ($scope.currentPlayer === 1) {
        if (space.player == 'p1goal') {
          var audio = new Audio('../sounds/portal.wav');
          audio.play();
          console.log("score");
          GameFactory.playerScored(space);
        } else {
          $scope.playerOneMonsters.push(space);
        }
      } else if ($scope.currentPlayer === 2) {
        if (space.player == 'p2goal') {
          var audio = new Audio('../sounds/portal.wav');
          audio.play();
          console.log("score");
          GameFactory.playerScored(space);
        } else {
          $scope.playerTwoMonsters.push(space);
        }
      }
      $scope.playerOneScore = GameFactory.getScores().player1;
      $scope.playerTwoScore = GameFactory.getScores().player2;

      GameFactory.moveMonsterFromTo(grabbedMonster, space);

      var grabbedIndex = $scope.currentPlayerMovable.indexOf(grabbedMonster);
      if (grabbedIndex > -1) {
        $scope.currentPlayerMovable.splice(grabbedIndex, 1);
      }

      // ANIMATE!!

      $scope.legalMoves = [];

      // if there are no movable monsters left, endTurn()
      if ($scope.currentPlayerMovable.length <= 0) {
        $scope.endTurn();
      }

    };

    var startTurn = function() {
      // maybe display "end turn" button?
      $scope.turnInProgress = true;
      if ($scope.currentPlayer === 1) {
        $scope.currentPlayerMovable = $scope.playerOneMonsters;
        $scope.playerOneMonsters = [];
      } else if ($scope.currentPlayer === 2) {
        $scope.currentPlayerMovable = $scope.playerTwoMonsters;
        $scope.playerTwoMonsters = [];
      }
    };

    $scope.endTurn = function() {
      $scope.turnInProgress = false;
      GameFactory.changeTurn();
      $scope.currentPlayer = GameFactory.getCurrentPlayer();
      drawSpaces();
      startTurn();
    };

  	$scope.startGame = function() {
  		console.log("start");
      $scope.playerOneScore = 0;
      $scope.playerTwoScore = 0;
  		GameFactory.startNewGame();
  		$scope.gameInProgress = true;
  		$scope.currentPlayer = GameFactory.getCurrentPlayer();
  		drawSpaces();
      startTurn();
  	};

  });
