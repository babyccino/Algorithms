import MaxHeap from "./maxHeap"

type Tuple = [number, number]

export function kClosest(points: Tuple[], k: number): Tuple[] {
	const cmp = (a: Tuple, b: Tuple): boolean =>
		a[0] ** 2 + a[1] ** 2 > b[0] ** 2 + b[1] ** 2
	const heap = new MaxHeap<Tuple>(cmp, points)

	for (let i = 0; i < points.length - k; ++i) heap.pop()

	return heap.arr
}
