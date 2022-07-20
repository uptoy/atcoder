// n 人数
// m 課題曲の長さ
const n = 10
const m = 3
const k = 1
function main(n, m, k) {
  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let array = []
  for (i = 1; i <= n; i++) {
    array.push(i)
  }
  // console.log(array)
  let result = []
  let res = []
  for (i = 0; i <= array.length - 1; i++) {
    if (i % m === 0) {
      res.push(array[i])
    }
  }
  result.push(res)

  console.log(result, "result")
  console.log(res, "res")

  // const result = [
  //   array.slice(0, 3),
  //   array.slice(3, 6),
  //   array.slice(6, 9),
  //   array.slice(9, 10),
  // ]
  // console.log(result.reverse())
  // const newArr = result.reverse()
  // let createArr = []
  // createArr.push(newArr[0][0])
  // console.log(createArr)
  // createArr.push(newArr[1][0])
  // createArr.push(newArr[1][1])
  // createArr.push(newArr[1][2])
  // console.log(createArr)
  // createArr.push(newArr[2][0])
  // createArr.push(newArr[2][1])
  // createArr.push(newArr[2][2])
  // console.log(createArr)
  // createArr.push(newArr[3][0])
  // createArr.push(newArr[3][1])
  // createArr.push(newArr[3][2])
  // console.log(createArr)
  // const result1 = [
  //   createArr.slice(0, 3),
  //   createArr.slice(3, 6),
  //   createArr.slice(6, 9),
  //   createArr.slice(9, 10),
  // ]
  // console.log(result1)
  // const newArr1 = result1.reverse()
  // let createArr1 = []
  // createArr1.push(newArr1[0][0])
  // console.log(createArr)
  // createArr1.push(newArr1[1][0])
  // createArr1.push(newArr1[1][1])
  // createArr1.push(newArr1[1][2])
  // console.log(createArr)
  // createArr1.push(newArr1[2][0])
  // createArr1.push(newArr1[2][1])
  // createArr1.push(newArr1[2][2])
  // console.log(createArr)
  // createArr1.push(newArr1[3][0])
  // createArr1.push(newArr1[3][1])
  // createArr1.push(newArr1[3][2])
  // console.log(createArr1)
}
main(n, m, k)

//1
//2
//3

//4
//5
//6

//7
//8
//9

//////////////////
//7
//8
//9

//4
//5
//6

//1
//2
//3

//////////////////

//////////////////
//1
//2
//3

//4
//5
//6

//7
//8
//9

//10
//////////////////
//////////////////
// k=1

//10
//7
//8
//9
//4
//5
//6
//1
//2

//3
//////////////////

// k=2
//////////////////
//3
//6
//1
//2
//9
//4
//5
//10
//7
//8
