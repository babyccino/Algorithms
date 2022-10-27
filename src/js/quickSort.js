const _swap = (arr, left, right) => {
  if (left == right) return arr;
  arr[left] = arr[left] + arr[right];
  arr[right] = arr[left] - arr[right];
  arr[left] = arr[left] - arr[right];
  return arr;
}

const _quickSort = (arr, left, right) => {
  if (left + 1 == right) {
    if (arr[left] > arr[right]) {
      swap(arr, left, right);
    }
    
    return;
  }
  if (left >= right) return;

  let iL = left,
      iR = right - 1,
      iPivot = Math.floor((right + left)/2),
      pivot = arr[iPivot];
  
  _swap(arr, iPivot, right);

  while (iL <= right && arr[iL] < pivot) ++iL;
  while (iR >= 0 && arr[iR] > pivot) --iR;
  while (iL < iR) {
    _swap(arr, iL, iR);
    while (iL <= right && arr[iL] < pivot) ++iL;
    while (iR >= 0 && arr[iR] > pivot) --iR;
  }

  // put pivot back in its correct place
  _swap(arr, iL, right);

  _quickSort(arr, left, iL - 1);
  _quickSort(arr, iL + 1, right);

  return arr;
}

const quickSort = arr => {
  return _quickSort(arr, 0, arr.length - 1);
}

const quickSort2 = arr => {
  if (arr.length <= 1) return arr;

  const right = arr.length - 1;
  let iL = 0,
      iR = right - 1,
      iPivot = Math.floor((right)/2),
      pivot = arr[iPivot];

  _swap(arr, iPivot, right);

  while (iL <= right && arr[iL] < pivot) ++iL;
  while (iR >= 0 && arr[iR] > pivot) --iR;
  while (iL < iR) {
    _swap(arr, iL, iR);
    while (iL <= right && arr[iL] < pivot) ++iL;
    while (iR >= 0 && arr[iR] > pivot) --iR;
  }

  _swap(arr, iL, right);

  return [...quickSort2(arr.slice(0, iL)), pivot, ...quickSort2(arr.slice(iL + 1))];
}

console.log(quickSort2([5,7,6,4,3,8,2,1]));
