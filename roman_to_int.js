/** Roman to Integer */
/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const roman = [
    {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    },
  ];

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (roman[0][s[i]] < roman[0][s[i + 1]]) {
      result -= roman[0][s[i]];
      console.log("🚀 ~ romanToInt ~ result:", result);
    } else {
      result += roman[0][s[i]];
      console.log("🚀 ~ romanToInt ~ result:", result);
    }
  }
  return result;
};

console.log("result: ", romanToInt("MCMXCVII"));
