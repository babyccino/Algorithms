const cont = (arr, len, sum) => {
  const map = {};
  let total = 0;
  let subTotal = 0;
  let firstIndexMember = 0;
  let firstIndexTotal = [];

  for (let i = 0; i < arr.length; ++i) {
    if (i - len >= 0) {
      firstIndexMember = arr[i - len];
      --map[firstIndexMember];
      subTotal -= firstIndexTotal[i - len];
    }

    const curr = arr[i];
    const lookingFor = sum - curr;
    subTotal += map[lookingFor] ? map[lookingFor] : 0;
    
    if (i - len >= 0) {
      total += subTotal;
    } else {
      total = subTotal;
    }

    firstIndexTotal[i] = subTotal;
    map[curr] = map[curr] ? map[curr] + 1 : 1;
  }

  return total;
}

{
  let a = [15, 8, 8, 2, 6, 4, 1, 7];
  const m = 2;
  const k = 8;
  console.log(cont(a, m, k), 2);
}

{
  const a = [2, 4, 7, 5, 3, 5, 8, 5, 1, 7];
  const m = 4;
  const k = 10;
  console.log(cont(a, m, k), 5);
}