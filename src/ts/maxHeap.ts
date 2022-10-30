const getParentIndex = (i: number): number => Math.floor((i - 1) / 2)
const getLeftChildIndex = (i: number): number => i * 2 + 1

export default class MaxHeap<T> {
	arr: T[] = []
	cmp: (a: T, b: T) => boolean

	constructor(cmp: (a: T, b: T) => boolean, arr: T[] = []) {
		this.cmp = cmp

		for (const val of arr) this.add(val)
	}

	peek = (): T => this.arr[0]

	swap(i, j) {
		const temp = this.arr[i]
		this.arr[i] = this.arr[j]
		this.arr[j] = temp
	}

	add(val: T): void {
		this.arr.push(val)
		let i = this.arr.length - 1
		if (i < 1) return

		let parentIndex = getParentIndex(i)
		while (i && this.cmp(val, this.arr[parentIndex])) {
			this.swap(i, parentIndex)
			i = parentIndex
			parentIndex = getParentIndex(parentIndex)
		}
	}

	pop(): T {
		let val = this.arr[0]
		this.arr[0] = this.arr.pop()

		let parentIndex = 0
		while (getLeftChildIndex(parentIndex) < this.arr.length) {
			const largerChildIndex = ((): number => {
				const leftIndex = getLeftChildIndex(parentIndex)
				if (
					leftIndex + 1 < this.arr.length &&
					this.cmp(this.arr[leftIndex + 1], this.arr[leftIndex])
				) {
					return leftIndex + 1
				}
				return leftIndex
			})()

			if (this.cmp(this.arr[largerChildIndex], this.arr[parentIndex])) {
				this.swap(parentIndex, largerChildIndex)
				parentIndex = largerChildIndex
			} else {
				break
			}
		}

		return val
	}
}
