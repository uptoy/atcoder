/**
 * @param {number[]} arr
 * @return {boolean}
 */
function main() {
  const nums = [1, 2, 3, 4, 5]
  const answer = uniqueOccurrences(nums)
  console.log(answer)
}
main()

function uniqueOccurrences(nums) {
  let obj = {}

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == undefined) {
      obj[arr[i]] = 1
    } else {
      obj[arr[i]]++
    }
  }

  return new Set(Object.values(obj)).size === Object.values(obj).length
}
