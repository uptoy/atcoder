/**
 * @param {number[]} A
 * @return {number[]}
 */

function main() {
  const root = [2, 1, 3]
  const answer = sortArrayByParity(root)
  console.log(answer)
}
main()

function sortArrayByParity(root) {
  const temp = []
  root.forEach((a) => {
    a % 2 == 0 ? temp.unshift(a) : temp.push(a)
  })

  return temp
}
