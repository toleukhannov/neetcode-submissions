class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;
        for(let i = 0; i<prices.length; i++) {
            for(let j = prices.length; j>i; j--) {
                if(prices[j]-prices[i]>res) {
                    res = prices[j]-prices[i];
                }
            }
        }
        return res;
    }
}
