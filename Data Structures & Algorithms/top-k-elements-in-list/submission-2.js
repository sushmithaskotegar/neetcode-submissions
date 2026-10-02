class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap={}
        for(let i=0;i<nums.length;i++){
if(!hashMap[nums[i]]){
    hashMap[nums[i]]=1
}else{
    hashMap[nums[i]]=hashMap[nums[i]]+1
}
        }
       const modifiedArray=Object.entries(hashMap);
       const reversedArray=modifiedArray.sort((a,b)=>b[1]-a[1])
       const slicedArray=reversedArray.slice(0,k)
       const mappedArray=slicedArray.map((entry)=>entry[0])
      return mappedArray
       
    }
}
