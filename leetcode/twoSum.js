// function main() {
//   const input = [2, 7, 11, 15]
//   const target = 26
//   const answer = twoSum(input, target)
//   console.log(answer)
// }

// main()

// //return [0,1]

// // nums integers
// // target integer

// function twoSum(nums, target) {
//   let storage = {}
//   for (let [index, num] of nums.entries()) {
//     if (storage[num] !== undefined) {
//       console.log("[storage[num], index]", [storage[num], index])
//       return [storage[num], index]
//     }
//     storage[target - num] = index
//     console.log(index, "index")
//     console.log(storage, "storage")
//     console.log(num, "num")
//   }
// }

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  Input: nums = [2,7,11,15], target = 9
//  Output: [0,1]
//  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Input: (nums = [3, 2, 4]), (target = 6)
// Output: [1, 2]
// Input: nums = [3,3], target = 6
// Output: [0,1]

function main() {
  const nums = [2, 7, 11, 15]
  const target = 9
  const answer = twoSum(nums, target)
  console.log("answer", answer)
}

main()

// function twoSum(nums, target) {
//   const storage = {}
//   // return []
//   for (let [index, num] of nums.entries()) {
//     console.log("index", index)
//     console.log("num", num)
//     if (storage[num] !== undefined) {
//       return [storage[num], index]
//     }
//     storage[target - num] = index
//   }
// }

// function twoSum(nums, target) {
//   const storage = {}
//   for (let [index, num] of nums.entries()) {
//     if (storage[num] !== undefined) return [storage[num], index]
//     storage[target - num] = index
//   }
// }

// function twoSum(nums, target) {
//   const storage = {}
//   for (let [index, num] of nums.entries()) {
//     if (storage[num] !== undefined) return [storage[num], index]
//     storage[target - num] = index
//   }
// }
