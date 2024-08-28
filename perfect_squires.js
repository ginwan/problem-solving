/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  // dp for dynamic programming
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  //   i ==> target
  //   j ==> squire
  for (let i = 1; i <= n; i++) {
    // itreat in squire values
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  console.log("🚀 ~ numSquares ~ dp:", dp);
  return dp[n];
};

console.log(numSquares(4)); // 3
