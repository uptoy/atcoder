function main() {
  console.log("main")
  const arr = createBigArray()
  singleArrayFromDoubleArray(arr)
}
main()

function singleArrayFromDoubleArray(arr) {
  let newArray = []
  arr.forEach((value) =>
    value.forEach((v) => {
      newArray.push(v)
    })
  )
  console.log(newArray)
  // [
  //   0, 1, 2, 3, 4, 0, 1, 2,
  //   3, 4, 0, 1, 2, 3, 4, 0,
  //   1, 2, 3, 4, 0, 1, 2, 3,
  //   4
  // ]
  return newArray
}

// [
//   [ 0, 1, 2, 3, 4 ],
//   [ 0, 1, 2, 3, 4 ],
//   [ 0, 1, 2, 3, 4 ],
//   [ 0, 1, 2, 3, 4 ],
//   [ 0, 1, 2, 3, 4 ]
// ]
function createBigArray() {
  let bigArr = []
  const arr = createArray()
  for (i = 0; i < 5; i++) {
    bigArr.push(arr)
  }
  return bigArr
}

//  [ 0, 1, 2, 3, 4 ]
function createArray() {
  console.log("createArray")
  let arr = []
  for (i = 0; i < 5; i++) {
    arr.push(i)
  }
  return arr
}
