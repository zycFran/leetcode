/**********************************************************************************
 * 9. 回文数
 * 
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 
 * 示例 1:
 *      输入: 121
 *      输出: true
 * 
 * 示例 2:
 *      输入: -121
 *      输出: false
 * 
 * 示例 3:
 *      输入: 10
 *      输出: false
 * 

 **********************************************************************************/
/**
 * @param {number} x
 * @return {number}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false
    }
    if(x < 10){
        return true;
    }
    let p = x + '';
    x = x + '';
    x = x.split("");
    x = x.reverse();
    x = x.join('');
    
    return x===p
};