// //given an array and a number n determine if n is the mid point of the array

let nums = [2, 7, 8, 9, 10, 13, 17, 19, 21];

const BinarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let mid = Math.floor((left = right) / 2);
    mid;

    if (target === array[mid]) {
      console.log(`Correct Middle is ${array[mid]}`);
      return mid;
    } else if (target < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    console.log(`False Middle is ${array[mid]}`);
    return false;
  }
};

BinarySearch(nums, 10);

// //recursive solution

function binarySearch(array, target) {
  // because we are not looping through our array, the values of left and right do not get
  // automatically updated and so we need to keep track by adding them each time we call binarySearchHelper()
  return binarySearchHelper(array, target, 0, array.length - 1);
}

const binarySearchHelper = (array, target, left, right) => {
  if (left > right) {
    console.log(`False Middle is ${array[mid]}`);
    return false;
  }

  let mid = Math.floor((left = right) / 2);
  mid;

  if (target === array[mid]) {
    console.log(`Correct Middle is ${array[mid]}`);
    return mid;
  } else if (target < array[mid]) {
    return binarySearchHelper(array, target, left, mid - 1);
  } else {
    return binarySearchHelper(array, target, mid + 1, right);
  }
};

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

const findPerfectSquare = (target) => {
  let left = 0;
  let right = target;
  let mid = Math.floor((left + right) / 2);
  for (let i = left; i <= right; i++) {
    console.log(i * i);
    if (target === i * i) {
      return true;
    } else if (target < i * i) {
      console.log(mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};
findPerfectSquare(49);

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

const findFixedPoint = (nums) => {
  let ans;
  let left = 0;
  let right = nums.length - 1;
  if (nums.length - 1 === 0 || nums.length === 0 || right <= 0) {
    return 0;
  } else if (nums && nums.length > 0) {
    for (let i = left; i <= right; i++) {
      let mid = Math.floor(left + (right - left) / 2);

      if (nums[mid] < mid) {
        left = mid + 1;
      } else if (nums[mid] > mid) {
        right = mid - 1;
      } else {
        ans = mid;
        right = mid - 1;
      }
    }
  }

  if (!ans) {
    return -1;
  } else {
    return ans;
  }
};

findFixedPoint([-1, 0]);

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

// Given three integer lists a, b and c, find the minimum possible abs(a[i] - b[j]) + abs(b[j] - c[k]) for any i, j and k.

// Constraints

// 1 ≤ n ≤ 100,000 where n is the length of a
// 1 ≤ m ≤ 100,000 where m is the length of b
// 1 ≤ k ≤ 100,000 where k is the length of c
// Example 1
// Input
// a = [1, 8, 5]
// b = [2, 9]
// c = [5, 4]
// Output
// 3
// Explanation
// We can pick a[0], b[0] and c[1]

const minDiffr = (a, b, c) => {
  let i = a.length - 1;
  let j = b.length - 1;
  let k = c.length - 1;

  let minDiff = Math.abs(a[i] - b[j]) + Math.abs(b[j] - c[k]);

  while (i != -1 && j != -1 && k != -1) {
    let currDiff = Math.abs(a[i] - b[j]) + Math.abs(b[j] - c[k]);

    if (currDiff < minDiff) {
      minDiff = currDiff;
    }
    let maxTerm = Math.max(a[i], b[j], c[k]);
    if (a[i] == maxTerm) {
      i -= 1;
    } else if (b[j] == maxTerm) {
      j -= 1;
    } else {
      k -= 1;
    }
  }
  return minDiff;
};
let ra = [1, 8, 5];
let rb = [2, 9];
let rc = [5, 4];

minDiffr(ra, rb, rc);

// Given a list of integers nums sorted in ascending order, return whether it can be split into any number of subsequences such that each subsequence has at least length 3 and is consecutively increasing.

// Constraints

// n ≤ 100,000 where n is the length of nums
// Example 1
// Input
// nums = [1, 2, 3, 3, 4, 5, 6]
// Output
// true
// Explanation
// We can split the list to [1, 2, 3] and [3, 4, 5, 6].

// We iterate through the array once to get the frequency of all the elements in the array
// We iterate through the array once more and for each element we either see if it can be
//  appended to a previously constructed consecutive sequence or if it can be the start of a new consecutive sequence.
//  If neither are true, then we return false.

const isPossible = (nums) => {
  let freq = new Map();
  let appendfreq = new Map();
  for (const i of nums) {
    freq.set(i, getOrDefault(freq, i, 0) + 1);
  }
  for (const i of nums) {
    if (freq.get(i) == 0) continue;
    if (getOrDefault(appendfreq, i, 0) > 0) {
      appendfreq.set(i, appendfreq.get(i) - 1);
      appendfreq.set(i + 1, getOrDefault(appendfreq, i + 1, 0) + 1);
    } else if (
      getOrDefault(freq, i + 1, 0) > 0 &&
      getOrDefault(freq, i + 2, 0) > 0
    ) {
      freq.set(i + 1, freq.get(i + 1) - 1);
      freq.set(i + 2, freq.get(i + 2) - 1);
      appendfreq.set(i + 3, getOrDefault(appendfreq, i + 3, 0) + 1);
    } else {
      return false;
    }
    freq.set(i, freq.get(i) - 1);
  }
  return true;
};

// rewrite java HashMap.getOrDefault() logic
const getOrDefault = (map, k, v) => {
  if (!map.has(k)) {
    return v;
  }
  return map.get(k);
};
