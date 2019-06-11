/**
 * Created by zhouyc on 2019-05-07.
 */

/**********************************************************************************
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 *
 * 示例 1:
 *
 *      输入: "abcabcbb"
 *      输出: 3 
 *      解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *
 *
 **********************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s) return 0;
    if(s.length === 1){
        return 1
    }
    let lookup = '', i = 0, len = s.length, re = 1;
    while(i < len){
        let idx = lookup.indexOf(s[i]);
        if(idx < 0){
            lookup += s[i];
            re = Math.max(lookup.length, re)
        }else{
            lookup += s[i];
            lookup = lookup.slice(idx + 1, lookup.length)
        }
        i++
    }
    return re;
};
