let maxHeap = function () {
  let heap = [null];
  this.insert = function (num) {
    heap.push(num);
    if (heap.length > 2) {
      let idx = heap.length - 1;
      while (heap[idx] > heap[Math.floor(idx / 2)]) {
        [heap[idx], heap[Math.floor(idx / 2)]] = [
          heap[Math.floor(idx / 2)],
          heap[idx],
        ];
        if (Math.floor(idx / 2) > 1) {
          idx = Math.floor(idx / 2);
        } else {
          break;
        }
      }
    }
  };
  this.show = function () {
    return heap;
  };

  this.remove = function () {
    let largest = heap[1];
    if (heap.length > 2) {
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      if (heap.length === 3) {
        if (heap[1] < heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return largest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[right] >= heap[i] || heap[left] >= heap[i]) {
        if (heap[left] > heap[right]) {
          [heap[left], heap[i]] = [heap[i], heap[left]];
          i = 2 * i;
        } else {
          [heap[right], heap[i]] = [heap[i], heap[right]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;

        if (heap[right] === undefined || heap[left] === undefined) {
          break;
        }
      }
    } else if (heap.length == 2) {
      heap.splice(1, 1);
    } else {
      return null;
    }
    return largest;
  };

  this.sort = function () {
    let result = new Array();
    while (heap.length > 1) {
      result.push(this.remove());
      console.log(heap);
    }
    return result;
  };
};

let x = new maxHeap();

x.insert(1);
x.insert(2);
// x.insert(10);
// x.insert(5);
// x.insert(15);
// console.log(x.show());
// x.remove();
// x.remove();
// x.remove();
// x.remove();
// x.insert(10);
// console.log(x.show());
console.log(x.sort());
