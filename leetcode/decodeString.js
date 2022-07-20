/**
 * @param {string} s
 * @return {string}
 */

//  Example 1:

//  Input: s = "3[a]2[bc]"
//  Output: "aaabcbc"
//  Example 2:

//  Input: s = "3[a2[c]]"
//  Output: "accaccacc"
//  Example 3:

//  Input: s = "2[abc]3[cd]ef"
//  Output: "abcabccdcdcdef"
function main() {
  console.log("main")
  const s = "3[a]2[bc]"
  decodeString(s)
}

main()

// k = how mary times we repeat stuff
// [ = now i need to start storing what i want to repeat
// ] = better start repeating

function decodeString(s) {
  let multiply = []
  let tempMult = []
  let repeatStr = []
  let solution = ""
  for (let char of s) {
    if (!isNaN(char)) {
      tempMult = `${tempMult}${char}`
    } else if (char === "[") {
      multiply.push(tempMult)
      tempMult = ""
      repeatStr.push(solution)
      solution = ""
    } else if (char === "]") {
      solution = repeatStr.pop() + solution.repeat(multiply.pop())
    } else {
      solution += char
    }
  }
  return
}
