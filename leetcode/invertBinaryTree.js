/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

//  Example 1:
// Input: root = [4, 2, 7, 1, 3, 6, 9]
// Output: [4, 7, 2, 9, 6, 3, 1]

//  Example 2:
// Input: root = [2, 1, 3]
// Output: [2, 3, 1]

// Example 3:
// Input: root = []
// Output: []

function main() {
  const root = [2, 1, 3]
  const answer = invertTree(root)
  console.log(answer)
}
main()

function invertTree(root) {
  if (!root) return null
  const left = invertTree(root.left)
  const right = invertTree(root.right)
  root.left = right
  root.right = left
  return root
}
