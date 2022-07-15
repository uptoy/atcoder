function main(input) {
  const args = input.split('\n')
  const N = parseInt(args[0], 10),
    cards = args[1].split(' ').map((n) => parseInt(n, 10))

  var aSum = 0,
    bSum = 0

  cards
    .sort((a, b) => (a < b ? 1 : -1))
    .forEach((n, i) => {
      i % 2 === 0 ? (aSum += n) : (bSum += n)
    })

  console.log(aSum - bSum)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'))
