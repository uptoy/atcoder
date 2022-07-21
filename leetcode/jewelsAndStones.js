/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

//  Example 1:

//  Input: jewels = "aA", stones = "aAAbbbb"
//  Output: 3
//  Example 2:

//  Input: jewels = "z", stones = "ZZ"
//  Output: 0

function main() {
  const jewels = "aA"
  const stones = "aAAbbbb"
  const answer = jewelsAndStones(jewels, stones)
  console.log(answer)
}
main()

function jewelsAndStones(jewels, stones) {
  let count = 0
  for (let i = 0; i < stones.length; i++) {
    // もし含まれていればsum+1
    if (jewels.indexOf(stones[i]) != -1) count++
  }
  return count
}
