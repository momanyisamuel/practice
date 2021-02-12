/* 
Given a list of integers nums, return a new list such that each element at index i of the new 
list is the product of all the numbers in the original list except the one at i. 
Do this without using division.

Constraints
2 ≤ n ≤ 100,000 where n is the length of nums
Example 1
Input
nums = [1, 2, 3, 4, 5]
Output
[120, 60, 40, 30, 24]
Explanation
 120 = 2 * 3 * 4 * 5, 60 = 1 * 3 * 4 * 5, and so on.
 */

const specialProductList = (nums) => {
  let hash = {};
  let temp = 1;
  for (let i in nums) {
    hash[i] = temp;
    temp *= nums[i];
  }
  temp = 1;
  for (let i in nums) {
    hash[nums.length - 1 - i] *= temp;
    temp *= nums[nums.length - 1 - i];
  }
  for (let i in nums) {
    nums[i] = hash[i];
  }
  console.log(nums);
  return nums;
};

specialProductList([1, 2, 3, 4, 5]);

/*
create a hash to keep track of the running totals
loop through the array forward creating each hash entry with the running total - to get the product of all numbers before the index 
loop again backwards with the running total - to include the product of all numbers after the index
run through it one more time replacing each number in the original array with the product of all other indices to avoid creating a new array
*/
