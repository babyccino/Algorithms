export function uniquePaths(m: number, n: number): number {
	if (m === 1 || n === 1) return m * n

	let arr = new Array(m) // .fill(1)
	for (let i = 0; i < m; ++i) arr[i] = 1

	for (let i = 1; i < n; ++i) {
		for (let ii = 1; ii < m; ++ii) {
			arr[ii] += arr[ii - 1]
		}
	}

	return arr.pop()
}

export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
	if (obstacleGrid.length === 1) {
		if (obstacleGrid[0].some((el) => el === 1)) return 0
		return 1
	} else if (obstacleGrid[0].length === 1) {
		for (let i = 0; i < obstacleGrid.length; ++i)
			if (obstacleGrid[i][0] === 1) return 0
		return 1
	}

	let arr = new Array<number>(obstacleGrid[0].length).fill(0)
	arr[0] = 1

	for (let i = 0; i < obstacleGrid.length; ++i) {
		arr[0] = obstacleGrid[i][0] ? 0 : arr[0]
		for (let ii = 1; ii < obstacleGrid[0].length; ++ii)
			arr[ii] = obstacleGrid[i][ii] ? 0 : arr[ii] + arr[ii - 1]
	}

	return arr.pop()
}
