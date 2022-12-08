const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    //checks an array to see if all are of one mark
    function checkRow(row) {

      let xMarks = row.filter(square => {
        return square.toLowerCase() === 'x'
      })

      let oMarks = row.filter(square => {
        return square.toLowerCase() === 'o'
      })

      if (xMarks.length === grid.length) {
        return 'X';
      } else if (oMarks.length === grid.length) {
        return 'O';
      }
    }

    //checks each row for wins. Can be used with modified arrays to check vertical and diagnols
    function checkAllRows(grid) {
      for (let i = 0; i < grid.length; i++) {
        let winner = checkRow(grid[i]);
        if (winner === 'X' || winner ==='O'){
          return winner;
        };
      }
    }

    //take the grid and makes each column into rows by reflecting over main diagonal
    function turnColsToRows (grid) {
      let cols = [];
      let length = grid.length;

      for (let col = 0; col < length; col ++) {
        let column = [];

        for (let row = 0; row < length; row++) {
          column.push(grid[row][col]);
        }

        cols.push(column);
      }

      return cols;
    }

    //makes a 2D array of the diagnols
    function makeDiagnols (grid) {
      let diagonals = [];
      let length = grid.length;

      let diagonal = [];
      for (let col = 0, row = 0; col < length; col++, row++) {
        diagonal.push(grid[row][col]);
      }
      diagonals.push(diagonal);

      diagonal = [];
      for (let col = 0, row = length - 1; col < length; col++, row--) {
        diagonal.push(grid[row][col]);
      }
      diagonals.push(diagonal);

      return diagonals;
    }

    //checks for Ties
    function checkTies(grid) {
      //finds if there is an empty square and returns false if there is one and true if there isn't
      for (let row = 0; row < grid.length; row++){
        for (let col = 0; col < grid.length; col++){
          let square = grid[row][col];
          if (square === ' ') {
            return false;
          }
        }
      }
      return true;
    }

    //checks for horizontal wins
    let winner = checkAllRows(grid);
    if (winner) {
      return winner;
    }

    //checks each column for a win
    winner = checkAllRows(turnColsToRows(grid));
    if (winner) {
      return winner;
    }

    //checks the diaganols for a winner
    winner = checkAllRows(makeDiagnols(grid));
    if (winner) {
      return winner;
    }

    if (checkTies(grid)) {
      return 'T';
    } 


    return false;
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
