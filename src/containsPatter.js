const containsPattern = (arr, m, k) => {
  let ans = 0;
  for (let i = 0; i + m < arr.length; i++) {
    if (arr[i] === arr[i + m]) ans++;
    else ans = 0;

    if (ans === (k - 1) * m) return true;
  }
  return false;
};

const arr = [1,2,3,1,2], m = 2, k = 2;
console.log(containsPattern(arr, m, k));