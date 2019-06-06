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
 *      输出: 21
 * 
 * 注意:
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

 **********************************************************************************/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(!x){
        return 0
    }
    let fu = false;
    if(x < 0){
        x = -x;
        fu = true;
        
        
    }
    x = x + '';
        x = x.split('');
        x = x.reverse(); 
        x = x.join('');  
        x = parseInt(x); 
        
    if(fu){
        x = -x;
    }
    if(x < -2147483648) return 0
    if(x > 2147483647) return 0
    return x
};
