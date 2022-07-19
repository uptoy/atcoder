const n = 6
const x = 3
const y = 2

//最小公倍数
function lcm(a, b) {
  var g = (n, m) => (m ? g(m, n % m) : n)
  return (a * b) / g(a, b)
}

function main(n, x, y) {
  const z = lcm(x, y)
  for (let i = 1; i <= n; i++) {
    if (i % z === 0) {
      console.log("AB", i)
    } else if (i % x === 0) {
      console.log("A", i)
    } else if (i % y === 0) {
      console.log("B", i)
    } else {
      console.log("N", i)
    }
  }
}


main(n, x, y)
