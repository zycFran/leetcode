/**********************************************************************************
 * 6. Z 字形变换

 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 *
 *      L   C   I   R
 *      E T O E S I I G
 *      E   D   H   N
 *
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 *
 * 示例 1:
 *
 *     输入: s = "LEETCODEISHIRING", numRows = 3
 *     输出: "LCIRETOESIIGEDHN"
 * 
 * 示例 2:
 *
 *     输入: s = "LEETCODEISHIRING", numRows = 4
 *     输出: "LDREOEIIECIHNTSG"
 * 
 *     L     D     R
 *     E   O E   I I
 *     E C   I H   N
 *     T     S     G
 *
 **********************************************************************************/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let pos = [];
    
    function mapPos(origin_pos, numRows){
        let group = Math.floor((origin_pos + 1) / (numRows + numRows - 2));       
        let last =  (origin_pos + 1) - group*(numRows + numRows - 2)
        let col = group * (numRows - 1), row = 1;
        if(last > numRows){
            col += last - numRows;
            row = numRows - 1 - (last - numRows)
        }else{
            if(last > 0){
                // col += 1;
                row = last - 1;
            }
        }
        return {
            row,
            col
        }
    }
    for(let i = 0,len = s.length; i < len; i++){
        let re = mapPos(i,numRows);
        if(!pos[re.row]){
            pos[re.row] = ''
        }
        pos[re.row] += s[i];
    }
    return pos.join("")

};