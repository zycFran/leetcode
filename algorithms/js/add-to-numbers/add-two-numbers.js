/**
 * Created by zhouyc on 2019-05-07.
 */

/**********************************************************************************
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 *
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * 示例:
 *
 *    输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 *
 *    输出：7 -> 0 -> 8
 *    原因：342 + 465 = 807
 *
 *
 **********************************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    var re = {
        val: 0, next: null
    }, jinwei = 0;
    var p = l1, q = l2, cur = re;

    while(p||q){
        var x = (p && p.val ||0) + (q && q.val||0) + jinwei;
        if(x >= 10){
            jinwei = 1;
            cur.val = x-10;
            cur.next = null;
        }else{
            jinwei = 0;
            cur.val = x;
            cur.next = null;
        }
        p = p && p.next;
        q = q && q.next;
        if(p || q){
            cur.next = {
                val: 0, next: null
            }
            cur = cur.next;
        }
    }

    if(jinwei){
        cur.next = {
            val: 1,
            next: null
        };
    }
    return re;
};