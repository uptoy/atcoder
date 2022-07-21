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
  const input = 5
  answer = pascalsTriangle(input)
  console.log(answer)
}

function pascalsTriangle(rowsNeeded) {
  let rows = [
    /*
            TO DO

            [       1      ] 0 index row
            [     1, 1     ] 1 index row
            [   1, 2,  1    ]
            [ 1,  3, 3,  1 ]
        */
  ]

  rows.push([1]) //      0 index row
  if (rowsNeeded == 1) return rows

  rows.push([1, 1]) //   1 index row
  if (rowsNeeded == 2) return rows

  // 2 indexed row & more
  for (let r = 2; r < rowsNeeded; r++) {
    let prevRow = rows[r - 1]

    let newRow = []
    newRow.push(1) // each new row, always starts with 1
    for (let j = 0; j < prevRow.length - 1; j++) {
      newRow.push(prevRow[j] + prevRow[j + 1])
    }
    newRow.push(1) // each new row, always ends with 1

    rows.push(newRow) // push new row to final rows
  }

  return rows // return final rows
}

main()
