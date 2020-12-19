// let arr1 = [1, 4, 10, 15, 18, 20];
// let arr2 = [2, 3, 11, 14, 16, 19, 22, 27];
let unsortedArray = [19, 3, 45, 34, 2, 77, 80, 106, 100];

let merge = function (arr1, arr2) {
  let a = 0,
    b = 0;
  let mergedArray = [];

  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] < arr2[b]) {
      mergedArray.push(arr1[a]);
      a++;
    } else if (arr1[a] > arr2[b]) {
      mergedArray.push(arr2[b]);
      b++;
    }
  }
  // if (arr1.length > a) {
  //   let leftElement = arr1.slice(a);
  //   mergedArray = mergedArray.concat(leftElement);
  // }
  // if (arr2.length > b) {
  //   let leftElement = arr2.slice(b);
  //   mergedArray = mergedArray.concat(leftElement);
  // }
  return mergedArray.concat(arr1.slice(a)).concat(arr2.slice(b));
};

const mergeSort = function (unsortedArray) {
  if (unsortedArray.length === 1) {
    return unsortedArray;
  }
  const middle = Math.floor(unsortedArray.length / 2);

  let leftHalf = unsortedArray.slice(0, middle);
  let rightHalf = unsortedArray.slice(middle);

  leftHalf = mergeSort(leftHalf);
  rightHalf = mergeSort(rightHalf);
  return merge(leftHalf, rightHalf);
};

console.log(mergeSort(unsortedArray));
