class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hashMap={}
        for(let i=0;i<strs.length;i++){
            let sortedString=strs[i].split("").sort().join("")
            if(!hashMap[sortedString]){
hashMap[sortedString]=[strs[i]]
            }
            else{
                hashMap[sortedString].push(strs[i])
            }
            
        }
       return Object.values(hashMap)
    }
}
