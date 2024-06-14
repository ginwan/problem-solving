/** Unique Number of Occurrences */

/**
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function (arr) {
  // this best salution with tiny runtime
  const freq = new Map();

  arr.forEach((elem) => freq.set(elem, freq.get(elem) + 1 || 1));

  const set = new Set(freq.values());

  return set.size === freq.size;

  //   this my salution
  //   const map = new Map();
  //   // Count the occurrences of each element
  //   for (let num of arr) {
  //     map.set(num, (map.get(num) || 0) + 1);
  //   }
  //   // Check if the occurrences are unique
  //   const occurrences = new Set();
  //   for (let count of map.values()) {
  //     if (occurrences.has(count)) {
  //       return false; // Duplicate occurrence count found
  //     }
  //     occurrences.add(count);
  //   }
  //   return true; // All occurrences are unique
};

console.log("result: ", uniqueOccurrences([1, 2, 2, 1, 1, 3])); // true
console.log("result: ", uniqueOccurrences([1, 2])); // false
console.log("result: ", uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true
