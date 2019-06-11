var trap = function(height) {
    if(!height.length){
        return 0
    }
    let len = height.length;
    let left_max = [height[0]], right_max = [], 
        re = 0;
    right_max[len - 1] = height[len-1]
    for(let i = 1; i < len; i++){
        left_max[i] = Math.max(height[i], left_max[i-1]);
    }
    for(let i = len - 2; i>=0; i--){
        right_max[i] = Math.max(height[i], right_max[i+1]);
    }
    console.log(left_max)
    console.log(right_max)
    for(let i = 1; i < len; i++){
        re += Math.min(left_max[i], right_max[i]) - height[i]
    }
    return re;
};

trap([0,1,0,2,1,0,1,3,2,1,2,1])