/*
rotate a square matrix 90 degrees, counter-clockwise
*/
'use strict';

function rotateMatrix(matrix) {
  const result = [];
  const n = matrix.length; // # of rows
  for (let j = n - 1; j >= 0; j--) {
    let row = [];
    for (let i = 0; i < n; i++) {
      let el = matrix[i][j];
      row.push(el);
    }
    result.push(row);
  }
  return result;
};

function rotateMatrixInPlace(matrix) {
  const n = matrix.length;
  let numRotations = n - 1;
  let layersCompleted = 0;

  while (numRotations >= 0) {
    for (let i = 0; i < numRotations; i++) {
      let p1Row = i + layersCompleted;
      let p1Col = layersCompleted;
      let p2Row = n - 1 - layersCompleted;
      let p2Col = i + layersCompleted;
      let p3Row = n - 1 - layersCompleted - i;
      let p3Col = n - 1 - layersCompleted;
      let p4Row = layersCompleted;
      let p4Col = n - 1 - i - layersCompleted;

      swap4Sides(matrix, p1Row, p1Col, p2Row, p2Col, p3Row, p3Col, p4Row, p4Col);
    }
    numRotations -= 2;
    layersCompleted++;
  }

  return matrix;

};

function swap4Sides(matrix, row1, col1, row2, col2, row3, col3, row4, col4) {
  let point1 = matrix[row1][col1];
  let point2 = matrix[row2][col2];
  let point3 = matrix[row3][col3];
  let point4 = matrix[row4][col4];

  matrix[row2][col2] = point1;
  matrix[row3][col3] = point2;
  matrix[row4][col4] = point3;
  matrix[row1][col1] = point4;
}

/*
rotate a square matrix 90 degrees, counter-clockwise
*/

module.exports = { 
  rotateMatrix,
  rotateMatrixInPlace
};
