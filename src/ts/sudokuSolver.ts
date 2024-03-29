type Entry = "." | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
type Row = Array<Entry>
type Bitmask = number
type Board = Array<Row>

function indexes(index: number): [number, number, number] {
	const i = index % 9
	const j = Math.floor(index / 9)
	const square = Math.floor(i / 3) + 3 * Math.floor(j / 3)
	return [i, j, square]
}

const bitSet = (bit: number, index: number): number => bit | (1 << index)
const bitUnset = (bit: number, index: number): number => bit & ~(1 << index)

function solveSudoku(board: Board): void {
	// 1111111111 in binary corresponding to a fully set bitmask
	const ones = 1024 - 1
	const rowValidNums: Bitmask[] = new Array(9).fill(ones)
	const columnValidNums: Bitmask[] = new Array(9).fill(ones)
	const squareValidNums: Bitmask[] = new Array(9).fill(ones)

	// populate the bitmasks with the already set numbers
	for (let index = 0; index < 81; ++index) {
		const [i, j, square] = indexes(index)
		if (board[i][j] === ".") continue
		const num = parseInt(board[i][j])
		rowValidNums[j] = bitUnset(rowValidNums[j], num)
		columnValidNums[i] = bitUnset(columnValidNums[i], num)
		squareValidNums[square] = bitUnset(squareValidNums[square], num)
	}

	function dfs(index: number): boolean {
		if (index === 81) return true

		const [i, j, square] = indexes(index)
		// skip to the next spot if the number is already set
		if (board[i][j] !== ".") return dfs(index + 1)

		// bitmask corresponding to all the valid numbers for the current position on the board
		const bitmask =
			rowValidNums[j] & columnValidNums[i] & squareValidNums[square]
		for (let num = 1; num < 10; ++num) {
			if (!((1 << num) & bitmask)) continue

			// set the current position to the first valid number
			board[i][j] = num.toString() as Entry
			rowValidNums[j] = bitUnset(rowValidNums[j], num)
			columnValidNums[i] = bitUnset(columnValidNums[i], num)
			squareValidNums[square] = bitUnset(squareValidNums[square], num)

			// do a dfs with the assumed number
			// if the dfs finds a solution return true
			if (dfs(index + 1)) return true

			// return the bitmasks to their original state
			rowValidNums[j] = bitSet(rowValidNums[j], num)
			columnValidNums[i] = bitSet(columnValidNums[i], num)
			squareValidNums[square] = bitSet(squareValidNums[square], num)
		}
		// if no solution was found unset the number
		board[i][j] = "."
		return false
	}

	dfs(0)
}

function solveSudokuInline(board: Board): void {
	// 1111111111 in binary corresponding to a fully set bitmask
	const rowValidNums: Bitmask[] = new Array(9).fill(1023)
	const columnValidNums: Bitmask[] = new Array(9).fill(1023)
	const squareValidNums: Bitmask[] = new Array(9).fill(1023)

	// populate the bitmasks with the already set numbers
	for (let index = 0; index < 81; ++index) {
		const i = index % 9
		const j = Math.floor(index / 9)
		const square = Math.floor(i / 3) + 3 * Math.floor(j / 3)

		if (board[i][j] === ".") continue
		const num = parseInt(board[i][j])
		rowValidNums[j] &= ~(1 << num)
		columnValidNums[i] &= ~(1 << num)
		squareValidNums[square] &= ~(1 << num)
	}

	function dfs(index: number): boolean {
		if (index === 81) return true

		const i = index % 9
		const j = Math.floor(index / 9)
		const square = Math.floor(i / 3) + 3 * Math.floor(j / 3)

		// skip to the next spot if the number is already set
		if (board[i][j] !== ".") return dfs(index + 1)

		// bitmask corresponding to all the valid numbers for the current position on the board
		const bitmask =
			rowValidNums[j] & columnValidNums[i] & squareValidNums[square]
		for (let num = 1; num < 10; ++num) {
			if (!((1 << num) & bitmask)) continue

			// set the current position to the first valid number
			board[i][j] = num.toString() as Entry
			rowValidNums[j] &= ~(1 << num)
			columnValidNums[i] &= ~(1 << num)
			squareValidNums[square] &= ~(1 << num)

			// do a dfs with the assumed number
			// if the dfs finds a solution return true
			if (dfs(index + 1)) return true

			// return the bitmasks to their original state
			rowValidNums[j] |= 1 << num
			columnValidNums[i] |= 1 << num
			squareValidNums[square] |= 1 << num
		}
		// if no solution was found unset the number
		board[i][j] = "."
		return false
	}

	dfs(0)
}
