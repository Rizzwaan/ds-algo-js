function RBinarySearch(arr, low, high, key) {
  if (low === high) {
    if (key == arr[low]) {
      return arr[low];
    } else {
      return "not found";
    }
  } else {
    let mid = Math.floor((low + high) / 2);
    if (key === arr[mid]) {
      return [arr[mid], "found"];
    }

    if (key < arr[mid]) {
      return RBinarySearch(arr, low, mid - 1, key);
    } else {
      return RBinarySearch(arr, mid + 1, high, key);
    }
  }
}

let arr = [3, 6, 8, 12, 14, 17, 25, 29, 31, 36, 42, 47, 53, 55, 62];

console.log(RBinarySearch(arr, 0, arr.length, 42));
