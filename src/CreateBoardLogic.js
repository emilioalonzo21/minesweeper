let board = [];
let locationOfMines = [];

//gotta create the blank board
//maybe use a for loop? this way it can iterate over the 10 x 10 rows and columns

for (let x = 0; x < rows; x++) {
    let subColumn = [];
}
for (let y = 0; y < column; y++) {
    subColumn.push({
        value: 0,
        revealed: false,
        x: x,
        y: y,
        flagged: false,
    })
    board.push(subColumn)
}