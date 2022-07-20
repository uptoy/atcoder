function main() {
  var plusOne = function (digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
      if (++digits[i] > 9) digits[i] = 0
      else return digits
    }
    digits.unshift(1)
    return digits
  }
  const sample =plusOne(digits)
  console.log(sample)
}

const digits =[1,2,3,4,5,6,7,8,9,10]
main()