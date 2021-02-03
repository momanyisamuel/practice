//given an array and a number n determine if n is the mid point of the array

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
