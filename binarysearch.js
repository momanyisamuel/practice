// //given an array and a number n determine if n is the mid point of the array

// let nums = [2, 7, 8, 9, 10, 13, 17, 19, 21];

// const BinarySearch = (array, target) => {
//   let left = 0;
//   let right = array.length - 1;

//   while (left < right) {
//     let mid = Math.floor((left = right) / 2);
//     mid;

//     if (target === array[mid]) {
//       console.log(`Correct Middle is ${array[mid]}`);
//       return mid;
//     } else if (target < array[mid]) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//     console.log(`False Middle is ${array[mid]}`);
//     return false;
//   }
// };

// BinarySearch(nums, 10);

// //recursive solution

// function binarySearch(array, target) {
//   // because we are not looping through our array, the values of left and right do not get
//   // automatically updated and so we need to keep track by adding them each time we call binarySearchHelper()
//   return binarySearchHelper(array, target, 0, array.length - 1);
// }

// const binarySearchHelper = (array, target, left, right) => {
//   if (left > right) {
//     console.log(`False Middle is ${array[mid]}`);
//     return false;
//   }

//   let mid = Math.floor((left = right) / 2);
//   mid;

//   if (target === array[mid]) {
//     console.log(`Correct Middle is ${array[mid]}`);
//     return mid;
//   } else if (target < array[mid]) {
//     return binarySearchHelper(array, target, left, mid - 1);
//   } else {
//     return binarySearchHelper(array, target, mid + 1, right);
//   }
// };

// /*
// Given an integer n, return whether n = k * k for some integer k.
// This should be done without using built-in square root function.

// Constraints
// 0 ≤ n < 2 ** 31

// Example 1

// Input
// n = 25
// Output
// true

// Explanation
// 25 = 5 * 5

//  */

// const findPerfectSquare = (target) => {
//   let left = 0;
//   let right = target;
//   let mid = Math.floor((left + right) / 2);
//   for (let i = left; i <= right; i++) {
//     console.log(i * i);
//     if (target === i * i) {
//       return true;
//     } else if (target < i * i) {
//       console.log(mid);
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return false;
// };
// findPerfectSquare(49);

// /*
// Given an integer n, return whether n = k * k for some integer k.
// This should be done without using built-in square root function.

// Constraints
// 0 ≤ n < 2 ** 31

// Example 1

// Input
// n = 25
// Output
// true

// Explanation
// 25 = 5 * 5
// */

// /*
// Given an integer n, return whether n = k * k for some integer k.
// This should be done without using built-in square root function. */

// //recursive solution

const findPerfectSquare = (target) => {
  return findPerfectSquareHelper(target, 0, target);
};
const findPerfectSquareHelper = (target, left, right) => {
  if (left > right) {
    console.log("false");
    return false;
  }

  let mid = Math.floor((left + right) / 2);
  if (target === mid * mid) {
    console.log("true");
    return true;
  } else if (target < mid * mid) {
    return findPerfectSquareHelper(target, left, mid - 1);
  } else {
    return findPerfectSquareHelper(target, mid + 1, right);
  }
};

findPerfectSquare(2);

// const findFixedPoint = (nums) => {
//   let ans;
//   let left = 0;
//   let right = nums.length - 1;
//   if (nums.length - 1 === 0 || nums.length === 0 || right <= 0) {
//     return 0;
//   } else if (nums && nums.length > 0) {
//     for (let i = left; i <= right; i++) {
//       let mid = Math.floor(left + (right - left) / 2);

//       if (nums[mid] < mid) {
//         left = mid + 1;
//       } else if (nums[mid] > mid) {
//         right = mid - 1;
//       } else {
//         ans = mid;
//         right = mid - 1;
//       }
//     }
//   }

//   if (!ans) {
//     return -1;
//   } else {
//     return ans;
//   }
// };

// findFixedPoint([-1,0]);

function getSum() {
  let sum = 0;

  while (n > 0 || sum > 9) {
    if (n == 0) {
      n = sum;
      sum = 0;
    }
    sum += Math.floor(n % 10);
    n = Math.floor((n /= 10));
  }
  return sum;
}
