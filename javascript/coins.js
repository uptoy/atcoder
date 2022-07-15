function main(input) {
  const args = input.split('\n')
  const A = parseInt(args[0], 10),
    B = parseInt(args[1], 10),
    C = parseInt(args[2], 10),
    X = parseInt(args[3], 10)

  var count = 0

  for (var a = 0; a <= A; ++a) {
    for (var b = 0; b <= B; ++b) {
      for (var c = 0; c <= C; ++c) {
        var sum = a * 500 + b * 100 + c * 50
        if (sum === X) ++count
      }
    }
  }
  console.log(count)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))
