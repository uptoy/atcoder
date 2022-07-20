/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//  Input: l1 = [2,4,3], l2 = [5,6,4]
//  Output: [7,0,8]
//  Explanation: 342 + 465 = 807.
//  Example 2:

//  Input: l1 = [0], l2 = [0]
//  Output: [0]
//  Example 3:

//  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//  Output: [8,9,9,9,0,0,0,1]

function main() {
  console.log("main")

  const l1 = [2, 4, 3]
  const l2 = [5, 6, 4]
  addTwoNumbers(l1, l2)
}

// ???
main()

function addTwoNumbers(l1, l2) {
  let p1 = l1,
    p2 = l2,
    num1 = 0,
    num2 = 0,
    carry = 0,
    solution = new ListNode(0),
    current = solution

  while (p1 || p2) {
    num1 = p1 ? p1.val : 0
    num2 = p2 ? p2.val : 0
    if (num1 + num2 + carry > 9) {
      current.next = new ListNode(num1 + num2 + carry - 10)
      current = current.next
      carry = 1
    } else {
      current.next = new ListNode(num1 + num2 + carry)
      current = current.next
      carry = 0
    }
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
  }
  if (carry) current.next = new NodeList(carry)
  return solution
}
