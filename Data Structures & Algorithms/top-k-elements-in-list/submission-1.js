class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for(let num of nums) {
            if(map.has(num)) {
                map.set(num, map.get(num)+1);
            } else {
                map.set(num, 1);
            }
        }

        const buckets = new Array(nums.length - 1);
        for (const [num, count] of map) {
            if(buckets[count]) {
                buckets[count].push(num);
            } else {
                buckets[count] = [num]
            }
        }

        const res = [];

        for (let i = buckets.length - 1; i >= 0; i--) {
            if(buckets[i]) {
                for(let numb of buckets[i]) {
                    res.push(numb)
                    if(res.length===k) {
                        return res;
                    }
                } 
            } else {
                continue;
            }
        }
    }
}
