/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  return mat
    .map((value, index) => [index, value.reduce((pre, cur) => pre + cur)])
    .sort((a, b) => a[1] - b[1])
    .slice(0, k)
    .map((pair) => pair[0])
}

