/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  hoge = Array.from(nums).sort((a, b) => b - a)
  let fuga = new Map(hoge.map((num, index) => [num, nums.length - 1 - index]))
  return nums.map((num) => fuga.get(num))
}

