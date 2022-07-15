function main(input) {
  const args = input.split(' ')
  const N = parseInt(args[0], 10),
    Y = parseInt(args[1], 10)

  var result = '-1 -1 -1'

  for (var a = 0; a <= N; a++) {
    for (var b = 0; b <= N; b++) {
      if (a + b > N) {
        continue
      }

      var sum = a * 10000 + b * 5000 + (N - a - b) * 1000
      if (sum === Y) {
        result = `${a} ${b} ${N - a - b}`
        break
      }
    }
  }

  console.log(result)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))
