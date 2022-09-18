var containsDuplicate = function(nums) {
    let mp = {};
    
    for(i = 0; i < nums.length; i++) {
        if (!mp[nums[i]]) {
            mp[nums[i]] = 1;
        } else {
            mp[nums[i]] += 1;
        }
    }
    console.log(mp)
    for(i = 0; i < nums.length; i++) {
        if(mp[nums[i]] >= 2) return true
    }
    return false;
};

console.log(containsDuplicate([3,3]))