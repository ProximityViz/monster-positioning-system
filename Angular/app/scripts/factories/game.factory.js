'use strict';

angular.module('morningtonCrescentApp.factories', [])

.factory('GameFactory', function() {

	// there should be a game piece class

	var gameBoard = [];
	var currentPlayer = 0;
	var playerOneScore = 0;
	var playerTwoScore = 0;

	var createGoals = function() {		
		currentPlayer = 2;
		gameBoard[Math.floor(Math.random() * gameBoard.length)].player = 'p2goal';
		currentPlayer = 1;
		var openSpaces = getOpenSpaces();
		openSpaces[Math.floor(Math.random() * openSpaces.length)].player = 'p1goal';
	};

	var startNewGame = function() {
		gameBoard = [{"id": 1,"adjacent": [2],"coordinates": [178,631],"player": 0},{"id": 2,"adjacent": [1,3],"coordinates": [222,631],"player": 0},{"id": 3,"adjacent": [2,4],"coordinates": [267,631],"player": 0},{"id": 4,"adjacent": [3,5,57],"coordinates": [325,641],"player": 0},{"id": 5,"adjacent": [4,6],"coordinates": [367,641],"player": 0},{"id": 6,"adjacent": [5,7],"coordinates": [399,641],"player": 0},{"id": 7,"adjacent": [6,8],"coordinates": [431,641],"player": 0},{"id": 8,"adjacent": [7,9],"coordinates": [465,641],"player": 0},{"id": 9,"adjacent": [8,10,51],"coordinates": [513,593],"player": 0},{"id": 10,"adjacent": [9,11],"coordinates": [628,530],"player": 0},{"id": 11,"adjacent": [10,12],"coordinates": [663,530],"player": 0},{"id": 12,"adjacent": [11,13],"coordinates": [729,530],"player": 0},{"id": 13,"adjacent": [12,14,55,88],"coordinates": [764,592],"player": 0},{"id": 14,"adjacent": [13,15],"coordinates": [764,637],"player": 0},{"id": 15,"adjacent": [14,16],"coordinates": [765,673],"player": 0},{"id": 16,"adjacent": [15,17,50,54,67],"coordinates": [857,711],"player": 0},{"id": 17,"adjacent": [16,18],"coordinates": [909,711],"player": 0},{"id": 18,"adjacent": [17,19],"coordinates": [955,711],"player": 0},{"id": 19,"adjacent": [18,20],"coordinates": [998,704],"player": 0},{"id": 20,"adjacent": [19,21],"coordinates": [1023,678],"player": 0},{"id": 21,"adjacent": [20,22,38],"coordinates": [1073,667],"player": 0},{"id": 22,"adjacent": [21,23],"coordinates": [1157,633],"player": 0},{"id": 23,"adjacent": [22,24],"coordinates": [1185,607],"player": 0},{"id": 24,"adjacent": [23,25],"coordinates": [1212,579],"player": 0},{"id": 25,"adjacent": [24,26],"coordinates": [1239,551],"player": 0},{"id": 26,"adjacent": [25],"coordinates": [1267, 525],"player": 0},{"id": 27,"adjacent": [28],"coordinates": [45,381],"player": 0},{"id": 28,"adjacent": [27,29],"coordinates": [67,403],"player": 0},{"id": 29,"adjacent": [28,30],"coordinates": [89,425],"player": 0},{"id": 30,"adjacent": [29,31],"coordinates": [110,448],"player": 0},{"id": 31,"adjacent": [30,32],"coordinates": [133,470],"player": 0},{"id": 32,"adjacent": [31,33],"coordinates": [156,492],"player": 0},{"id": 33,"adjacent": [32,34],"coordinates": [178,514],"player": 0},{"id": 34,"adjacent": [33,35],"coordinates": [201,537],"player": 0},{"id": 35,"adjacent": [34,36],"coordinates": [223,560],"player": 0},{"id": 36,"adjacent": [35,37],"coordinates": [245,583],"player": 0},{"id": 37,"adjacent": [4,36],"coordinates": [267,605],"player": 0},{"id": 38,"adjacent": [21,39],"coordinates": [1204,678],"player": 0},{"id": 39,"adjacent": [38,40],"coordinates": [1239,678],"player": 0},{"id": 40,"adjacent": [39,41],"coordinates": [1273,678],"player": 0},{"id": 41,"adjacent": [40,42],"coordinates": [1306,678],"player": 0},{"id": 42,"adjacent": [41],"coordinates": [1339,678],"player": 0},{"id": 43,"adjacent": [44],"coordinates": [490,1195],"player": 0},{"id": 44,"adjacent": [43,45],"coordinates": [549,1123],"player": 0},{"id": 45,"adjacent": [44,46,53],"coordinates": [731,1085],"player": 0},{"id": 46,"adjacent": [45,47],"coordinates": [731,1034],"player": 0},{"id": 47,"adjacent": [46,48],"coordinates": [730,998],"player": 0},{"id": 48,"adjacent": [47,49],"coordinates": [682,969],"player": 0},{"id": 49,"adjacent": [48,50],"coordinates": [655,919],"player": 0},{"id": 50,"adjacent": [16,49,51],"coordinates": [656,858],"player": 0},{"id": 51,"adjacent": [9,50],"coordinates": [590,768],"player": 0},{"id": 52,"adjacent": [53],"coordinates": [741,1196],"player": 0},{"id": 53,"adjacent": [45,52],"coordinates": [742,1142],"player": 0},{"id": 54,"adjacent": [16,55],"coordinates": [856,639],"player": 0},{"id": 55,"adjacent": [13,54,56,94],"coordinates": [855,590],"player": 0},{"id": 56,"adjacent": [55,57],"coordinates": [856,540],"player": 0},{"id": 57,"adjacent": [56,58],"coordinates": [856,496],"player": 0},{"id": 58,"adjacent": [57,59],"coordinates": [820,455],"player": 0},{"id": 59,"adjacent": [58,60],"coordinates": [785,413],"player": 0},{"id": 60,"adjacent": [59,61],"coordinates": [820,380],"player": 0},{"id": 61,"adjacent": [60,62,89,98],"coordinates": [899,354],"player": 0},{"id": 62,"adjacent": [61,63],"coordinates": [945,306],"player": 0},{"id": 63,"adjacent": [62,64],"coordinates": [973,278],"player": 0},{"id": 64,"adjacent": [63,65],"coordinates": [1000,251],"player": 0},{"id": 65,"adjacent": [64],"coordinates": [1029,221],"player": 0},{"id": 67,"adjacent": [16,68],"coordinates": [904,834],"player": 0},{"id": 68,"adjacent": [67,69],"coordinates": [939,834],"player": 0},{"id": 69,"adjacent": [68,70],"coordinates": [1005,860],"player": 0},{"id": 70,"adjacent": [69,71],"coordinates": [1029,881],"player": 0},{"id": 71,"adjacent": [70,72],"coordinates": [1062,903],"player": 0},{"id": 72,"adjacent": [71,73],"coordinates": [1108,894],"player": 0},{"id": 73,"adjacent": [72,74],"coordinates": [1136,922],"player": 0},{"id": 74,"adjacent": [73],"coordinates": [1164,950],"player": 0},{"id": 75,"adjacent": [76],"coordinates": [320,129],"player": 0},{"id": 76,"adjacent": [75,77],"coordinates": [353,163],"player": 0},{"id": 77,"adjacent": [76,78],"coordinates": [388,199],"player": 0},{"id": 78,"adjacent": [77,79],"coordinates": [421,233],"player": 0},{"id": 79,"adjacent": [78,80],"coordinates": [456,266],"player": 0},{"id": 80,"adjacent": [79,81],"coordinates": [490,300],"player": 0},{"id": 81,"adjacent": [80,82],"coordinates": [524,333],"player": 0},{"id": 82,"adjacent": [81,83],"coordinates": [557,367],"player": 0},{"id": 83,"adjacent": [82,84],"coordinates": [579,382],"player": 0},{"id": 84,"adjacent": [83,85],"coordinates": [610,388],"player": 0},{"id": 85,"adjacent": [84,86],"coordinates": [631,408],"player": 0},{"id": 86,"adjacent": [85,87],"coordinates": [656,432],"player": 0},{"id": 87,"adjacent": [86,88],"coordinates": [680,457],"player": 0},{"id": 88,"adjacent": [87,13],"coordinates": [699,486],"player": 0},{"id": 89,"adjacent": [61,90],"coordinates": [810,264],"player": 0},{"id": 90,"adjacent": [89,91],"coordinates": [796,178],"player": 0},{"id": 91,"adjacent": [90,92],"coordinates": [797,139],"player": 0},{"id": 92,"adjacent": [91,93],"coordinates": [797,101],"player": 0},{"id": 93,"adjacent": [92],"coordinates": [797,63],"player": 0},{"id": 94,"adjacent": [55,95],"coordinates": [915,591],"player": 0},{"id": 95,"adjacent": [94,96],"coordinates": [976,564],"player": 0},{"id": 96,"adjacent": [95,97],"coordinates": [977,526],"player": 0},{"id": 97,"adjacent": [96,98],"coordinates": [977,486],"player": 0},{"id": 98,"adjacent": [61,97],"coordinates": [976,446],"player": 0}];
		createGoals();
		placeRandomPieceForCurrentPlayer();
	};

	var getOpenSpaces = function() {
		var openSpaces = [];
		for (var i = 0; i < gameBoard.length; i++) {
			var space = gameBoard[i];
			if (space.player === 0) {
				openSpaces.push(space);
			}
		}

		return openSpaces;
	};

	var getCurrentPlayersMonsters = function() {
		var playerMonsters = [];
		for (var i = 0; i < gameBoard.length; i++) {
			var space = gameBoard[i];
			if (space.player === currentPlayer) {
				playerMonsters.push(space);
			}
		}

		return playerMonsters;
	};

	// var getCurrentLegalMoves = function() {
	// 	var legalMoves = [];
	// 	// get spaces adjacent to one (or more) of the player's monsters
	// 	var playerMonsters = getCurrentPlayersMonsters();
	// 	var adjacentToMonster = [];
	// 	for (var i = 0; i < playerMonsters.length; i++) {
	// 		var monster = playerMonsters[i];
	// 		for (var j = 0; j < monster.adjacent.length; j++) {
	// 			var spaceAdjacentToMonster = monster.adjacent[j];
	// 			// only add each space once
	// 			if (adjacentToMonster.indexOf(spaceAdjacentToMonster) === -1) {
	// 				adjacentToMonster.push(spaceAdjacentToMonster);
	// 			}
	// 		}
	// 	}
	// 	// see if those spaces are open
	// 	for (var i = 0; i < adjacentToMonster.length; i++) {
	// 		var spaceAdjacentToMonster = adjacentToMonster[i];
	// 		// there must be a better way to find a key:value pair
	// 		for (var j = 0; j < gameBoard.length; j++) {
	// 			if (gameBoard[j].id === spaceAdjacentToMonster && gameBoard[j].player !== currentPlayer) {
	// 				legalMoves.push(gameBoard[j]);
	// 			}
	// 		}
	// 	}

	// 	return legalMoves;
	// };

	var placeRandomPieceForCurrentPlayer = function() {
		var openSpaces = getOpenSpaces();
		var randomSpace = openSpaces[Math.floor(Math.random() * openSpaces.length)];
		randomSpace.player = currentPlayer;
	};

	var moveMonsterFromTo = function(from, to) {
		for (var i = 0; i < gameBoard.length; i++) {
			if (gameBoard[i].id === from.id) {
				gameBoard[i].player = 0;
			}
			if (gameBoard[i].id === to.id) {
				gameBoard[i].player = currentPlayer;
			}
		}
		// check for goal
	};

	var changeTurn = function() {

		// change current player
		currentPlayer = currentPlayer === 1 ? 2 : 1;

		// make a random move for new current player
		placeRandomPieceForCurrentPlayer();

	};

	var playerScored = function(space) {
		if (currentPlayer === 1) {
			playerOneScore++;
			// find space on game board and turn it back to the goal
			for (var i = 0; i < gameBoard.length; i++) {
				if (gameBoard[i].id === space.id) {
					gameBoard[i].player = 'p1goal';
				}
			};
		} else if (currentPlayer === 2) {
			playerTwoScore++;
			for (var i = 0; i < gameBoard.length; i++) {
				if (gameBoard[i].id === space.id) {
					gameBoard[i].player = 'p2goal';
				}
			};
		}
	};

	var getScores = function() {
		return {'player1': playerOneScore, 'player2': playerTwoScore};
	};

	var checkForWinOrStalemate = function() {

	};

	return {
		startNewGame: startNewGame,
		getGameBoard: function() {
			return gameBoard;
		},
		getCurrentPlayer: function() {
			return currentPlayer;
		},
		getCurrentPlayersMonsters: getCurrentPlayersMonsters, // might not use these outside the factory
		// getCurrentLegalMoves: getCurrentLegalMoves,
		placeRandomPieceForCurrentPlayer: placeRandomPieceForCurrentPlayer,
		moveMonsterFromTo: moveMonsterFromTo,
		playerScored: playerScored,
		getScores: getScores,
		changeTurn: changeTurn
	};

});
