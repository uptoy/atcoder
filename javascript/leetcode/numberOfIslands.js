// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Input: grid = [
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ]
// Output: 3

function main() {
  const input = [2, 7, 11, 15]
  const target = 26
  const answer = twoSum(input, target)
  console.log(answer)
}

main()

//return [0,1]

// nums integers
// target integer

function twoSum(nums, target) {
  let storage = {}
  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) {
      console.log("[storage[num], index]", [storage[num], index])
      return [storage[num], index]
    }
    storage[target - num] = index
    console.log(index, "index")
    console.log(storage, "storage")
    console.log(num, "num")
  }
}
