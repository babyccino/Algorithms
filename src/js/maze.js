const iOffset = [1, 0, -1, 0];
const jOffset = [0, 1, 0, -1];

const nearestExit = (maze, entrance) => {
  const iLen = maze.length, jLen = maze[0].length

  maze[entrance[0]][entrance[1]] = '/';
  const queue = [];
  for (let traverse = 0; traverse < 4; ++traverse) {
    const iBFS = entrance[0] + iOffset[traverse];
    const jBFS = entrance[1] + jOffset[traverse];

    if (iBFS < 0 || jBFS < 0 || iBFS >= iLen || jBFS >= jLen) continue;
    if (maze[iBFS][jBFS] !== '.') continue;

    queue.push({i: iBFS, j: jBFS, pathLen: 1});
    maze[iBFS][jBFS] = '/';
  }

  while(queue.length > 0) {
    const {i, j, pathLen} = queue[0];
    if (i === 0 || j === 0 || i === iLen - 1 || j === jLen - 1) return pathLen;
    queue.shift();

    for (let traverse = 0; traverse < 4; ++traverse) {
      const iBFS = i + iOffset[traverse];
      const jBFS = j + jOffset[traverse];

      if (maze[iBFS][jBFS] !== '.') continue;

      queue.push({i: iBFS, j: jBFS, pathLen: pathLen + 1});
      maze[iBFS][jBFS] = '/';
    }
  }

  return -1;
};

const maze = [[".","+"]], entrance = [0,0];

console.log(nearestExit(maze, entrance));
