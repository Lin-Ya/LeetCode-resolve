/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    for (let l = nums.length - 1; l > 0; l--) {
      if (nums[i] + nums[l] === target && i !== l) {
        res = [i, l]
        break
      }
    }
  }
  return res
}
// @lc code=end
