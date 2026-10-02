class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency={}
        const result=[];
        for(let i=0;i<nums.length;i++){
            frequency[nums[i]]=(frequency[nums[i]]||0)+1
        }
        let pairs=Object.entries(frequency)
       pairs.sort((a,b)=>b[1]-a[1])
       for(let i=0;i<k;i++){
result.push([pairs[i][0]])
       }
return result;
    }
}
