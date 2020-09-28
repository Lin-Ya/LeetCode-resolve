/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // // 方法一
  // let lastIndex = digits.length - 1
  // if (digits[lastIndex] !== 9) {
  //   digits[lastIndex] += 1
  //   return digits
  // }
  // while (lastIndex >= 0) {
  //   digits[lastIndex] = 0
  //   if (lastIndex - 1 < 0) {
  //     digits = [1, ...digits]
  //     break
  //   }

  //   if (digits[lastIndex - 1] !== 9) {
  //     digits[lastIndex - 1] += 1
  //     break
  //   }

  //   lastIndex -= 1
  // }
  // return digits

  // 方法二
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++

    if (digits[i] > 9) {
      digits[i] = 0
    } else {
      return digits
    }
  }
  digits.unshift(1)
  return digits
}
// @lc code=end
