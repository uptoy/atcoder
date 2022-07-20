function main() {
  const n = 3
  const answer = generateParenthesis(n)
  // console.log("answer", answer)
}

main()

function generateParenthesis(n) {
  let solution = []

  const generateCompo = (leftPCount, rightPCount, partial) => {
    if (leftPCount > rightPCount) return
    if (!leftPCount && !rightPCount) {
      solution.push(partial)
      console.log("leftPCount > rightPCount")
      console.log("rightPCount", rightPCount)
      console.log("leftPCount", leftPCount)
      console.log("solution", solution)
      console.log("partial", partial)
    }
    if (leftPCount > 0) {
      generateCompo(leftPCount - 1, rightPCount, partial + "(")
      console.log("leftPCount > 0")
      console.log("rightPCount", rightPCount)
      console.log("leftPCount", leftPCount - 1)
      console.log("solution", solution)
      console.log("partial", partial)
    }
    if (rightPCount > 0) {
      generateCompo(leftPCount, rightPCount - 1, partial + ")")
      solution.push(partial)
      console.log("rightPCount > 0")
      console.log("rightPCount", rightPCount-1)
      console.log("leftPCount", leftPCount)
      console.log("solution", solution)
      console.log("partial", partial)
    }
  }

  generateCompo(n, n, "")
  return solution
}
