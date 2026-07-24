class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let loweredString = s.toLowerCase();
        let noSpace = loweredString.replace(" ", "");
        const cleanString = noSpace.replace(/[^a-zA-Z0-9]/g, "");

        const reversed = cleanString.split('').reverse().join('');

        return reversed === cleanString;
    }
}
