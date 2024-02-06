function linearSearch(arr, item) {
  // Go through all the elements of arr to look for item.
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      // Found it!
      return i;
    }
  }

  // Item not found in the array.
  return null;
}
Target = 5;

Array = [1, 2, 3, 4, 5, 6, 5, 7, 8, 9, 5];
console.log(linearSearch(Array, Target));
