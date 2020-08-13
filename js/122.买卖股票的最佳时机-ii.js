/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0
  }
  let result = 0
  let l = prices.length
  prices.forEach((item, i) => {
    if (i + 1 < l) {
      result += item < prices[i + 1] ? prices[i + 1] - item : 0
    }
  })

  return result
}
// @lc code=end
