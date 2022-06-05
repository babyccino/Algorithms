const _mergeArrays = (arr, left, middle, right) => {
  let rightPtr = middle + 1;
  let leftPtr = left;
  let arrCopy = new Array(right - left + 1);
  let i = 0;
  while(leftPtr <= middle && rightPtr <= right) {
    if(arr[leftPtr] < arr[rightPtr]) arrCopy[i] = arr[leftPtr++];
    else arrCopy[i] = arr[rightPtr++];
    ++i;
  }

  while(leftPtr <= middle) {
    arrCopy[i++] = arr[leftPtr++];
  }

  while(rightPtr <= right) {
    arrCopy[i++] = arr[rightPtr++];
  }

  for (i = 0; i <= right - left; ++i) {
    arr[i + left] = arrCopy[i];
  }
}

const _mergeSort = (arr, left, right) => {
  if (left >= right) return;
  if (right - left === 1) {
    if (arr[right] < arr[left]) {
      let temp = arr[right];
      arr[right] = arr[left];
      arr[left] = temp;
    }
    return;
  }
  const middle = Math.floor((left + right)/2);
  _mergeSort(arr, left, middle);
  _mergeSort(arr, middle + 1, right);
  _mergeArrays(arr, left, middle, right);
}

const mergeSort = arr => {
  _mergeSort(arr, 0, arr.length - 1);
  return arr;
};

const _mergeArrays2 = (arrL, arrR) => {
  let merge = new Array();
  let iL = 0, iR = 0;
  for (; iL < arrL.length && iR < arrR.length;) {
    if(arrL[iL] < arrR[iR]) merge.push(arrL[iL++]);
    else merge.push(arrR[iR++]);
  }

  merge = [...merge, ...(arrL.slice(iL)),...(arrR.slice(iR))];
  
  return merge;
}

const mergeSort2 = arr => {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length/2);
  const arrL = mergeSort2(arr.slice(0, middle));
  const arrR = mergeSort2(arr.slice(middle));
  return _mergeArrays2(arrL, arrR);
}