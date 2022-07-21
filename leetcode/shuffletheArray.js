/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  for (let i = 0; i < n; i++) {
    nums.push(nums[i], nums[i + n])
  }
  nums.splice(0, n * 2)
  return nums
}


