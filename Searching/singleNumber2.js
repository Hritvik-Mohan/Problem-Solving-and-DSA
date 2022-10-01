var singleNumber = function(nums) {
    let mp = {};

    for (let i = 0; i < nums.length; i++) {
        if(!mp[nums[i]]) mp[nums[i]] = 1;
        else mp[nums[i]] += 1;
    }

    for (let i = 0; i < nums.length; i++) {
        if(mp[nums[i]] == 1) {
            return nums[i];
        } 
    }
};


let arr =  [2,2,3,2];

console.log(singleNumber(arr));