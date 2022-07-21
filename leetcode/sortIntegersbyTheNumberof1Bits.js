/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  const bitCount = (num) => {
    let sum = 0
    while (num) {
      sum += num & 1
      num >>= 1
    }
    return sum
  }

  return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b)
}


