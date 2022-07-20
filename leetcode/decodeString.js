/**
 * @param {string} s
 * @return {string}
 */

//  Example 1:

//  Input: s = "3[a]2[bc]"
//  Output: "aaabcbc"
//  Example 2:

//  Input: s = "3[a2[c]]"
//  Output: "accaccacc"
//  Example 3:

//  Input: s = "2[abc]3[cd]ef"
//  Output: "abcabccdcdcdef"
function main() {
  console.log("main")
  const s = "3[a]2[bc]"
  decodeString(s)
}

main()

// k = how mary times we repeat stuff
// [ = now i need to start storing what i want to repeat
// ] = better start repeating

function decodeString(s) {
    const resultArr = [''];
    const timesStack = [];
    let times = 0;
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      console.log(char)
  
      if (!Number.isNaN(Number(char))) {
        times = 10 * times + Number(char);
      } else if (char === '[') {
        timesStack.push(times);
        resultArr.push('');
        times = 0;
      } else if (char === ']') {
        const times = timesStack.pop()!;
        const subStr = resultArr.pop()!;
        resultArr[resultArr.length - 1] += subStr.repeat(times);
      } else {
        resultArr[resultArr.length - 1] += char;
      }
    }
  
    return resultArr[0];
}
