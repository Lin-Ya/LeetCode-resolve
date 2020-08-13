/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = new Map()
  const arr = []
  nums1.forEach(item => {
    if (nums2.includes(item)) {
      map.set(item, map.get(item) + 1 || 1)
    }
  })

  nums2.forEach(item => {
    let count = map.get(item) || 0
    if (count > 0) {
      arr.push(item)
      map.set(item, count - 1)
    }
  })

  return arr
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = intersect
// @after-stub-for-debug-end
