/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        let leftSubArray = nums.slice(0, i);
        let rightSubArray = nums.slice(i+1, nums.length);
        
        let leftSum = leftSubArray.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0);
        let rightSum = rightSubArray.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0);
        
        if (leftSum === rightSum) {
            return i;
        }
    }
    
    return -1;
};