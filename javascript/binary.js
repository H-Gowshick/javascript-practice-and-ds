function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midValue = arr[mid];

    if (midValue === target) {
      return mid; // Target found, return the index
    } else if (midValue < target) {
      low = mid + 1; // Search in the right half
    } else {
      high = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 6;

const result = binarySearch(sortedArray, targetValue);

if (result !== -1) {
  console.log(`Element ${targetValue} found at index ${result}`);
} else {
  console.log(`Element ${targetValue} not found in the array`);
}
