export function heightChecker(heights: number[]): number {
	const arr = new Array<number>(101)
	let check = heights[0]
	for (const num of heights) {
		arr[num] = arr[num] ? arr[num] + 1 : 1
		check = Math.min(check, num)
	}

	let ans = 0
	for (const num of heights) {
		if (num !== check) ++ans

		--arr[check]

		while (!arr[check] && check <= 100) ++check
	}

	return ans
}
