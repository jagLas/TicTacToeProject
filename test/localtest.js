const { expect } = require('chai');
const { checkWin } = require('../class/ttt.js');

const TTT = require("../class/ttt.js");


let grid;

    grid = [[' ',' ',' '],
            [' ',' ',' '],
            [' ',' ',' ']]


//recognizes empty grids
// console.log(checkWin(grid));




// //   it('recognizes horizontal wins', function () {

//     grid = [['X','X','X'],
//             [' ',' ',' '],
//             [' ',' ',' ']]
// console.log(grid)
// debugger
// console.log(TTT.checkWin(grid))

// //     expect(TTT.checkWin(grid)).to.equal('X');

//     grid = [[' ',' ',' '],
//             ['O','O','O'],
//             [' ',' ',' ']]

// console.log(grid)
// console.log(TTT.checkWin(grid))
// //     expect(TTT.checkWin(grid)).to.equal('O');


//     grid = [[' ',' ',' '],
//             [' ',' ',' '],
//             ['X','X','X']]


// console.log(grid)
// console.log(TTT.checkWin(grid))

//     expect(TTT.checkWin(grid)).to.equal('X');




//   it('recognizes vertical wins', function () {

//     grid = [['X',' ',' '],
//             ['X',' ',' '],
//             ['X',' ',' ']]

//     expect(TTT.checkWin(grid)).to.equal('X');

//     grid = [[' ','O',' '],
//             [' ','O',' '],
//             [' ','O',' ']]

//     expect(TTT.checkWin(grid)).to.equal('O');


//     grid = [[' ',' ','X'],
//             [' ',' ','X'],
//             [' ',' ','X']]

//     expect(TTT.checkWin(grid)).to.equal('X');

//   });




// //   it('recognizes diagonal wins', function () {

//     grid = [['X',' ',' '],
//             [' ','X',' '],
//             [' ',' ','X']]

// //     expect(TTT.checkWin(grid)).to.equal('X');

//     grid = [[' ',' ','O'],
//             [' ','O',' '],
//             ['O',' ',' ']]

// //     expect(TTT.checkWin(grid)).to.equal('O');




//   it('recognizes ties', function () {

//     grid = [['X','O','X'],
//             ['X','O','O'],
//             ['O','X','O']]

    TTT.checkWin(grid)
//it should equal 'T'

//   });

//   it('recognizes if there is no win yet', function () {

//     grid = [['X','X',' '],
//             ['X','O','O'],
//             ['O','X','O']]

//     expect(TTT.checkWin(grid)).to.be.false;

//   });


// });

