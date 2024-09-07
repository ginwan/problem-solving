/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  for (let i = 0; i <= s.length; i++) {
    if (s[i] !== "]") {
      stack.push(s[i]);
    } else {
      let subStr = "";
      while (stack[stack.length - 1] !== "[") {
        subStr = stack.pop() + subStr;
      }
      stack.pop();
      console.log("🚀 ~ decodeString ~ subStr:", subStr);

      let a = "";
      while (stack.length !== 0 && !isNaN(stack[stack.length - 1])) {
        a = stack.pop() + a;
      }
      stack.push(subStr.repeat(a));
    }
  }

  return stack.join("");
};

s = "100[leetcode]";

console.log(decodeString(s)); // "aaabcbc"
