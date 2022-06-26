class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let node = { next: null };
  const head = node;

  while (list1 || list2) {
    let isFirst = !list2 || (list1 && list1.val < list2.val);

    if (isFirst) {
      node.next = list1;
      list1 = list1.next;
    } else {
      node.next = list2;
      list2 = list2.next;
    }

    node = node.next;
  }

  return head.next;
}

// console.log(
//     mergeTwoLists(
//         new ListNode(1, new ListNode(2, new ListNode(4))),
//         new ListNode(1, new ListNode(3, new ListNode(4))),
//     )
// )

// function hasCycle(head: ListNode | null): boolean {
//   let node = head;
//   let hashSet = new WeakSet();
//
//   while (node) {
//     hashSet.add(node);
//     node = node.next;
//
//     if (hashSet.has(node)) return true;
//   }
//
//   return false;
// }

// function hasCycle(head: ListNode | null): boolean {
//   let slow = head;
//   let fast = head;
//
//   while(fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next?.next;
//
//     if (slow == fast) return true;
//   }
//
//   return false;
// }
//
// let node = new ListNode(2, new ListNode(0, new ListNode(-4)));
// node.next.next.next = node;
//
// console.log(hasCycle(new ListNode(3, node)));

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let temp = new ListNode(0);
  temp.next = head;
  let first = temp;
  let second = temp;

  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  while (first) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return temp.next;
}

console.log(
  removeNthFromEnd(
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
    ),
      2
  ),
);

console.log(
    removeNthFromEnd(
        new ListNode(1, new ListNode(2)),
        2
    )
)


function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev
}

let palidroneList = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(1))));

function findHalf(head: ListNode | null) {
  let fast = head;
  let slow = head;

  while (fast?.next?.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}


// O(n) time and O(1) space
function isPalindrome(head: ListNode | null): boolean {
  let first = findHalf(head);
  let startHalf = reverseList(first.next);

  while (startHalf) {
    if (head.val !== startHalf.val) return false;
    startHalf = startHalf.next;
    head = head.next;
  }

  return true;
}

// console.log(isPalindrome(palidroneList));

