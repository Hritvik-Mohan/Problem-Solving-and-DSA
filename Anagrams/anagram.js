// Anagrams

const isAnagram = (s, t) => {
    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');

    return sortedS == sortedT;
};


// const isAnagram2 = (s, t) => s.split('').sort().join('') == t.split('').sort().join('');

console.log(isAnagram('listen', 'silent'));