class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let sortedArray = nums.sort((a, b) => a - b);

        let remDuplicated = [...new Set(sortedArray)];
        let currentCount = 0;
        let longestCount = 0;
        for (let i = 0; i < remDuplicated.length; i++) {
            if (i === 0) {
                currentCount = 1;
            } else if ((remDuplicated[i] == remDuplicated[i - 1] + 1)) {
                currentCount++;
            } else {
                currentCount = 1;
            }
            longestCount = Math.max(currentCount, longestCount);
        }
        return longestCount;
    }
}
