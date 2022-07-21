/**
 * @param {number[]} nums
 * @return {number[]}
 */
function main() {
  const nums = [1, 2, 3, 4, 5]
  const answer = sortArrayByParityII(nums)
  console.log(answer)
}
main()

function sortArrayByParityII(nums) {
  return nums.map((a) => a * a).sort((a, b) => a - b)
}
