const vectorEqual = (p0: [number, number], p1: [number, number]): boolean =>
	p0[0] === p1[0] && p0[1] === p1[1]

export function isBoomerang1([p0, p1, p2]: [
	[number, number],
	[number, number],
	[number, number]
]): boolean {
	if (vectorEqual(p0, p1) || vectorEqual(p0, p2) || vectorEqual(p1, p2))
		return false

	if (
		(p0[0] === p1[0] && p1[0] === p2[0]) ||
		(p0[1] === p1[1] && p1[1] === p2[1])
	)
		return false

	const vec = [p1[0] - p0[0], p1[1] - p0[1]]
	const scale = (p2[0] - p1[0]) / vec[0]
	return p1[1] + vec[1] * scale !== p2[1]
}

// smarter way to do it which I definitely thought of and didn't get from the discussion
// formula for area of a triangle based on three points
// | (Ax * (By − Cy) + Bx * (Cy − Ay) + Cx * (Ay − By)) / 2 |
// if this is zero then the points are in a line

export const isBoomerang = ([a, b, c]: [
	[number, number],
	[number, number],
	[number, number]
]): boolean =>
	a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1]) !== 0
