/**
 * @param {string} S
 * @return {string}
 */
function main() {
  const s = ""
  const answer = removeDuplicates(s)
  console.log(answer)
}
main()

function removeDuplicates(s) {
  const stack = []
  for (const char of S) {
    stack[stack.length - 1] == char ? stack.pop() : stack.push(char)
  }
  return stack.join("")
}
