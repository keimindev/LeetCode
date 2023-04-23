/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
    return board.every(column => isValidColumn(column))
        && rotateMatrix(board).every(column => isValidColumn(column))
        && extractMatrix(board).every(column => isValidColumn(column))  
};

const isValidColumn = (column) => {
    const onlyNums = column.filter(num => num !== ".");
    const set = new Set(onlyNums);
    return set.size === onlyNums.length;
};

const rotateMatrix = matrix => (
    matrix[0].map((column, index) => (
    matrix.map(row => row[index])
  ))
);

const extractMatrix = matrix => {
  const squares = [
    [], [], [], [], [], [], [], [], []
  ];

  matrix.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      const squareIndex = (Math.floor(rowIndex / 3) * 3) + Math.floor(columnIndex / 3);

      squares[squareIndex].push(cell);
    })
  });

  return squares;
}