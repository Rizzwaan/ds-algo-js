// var maximumProduct = function (arr) {
//     if (arr.length < 3) {
//         return null
//     }
//     if (arr.length == 3) {
//         return arr.reduce((acc, val) => acc * val)
//     }
//     let maxProduct = null;
//     for (let i = 0; i < arr.length - 2; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let product = (arr[i] * arr[j]) * arr[j + 1]
//             console.log(product)
//         }
//     }


// };

// let arr = [100, 98, -1, 2, 3, 4]
// let arr1 = [4, 3, 2, 1]

// maximumProduct(arr1)

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

var getSubarry = function (arr) {
    let subArray = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            subArray.push(arr.slice(i, j + 1))
        }

    }
    return subArray
}

var maxSubArray = function (arr) {

    let max = -Infinity

    for (let i = 0; i < arr.length; i++) {
        let temp = 0;
        for (let j = i; j < arr.length; j++) {
            temp = temp + arr[j]
            max = Math.max(temp, max);
        }

    }

    return max

};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// console.log(getSubarry([-2]))



