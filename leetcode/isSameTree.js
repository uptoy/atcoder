/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

//  Example 1:

//  Input:     1         1
//            / \       / \
//           2   3     2   3

//          [1,2,3],   [1,2,3]

//  Output: true
//  Example 2:

//  Input:     1         1
//            /           \
//           2             2

//          [1,2],     [1,null,2]

//  Output: false
//  Example 3:

//  Input:     1         1
//            / \       / \
//           2   1     1   2

//          [1,2,1],   [1,1,2]

//  Output: false

function main() {
  const p = [1, 2, 3]
  const q = [1, 2, 3]
  answer = isSameTree(p, q)
  console.log(answer)
}
main()

function isSameTree(p, q) {
  let s1 = [p]
  let s2 = [q]
  let ll = null
  let rr = null

  let s1Length = s1.length
  let s2Length = s2.length

  while (s1.length && s2.length) {
    //配列末値削除
    ll = s1.pop()
    rr = s2.pop()

    if (!ll && !rr) continue
    if (!ll || !rr) return false
    if (ll.val !== rr.val) return false

    let llVal =ll.val
    let rrVal =rr.val
    let llLeft = ll.left
    let llRight = ll.right
    let rrLeft = rr.left
    let rrRight = rr.right
    s1.push(ll.left)
    s1.push(ll.right)
    s2.push(rr.left)
    s2.push(rr.right)
  }

  return true
}

// let arr = [[1, 2, 3]]
// let ll = null
// ll = arr.pop()
// ll = [1,2,3]
