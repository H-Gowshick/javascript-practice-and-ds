function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate the remaining elements
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage:
const array = [8, 3, 9, 2, 5, 6, 4, 1, 7];
console.log("Original array:", array);
const sortedArray = mergeSort(array);
console.log("Sorted array:", sortedArray);
