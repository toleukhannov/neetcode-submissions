class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        let key = undefined;
        for(let word of strs) {
            key = word.split('').sort().join('')
            if(map.has(key)) {
                map.get(key).push(word)
            } else {
                map.set(key, [word]);
            }
        }

        return [...map.values()];
    }
}
