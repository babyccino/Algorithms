type Entry = "." | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
type Row = Array<Entry>
type Check = number
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
	const rowValidNums: Check[] = new Array(9).fill(ones)
	const columnValidNums: Check[] = new Array(9).fill(ones)
	const squareValidNums: Check[] = new Array(9).fill(ones)

	for (let index = 0; index < 81; ++index) {
		const [i, j, square] = indexes(index)
		if (board[i][j] === ".") continue
		const num = parseInt(board[i][j])
		rowValidNums[j] = bitUnset(rowValidNums[j], num)
		columnValidNums[i] = bitUnset(columnValidNums[i], num)
		squareValidNums[square] = bitUnset(squareValidNums[square], num)
	}

	function findValidNumbers(i: number, j: number, square: number): number[] {
		const entries: number[] = []
		const bit = rowValidNums[j] & columnValidNums[i] & squareValidNums[square]
		for (let num = 1; num < 10; ++num) if ((1 << num) & bit) entries.push(num)

		return entries
	}

	function dfs(index: number): boolean {
		if (index === 81) return true

		const [i, j, square] = indexes(index)
		if (board[i][j] !== ".") return dfs(index + 1)

		const validNumbers = findValidNumbers(i, j, square)

		for (const num of validNumbers) {
			board[i][j] = num.toString() as Entry

			rowValidNums[j] = bitUnset(rowValidNums[j], num)
			columnValidNums[i] = bitUnset(columnValidNums[i], num)
			squareValidNums[square] = bitUnset(squareValidNums[square], num)

			if (dfs(index + 1)) return true

			rowValidNums[j] = bitSet(rowValidNums[j], num)
			columnValidNums[i] = bitSet(columnValidNums[i], num)
			squareValidNums[square] = bitSet(squareValidNums[square], num)
		}
		board[i][j] = "."
		return false
	}

	dfs(0)
}