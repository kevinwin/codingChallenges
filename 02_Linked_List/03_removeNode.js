/*
Implement an algorithm to delete a node in the middle of a singly linked list given only access to that node
Input: the node c from the linked list a -> b -> c -> d -> e
Result: nothing is returned but the new linked list looks like a -> b -> d -> e
*/


function removeNode(node) {
  node.value = node.next.value;
  node.next = node.next.next;
};

module.exports = removeNode;