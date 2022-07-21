/**
 * @param {string} command
 * @return {string}
 */

//  Example 1:

//  Input: command = "G()(al)"
//  Output: "Goal"
//  Explanation: The Goal Parser interprets the command as follows:
//  G -> G
//  () -> o
//  (al) -> al
//  The final concatenated result is "Goal".
//  Example 2:

//  Input: command = "G()()()()(al)"
//  Output: "Gooooal"
//  Example 3:

//  Input: command = "(al)G(al)()()G"
//  Output: "alGalooG"

function main() {
  const command = "G()()()()(al)"
  const answer = goalParserInterpretation(command)
  console.log(answer)
}
main()

function goalParserInterpretation(command) {
  return command.split("()").join("o").split("(al)").join("al")
}
