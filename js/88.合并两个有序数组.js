/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  function sorter (a, b) {
    return a < b ? -1 : 1
  }

  function concat () {
    for (let i = 0; i < n; i++) {
      nums1[m + i] = nums2[i]
    }
  }

  if (m < 1 && n < 1) {
    return
  }

  if (m < 1 && n > 0) {
    concat()
    return
  }

  concat()
  nums1.sort(sorter)
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = merge
// @after-stub-for-debug-end
