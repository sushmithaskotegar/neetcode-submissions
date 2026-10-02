class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap={}
        for (let i=0;i<nums.length;i++){
            let complement=target-nums[i]
            if(hashMap[complement]==undefined)
            {
                hashMap[nums[i]]=i
            }
            else {
                return [hashMap[complement],i]
            }

        }
    }
}
