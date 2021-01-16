let counter = 0;
function dymanic() {
  let F = {};

  return function fibb(n) {
    counter++;
    if (n <= 1) {
      return n;
    }
    if (n in F) {
      return F[n];
    }
    F[n] = fibb(n - 1) + fibb(n - 2);
    return F[n];
  };
}

let dymanmicFibb = dymanic();
console.log(dymanmicFibb(30));
// console.log(counter);
