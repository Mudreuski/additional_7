module.exports = function solveSudoku(matrix) {
  for (let line = 0; line < 9; line++) {
    for (let col = 0; col < 9; col++) {
        if (matrix[line][col] === 0) {
          let options = option(line, col);

            for (let option of options) {
                matrix[line][col] = option;
            }  
        }
    }
  }

  function option(line,col) {
    let cache = [];
    let square = {
      line: Math.floor(line / 3) * 3,
      col: Math.floor(col / 3) * 3
    };

    for (let i = 0; i < 9; i++) {
      cache.push( [ matrix[line][i], matrix[i][col], matrix[square.line + i % 3][square.col + Math.floor(i / 3)] ] )
    }

    return cache;
  }

  return matrix;
};
