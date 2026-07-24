class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(let item of strs) {
            const charCount = new Array(26).fill(0);
            
            for(let i = 0; i<item.length; i++) {
                charCount[item.charCodeAt(i) - "a".charCodeAt(0)]++;
            }

            const key = charCount.join(',').toString();
            
            if(map.has(key)) {
                map.get(key).push(item)
            } else {
                map.set(key, [item]);
            }
        }
        
        return [...map.values()];
    }
}
