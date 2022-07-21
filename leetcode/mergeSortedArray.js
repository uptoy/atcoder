/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//  Example 1:

//  Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//  Output: [1,2,2,3,5,6]
//  Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
//  The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
//  Example 2:

//  Input: nums1 = [1], m = 1, nums2 = [], n = 0
//  Output: [1]
//  Explanation: The arrays we are merging are [1] and [].
//  The result of the merge is [1].
//  Example 3:

//  Input: nums1 = [0], m = 0, nums2 = [1], n = 1
//  Output: [1]
//  Explanation: The arrays we are merging are [] and [1].
//  The result of the merge is [1].
//  Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// 制約：
// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109

function main() {
  console.log("main")
  const nums1 = [1, 2, 3, 0, 0, 0]
  const nums2 = [2, 5, 6]
  const m = 3
  const n = 3
  const nums1Length = m + n
  const nums2Length = n

  answer = margeSortArray(nums1, nums2, n, m)
  console.log(answer)
}
main()

function margeSortArray(nums1, nums2, n, m) {
  while (n > 0) {
    //if val in nums1 is greater than val in nums1, use nums1
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[m - 1]
      m--
    }
    //otherwise use nums2 val
    else {
      nums1[m + n - 1] = nums2[n - 1]
      n--
    }
  }
}