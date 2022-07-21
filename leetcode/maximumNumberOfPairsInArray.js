/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  Example 1:
//  Input: nums = [1,3,2,1,3,2,2]
//  Output: [3,1]

//  Example 2:
// Input: nums = [1,1]
// Output: [1,0]

// Example 3:
// Input: nums = [0]
// Output: [0,1]

function main() {
  console.log("main")
  const nums = [1, 1]
  const answer = maximumNumberOfPairsInArray(nums)
  console.log(answer)
}
main()

function maximumNumberOfPairsInArray(nums) {
  let arr = []
  if (nums % 2 !== 0) {
    //   console.log(nums.sort())
    arr.push(nums.sort().slice(-1)[0])
    arr.push(nums.sort()[0])
    return arr
  }
  if (nums[0] === 0) {
    arr.push(0)
    arr.push(nums.length)
    return arr
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      arr.push(nums.length)
      arr.push(0)
      return arr
    }
  }
}
