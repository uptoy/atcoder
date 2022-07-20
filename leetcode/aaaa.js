// var isPalindrome = function (x) {
//   return x == x.toString().split("").reverse().join("")
// }

function main() {
  const answer = isPalindrome(109)
  console.log(answer)
}
main()

function isPalindrome(n) {
  //   console.log(n.toString().split("").reverse().join(""))
  return n === n.toString().split("").reverse().join("")
}
