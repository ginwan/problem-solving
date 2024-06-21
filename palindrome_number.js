/** Pilandrome Number */

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  //   convert x to string
  const xString = x.toString();
  //   reverse X value
  const reverseOfX = xString.split("").reverse().join("");
  if (xString === reverseOfX) {
    return true;
  }
  return false;
};

console.log("result: ", isPalindrome(121)); // true
console.log("result: ", isPalindrome(-121)); // false
console.log("result: ", isPalindrome(10)); // false
