const projectionArea = function(grid) {
  let total = 0;
  const n = grid.length;

  for (let i = 0; i < n; ++i) {
    let xMax = 0;
    let yMax = 0;
    for (let j = 0; j < n; ++j) {
      yMax = Math.max(yMax, grid[i][j]);
      xMax = Math.max(xMax, grid[j][i]);

      total += grid[i][j] > 0 ? 1 : 0;
    }

    total += yMax + xMax;
  }

  return total;
};