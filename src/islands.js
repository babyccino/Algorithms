const input = [
  [1,0,0,0,0,0],
  [0,1,0,1,1,1],
  [0,0,1,0,1,0],
  [1,1,0,0,1,0],
  [1,0,1,1,0,0],
  [1,0,0,0,0,1]
];

const _output = [
  [1,0,0,0,0,0],
  [0,0,0,1,1,1],
  [0,0,0,0,1,0],
  [1,1,0,0,1,0],
  [1,0,0,0,0,0],
  [1,0,0,0,0,1]
];

// The algorithm goes around the border and does DFS on any "land" tiles it finds
// These tiles are marked as land in the return matrix
// Any tiles which have not been visited were either water or an island so are marked as water
const removeIslands = arr => {
  const iLen = arr.length
  const jLen = arr[0].length
  const res = new Array(iLen);
  // this led to errors as all rows were the same array
  // res.fill(new Array(jLen));
  for (let i = 0; i < iLen; ++i) res[i] = (new Array(jLen)).fill(-1);

  const _dfs = (i, j) => {
    if (res[i][j] !== -1) return;

    res[i][j] = arr[i][j];

    if (arr[i][j] === 0) return;

    if (i > 0) _dfs(i - 1, j);
    if (i < iLen - 1) _dfs(i + 1, j);
    if (j > 0) _dfs(i, j - 1);
    if (j < jLen - 1) _dfs(i, j + 1);
  }

  for (let i = 0; i < iLen; ++i)
  for (let j = 0; j < jLen; ++j) {
    if (j === 0 || i === 0 || j === jLen - 1 || i === iLen - 1) _dfs(i, j);
  }

  for (let i = 0; i < iLen; ++i)
  for (let j = 0; j < jLen; ++j) {
    res[i][j] = res[i][j] === -1 ? 0 : res[i][j]
  }
}

const output = removeIslands(input);
for (const row of output) console.log(row);