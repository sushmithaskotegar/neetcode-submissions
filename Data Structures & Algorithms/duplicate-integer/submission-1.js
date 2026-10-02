class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashMap={}
        for(let i=0;i<nums.length;i++){
            if(!hashMap[nums[i]]){
                hashMap[nums[i]]="seen"
                console.log('here')
            }
            else{
                return true
            }
        }
        return false
    }
    
}
