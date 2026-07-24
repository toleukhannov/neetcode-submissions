class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        set<int> noDuplicateArr;
        for (int i = 0; i<nums.size(); i++) {
            noDuplicateArr.insert(nums[i]);
        };
        return nums.size() != noDuplicateArr.size();
    }
};