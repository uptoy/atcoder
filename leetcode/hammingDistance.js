/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

//  例1：

//  入力： x = 1、y = 4
//  出力： 2
//  説明：
//  1   (0 0 0 1)
//  4   (0 1 0 0)
//         ↑   ↑
//  上記の矢印は、対応するビットが異なる位置を指しています。
//  例2：

//  入力： x = 3、y = 1
//  出力： 1

function main() {
  const x = 1
  const y = 4
  const answer = hammingDistance(x, y)
  console.log(answer)
}

main()

function hammingDistance(x, y) {
  return (x ^ y)
    .toString(2)
    .split("")
    .filter((n) => n == 1).length
}
