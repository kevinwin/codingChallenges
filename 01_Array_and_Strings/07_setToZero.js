/*
write an algorithm such that if an element in an MxN matrix is 0, the entire row and column are set to 0
*/
'use strict';

function setToZero(matrix) {
  var zeroified = {row: {}, col: {}};

  const numRows = matrix.length;
  const numCols = matrix[0].length;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (zeroified['row'][i] || zeroified['col'][j]) {
        continue;
      }
      let el = matrix[i][j];
      if (el === 0) {
        zeroifyRow(matrix, i);
        zeroifyCol(matrix, j);
        zeroified['row'][i] = true;
        zeroified['col'][j] = true;
      }
    }
  }

  return matrix;
};

function zeroifyRow(matrix, row) {
  for (let j = 0; j < matrix[row].length; j++) {
    matrix[row][j] = 0;
  }
}

function zeroifyCol(matrix, col) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
}

module.exports = setToZero;
