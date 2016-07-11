/*
Write code to remove duplicates from an unsorted linked list
FOLLOW UP
How would you solve this problem if no hash table is not allowed?
*/
'use strict';

function removeDuplicates(linkedList){
  let node = linkedList.head;
  const unique = {};
  const order = [];

  while (node) {
    if (!unique[node.value]) {
      unique[node.value] = node;
      order.push(node.value);
    }
    node = node.next;
  }

  // Construct linked list
  let list = {};

  list.head = unique[order.shift()]
  node = list.head;

  while (order.length) {
    node.next = unique[order.shift()];
    node = node.next;
  }

  return list;

};

// removeDuplicates without hash table
// bias towards nodes towards left, if remaining list has a 2, d

// sort the linked list using merge sort
// move pointers based on adjacent node value

module.exports = removeDuplicates;
