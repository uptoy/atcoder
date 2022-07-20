/**
 * @param {string[]} strs
 * @return {string}
 */

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
function main() {
  const strs = ["flower", "flow", "flight"]
  const answer = longestCommonPrefix(strs)
  console.log(answer)
}

main()

function longestCommonPrefix(strs) {
  let prefix = ""
  const strsLength = strs.length
  const strs0 = strs[0]
  //配列内全て確認し終わったら終了
  if (strs === null || strs.length === 0) {
    return prefix
  }

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i]
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char) return prefix
    }
    prefix = prefix + char
  }
  return prefix
}
