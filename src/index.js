module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] != 0) continue;

      let neighbours = [];
      let uniqueElem = [];

      let a_i = ~~(row / 3) * 3;
      let a_j = ~~(col / 3) * 3;

      for (let i = 0; i < 9; i++) {
        if (neighbours.indexOf(matrix[row][i]) < 0)
          neighbours.push(matrix[row][i]);

        if (neighbours.indexOf(matrix[i][col]) < 0)
          neighbours.push(matrix[i][col]);

        if (neighbours.indexOf(matrix[a_i + i % 3][a_j + ~~(i / 3)]) < 0)
          neighbours.push(matrix[a_i + i % 3][a_j + ~~(i / 3)]);
      }

      for (let i = 1; i <= 9; i++) {
        if (neighbours.indexOf(i) < 0) {
          uniqueElem.push(i);
        }
      }

      for (let i = 0; i < uniqueElem.length; i++) {
        matrix[row][col] = uniqueElem[i];
        let result = solveSudoku(matrix);
        if (result) return result;
      }
      matrix[row][col] = 0;
      return false;
    }
  }
  return matrix;
}
