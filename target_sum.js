/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let count = 0;
  // Helper function to perform recursion
  function backtrack(index, currentSum) {
    // If we've processed all numbers, check if the sum matches the target
    if (index === nums.length) {
      if (currentSum === target) {
        count++;
      }
      return;
    }
    // Recurse by including the current number as positive
    backtrack(index + 1, currentSum + nums[index]);

    // Recurse by including the current number as negative
    backtrack(index + 1, currentSum - nums[index]);
  }
  // Start the recursive process
  backtrack(0, 0);

  return count;
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)); // 5
