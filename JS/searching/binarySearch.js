function binarySearch(arr, key) {
  let low = 0;
  let high = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === key) {
      return [arr[mid], "found"];
    }
    if (key < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return "not Found";
}

let arr = [3, 6, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 62];

console.log(binarySearch(arr, 62));
