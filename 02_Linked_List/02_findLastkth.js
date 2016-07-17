/*
Given the head of a linkedList, implement an algorith to find the kth of last element of a singly linked List
*/

'use strict';

function findLastkth(linkedListHead, k) {
  let fast = linkedListHead;
  let slow = linkedListHead;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};

module.exports = findLastkth;
