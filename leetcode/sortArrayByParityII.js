/**
 * @param {number[]} A
 * @return {number[]}
 */

function main() {
  const root = ""
  const answer = sortArrayByParityII(root)
  console.log(answer)
}
main()

function sortArrayByParityII(root) {
  const stack = []
  for (const char of root) {
    stack[stack.length - 1] == char ? stack.pop() : stack.push(char)
  }
  return stack.join("")
}
