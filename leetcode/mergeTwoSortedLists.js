/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//  Input: list1 = [1,2,4], list2 = [1,3,4]
//  Output: [1,1,2,3,4,4]
//  Example 2:

//  Input: list1 = [], list2 = []
//  Output: []
//  Example 3:

//  Input: list1 = [], list2 = [0]
//  Output: [0]

function main() {
  const list1 = []
  const list2 = []
  //   const list1 = []
  //   const list2 = [0]
  const answer = mergeTwoSortedLists(list1, list2)
  console.log(answer)
}

main()

function mergeTwoSortedLists(list1, list2) {
  class ListNode {
    constructor(data) {
      this.data = data
      this.next = null
    }
  }
  let dummyHead = new ListNode()
  let cur = dummyHead
  //   if (list1.length === 0 && list1.length === 0) return dummyHead.next
  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1
      list1 = list1.next
    } else {
      cur.next = list2
      list2 = list2.next
    }
    cur = cur.next
  }
  while (list1) {
    cur.next = list1
    list1 = list1.next
    cur = cur.next
  }
  while (list2) {
    cur.next = list2
    list2 = list2.next
    cur = cur.next
  }
  return dummyHead.next
}
