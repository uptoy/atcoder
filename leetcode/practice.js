class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }
}

function main() {
  let node1 = new ListNode(2)
  let node2 = new ListNode(5)
  node1.next = node2
  let list = new LinkedList(node1)
  console.log(list)
  console.log(list.head) //returns 5
  console.log(list.head.next) //returns 5
  console.log(list.head.next.data) //returns 5

}

main()
