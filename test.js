var maximalRectangle = function(matrix) {
    let max = 0;
    let current = [];

    const largestArea = (arr) => {
        let stack = [];
        let i = 0;
        let maxArea = 0;

        while (i <= arr.length) {
            if (!stack.length || arr[stack[stack.length - 1]] <= arr[i]) {
                stack.push(i);
                i++
            } else {
                let height = arr[stack.pop()];
                let width = !stack.length ? i : i - stack[stack.length - 1] - 1;

                // console.log("height:" + height + ' width:' + width);
                let min = Math.min(height, width)
                maxArea = Math.max(maxArea, min * min);

            }
        }

        return maxArea;
    };

    for (let i = 0; i < matrix.length; i++) {
        if (i > 0) {
            for (let j = 0; j < current.length; j++) {
                if (matrix[i][j] === "1") {
                    current[j] = ~~current[j] + ~~matrix[i][j];
                } else {
                    current[j] = 0;
                }
            }
        } else {
            current = matrix[i];
        }
        max = Math.max(max, largestArea(current));
    }
    return max;
};
var maximalSquare = function(matrix) {
    const maxFun = (arr)=>{
        let max = 0, stack = [], i = 0;
        let len = arr.length;
        if(!len){
            return 0;
        }
        while(i <= len){
            if(!stack.length || arr[stack[stack.length - 1]] <= arr[i]){
                stack.push(i++)
            }else{
                let h = arr[stack.pop()];
                let w = !stack.length?i : i - 1 - stack[stack.length - 1]

                let min = Math.min(h, w)
                max = Math.max(min * min, max)
            }
        }
        return max
    }

    let max = 0, row;
    for(let i = 0, l1 = matrix.length; i < l1; i++){
        if(i > 0){
            for(let j = 0, l2 = row.length; j < l2; j++){
                if(matrix[i][j] === '1'){
                    row[j] = ~~row[j] + ~~matrix[i][j]
                }else{
                    row[j] = 0
                }
            }
        }else{
            row = matrix[i]
        }
        max = Math.max(max, maxFun(row));
    }
    return max;
};
let matirx = [["1"],["0"],["1"],["1"],["1"],["1"],["0"]];


console.log(maximalSquare(matirx));
 console.log(maximalRectangle(matirx));
