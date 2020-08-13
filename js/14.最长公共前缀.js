/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function (strs) {
//   if (strs.length < 1) {
//     return ''
//   }
//   function filter (strs, perfix) {
//     if (perfix.length < 1) {
//       return ''
//     }
//     const isIndexOfFirst = str => str.indexOf(perfix) === 0
//     if (strs.every(isIndexOfFirst)) {
//       return perfix
//     } else {
//       perfix = perfix.slice(0, -1)
//       return filter(strs, perfix)
//     }
//   }

//   return filter(strs, strs[0])
// }

var longestCommonPrefix = function (strs) {
  if (strs.length < 1) {
    return ''
  }
  let perfix = strs[0]
  strs.forEach(item => {
    while (item.indexOf(perfix) !== 0) {
      if (perfix.length < 1) {
        return
      }
      perfix = perfix.slice(0, -1)
    }
  })
  return perfix
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = longestCommonPrefix
// @after-stub-for-debug-end

// @after-stub-for-debug-begin
module.exports = longestCommonPrefix
// @after-stub-for-debug-end
