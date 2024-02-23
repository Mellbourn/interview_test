console.log("hello world");
// 0, 1, 1, 2, 3, 5, 8, 13

function fib(size) {
  if (size === 0) {
    return 0;
  }
  if (size === 1) {
    return 1;
  }
  return fib(size - 1) + fib(size - 2);
}

console.log(fib(6));

// function fibarray(size, previousArray) {
//   if (size === 0) {
//     return [];
//   }
//   if (size === 1) {
//     return [0];
//   }
//   if (size === 2) {
//     return [0, 1];
//   }
//   const last = previousArray.length;
//   const nextNumber = previousArray[last - 1] + previousArray[last];
//   return fibarray(size - 1, [...previousArray, nextNumber]);
// }

function fibarray(size) {
  if (size < 0 || isNaN(size)) {
    throw new Error("illegal argument");
  }
  if (size === 0) {
    return [];
  }
  if (size === 1) {
    return [0];
  }
  if (size === 2) {
    return [0, 1];
  }
  const result = [0, 1];
  let current = 1;
  let previous = 0;
  for (let index = 0; index < size - 2; index++) {
    const temp = current;
    current = current + previous;
    previous = temp;
    result.push(current);
  }
  return result;
}

console.log(fibarray(-4));
