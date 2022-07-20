const k = 3 // 競技回数
const n = 4 //　人数
//   console.log(lines[0])
//   const line1 = lines[0].split(" ")
//   console.log(line1[0])
//   console.log(line1[1])
//   console.log(line1[2])
//   5 2 4
// 5
// 2
// 4

function main() {
  console.log("main")
  //   console.log(lines[0])
  //   const line1 = lines[0].split(" ")
  //   console.log(line1[0]) //n
  //   console.log(line1[1]) //k
  //
  //   const line2 = lines[1].split(" ")
  //   console.log(line2[0]) //300
  //   console.log(line2[1]) //310
  //   console.log(line2[2]) //440
  //   console.log(line2[3]) //430
  let lines2 = []
  // let lines2 = [300,310,440,430]
  const line2 = [300, 310, 440, 430]
  for (i = 0; i < line2.length; i++) {
    lines2.push(line2[i])
  }
  console.log(lines2)
}

main()

// input
// 人数 回数
// 3 3
// 400 450 420
// 500 400 410
// 490 500 490

// output
// 3
