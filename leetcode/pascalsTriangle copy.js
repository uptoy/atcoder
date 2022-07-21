/**
 * @param {number} numRows
 * @return {number[][]}
 */

//  Example 1:
//  Input: numRows = 5
//  Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
//  Example 2:
//  Input: numRows = 1
//  Output: [[1]]

// パスカルの三角形
// n=1
// (a+b)^1=1
// n=2
// (a+b)^2=a^2+2ab+b^2
// n=3
// (a+b)^3=a^3+3(a^2)b+3a(b^2)+b^3

function main() {
  console.log("main")
  const input = 9
  answer = pascalsTriangle(input)
  console.log(answer)
}

function pascalsTriangle(input) {
  const res = []
  while (res.length <= input) {
    res.unshift(1)
    for (let i = 0; i < res.length - 1; i++) {
      res[i] += res[i + 1]
    }
  }
  return res
}

main()
