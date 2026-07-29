class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0

        for(let i = 0; i<heights.length-1; i++) {
            for(let j = i+1; j<heights.length; j++) {
                let width = j - i;
                let height = heights[i] > heights[j] ? heights[j] : heights[i];

                if (maxArea<width*height ) {
                    maxArea = width*height;                 
                }
            }
        }

        return maxArea
    }
}
