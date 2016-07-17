/* 
  Given a directed graph, design an algorithm to find out
  whether there is a route between two nodes
*/

'use strict';

function hasRoute(graph, fromNode, toNode) {

  if (fromNode === toNode) {
    return true;
  }

  for (let i = 0; i < fromNode.children.length; i++) {
    let childNode = graph.nodes[fromNode.children[i]];
    if (hasRoute(graph, childNode, toNode)) {
      return true;
    }
  }
  return false;

}

module.exports = hasRoute;
