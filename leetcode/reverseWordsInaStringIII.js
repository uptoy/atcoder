/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

//  Example 1:

//  Input: s = "Let's take LeetCode contest"
//  Output: "s'teL ekat edoCteeL tsetnoc"
//  Example 2:

//  Input: s = "God Ding"
//  Output: "doG gniD"

function main() {
  const s = "Let's take LeetCode contest"
  const answer = reverseWordsInaStringIII(s)
  console.log(answer)
}
main()

function reverseWordsInaStringIII(s) {
  return s.split("").reverse().join("").split(' ').reverse().join(" ")
}
