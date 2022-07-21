/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

//  Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
//  Output: 0
//  Explanation:
//  - Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
//  - Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
//  - Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
//  - Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
//  - Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
//  - Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
//  - Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
//  - Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
//  Hence all students are able to eat.
//  Example 2:

//  Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
//  Output: 3

function main() {
  const students = [1, 1, 0, 0]
  const sandwiches = [0, 1, 0, 1]
  const answer = numberofStudentsUnabletoEatLunch(students, sandwiches)
  console.log(answer)
}
main()

function numberofStudentsUnabletoEatLunch(students, sandwiches) {
  //studentsの配列のsandwiches[0]の値がない時 でない時　つまりあるとき
  while (students.length > 0 && students.indexOf(sandwiches[0]) != -1) {
    if (students[0] == sandwiches[0]) {
      students.shift()
      sandwiches.shift()
    } else {
      students.push(students.shift())
    }
  }
  return students.length
}
