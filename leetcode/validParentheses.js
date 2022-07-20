/**
 * @param {string} s
 * @return {boolean}
 */

//  Input: s = "()"
//  Output: true
//  Example 2:

//  Input: s = "()[]{}"
//  Output: true
//  Example 3:

//  Input: s = "(]"
//  Output: false
function main() {
  const s = "(]"

  //   Map(3) { '(' => ')', '[' => ']', '{' => '}' }
  //   const map = new Map([
  //     ["(", ")"],
  //     ["[", "]"],
  //     ["{", "}"],
  //   ])
  const answer = validParentheses(s)
  console.log(answer)
}

main()

function validParentheses(s) {
  // 文字数が奇数のときはfalse
  if (s.length % 2 !== 0) return false
  const stack = []
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ])
  for (let i = 0; i < s.length; i += 1) {
    if (map.has(s[i])) {
      const mapGet = map.get(s[i])
      stack.push(map.get(s[i]))
    } else if (s[i] !== stack.pop()) {
      return false
    }
  }
  return stack.length === 0
}
