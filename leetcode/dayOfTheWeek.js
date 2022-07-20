/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */

function main() {
  //   const answer = dayOfTheWeek(20, 7, 2022)
  //   console.log(answer)
  const answer = dayOfTheWeek1(20, 7, 2022)
  console.log(answer)
}

main()

function dayOfTheWeek(day, month, year) {
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  console.log(new Date("2022-7-20").getDay())
  console.log(new Date("2022-7-21").getDay())
  console.log(new Date("2022-7-21").getDay())

  return daysOfWeek[
    new Date(
      year.toString() + "-" + month.toString() + "-" + day.toString()
    ).getDay()
  ]
}

function dayOfTheWeek1(day, month, year) {
  const week = ["M", "Tu", "W", "Th", "Fr", "Sa", "Su"]
  console.log(week)
  return week[
    new Date(
      year.toString() + "-" + month.toString() + "-" + day.toString()
    ).getDay()
  ]
}
