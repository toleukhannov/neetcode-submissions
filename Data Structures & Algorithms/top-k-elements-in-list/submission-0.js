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
        const arr = [...map.entries()].sort(function(a,b) {
            return b[1] - a[1];
        }).slice(0, k);

        const res = [];

        for(let i = 0; i < arr.length; i++) {
            res.push(arr[i][0])
        }

        return res;
    }
}
