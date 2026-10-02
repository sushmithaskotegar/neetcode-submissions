class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let occ={}
        for (let i=0;i<nums.length;i++){
            if(!occ[nums[i]]){
                occ[nums[i]]='seen'
            }
            else{
                return true
            }
    }
    return false;
}
}