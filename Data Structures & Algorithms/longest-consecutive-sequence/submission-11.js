class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const sortedNums = nums.sort((a, b) => {return a - b;});
        let result = 0;
        let current_streak = 0;

        if(!sortedNums) {
            return current_streak;
        }

        if(sortedNums.length>=1) {
            result++;
        }

        for(let i = 1; i < sortedNums.length; i++) {
            if(sortedNums[i]-sortedNums[i-1] === 1) {
                if(!current_streak) {
                    current_streak +=2;
                } else {
                    current_streak +=1
                }

                if(current_streak > result) {
                    result = current_streak;
                }
            } else if (sortedNums[i]-sortedNums[i-1] === 0) {
                continue;
            } else {
                current_streak = 0;
            }
        }

        return result;
    }
}
