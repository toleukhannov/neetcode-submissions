class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const leftProduct = new Array(nums.length);

        let currentLeftProduct = 1;

        for (let i = 0; i < nums.length; i++) {
            leftProduct[i] = currentLeftProduct;
            currentLeftProduct *= nums[i];
        }

        const rightProduct = new Array(nums.length);

        let currentRightProduct = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            rightProduct[i] = currentRightProduct;
            currentRightProduct *= nums[i];
        }
        
        const answer = []

        for (let i = 0; i< nums.length; i++) {
            answer[i] = leftProduct[i] * rightProduct[i]
        }

        return answer;
    }
}
