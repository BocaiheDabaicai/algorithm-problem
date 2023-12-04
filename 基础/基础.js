var aaa = 1;

var moveZeroes = function(nums) {
    let count = 0;
    nums = nums.filter(item => {
        if(item === 0) {
            count ++
            return false
        }else
            return true
    })

    while(count>0){
        nums.push(0)
        count--
    }

    return nums
};

moveZeroes([0,1,0,3,12])

