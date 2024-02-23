console.log("hello world");

function fibTS(size: number): number {
  if (size === 0) {
    return 0;
  }
  if (size === 1) {
    return 1;
  }
  return fibTS(size - 1) + fibTS(size - 2);
}

console.log(fibTS(6));
