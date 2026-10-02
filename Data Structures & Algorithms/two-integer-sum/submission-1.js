class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let frequency={}
        for (let i=0;i<nums.length;i++){
            let complement=target-nums[i]
            if(frequency[complement]!=undefined){
                return [frequency[complement],i]
            }
            frequency[nums[i]]=i;
        }
    }
}
