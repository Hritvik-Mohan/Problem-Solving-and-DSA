let longestSequence = function(nums) {
    let mp = {};
    for (let i = 0; i < nums.length; i++) {
        if(!mp[nums[i]]) mp[nums[i]] = 1;
        else mp[nums[i]]++;
    }
    let ans = 1;
    for(let i = 0; i < nums.length; i++) {
        // check can nums[i] become start of a sequence
        if(mp[nums[i] - 1]) continue;
        // nums[i] is the start point
        // check the max length sequence it can generate
        let len = 0;
        let el = nums[i];
        while(mp[el]) {
            el++;
            len++;
        }
        ans = Math.max(ans, len);
    }
    return ans;
}