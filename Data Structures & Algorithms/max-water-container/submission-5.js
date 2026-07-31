class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max_area = 0;
        let leftPointer = 0;
        let rightPointer = heights.length - 1;

        while(leftPointer<rightPointer) {
            let area;
            if(heights[leftPointer] <= heights[rightPointer]) {
                area = heights[leftPointer] * (rightPointer - leftPointer);
                leftPointer += 1;
            } else {
                area = heights[rightPointer] * (rightPointer - leftPointer);
                rightPointer -= 1;
            }

            if(max_area<area) {
               max_area=area;
            }
        }

        return max_area;
    }
}
