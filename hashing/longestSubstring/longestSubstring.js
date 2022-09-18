const longestSubstring = function(s) {
    let longest = 0;
    let start = 0;
    let mp = {};
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        if(mp[char]) {
            start = Math.max(start, mp[char]);
        }
        mp[char] = i + 1;
        longest = Math.max(longest, i - start + 1);
    }
    return longest;
};

console.log(longestSubstring("abcabcbb"));