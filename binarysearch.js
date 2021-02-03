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

//recursive solution

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
