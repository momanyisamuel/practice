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

const stringSequence = (s0, s1, n) => {
  if (n == 0) return s0;
  if (n == 1) return s1;
  let A = [];
  A[0] = s0;
  A[1] = s1;
  for (let i = 0; i < n + 1; i++) {
    if (i % 2 === 0) {
      A[i] = A[i - 1] + A[i - 2];
    } else {
      A[i] = A[i - 2] + A[i - 1];
    }
  }
  return A[n];
};
let s0 = "a",
  s1 = "b",
  n = 4;
stringSequence(s0, s1, n);

// Given lowercase alphabet strings s0, s1 and a positive integer n, return the nth term of the sequence A where:

// A[0] = s0
// A[1] = s1
// A[n] = A[n - 1] + A[n - 2] if n is even, otherwise A[n] = A[n - 2] + A[n - 1].
// Example 1
// Input
// s0 = "a"
// s1 = "b"
// n = 4
// Output
// "bbaba"
// Explanation
// The sequence A is:

// "a"
// "b"
// "ba" ("b" + "a")
// "bba" ("b" + "ba")
// "bbaba" ("bba" + "ba")
// And A[4] = "bbaba".
