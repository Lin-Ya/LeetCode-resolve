/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// // 一
// var rotate = function (nums, k) {
//   if (k < 1) {
//     return
//   }
//   let l = nums.length
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums.pop())
//   }
// }

// // 二
// var rotate = function (nums, k) {
//   if (k < 1) {
//     return
//   }
//   let l = nums.length
//   nums.unshift(...nums.splice(l - k))
// }

// // 三
var rotate = function (nums, k) {
  let l = nums.length
  k = k > l ? k % l : k
  nums.unshift(...nums.splice(l - k))
}
// @lc code=end
