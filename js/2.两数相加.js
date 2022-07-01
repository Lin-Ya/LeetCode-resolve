/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  function ListNode (val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
  let carry = 0
  let currentNode = undefined
  let preNode = undefined

  while (true) {
    if (!l1 && !l2) {
      if (carry) {
        currentNode && (currentNode.next = new ListNode(carry))
      }
      break
    }
    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    carry = Math.floor(val / 10)
    val = val % 10
    const _ = new ListNode(val)
    !preNode && (preNode = _)
    if (!currentNode) {
      currentNode = _
    } else {
      currentNode.next = _
      currentNode = _
    }
    l1 = l1?.next || null
    l2 = l2?.next || null
  }

  return preNode
}
// @lc code=end