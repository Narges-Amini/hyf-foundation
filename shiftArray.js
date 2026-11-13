function shiftArray(arr, n) {
  if (arr.length === 0) {
    return arr;
  }
  n = n % arr.length; //To avoid unnecessary loops
  if (n > 0) {
    j = 1;
    while (j <= n) {
      let first = arr[0];
      for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
      }
      arr[arr.length - 1] = first;
      j += 1;
    }
    return arr;
  }
  if (n < 0) {
    j = -1;
    while (j >= n) {
      let last = arr[arr.length - 1];
      for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
      }
      arr[0] = last;
      j -= 1;
    }
    return arr;
  }
}

console.log(shiftArray([1, 2, 3], 1));
