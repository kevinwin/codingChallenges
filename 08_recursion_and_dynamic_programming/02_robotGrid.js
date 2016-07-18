/* 
  Imagine a robot sitting on the upper left corner of grid with r rows and c columns
  The robot can only move in two directions, right and down, but certain cells are
  'off limits' such that the robot cannot step on them. Design an algorithm to find
  a path for the robot from the top left to the bottom right.
*/
'use strict';

function robotGrid(grid) {

  const failedPaths = {};
  failedPaths.addPoint = function(r, c) {
    failedPaths[r + ',' + c] = true;
  };

  const obstacles = {'2,0': true, '1,1': true}

  const path = [];

  function findPath(r, c) {

    // failed path or obstacle - value is 1
    if (failedPaths[r+','+c] || obstacles[r+','+c]) {
      return false;
    }

    // out of bounds
    if (r > grid.length - 1 || c > grid[0].length - 1) {
      return false;
    }

    // at end
    let atEnd = r === grid.length - 1 && c === grid[0].length - 1;

    if (atEnd || findPath(r+1, c) || findPath(r, c+1)) {
      path.unshift(r+','+c);
      return path;
    }

    failedPaths.addPoint(r, c);
    return false;
  }

  return findPath(0, 0)

}

function generateMatrix(r, c) {
  const matrix = [];
  for (let i = 0; i < r; i++) {
    let row = [];
    for (let j = 0; j < c; j++) {
      row.push(0);
    }
    matrix.push(row);
  }

  return matrix;
}

let matrix = generateMatrix(3, 3);

console.log(robotGrid(matrix));

module.exports = robotGrid;
