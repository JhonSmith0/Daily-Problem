// Hi, here's your problem today. This problem was recently asked by Uber:

// Given a linked list, determine if the linked list has a cycle in it. For notation purposes, we use an integer pos which represents the zero-indexed position where the tail connects to.

// Example:
// Input: head = [4,3,2,1,0], pos = 1.
// Output: true
// The example indicates a list where the tail connects to the second node.

// class ListNode(object):
//   def __init__(self, x):
//     self.val = x
//     self.next = None

// class Solution(object):
//   def hasCycle(self, head):
//     # Fill this in.

// testHead = ListNode(4)
// node1 = ListNode(3)
// testHead.next = node1
// node2 = ListNode(2)
// node1.next = node2
// node3 = ListNode(1)
// node2.next = node3
// testTail = ListNode(0)
// node3.next = testTail
// testTail.next = node1

// print(Solution().hasCycle(testHead))
// # True

class ListNode {
  constructor(x) {
    this.val = x;
    this.next = null;
  }
}

function hasCycle(testHead) {
  const nodes = [];

  head = testHead;
  while (head) {
    if (nodes.includes(head)) return true;
    nodes.push(head);
    head = head.next;
  }
  return false;
}

const pos = 1;

const testHead = new ListNode(4);

const node1 = new ListNode(3);

testHead.next = node1;
const node2 = new ListNode(2);

node1.next = node2;
const node3 = new ListNode(1);

node2.next = node3;
const testTail = new ListNode(0);

node3.next = testTail;
testTail.next = node1;

console.log(hasCycle(testHead)); // true
