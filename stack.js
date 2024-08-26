var isValid = function (s) {
  let stack = [];

  let bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    console.log("🚀 ~ isValid ~ char:", char);
    if (char in bracketMap) {
      stack.push(char);
    } else {
      if (stack.length === 0 || bracketMap[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("[()}")); // true
