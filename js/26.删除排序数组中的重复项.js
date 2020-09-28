/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (i !== 0) {
//       let last = nums[i - 1]
//       if (last === nums[i]) {
//         nums.splice(i, 1)
//         i--
//       }
//     }
//   }
//   return nums.length
// }

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i + 1, 1)
//       i--
//     }
//   }
//   return nums.length
// }

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // let j = 0
  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[i] !== nums[i - 1]) {
  //     j++
  //     nums[j] = nums[i]
  //   }
  // }
  // return j
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeDuplicates
// @after-stub-for-debug-end
