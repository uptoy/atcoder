/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//  Example 1:

//  Input: nums = [1,3,5,6], target = 5
//  Output: 2
//  Example 2:

// 5は配列2番目にある

//  Input: nums = [1,3,5,6], target = 2
//  Output: 1
//  Example 3:

// 2は配列に存在しないため1と3の間に入る
// つまり2は配列1番目に入る

//  Input: nums = [1,3,5,6], target = 7
//  Output: 4

// 7は配列に存在しないため6の後ろに入る
// つまり7は配列4番目に入る

function main() {
  console.log("main")
  //   const nums = [1, 3, 5, 6]
  //   const target = 5
  //   const nums = [1, 3, 5, 6]
  //   const target = 2
  const nums = [1, 3, 5, 6]
  const target = 7
  const answer = searchInsertPosition(nums, target)
  console.log(answer)
}

main()

function searchInsertPosition(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // const n =
    if (nums[i] === target) {
      return i
    }
    if (target < nums[i]) {
      return i
    }
    if (nums[i] < target && target < nums[i + 1]) {
      return i + 1
    }
    if (nums[nums.length - 1] < target) {
      return nums.length
    }
  }
}
