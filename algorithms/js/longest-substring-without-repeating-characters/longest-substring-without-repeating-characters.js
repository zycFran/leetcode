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
    var findSubStr = function(sub){
        if(!sub.length){
            return 0
        }
        let len = 0, suba = [];
        suba.push(sub[0])
        for(let i = 1; i < sub.length; i++){
            if(suba.indexOf(sub[i]) >= 0){
                len = i; 
                break;
            }
            suba.push(sub[i]);
        }
        return suba.length
    }  
    if(!s.length){
        return 0
    }
    let l = 0;
    for(let i = 0; i < s.length; i++){
        l = Math.max(findSubStr(s.substr(i, s.length)), l)
    }
    
    return l;
    
};