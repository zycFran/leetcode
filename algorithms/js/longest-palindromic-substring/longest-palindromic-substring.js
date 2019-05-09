/**********************************************************************************
 * 5.最长回文子串
 * 
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 
 * 示例1:
 *
 *     输入: "babad"
 *     输出: "bab"
 *     注意: "aba" 也是一个有效答案。
 * 
 * 示例2:
 *
 *     输入: "cbbd"
 *     输出: "bab"
 *
 *
 *
 **********************************************************************************/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let re = '', r;
    if(s.length <= 1){
        return s;
    }
    let dp = [], left = 0, right = 0;
    
    for(let i = 0,len = s.length; i < len; i++){
        dp[i] = []
        dp[i][i] = 1;
        for(let j = i - 1; j >=0 ;j--){
            if(s[i] === s[j]){
                if( i - j == 1|| dp[i-1][j+1]){
                    dp[i][j] = 1        
                }else{
                    dp[i][j] = 0
                }
            }else{
                dp[i][j] = 0
            }
            if(dp[i][j] && i -j  > right - left){
                right = i;
                left = j;
            }
        }
    }
    return s.substr(left, right-left + 1);
};