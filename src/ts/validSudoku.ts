function helper(
	board: string[][],
	i: number,
	j: number,
	check: number
): [boolean, number] {
	if (board[i][j] !== ".") {
		const num = parseInt(board[i][j])
		if (check & (1 << num)) return [false, check]
		check |= 1 << num
	}
	return [true, check]
}

export function isValidSudoku(board: string[][]): boolean {
	let verticalCheck = 0
	let horizontalCheck = 0
	let blockCheck = 0

	for (let i = 0; i < 9; ++i) {
		const blockInitialX = (i * 3) % 9
		const blockInitialY = Math.floor(i / 3) * 3

		for (let j = 0; j < 9; ++j) {
			// column at x = i
			if (board[i][j] !== ".") {
				const num = parseInt(board[i][j])
				if (verticalCheck & (1 << num)) return false
				verticalCheck |= 1 << num
			}

			// row at y = i
			if (board[j][i] !== ".") {
				const num = parseInt(board[j][i])
				if (horizontalCheck & (1 << num)) return false
				horizontalCheck |= 1 << num
			}

			// blocks, starting top left, going right to left, top to bottom
			const x = blockInitialX + (j % 3)
			const y = blockInitialY + Math.floor(j / 3)
			if (board[x][y] === ".") continue
			const num = parseInt(board[x][y])
			if (blockCheck & (1 << num)) return false
			blockCheck |= 1 << num
		}

		verticalCheck = 0
		horizontalCheck = 0
		blockCheck = 0
	}

	return true
}
