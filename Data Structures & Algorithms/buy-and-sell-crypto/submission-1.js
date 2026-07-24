class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;
        let min = prices[0];

        prices.forEach((e) => {
            if(e < min) {
                min = e;
            } else if (e - min > res) {
                res = e - min;
            }
        })

        return res
    }
}
