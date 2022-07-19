function main() {
  createDoubleArray()
}

main()

function createDoubleArray() {
  var sub_array = []
  var super_array = []
  for (var i = 1; i <= 3; i++) {
    sub_array.push(i)
    super_array.push(sub_array)
  }
  console.log(super_array)
}
