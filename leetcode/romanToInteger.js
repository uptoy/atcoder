// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

function main() {
  const s = "MCMXCIV"
  const answer = romanToInteger(s)

  console.log(answer)
}

main()

function romanToInteger(s) {
  let sum = 0
  //   return sum
  const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  for (i = 0; i < s.length; i++) {
    if (s[i] === "I" && s[i + 1] === "V") {
      sum += 4
      i++
    } else if (s[i] === "I" && s[i + 1] === "X") {
      sum += 9
      i++
    } else if (s[i] === "X" && s[i + 1] === "L") {
      sum += 40
      i++
    } else if (s[i] === "X" && s[i + 1] === "C") {
      sum += 90
      i++
    } else if (s[i] === "C" && s[i + 1] === "D") {
      sum += 400
      i++
    } else if (s[i] === "C" && s[i + 1] === "M") {
      sum += 900
      i++
    } else {
      sum += romanHash[s[i]]
    }
  }
  return sum
}
