const aCharCode = "A".charCodeAt(0) - 1

export function titleToNumber(columnTitle: string): number {
	let sum = 0
	let power = 1
	for (let i = columnTitle.length - 1; i >= 0; --i) {
		sum += (columnTitle.charCodeAt(i) - aCharCode) * power
		power *= 26
	}

	return sum
}

export const titleToNumberFunc = (columnTitle: string): number =>
	columnTitle
		.split("")
		.reverse()
		.reduce<number>(
			(prev, curr, i): number =>
				prev + (curr.charCodeAt(0) - aCharCode) * Math.pow(26, i),
			0
		)
